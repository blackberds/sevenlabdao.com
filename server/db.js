import pkg from 'pg';
import { Markup } from 'telegraf';
const { Pool } = pkg;
import { isValidWalletAddress } from './utils/isValidWalletAddress.js';
import { getBotInstance } from './utils/messenger.js';

const REFERRAL_BASE_URL = process.env.REFERRAL_BASE_URL || 'https://bitnest.me';

export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});
export async function updateUserReferralLink(userId, referralLink) {
  try {
    const result = await pool.query(
      'UPDATE users SET referral_link_bitnest = $1 WHERE telegram_id = $2 RETURNING *',
      [referralLink, userId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error updating referral link:', error);
    throw error;
  }
}
export async function checkAndActivateLevels(userId, investmentAmount, botInstance = null, investmentId = null, periodDays = null) {
  try {
    const totalInvestment = await getUserTotalInvestment(userId);
    const totalInvested = parseFloat(totalInvestment);
    const newTotal = totalInvested + investmentAmount;

    // Получаем уже активированные уровни
    const activeLevelsRes = await pool.query(
      `SELECT level FROM user_active_levels 
       WHERE user_id = $1 AND is_active = true`,
      [userId]
    );
    const alreadyActivatedLevels = activeLevelsRes.rows.map(row => row.level);

    // Определяем НОВЫЕ уровни для активации (только 1-17)
    const levelsToActivate = [];
    for (let level = 1; level <= 17; level++) { // Только до 17 уровня
      const levelThreshold = level * 100;
      
      // Проверяем: достигнут ли порог И уровень еще не активирован
      if (newTotal >= levelThreshold && !alreadyActivatedLevels.includes(level)) {
        levelsToActivate.push(level);
      }
    }

    if (levelsToActivate.length > 0) {
      // Активируем только НОВЫЕ уровни
      await activateNewUserLevels(
        userId,
        levelsToActivate,
        newTotal,
        botInstance,
        investmentId,
        periodDays
      );

      // Отправляем уведомление
      const user = await getUserById(userId);
      if (user && user.telegram_id) {
        const message =
          `🎉 <b>Новые уровни активированы!</b>\n\n` +
          `Вы активировали уровни: ${levelsToActivate.join(", ")}\n` +
          `Теперь вы будете получать доход с этих уровней вашей команды.`;

        const bot = botInstance || getGlobalBot();
        if (bot) {
          try {
            await bot.telegram.sendMessage(user.telegram_id, message, {
              parse_mode: "HTML",
              ...Markup.inlineKeyboard([
                [Markup.button.callback("🏠 Главное меню", "menu")]
              ])
            });
            console.log(`✅ Уведомление об активации уровней отправлено пользователю ${user.telegram_id}`);
          } catch (sendError) {
            console.error(`❌ Ошибка отправки уведомления пользователю ${user.telegram_id}:`, sendError);
          }
        }
      }
    }
  } catch (error) {
    console.error("Error activating levels:", error);
  }
}
async function activateNewUserLevels(userId, levelsToActivate, totalInvestment, botInstance = null, investmentId = null, periodDays = null) {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');

    // Активируем каждый новый уровень
    for (const level of levelsToActivate) {
      try {
        // Сначала проверяем существование записи
        const existingRecord = await client.query(
          `SELECT id FROM user_active_levels 
           WHERE user_id = $1 AND level = $2`,
          [userId, level]
        );

        if (existingRecord.rows.length > 0) {
          // Обновляем существующую запись
          await client.query(
            `UPDATE user_active_levels 
             SET is_active = true,
                 activated_at = NOW(),
                 total_investment = $3
             WHERE user_id = $1 AND level = $2`,
            [userId, level, totalInvestment]
          );
        } else {
          // Вставляем новую запись
          // Нужно также указать investment_id и expires_at, так как они NOT NULL
          const expiresAt = new Date();
          expiresAt.setDate(expiresAt.getDate() + (periodDays || 30)); // По умолчанию 30 дней
          
          await client.query(
            `INSERT INTO user_active_levels 
             (user_id, level, investment_id, is_active, activated_at, expires_at, total_investment)
             VALUES ($1, $2, $3, true, NOW(), $4, $5)`,
            [userId, level, investmentId, expiresAt, totalInvestment]
          );
        }

        console.log(`✅ Активирован уровень ${level} для пользователя ${userId}`);
      } catch (levelError) {
        console.error(`❌ Ошибка активации уровня ${level}:`, levelError);
        // Продолжаем с другими уровнями
        continue;
      }
    }

    await client.query('COMMIT');
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error("Error in activateNewUserLevels:", error);
    throw error;
  } finally {
    client.release();
  }
}
export async function saveInvestmentToDB(userState, transaction) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // Проверяем, не существует ли уже такая транзакция
    const existingInvestment = await client.query(
      'SELECT id, status FROM investments WHERE tx_hash = $1 AND user_id = $2',
      [transaction.hash, userState.userId]
    );
    
    if (existingInvestment.rows.length > 0) {
      // Если транзакция уже существует и в процессе, обновляем её статус
      const existingStatus = existingInvestment.rows[0].status;
      if (existingStatus === 'active' || existingStatus === 'pending') {
        console.log('⚠️ Инвестиция уже существует в базе, обновляем');
        await client.query('ROLLBACK');
        return existingInvestment.rows[0].id;
      } else {
        // Обновляем информацию о завершенной транзакции
        const investmentId = existingInvestment.rows[0].id;
        console.log(`✅ Обновляем завершенную транзакцию ID ${investmentId}`);
        await client.query(
          `UPDATE investments 
           SET amount_decimal = $1, period_days = $2, currency = $3, status = 'active' 
           WHERE id = $4`,
          [
            userState.amount,
            userState.period,
            'USDT',
            investmentId
          ]
        );
        await client.query('COMMIT');
        return investmentId;
      }
    }

    // Если транзакции нет, создаем новую
    const result = await client.query(
      `INSERT INTO investments (
        user_id, amount_decimal, period_days, currency,
        tx_hash, status, source
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id`,
      [
        userState.userId,
        userState.amount,
        userState.period,
        'USDT', // Явно указываем валюту
        transaction.hash,
        'active',
        'deposit' // Источник инвестиции
      ]
    );

    const investmentId = result.rows[0].id;
    console.log(`✅ Инвестиция сохранена в базу: ID ${investmentId}`);

    // Активируем уровни пользователя
    await checkAndActivateLevels(userState.userId, userState.amount);
    
    // Создаем запись в таблице транзакций (если эта таблица существует)
    try {
      await client.query(
        `INSERT INTO transactions 
         (user_id, amount, currency, type, description, status, tx_hash, block_number)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          userState.userId, 
          userState.amount, 
          'USDT', 
          'investment', 
          'Отправка в пул ликвидности', 
          'completed', 
          transaction.hash, 
          transaction.blockNumber
        ]
      );
    } catch (txError) {
      console.log('⚠️ Таблица transactions не существует, пропускаем');
    }

    await client.query('COMMIT');
    
    return investmentId;
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Ошибка сохранения инвестиции в базу:', error);
    
    // Пробуем упрощенную вставку без транзакции
    try {
      const result = await pool.query(
        `INSERT INTO investments 
         (user_id, amount_decimal, period_days, currency, tx_hash, status)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (tx_hash) DO NOTHING
         RETURNING id`,
        [
          userState.userId, 
          userState.amount, 
          userState.period, 
          'USDT',
          transaction.hash, 
          'active'
        ]
      );
      
      if (result.rows.length > 0) {
        console.log(`✅ Инвестиция сохранена (упрощенный режим): ID ${result.rows[0].id}`);
        return result.rows[0].id;
      }
    } catch (fallbackError) {
      console.error('❌ Ошибка даже в упрощенном режиме:', fallbackError);
    }
    
    throw error;
  } finally {
    client.release();
  }
}


// Функция для генерации ID из строки
function generateIdFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Функция для генерации UUID (добавьте в начало файла)
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
export async function getUser(telegramId) {
  const result = await pool.query(
    `SELECT * FROM users WHERE telegram_id = $1`,
    [telegramId]
  );

  if (result.rows.length === 0) {
    return null; // ⚠️ не создаём автоматически
  }

  const user = result.rows[0];
  user.progress_step = user.progress_step ?? 0;
  user.progress_completed = user.progress_completed ?? false;
  user.notifications = user.notifications ?? true;
  return user;
}
export async function createUser(telegramId, userData = {}) {
  try {
    const username = userData?.username?.trim() || "";
    const firstName = userData?.first_name?.trim() || "";
    const lastName = userData?.last_name?.trim() || "";

    if (!username && !firstName && !lastName) {
      console.log("⚠️ Пропускаем создание пустого пользователя:", telegramId);
      return null;
    }

    // ОТЛАДКА: что приходит в userData
    console.log(`🔍 CREATE USER DEBUG:`, {
      telegramId,
      userData,
      referrer_id: userData?.referrer_id,
      referral_link_type: userData?.referral_link_type
    });

    // Определяем тип ссылки из данных
    const linkType = userData?.referral_link_type || 'normal';
    
    // ИСПРАВЛЕНИЕ: правильные условия для referral кода
    let referralCode;
    if (linkType === 'no_disclaimer') {
      referralCode = `ND${telegramId}`;  // ND для ссылок без дисклеймера
    } else {
      referralCode = `B${telegramId}`;   // B для обычных ссылок
    }
    
    const referralLink = `https://t.me/${process.env.BOT_USERNAME}?start=${referralCode}`;

    // ВАЖНО: Берем referrer_id из userData
    const referrerId = userData?.referrer_id || null;

    console.log(`🎯 FINAL CREATE USER PARAMS:`, {
      telegramId,
      username,
      firstName,
      lastName,
      linkType,
      referrerId,
      referralCode
    });

    const result = await pool.query(
      `INSERT INTO users 
       (telegram_id, username, first_name, last_name, lang, referral_code, referral_link, referral_link_type, referrer_id, progress_step, progress_completed, notifications, created_at, updated_at)
       VALUES ($1,$2,$3,$4,'ru',$5,$6,$7,$8,0,false,true,NOW(),NOW())
       RETURNING *`,
      [
        telegramId.toString(),
        username,
        firstName,
        lastName,
        referralCode,
        referralLink,
        linkType,
        referrerId
      ]
    );

    console.log(`✅ Создан пользователь ${result.rows[0].id} с типом: ${linkType}, реферер: ${referrerId}`);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
export async function createUserWithParams(telegramId, username, firstName, lastName, linkType = 'normal', referrerId = null) {
  try {
    if (!username && !firstName && !lastName) {
      console.log("⚠️ Пропускаем создание пустого пользователя:", telegramId);
      return null;
    }

    console.log(`🔍 CREATE USER WITH PARAMS:`, {
      telegramId,
      username,
      firstName,
      lastName,
      linkType,
      referrerId
    });

    // Создаем реферальный код в зависимости от типа
    let referralCode;
    if (linkType === 'no_disclaimer') {
      referralCode = `ND${telegramId}`;
    } else {
      referralCode = `B${telegramId}`;
    }
    
    const referralLink = `https://t.me/${process.env.BOT_USERNAME}?start=${referralCode}`;

    console.log(`🎯 FINAL CREATE USER PARAMS:`, {
      telegramId,
      username,
      firstName,
      lastName,
      linkType,
      referrerId,
      referralCode
    });

    const result = await pool.query(
      `INSERT INTO users 
       (telegram_id, username, first_name, last_name, lang, referral_code, referral_link, referral_link_type, referrer_id, progress_step, progress_completed, notifications, created_at, updated_at)
       VALUES ($1,$2,$3,$4,'ru',$5,$6,$7,$8,0,false,true,NOW(),NOW())
       RETURNING *`,
      [
        telegramId.toString(),
        username,
        firstName,
        lastName,
        referralCode,
        referralLink,
        linkType,
        referrerId
      ]
    );

    console.log(`✅ Создан пользователь ${result.rows[0].id} с типом: ${linkType}, реферер: ${referrerId}`);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user with params:", error);
    throw error;
  }
}
export async function getUserIdByTelegramId(telegramId) {
  try {
    console.log(`🔍 ПОИСК USER_ID ДЛЯ TELEGRAM_ID: ${telegramId}`);
    const result = await pool.query(
      "SELECT id FROM users WHERE telegram_id = $1",
      [telegramId.toString()]
    );
    console.log(`🔍 РЕЗУЛЬТАТ ПОИСКА: ${result.rows[0]?.id || 'NOT FOUND'}`);
    return result.rows[0]?.id || null;
  } catch (error) {
    console.error("Error getting user ID by telegram ID:", error);
    return null;
  }
}
export async function saveInvestmentInProcess(userState, transaction) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // Проверяем, существует ли уже такая транзакция в базе данных
    const existingInvestment = await client.query(
      'SELECT id, status FROM investments WHERE tx_hash = $1 AND user_id = $2',
      [transaction.hash, userState.userId]
    );
    
    if (existingInvestment.rows.length > 0) {
      const existing = existingInvestment.rows[0];
      console.log(`⚠️ Транзакция уже существует в базе: ID ${existing.id}, статус: ${existing.status}`);
      
      // Если статус cancelled, разрешаем создать новую инвестицию
      if (existing.status === 'cancelled') {
        console.log('🔄 Транзакция была отменена, создаем новую инвестицию');
        // Продолжаем выполнение для создания новой записи
      } 
      // Если статус in_process, возвращаем существующий ID
      else if (existing.status === 'in_process') {
        console.log('ℹ️ Транзакция уже имеет статус "in_process"');
        await client.query('ROLLBACK');
        return existing.id;
      }
      // Для других статусов (confirmed, failed) бросаем ошибку
      else {
        console.log(`🔄 Транзакция имеет статус "${existing.status}", требуется обработка`);
        await client.query('ROLLBACK');
        throw new Error(`Транзакция уже существует со статусом: ${existing.status}`);
      }
    }

    // Добавляем инвестицию с пометкой "in_process"
    const result = await client.query(
      `INSERT INTO investments (
        user_id, amount_decimal, period_days, currency,
        tx_hash, status, source, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
      RETURNING id`,
      [
        userState.userId,
        userState.amount,
        userState.period,
        'USDT',
        transaction.hash,
        'in_process',
        'deposit'
      ]
    );

    const investmentId = result.rows[0].id;
    console.log(`✅ Инвестиция сохранена в базу с пометкой "in_process": ID ${investmentId}`);
    
    await client.query('COMMIT');
    
    return investmentId;

  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Ошибка сохранения инвестиции в процессе:', error);
    throw error;
  } finally {
    client.release();
  }
}
export async function updateInvestmentStatus(userId, investmentData) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    let query = `UPDATE investments SET `;
    const params = [];
    let paramCount = 1;
    const setClauses = [];
    
    // Добавляем поля для обновления
    if (investmentData.status) {
      setClauses.push(`status = $${paramCount}`);
      params.push(investmentData.status);
      paramCount++;
    }
    
    if (investmentData.returnAmount !== undefined) {
      setClauses.push(`return_amount = $${paramCount}`);
      params.push(investmentData.returnAmount);
      paramCount++;
    }
    
    if (investmentData.totalReturn !== undefined) {
      setClauses.push(`total_return = $${paramCount}`);
      params.push(investmentData.totalReturn);
      paramCount++;
    }
    
    if (investmentData.returnDate !== undefined) {
      setClauses.push(`return_date = $${paramCount}`);
      params.push(investmentData.returnDate);
      paramCount++;
    }
    
    if (investmentData.expectedProfit !== undefined) {
      setClauses.push(`expected_profit = $${paramCount}`);
      params.push(investmentData.expectedProfit);
      paramCount++;
    }
    
    if (investmentData.confirmationTimestamp !== undefined) {
      setClauses.push(`confirmation_timestamp = $${paramCount}`);
      params.push(investmentData.confirmationTimestamp);
      paramCount++;
    }
    
    // Добавляем updated_at (если столбец существует в таблице)
    setClauses.push(`updated_at = NOW()`);
    
    query += setClauses.join(', ');
    
    // Добавляем условие WHERE
    const whereConditions = [];
    
    if (investmentData.investmentId) {
      whereConditions.push(`id = $${paramCount}`);
      params.push(investmentData.investmentId);
      paramCount++;
    } else {
      // Если ID инвестиции не указан, ищем по user_id и статусу in_process
      whereConditions.push(`user_id = $${paramCount}`);
      params.push(userId);
      paramCount++;
      whereConditions.push(`status = 'in_process'`);
    }
    
    query += ` WHERE ${whereConditions.join(' AND ')} RETURNING *`;
    
    const result = await client.query(query, params);
    
    // Если запись найдена, подтверждаем изменения
    if (result.rows.length > 0) {
      console.log(`✅ Инвестиция обновлена: ${result.rows[0].id}`);
      await client.query('COMMIT');
      return result.rows[0];
    } else {
      console.log('⚠️ Инвестиция не найдена');
      await client.query('ROLLBACK');
      return null;
    }

  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Ошибка обновления статуса инвестиции:', error);
    throw error;
  } finally {
    client.release();
  }
}
// Добавьте эту функцию в db.js после других функций

export async function updateUser(telegramId, updateData) {
  try {
    console.log('=== UPDATE USER DEBUG ===');
    console.log('Updating user:', telegramId);
    console.log('Update data:', updateData);
    
    const setClauses = [];
    const values = [];
    let paramCount = 1;

    // Динамически формируем запрос на основе переданных данных
    if (updateData.is_blocked !== undefined) {
      setClauses.push(`is_blocked = $${paramCount}`);
      values.push(updateData.is_blocked);
      paramCount++;
    }
    
    // Убрали blocked_at, так как этой колонки нет в таблице
    // Вместо этого используем last_activity для отслеживания времени блокировки
    if (updateData.is_blocked === true) {
      setClauses.push(`last_activity = NOW()`);
    }
    
    if (updateData.notifications !== undefined) {
      setClauses.push(`notifications = $${paramCount}`);
      values.push(updateData.notifications);
      paramCount++;
    }
    
    if (updateData.wallet_address !== undefined) {
      setClauses.push(`wallet_address = $${paramCount}`);
      values.push(updateData.wallet_address);
      paramCount++;
    }
    
    if (updateData.progress_step !== undefined) {
      setClauses.push(`progress_step = $${paramCount}`);
      values.push(updateData.progress_step);
      paramCount++;
    }
    
    if (updateData.progress_completed !== undefined) {
      setClauses.push(`progress_completed = $${paramCount}`);
      values.push(updateData.progress_completed);
      paramCount++;
    }
    
    if (updateData.lang !== undefined) {
      setClauses.push(`lang = $${paramCount}`);
      values.push(updateData.lang);
      paramCount++;
    }

    // Всегда обновляем updated_at
    setClauses.push(`updated_at = NOW()`);

    if (setClauses.length === 0) {
      console.log('No fields to update');
      return null;
    }

    // Добавляем telegram_id в значения
    values.push(telegramId);

    const query = `
      UPDATE users 
      SET ${setClauses.join(', ')}
      WHERE telegram_id = $${paramCount}
      RETURNING *
    `;

    const result = await pool.query(query, values);
    
    console.log('Update user result:', result.rows[0] ? 'Success' : 'User not found');
    console.log('=============================');
    
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}
export async function getActiveInvestment(userId) {
  try {
    const result = await pool.query(
      `SELECT id, status, amount_decimal, period_days
       FROM investments 
       WHERE user_id = $1 
       AND status = 'in_process'
       ORDER BY created_at DESC 
       LIMIT 1`,
      [userId]
    );
    
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error getting active investment:', error);
    return null;
  }
}
export async function updateUserProgress(userId, progressStep, progressCompleted) {
  try {
    console.log('=== UPDATE PROGRESS DEBUG ===');
    console.log('Updating user by telegram_id:', userId);
    console.log('New step:', progressStep);
    console.log('Completed:', progressCompleted);
    
    let query;
    let params;
    
    if (progressCompleted) {
      // Если пользователь завершает регистрацию - сбрасываем уведомления
      query = `UPDATE users SET 
                progress_step = $1, 
                progress_completed = $2, 
                last_incomplete_registration_notification = NULL,
                updated_at = NOW() 
               WHERE telegram_id = $3 
               RETURNING *`;
      params = [progressStep, progressCompleted, userId];
    } else {
      // Если просто обновляем шаг (не завершаем регистрацию)
      query = `UPDATE users SET 
                progress_step = $1, 
                progress_completed = $2, 
                updated_at = NOW() 
               WHERE telegram_id = $3 
               RETURNING *`;
      params = [progressStep, progressCompleted, userId];
    }
    
    const result = await pool.query(query, params);
    
    console.log('Update result:', result.rows[0]);
    console.log('=============================');
    
    return result.rows[0];
  } catch (error) {
    console.error('Error updating progress:', error);
    throw error;
  }
}
export async function updateUserWallet(telegramId, walletAddress) {
  try {
    console.log('=== UPDATE WALLET DEBUG ===');
    console.log('Updating wallet for user:', telegramId);
    console.log('Wallet address:', walletAddress);
    
    // Проверяем валидность адреса кошелька
    if (!isValidWalletAddress(walletAddress)) {
      throw new Error('Неверный формат адреса кошелька');
    }
    
    // Нормализуем адрес (нижний регистр для сравнения)
    const normalizedAddress = walletAddress.toLowerCase().trim();
    
    // Проверяем, не используется ли этот кошелек другим пользователем
    const existingUser = await pool.query(
      `SELECT telegram_id, username, wallet_address 
       FROM users 
       WHERE LOWER(wallet_address) = $1 AND telegram_id != $2`,
      [normalizedAddress, telegramId]
    );
    
    if (existingUser.rows.length > 0) {
      const otherUser = existingUser.rows[0];
      console.log('Wallet already used by another user:', otherUser);
      throw new Error(`Этот кошелек уже используется пользователем @${otherUser.username || otherUser.telegram_id}`);
    }
    
    // Проверяем, есть ли у текущего пользователя уже привязанный кошелек
    const currentUser = await pool.query(
      `SELECT wallet_address FROM users WHERE telegram_id = $1`,
      [telegramId]
    );
    
    const currentWallet = currentUser.rows[0]?.wallet_address;
    
    // Если пользователь обновляет тот же самый кошелек - просто возвращаем успех
    if (currentWallet && currentWallet.toLowerCase() === normalizedAddress) {
      console.log('User is updating the same wallet address');
      return true;
    }
    
    // Если кошелек свободен, обновляем
    const result = await pool.query(
      `UPDATE users SET wallet_address = $1, updated_at = NOW() WHERE telegram_id = $2 RETURNING *`,
      [walletAddress, telegramId] // Сохраняем оригинальный регистр
    );
    
    if (result.rows.length === 0) {
      throw new Error('Пользователь не найден');
    }
    
    console.log('Wallet update successful: Yes');
    console.log('Updated user wallet:', result.rows[0].wallet_address);
    console.log('=============================');
    
    return true;
  } catch (error) {
    console.error('Error updating wallet:', error);
    
    // Если ошибка о нарушении уникальности в базе данных
    if (error.code === '23505') {
      // Дополнительная проверка для точного определения конфликта
      const conflictCheck = await pool.query(
        `SELECT telegram_id, username FROM users WHERE wallet_address = $1`,
        [walletAddress]
      );
      
      if (conflictCheck.rows.length > 0) {
        const conflictUser = conflictCheck.rows[0];
        throw new Error(`Этот кошелек уже используется пользователем @${conflictUser.username || conflictUser.telegram_id}`);
      }
      
      throw new Error('Этот кошелек уже используется другим пользователем');
    }
    
    throw error;
  }
}

export async function isWalletRegisteredInRaffle(walletAddress) {
  try {
    if (!walletAddress) return false;
    
    const result = await pool.query(
      `SELECT * FROM raffle_participants 
       WHERE wallet_address = $1 AND registered = true`,
      [walletAddress]
    );
    
    return result.rows.length > 0;
  } catch (error) {
    console.error('Error checking wallet registration:', error);
    return false;
  }
}
export async function getUserById(userId) {
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE id = $1`,
      [userId]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error getting user by ID:', error);
    return null;
  }
}

export async function getUserLevelsInfo(userId) {
  try {
    const result = await pool.query(
      `SELECT level FROM user_levels WHERE user_id = $1`,
      [userId]
    );
    return result.rows;
  } catch (error) {
    console.error('Error getting user levels:', error);
    return [];
  }
}

async function activateUserLevels(userId, totalInvested, botInstance = null, investmentId = null) {
  const client = await pool.connect();
  let released = false;
  try {
    await client.query("BEGIN");

    // Определяем сколько уровней должно быть активировано
    const levelsToActivate = Math.min(Math.floor(totalInvested / 100), 17);

    if (levelsToActivate <= 0) {
      await client.query("COMMIT");
      return []; // Нет уровней для активации
    }

    // Получаем текущие активированные уровни
    const existingLevelsResult = await client.query(
      "SELECT level FROM user_levels WHERE user_id = $1",
      [userId],
    );

    const existingLevelSet = new Set(
      existingLevelsResult.rows.map((l) => l.level),
    );
    const newLevels = [];

    // Активируем только те уровни, которые еще не активированы
    for (let level = 1; level <= levelsToActivate; level++) {
      if (!existingLevelSet.has(level)) {
        newLevels.push(level);

        // 1. Вставляем в user_levels (основная таблица активации)
        await client.query(
          "INSERT INTO user_levels (user_id, level, activated_at) VALUES ($1, $2, NOW()) ON CONFLICT (user_id, level) DO NOTHING",
          [userId, level],
        );
      }

      // 2. Вставляем/обновляем в user_active_levels (если есть investmentId)
      if (investmentId) {
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 28); // 28 дней срок действия

        await client.query(
          `INSERT INTO user_active_levels 
           (user_id, level, investment_id, activated_at, expires_at, is_active)
           VALUES ($1, $2, $3, NOW(), $4, true)
           ON CONFLICT (user_id, level, investment_id) 
           DO UPDATE SET expires_at = $4, is_active = true, activated_at = NOW()`,
          [userId, level, investmentId, expiresAt],
        );
      }
    }

    // Деактивируем уровни, которые превышают текущую сумму инвестиций
    for (const existingLevel of existingLevelSet) {
      if (existingLevel > levelsToActivate) {
        // Удаляем из user_levels
        await client.query(
          "DELETE FROM user_levels WHERE user_id = $1 AND level = $2",
          [userId, existingLevel],
        );

        // Деактивируем в user_active_levels
        if (investmentId) {
          await client.query(
            "UPDATE user_active_levels SET is_active = false WHERE user_id = $1 AND level = $2",
            [userId, existingLevel],
          );
        }
      }
    }

    await client.query("COMMIT");


    return newLevels;
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error in activateUserLevels:", error);
    throw error;
  } finally {
    if (!released) {
      client.release();
      released = true;
    }
  }
}
export async function addRaffleParticipant(raffleId, userId, walletAddress) {
  try {
    await pool.query(
  `INSERT INTO raffle_participants (raffle_id, user_id, wallet_address, joined_at)
   VALUES ($1, $2, $3, NOW())
   ON CONFLICT (raffle_id, user_id) DO NOTHING`,
  [raffleId, userId, walletAddress]
);
    return { success: true };
  } catch (error) {
    console.error("Error adding raffle participant:", error);
    return { success: false, error: error.message };
  }
}
export async function isUserRegisteredInRaffleSafe(raffleId, userId) {
  try {
    const userIdStr = userId.toString();

    const result = await pool.query(
      `SELECT 1 FROM raffle_participants 
       WHERE raffle_id = $1 AND user_id::text = $2 LIMIT 1`,
      [raffleId, userIdStr]
    );

    if (result.rows.length > 0) return true;

    // 🔄 fallback по кошельку
    const user = await getUserById(userId);
    if (user?.wallet_address) {
      const walletCheck = await pool.query(
        `SELECT 1 FROM raffle_participants 
         WHERE raffle_id = $1 AND wallet_address = $2 LIMIT 1`,
        [raffleId, user.wallet_address]
      );
      return walletCheck.rows.length > 0;
    }

    return false;
  } catch (error) {
    console.error("Safe raffle registration check failed:", error);
    return false;
  }
}
export async function isUserRegisteredInRaffle(raffleId, userId) {
  try {
    const userIdStr = userId.toString();

    const result = await pool.query(
      `SELECT 1 FROM raffle_participants 
       WHERE raffle_id = $1 AND user_id = $2 LIMIT 1`,
      [raffleId, userIdStr]
    );

    if (result.rows.length > 0) return true;

    // 🔄 fallback по кошельку
    const user = await getUserById(userId);
    if (user?.wallet_address) {
      const walletCheck = await pool.query(
        `SELECT 1 FROM raffle_participants 
         WHERE raffle_id = $1 AND wallet_address = $2 LIMIT 1`,
        [raffleId, user.wallet_address]
      );
      return walletCheck.rows.length > 0;
    }

    return false;
  } catch (error) {
    console.error("Error checking raffle registration:", error);
    return false;
  }
}

export async function getCurrentRaffleRound() {
  try {
    const result = await pool.query(
      `SELECT id, start_time, end_time, fixed_prize, winner
       FROM raffle_rounds
       WHERE completed = false
       ORDER BY id DESC
       LIMIT 1`
    );

    if (result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0];

    return {
      id: row.id,
      start_time: new Date(row.start_time),
      end_time: new Date(row.end_time),
      fixed_prize: row.fixed_prize,
      winner: row.winner,
    };
  } catch (error) {
    console.error("Error fetching current raffle round:", error);
    return null;
  }
}

// Выбрать победителя случайным образом
export async function pickRaffleWinner(raffleId) {
  try {
    const result = await pool.query(
      `SELECT user_id, wallet_address 
       FROM raffle_participants 
       WHERE raffle_id = $1 
       ORDER BY RANDOM() LIMIT 1`,
      [raffleId]
    );

    if (result.rows.length === 0) {
      return { success: false, error: "Нет участников в этом розыгрыше" };
    }

    const winner = result.rows[0];

    await pool.query(
      `UPDATE raffles SET winner_id = $1, winner_wallet = $2, completed = true 
       WHERE id = $3`,
      [winner.user_id, winner.wallet_address, raffleId]
    );

    return { success: true, winner };
  } catch (error) {
    console.error("Error picking raffle winner:", error);
    return { success: false, error: error.message };
  }
}

// Установка языка
export async function setUserLang(telegramId, lang) {
  try {
    await pool.query(
      `UPDATE users SET lang = $1, updated_at = NOW() WHERE id = $2`,
      [lang, telegramId]
    );
  } catch (error) {
    console.error('Error setting language:', error);
  }
}

// Настройки уведомлений
export async function setUserNotifications(telegramId, notifications) {
  try {
    await pool.query(
      `UPDATE users SET notifications = $1, updated_at = NOW() WHERE id = $2`,
      [notifications, telegramId]
    );
  } catch (error) {
    console.error('Error setting notifications:', error);
  }
}

// Получение инвестиций
export async function getInvestments(telegramId) {
  try {
    const result = await pool.query(
      `SELECT * FROM investments WHERE user_id = $1 ORDER BY created_at DESC`,
      [telegramId]
    );
    return result.rows;
  } catch (error) {
    console.error('Error getting investments:', error);
    return [];
  }
}

// Сохранение инвестиций
export async function saveInvestment(telegramId, amount, period, walletAddress, signature, ipfsCid) {
  try {
    await pool.query(
      `INSERT INTO investments (user_id, amount, period, wallet_address, status, signature, ipfs_cid, created_at)
       VALUES ($1, $2, $3, $4, 'pending', $5, $6, NOW())`,
      [telegramId, amount, period, walletAddress, signature, ipfsCid]
    );
    return true;
  } catch (error) {
    console.error('Error saving investment:', error);
    return false;
  }
}
export async function getUserReferrals(telegramId) {
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE referrer_id = $1 ORDER BY created_at DESC`,
      [telegramId]
    );
    return result.rows;
  } catch (error) {
    console.error('Error getting referrals:', error);
    return [];
  }
}
export async function getCurrentRoundFromDB() {
  const res = await pool.query(
    `SELECT
        round_id,
        start_time,
        end_time,
        winner,
        fixed_prize,
        completed,
        vrf_requested,
        vrf_request_id,
        external_pool_deposit_time,
        funds_returned
     FROM raffle_rounds
     ORDER BY round_id DESC
     LIMIT 1`
  );
  return res.rows[0] ?? null;
}
export async function getUserByWallet(walletAddress) {
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE wallet_address = $1',
      [walletAddress]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error getting user by wallet:", error);
    return null;
  }
}
export async function getRaffleParticipants(raffleId) {
  try {
    const result = await pool.query(
      `SELECT wallet_address 
       FROM raffle_participants 
       WHERE raffle_id = $1 AND registered = true`,
      [raffleId]
    );
    return result.rows.map(row => ({ wallet: row.wallet_address, claimed: false }));
  } catch (error) {
    console.error("Error getting raffle participants:", error);
    return [];
  }
}
export async function registerUserInRaffle(roundId, walletAddress, userId = null) {
  try {
    let query, params;
    const existing = await pool.query(
      `SELECT * FROM raffle_participants 
       WHERE round_id = $1 AND wallet_address = $2 AND registered = true`,
      [roundId, walletAddress]
    );
    
    if (existing.rows.length > 0) {
      throw new Error('Кошелек уже зарегистрирован в этом раунде');
    }
    
    if (userId) {
      query = `INSERT INTO raffle_participants (round_id, user_id, wallet_address, registered, registered_at)
               VALUES ($1, $2, $3, $4, NOW())
               ON CONFLICT (round_id, wallet_address) 
               DO UPDATE SET registered = $4, registered_at = NOW(), user_id = $2`;
      params = [roundId, userId, walletAddress, true];
    } else {
      query = `INSERT INTO raffle_participants (round_id, wallet_address, registered, registered_at)
               VALUES ($1, $2, $3, NOW())
               ON CONFLICT (round_id, wallet_address) 
               DO UPDATE SET registered = $3, registered_at = NOW()`;
      params = [roundId, walletAddress, true];
    }
    
    const result = await pool.query(query, params);
    return result.rows[0];
  } catch (error) {
    console.error("Error registering user in raffle:", error);
    throw error;
  }
}
export async function updateReferredBy(userId, referrerId) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const userIdNum = Number(userId);
    const referrerIdNum = Number(referrerId);

    if (userIdNum === referrerIdNum) {
      console.log("⚠️ Self-referral attempt");
      await client.query("ROLLBACK");
      return false;
    }

    // Check for circular references
    let currentCheck = referrerIdNum;
    while (currentCheck) {
      if (currentCheck === userIdNum) {
        console.log("⚠️ Circular reference detected");
        await client.query("ROLLBACK");
        return false;
      }
      const nextRef = await client.query(
        "SELECT referrer_id FROM users WHERE id = $1",
        [currentCheck]
      );
      currentCheck = nextRef.rows[0]?.referrer_id || null;
    }

    // Check if users exist and get current referrer
    const userRes = await client.query(
      "SELECT referrer_id FROM users WHERE id = $1",
      [userIdNum]
    );

    if (!userRes.rows.length) {
      console.log("❌ User does not exist");
      await client.query("ROLLBACK");
      return false;
    }

    const refRes = await client.query(
      "SELECT id FROM users WHERE id = $1",
      [referrerIdNum]
    );

    if (!refRes.rows.length) {
      console.log("❌ Referrer does not exist");
      await client.query("ROLLBACK");
      return false;
    }

    const currentReferrer = userRes.rows[0].referrer_id;
    if (currentReferrer) {
      console.log("ℹ️ User already has referrer");
      await client.query("ROLLBACK");
      return true;
    }

    // Update user's referrer
    await client.query(
      "UPDATE users SET referrer_id = $1 WHERE id = $2",
      [referrerIdNum, userIdNum]
    );

    // Build referral matrix
    let level = 1;
    let currentRef = referrerIdNum;

    while (currentRef && level <= 17) {
await client.query(
  `INSERT INTO referral_relations (referrer_id, referral_id, level)
   VALUES ($1, $2, $3)
   ON CONFLICT (referrer_id, referral_id, level) DO NOTHING`,
  [currentRef, userIdNum, level]
);
      // Move up the referral chain
      const nextRefRes = await client.query(
        "SELECT referrer_id FROM users WHERE id = $1",
        [currentRef]
      );
      currentRef = nextRefRes.rows[0]?.referrer_id || null;
      level++;
    }

    await client.query("COMMIT");
    console.log(`✅ User ${userIdNum} added to referral matrix up to ${level-1} levels`);
    return true;
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("❌ Error in updateReferredBy:", error);
    return false;
  } finally {
    client.release();
  }
}
export async function saveNewInvestment(investmentData) {
  const result = await pool.query(
    `INSERT INTO investments (
      user_id, amount, amount_decimal, period_days, 
      expected_profit, total_return, currency, status,
      wallet_address, pool_address, message_id, timer_message_id
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING id`,
    [
      investmentData.userId,
      `${investmentData.amount} USDT`,
      investmentData.amount,
      investmentData.period,
      investmentData.expectedProfit,
      investmentData.totalReturn,
      'USDT',
      'in_process',
      investmentData.userWallet,
      investmentData.poolAddress,
      investmentData.messageId,
      investmentData.timerMessageId
    ]
  );
  
  return result.rows[0].id;
}

export async function getInvestmentById(investmentId) {
  const result = await pool.query(
    'SELECT * FROM investments WHERE id = $1',
    [investmentId]
  );
  
  return result.rows[0];
}
export async function getUserTotalInvestment(userId) {
  try {
    const result = await pool.query(
      `SELECT COALESCE(SUM(amount_decimal), 0) as total_invested 
       FROM investments 
       WHERE user_id = $1 AND status IN ('confirmed', 'active')`,
      [userId]
    );
    
    return parseFloat(result.rows[0].total_invested);
  } catch (error) {
    console.error('Error getting total investment:', error);
    return 0;
  }
}