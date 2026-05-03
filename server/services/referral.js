import { Telegraf } from 'telegraf';
import { pool } from '../db.js';
import config from '../config.js';
import logger from '../utils/logger.js';
import { state } from '../state.js';
import { ethers } from "ethers";
import axios from "axios";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { makeBscScanRequest, makeEtherscanV2Request, getLogsFromBscScan } from "../services/bscscan.js";
import { startContinuousBalanceMonitoring, loadUserWallets } from "../jobs/monitoring.js";
import { getTranslation } from '../locales/locales.js';

// Константы
const REFERRAL_REWARD_WALLET = "0x34d809100425BC0Bf1851901830Ae490f05a2337";
const USDT_CONTRACT = "0x55d398326f99059fF775485246999027B3197955";

// 🔥 КОНСТАНТЫ ДЛЯ 17 УРОВНЕЙ
const REFERRAL_PERCENTS = {
  1: 0.20,  // 20% за 1 уровень
  2: 0.10,  // 10% за 2 уровень
  3: 0.05,  // 5% за 3 уровень
  4: 0.05,  // 5% за 4 уровень
  5: 0.05,  // 5% за 5 уровень
  6: 0.05,  // 5% за 6 уровень
  7: 0.05,  // 5% за 7 уровень
  8: 0.03,  // 3% за 8 уровень
  9: 0.03,  // 3% за 9 уровень
  10: 0.03, // 3% за 10 уровень
  11: 0.01, // 1% за 11 уровень
  12: 0.01, // 1% за 12 уровень
  13: 0.01, // 1% за 13 уровень
  14: 0.01, // 1% за 14 уровень
  15: 0.01, // 1% за 15 уровень
  16: 0.01, // 1% за 16 уровень
  17: 0.01  // 1% за 17 уровень
};

// 🔥 ТРЕБОВАНИЯ ДЛЯ АКТИВАЦИИ УРОВНЕЙ (ТОЛЬКО ПО ИНВЕСТИЦИЯМ)
const LEVEL_ACTIVATION_REQUIREMENTS = {
  1: { investment: 100, autoActivate: true },   // 1 уровень: 100$ инвестиций
  2: { investment: 200, autoActivate: false },  // 2 уровень: 200$
  3: { investment: 500, autoActivate: false },  // 3 уровень: 500$
  4: { investment: 1000, autoActivate: false }, // 4 уровень: 1000$
  5: { investment: 2000, autoActivate: false }, // 5 уровень: 2000$
  6: { investment: 5000, autoActivate: false }, // 6 уровень: 5000$
  7: { investment: 10000, autoActivate: false }, // 7 уровень: 10000$
  8: { investment: 20000, autoActivate: false }, // 8 уровень: 20000$
  9: { investment: 50000, autoActivate: false }, // 9 уровень: 50000$
  10: { investment: 100000, autoActivate: false }, // 10 уровень: 100000$
  11: { investment: 200000, autoActivate: false }, // 11 уровень: 200000$
  12: { investment: 500000, autoActivate: false }, // 12 уровень: 500000$
  13: { investment: 1000000, autoActivate: false }, // 13 уровень: 1,000,000$
  14: { investment: 2000000, autoActivate: false }, // 14 уровень: 2,000,000$
  15: { investment: 5000000, autoActivate: false }, // 15 уровень: 5,000,000$
  16: { investment: 10000000, autoActivate: false }, // 16 уровень: 10,000,000$
  17: { investment: 20000000, autoActivate: false }  // 17 уровень: 20,000,000$
};

// Глобальные переменные
let userWalletsSet = new Set();
global.botInstance = null;

// 🔥 ОСНОВНАЯ ФУНКЦИЯ ДЛЯ ОБРАБОТКИ РЕФЕРАЛЬНЫХ НАГРАД
export async function processReferralRewardEnhanced(toAddress, amount, txHash, fromAddress) {
  const connection = await pool.connect();
  
  try {
    console.log(`🎯 ОБРАБОТКА РЕФЕРАЛЬНОЙ НАГРАДЫ: ${amount} USDT → ${toAddress}`);
    
    await connection.query('BEGIN');
    
    // 1. Находим пользователя-получателя
    const recipientUser = await getUserByWalletAddress(toAddress);
    if (!recipientUser) {
      console.log(`❌ Пользователь с кошельком ${toAddress} не найден`);
      await connection.query('ROLLBACK');
      return;
    }

    console.log(`👤 Получатель: TG ${recipientUser.telegram_id}, ID ${recipientUser.id}`);

    // 2. Находим всех рефереров до 17 уровня с рекурсивным поиском
    const referrers = await connection.query(
      `WITH RECURSIVE referral_tree AS (
         -- Начальные рефереры (уровень 1)
         SELECT referrer_id, referral_id, 1 as level
         FROM referral_relations 
         WHERE referral_id = $1
         
         UNION ALL
         
         -- Рекурсивно ищем рефереров рефереров
         SELECT rr.referrer_id, rt.referrer_id as referral_id, rt.level + 1
         FROM referral_relations rr
         INNER JOIN referral_tree rt ON rt.referrer_id = rr.referral_id
         WHERE rt.level < 17
       )
       SELECT 
         rt.referrer_id,
         rt.level,
         u.telegram_id,
         u.username,
         u.lang,
         u.wallet_address as referrer_wallet
       FROM referral_tree rt
       JOIN users u ON u.id = rt.referrer_id
       WHERE u.is_blocked = false
       ORDER BY rt.level`,
      [recipientUser.id]
    );

    console.log(`📊 Найдено ${referrers.rows.length} рефереров до 17 уровня`);

    let totalDistributed = 0;
    let processedReferrals = [];
    let skippedCount = 0;

    // 3. Обрабатываем каждого реферера
    for (const referrer of referrers.rows) {
      try {
        // Проверяем активирован ли уровень у реферера
        const levelActivated = await checkUserLevelActivated(referrer.referrer_id, referrer.level);
        
        if (!levelActivated) {
          console.log(`⏭️ Уровень ${referrer.level} не активирован у реферера ${referrer.referrer_id}`);
          skippedCount++;
          continue;
        }

        // Рассчитываем сумму награды
        const rewardPercent = REFERRAL_PERCENTS[referrer.level] || 0;
        const rewardAmount = parseFloat((amount * rewardPercent).toFixed(8));
        
        if (rewardAmount < 0.0001) {
          console.log(`⏭️ Сумма награды слишком мала (${rewardAmount}) для уровня ${referrer.level}`);
          skippedCount++;
          continue;
        }

        console.log(`💰 Начисление рефералу ${referrer.referrer_id} (ур.${referrer.level}): ${rewardAmount} USDT (${(rewardPercent*100).toFixed(1)}%)`);

        // 4. Записываем транзакцию в базу
        const transactionResult = await connection.query(
          `INSERT INTO transactions (
            user_id, 
            amount, 
            currency, 
            type, 
            description, 
            status, 
            tx_hash, 
            sender_address,
            recipient_address,
            metadata,
            created_at
          ) VALUES ($1, $2, 'USDT', 'referral_reward', $3, 'completed', $4, $5, $6, $7, NOW())
          RETURNING id`,
          [
            referrer.referrer_id,
            rewardAmount,
            `Реферальное вознаграждение ур.${referrer.level} от ${recipientUser.username || `user_${recipientUser.id}`}`,
            txHash,
            fromAddress,
            referrer.referrer_wallet,
            JSON.stringify({
              level: referrer.level,
              percent: rewardPercent,
              source_user_id: recipientUser.id,
              source_transaction_amount: amount,
              source_wallet: toAddress
            })
          ]
        );

        // 5. Обновляем баланс реферера
        await connection.query(
          `UPDATE users 
           SET balance_usdt = COALESCE(balance_usdt, 0) + $1,
               total_referral_earned = COALESCE(total_referral_earned, 0) + $1
           WHERE id = $2`,
          [rewardAmount, referrer.referrer_id]
        );

        // 6. Записываем реферальное действие
        await connection.query(
          `INSERT INTO referral_actions (
            referrer_id, 
            referral_id, 
            amount, 
            level, 
            action_type, 
            tx_hash, 
            transaction_id,
            description,
            created_at
          ) VALUES ($1, $2, $3, $4, 'reward', $5, $6, $7, NOW())`,
          [
            referrer.referrer_id,
            recipientUser.id,
            rewardAmount,
            referrer.level,
            txHash,
            transactionResult.rows[0].id,
            `Реферальное вознаграждение ур.${referrer.level} (${(rewardPercent*100).toFixed(1)}%) за депозит ${amount.toFixed(2)} USDT`
          ]
        );

        // 7. Обновляем статистику уровня
        await connection.query(
          `INSERT INTO referral_level_stats (
            user_id,
            level,
            total_earned,
            transaction_count,
            last_reward_at
          ) VALUES ($1, $2, $3, 1, NOW())
          ON CONFLICT (user_id, level) 
          DO UPDATE SET 
            total_earned = referral_level_stats.total_earned + $3,
            transaction_count = referral_level_stats.transaction_count + 1,
            last_reward_at = NOW()`,
          [referrer.referrer_id, referrer.level, rewardAmount]
        );

        totalDistributed += rewardAmount;
        processedReferrals.push({
          referrer_id: referrer.referrer_id,
          telegram_id: referrer.telegram_id,
          amount: rewardAmount,
          level: referrer.level,
          percent: rewardPercent
        });

      } catch (referrerError) {
        console.error(`❌ Ошибка обработки реферера ${referrer.referrer_id}:`, referrerError.message);
      }
    }

    // 8. Отмечаем транзакцию как обработанную
    if (processedReferrals.length > 0) {
      await markTransactionAsProcessed(txHash, 'referral_reward');
      console.log(`✅ Транзакция ${txHash.substring(0, 10)} обработана`);
    }

    await connection.query('COMMIT');

    console.log(`📊 Итог: распределено ${totalDistributed.toFixed(6)} USDT на ${processedReferrals.length} уровней, пропущено: ${skippedCount}`);

    // 9. Отправляем уведомления
    for (const referral of processedReferrals) {
      try {
        if (referral.telegram_id) {
          let referralUsername = recipientUser.username;
          if (!referralUsername) {
            if (recipientUser.first_name || recipientUser.last_name) {
              referralUsername = `${recipientUser.first_name || ''} ${recipientUser.last_name || ''}`.trim();
            } else {
              referralUsername = `user_${recipientUser.id}`;
            }
          }
          
          await notifyReferralRewardNew(
            referral.telegram_id,
            referral.amount,
            referral.level,
            referral.percent,
            referralUsername
          );
        }
      } catch (notifyError) {
        console.error(`❌ Ошибка уведомления:`, notifyError.message);
      }
    }

  } catch (error) {
    await connection.query('ROLLBACK');
    console.error("❌ Критическая ошибка в processReferralRewardEnhanced:", error);
  } finally {
    connection.release();
  }
}


// 🔥 ФУНКЦИЯ ДЛЯ АКТИВАЦИИ УРОВНЕЙ ПО ИНВЕСТИЦИЯМ
export async function activateUserLevel(userId, level) {
  const connection = await pool.connect();
  
  try {
    await connection.query('BEGIN');
    
    const requirements = LEVEL_ACTIVATION_REQUIREMENTS[level];
    if (!requirements) {
      throw new Error(`Неизвестный уровень: ${level}`);
    }
    
    // Получаем общую сумму инвестиций пользователя
    const investmentResult = await connection.query(
      `SELECT COALESCE(SUM(amount_usdt), 0) as total_investment
       FROM investments 
       WHERE user_id = $1 AND status IN ('active', 'completed')`,
      [userId]
    );
    
    const totalInvestment = parseFloat(investmentResult.rows[0].total_investment);
    const requiredInvestment = requirements.investment;
    
    console.log(`🔍 Проверка уровня ${level} для пользователя ${userId}:`);
    console.log(`   💰 Общие инвестиции: ${totalInvestment}$`);
    console.log(`   🎯 Требуется для уровня ${level}: ${requiredInvestment}$`);
    
    // Проверяем, достаточно ли инвестиций
    if (totalInvestment < requiredInvestment) {
      console.log(`❌ Недостаточно инвестиций для уровня ${level}`);
      await connection.query('ROLLBACK');
      return false;
    }
    
    // Активируем уровень
    await connection.query(
      `INSERT INTO user_active_levels (user_id, level, is_active, activated_at, activated_by, metadata)
       VALUES ($1, $2, true, NOW(), 'investment', $3)
       ON CONFLICT (user_id, level) DO UPDATE SET
         is_active = true,
         activated_at = NOW(),
         activated_by = 'investment',
         metadata = $3`,
      [userId, level, JSON.stringify({
        total_investment: totalInvestment,
        required_investment: requiredInvestment,
        activated_at: new Date().toISOString()
      })]
    );
    
    // Если это первый уровень - активируем автоматически
    if (level === 1 && requirements.autoActivate) {
      console.log(`✅ Уровень 1 активирован автоматически для пользователя ${userId}`);
    }
    
    await connection.query('COMMIT');
    console.log(`✅ Уровень ${level} активирован для пользователя ${userId} при инвестициях ${totalInvestment}$`);
    
    // Отправляем уведомление пользователю
    const user = await getUserById(userId);
    if (user && user.telegram_id) {
      await notifyLevelActivated(user.telegram_id, level, totalInvestment, requiredInvestment);
    }
    
    // Проверяем следующие уровни
    if (level < 17) {
      const nextLevel = level + 1;
      const nextRequirements = LEVEL_ACTIVATION_REQUIREMENTS[nextLevel];
      
      if (totalInvestment >= nextRequirements.investment) {
        console.log(`🔄 Пользователь ${userId} уже достиг уровня ${nextLevel}, активируем...`);
        await activateUserLevel(userId, nextLevel);
      }
    }
    
    return true;
    
  } catch (error) {
    await connection.query('ROLLBACK');
    console.error(`❌ Ошибка активации уровня ${level} для пользователя ${userId}:`, error);
    return false;
  } finally {
    connection.release();
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ ПРОВЕРКИ И АКТИВАЦИИ УРОВНЕЙ ПОСЛЕ ИНВЕСТИЦИИ
export async function checkLevelsAfterInvestment(userId, investmentAmount) {
  try {
    console.log(`🔍 Проверка уровней после инвестиции ${investmentAmount}$ пользователя ${userId}`);
    
    // Получаем текущие активные уровни пользователя
    const activeLevelsResult = await pool.query(
      `SELECT level FROM user_active_levels 
       WHERE user_id = $1 AND is_active = true 
       ORDER BY level DESC
       LIMIT 1`,
      [userId]
    );
    
    const currentMaxLevel = activeLevelsResult.rows[0]?.level || 0;
    
    // Получаем общую сумму инвестиций
    const investmentResult = await pool.query(
      `SELECT COALESCE(SUM(amount_usdt), 0) as total_investment
       FROM investments 
       WHERE user_id = $1 AND status IN ('active', 'completed')`,
      [userId]
    );
    
    const totalInvestment = parseFloat(investmentResult.rows[0].total_investment);
    console.log(`💰 Общие инвестиции пользователя ${userId}: ${totalInvestment}$`);
    
    // Проверяем каждый уровень от текущего +1 до 17
    for (let level = currentMaxLevel + 1; level <= 17; level++) {
      const requirements = LEVEL_ACTIVATION_REQUIREMENTS[level];
      
      if (totalInvestment >= requirements.investment) {
        console.log(`🎯 Пользователь ${userId} достиг уровня ${level} (${requirements.investment}$)`);
        await activateUserLevel(userId, level);
      } else {
        break;
      }
    }
    
    console.log(`✅ Проверка уровней завершена для пользователя ${userId}`);
    
  } catch (error) {
    console.error(`❌ Ошибка проверки уровней после инвестиции:`, error);
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ПРОГРЕССА К СЛЕДУЮЩЕМУ УРОВНЮ
export async function getUserLevelProgress(userId) {
  try {
    // Получаем текущий максимальный активный уровень
    const currentLevelResult = await pool.query(
      `SELECT level FROM user_active_levels 
       WHERE user_id = $1 AND is_active = true 
       ORDER BY level DESC 
       LIMIT 1`,
      [userId]
    );
    
    const currentLevel = currentLevelResult.rows[0]?.level || 0;
    const nextLevel = currentLevel + 1;
    
    // Если пользователь уже на максимальном уровне
    if (currentLevel >= 17) {
      return {
        current_level: 17,
        next_level: null,
        progress_percent: 100,
        required_investment: 0,
        current_investment: 0,
        remaining_amount: 0,
        is_max_level: true
      };
    }
    
    // Получаем общие инвестиции
    const investmentResult = await pool.query(
      `SELECT COALESCE(SUM(amount_usdt), 0) as total_investment
       FROM investments 
       WHERE user_id = $1 AND status IN ('active', 'completed')`,
      [userId]
    );
    
    const totalInvestment = parseFloat(investmentResult.rows[0].total_investment);
    const nextRequirements = LEVEL_ACTIVATION_REQUIREMENTS[nextLevel];
    
    // Рассчитываем прогресс
    const progressPercent = Math.min((totalInvestment / nextRequirements.investment) * 100, 100);
    const remainingAmount = Math.max(nextRequirements.investment - totalInvestment, 0);
    
    return {
      current_level: currentLevel,
      next_level: nextLevel,
      progress_percent: parseFloat(progressPercent.toFixed(2)),
      required_investment: nextRequirements.investment,
      current_investment: totalInvestment,
      remaining_amount: remainingAmount,
      next_level_percent: REFERRAL_PERCENTS[nextLevel] * 100,
      is_max_level: false
    };
    
  } catch (error) {
    console.error(`❌ Ошибка получения прогресса уровней:`, error);
    return null;
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ ОБ УРОВНЯХ ПОЛЬЗОВАТЕЛЯ
export async function getUserLevelsInfo(userId) {
  try {
    // Получаем активные уровни
    const activeLevelsResult = await pool.query(
      `SELECT level, activated_at, metadata 
       FROM user_active_levels 
       WHERE user_id = $1 AND is_active = true 
       ORDER BY level`,
      [userId]
    );
    
    // Получаем общие инвестиции
    const investmentResult = await pool.query(
      `SELECT COALESCE(SUM(amount_usdt), 0) as total_investment
       FROM investments 
       WHERE user_id = $1 AND status IN ('active', 'completed')`,
      [userId]
    );
    
    const totalInvestment = parseFloat(investmentResult.rows[0].total_investment);
    const activeLevels = activeLevelsResult.rows;
    const maxActiveLevel = activeLevels.length > 0 ? Math.max(...activeLevels.map(l => l.level)) : 0;
    
    // Собираем информацию о всех уровнях
    const allLevelsInfo = [];
    
    for (let level = 1; level <= 17; level++) {
      const requirements = LEVEL_ACTIVATION_REQUIREMENTS[level];
      const percent = REFERRAL_PERCENTS[level] * 100;
      const isActive = activeLevels.some(l => l.level === level);
      const levelActivatedAt = activeLevels.find(l => l.level === level)?.activated_at;
      
      // Проверяем, достигнут ли уровень
      const isAchieved = totalInvestment >= requirements.investment;
      
      allLevelsInfo.push({
        level: level,
        is_active: isActive,
        is_achieved: isAchieved,
        activated_at: levelActivatedAt,
        required_investment: requirements.investment,
        current_investment: totalInvestment,
        percent: percent,
        is_unlocked: isAchieved && !isActive && level <= maxActiveLevel + 1
      });
    }
    
    // Получаем прогресс к следующему уровню
    const progress = await getUserLevelProgress(userId);
    
    return {
      user_id: userId,
      total_investment: totalInvestment,
      active_levels: activeLevels,
      max_level: maxActiveLevel,
      all_levels: allLevelsInfo,
      progress: progress,
      requirements: LEVEL_ACTIVATION_REQUIREMENTS
    };
    
  } catch (error) {
    console.error(`❌ Ошибка получения информации об уровнях:`, error);
    return null;
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ РЕФЕРАЛЬНОЙ СТАТИСТИКИ
export async function getUserReferralStats(userId) {
  try {
    // Статистика по уровням
    const levelStats = await pool.query(
      `SELECT 
         level,
         is_active,
         activated_at,
         COALESCE(rls.total_earned, 0) as total_earned,
         COALESCE(rls.transaction_count, 0) as transaction_count
       FROM user_active_levels ual
       LEFT JOIN referral_level_stats rls ON rls.user_id = ual.user_id AND rls.level = ual.level
       WHERE ual.user_id = $1
       ORDER BY level`,
      [userId]
    );
    
    // Общая статистика
    const totalStats = await pool.query(
      `SELECT 
         COUNT(DISTINCT CASE WHEN rr.level = 1 THEN rr.referral_id END) as level1_count,
         COUNT(DISTINCT CASE WHEN rr.level = 2 THEN rr.referral_id END) as level2_count,
         COUNT(DISTINCT CASE WHEN rr.level BETWEEN 3 AND 7 THEN rr.referral_id END) as level3_7_count,
         COUNT(DISTINCT CASE WHEN rr.level BETWEEN 8 AND 10 THEN rr.referral_id END) as level8_10_count,
         COUNT(DISTINCT CASE WHEN rr.level BETWEEN 11 AND 17 THEN rr.referral_id END) as level11_17_count,
         COUNT(DISTINCT rr.referral_id) as total_referrals,
         COALESCE(SUM(t.amount), 0) as total_referral_earned
       FROM referral_relations rr
       LEFT JOIN transactions t ON t.user_id = rr.referrer_id AND t.type = 'referral_reward'
       WHERE rr.referrer_id = $1`,
      [userId]
    );
    
    return {
      levelStats: levelStats.rows,
      totalStats: totalStats.rows[0],
      requirements: LEVEL_ACTIVATION_REQUIREMENTS
    };
    
  } catch (error) {
    console.error(`❌ Ошибка получения статистики для пользователя ${userId}:`, error);
    return null;
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ РАСЧЕТА ПОТЕНЦИАЛЬНОГО ДОХОДА
export async function calculatePotentialEarnings(userId) {
  try {
    const stats = await getUserReferralStats(userId);
    if (!stats) return null;
    
    // Получаем инвестиции рефералов по уровням
    const referralInvestments = await pool.query(
      `SELECT 
         rr.level,
         COUNT(DISTINCT i.user_id) as active_investors,
         COALESCE(SUM(i.amount_usdt), 0) as total_investment
       FROM referral_relations rr
       JOIN investments i ON i.user_id = rr.referral_id AND i.status = 'active'
       WHERE rr.referrer_id = $1
       GROUP BY rr.level
       ORDER BY rr.level`,
      [userId]
    );
    
    const potentialEarnings = {};
    let totalPotential = 0;
    
    // Рассчитываем потенциальный доход для каждого уровня
    for (let level = 1; level <= 17; level++) {
      const percent = REFERRAL_PERCENTS[level];
      const isActive = stats.levelStats.find(s => s.level === level)?.is_active || false;
      
      // Находим инвестиции рефералов на этом уровне
      const levelInvestment = referralInvestments.rows.find(i => i.level === level);
      const monthlyInvestment = (levelInvestment?.total_investment || 0) * 0.01; // 1% в день = 30% в месяц
      
      const monthlyEarning = monthlyInvestment * percent;
      const yearlyEarning = monthlyEarning * 12;
      
      potentialEarnings[level] = {
        level: level,
        percent: percent * 100,
        isActive: isActive,
        activeReferrals: levelInvestment?.active_investors || 0,
        totalInvestment: levelInvestment?.total_investment || 0,
        monthlyEarning: monthlyEarning,
        yearlyEarning: yearlyEarning
      };
      
      if (isActive) {
        totalPotential += yearlyEarning;
      }
    }
    
    return {
      levels: potentialEarnings,
      totalMonthly: Object.values(potentialEarnings).reduce((sum, level) => sum + (level.isActive ? level.monthlyEarning : 0), 0),
      totalYearly: totalPotential,
      requirements: LEVEL_ACTIVATION_REQUIREMENTS
    };
    
  } catch (error) {
    console.error(`❌ Ошибка расчета потенциального дохода:`, error);
    return null;
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ РЕФЕРАЛЬНОГО ДЕРЕВА
export async function getReferralTree(userId, maxDepth = 5) {
  try {
    const result = await pool.query(
      `WITH RECURSIVE referral_tree AS (
         SELECT referral_id as user_id, 1 as level, referrer_id
         FROM referral_relations 
         WHERE referrer_id = $1
         
         UNION ALL
         
         SELECT rr.referral_id, rt.level + 1, rr.referrer_id
         FROM referral_relations rr
         INNER JOIN referral_tree rt ON rt.user_id = rr.referrer_id
         WHERE rt.level < $2
       )
       SELECT 
         rt.level,
         u.telegram_id,
         u.username,
         u.first_name,
         u.last_name,
         u.created_at as registration_date,
         COALESCE(SUM(i.amount_usdt), 0) as total_investment,
         COUNT(i.id) as investment_count,
         u.is_blocked
       FROM referral_tree rt
       JOIN users u ON u.id = rt.user_id
       LEFT JOIN investments i ON i.user_id = u.id AND i.status = 'active'
       GROUP BY rt.level, u.id, u.telegram_id, u.username, u.first_name, u.last_name, u.created_at, u.is_blocked
       ORDER BY rt.level, u.created_at`,
      [userId, maxDepth]
    );
    
    // Группируем по уровням
    const treeByLevels = {};
    result.rows.forEach(row => {
      if (!treeByLevels[row.level]) {
        treeByLevels[row.level] = [];
      }
      treeByLevels[row.level].push(row);
    });
    
    return {
      levels: treeByLevels,
      totalLevels: Object.keys(treeByLevels).length,
      totalReferrals: result.rows.length
    };
    
  } catch (error) {
    console.error(`❌ Ошибка получения реферального дерева:`, error);
    return null;
  }
}
export async function processReferralReward(walletAddress, amount, txHash, tokenType = 'USDT', level = 1) {
  try {
    console.log(`🔔 Обработка реферального вознаграждения: кошелек ${walletAddress}, сумма ${amount} ${tokenType}, уровень ${level}, хеш ${txHash}`);
    
    // Ищем пользователя по кошельку
    const user = await getUserByWalletAddress(walletAddress);
    if (!user) {
      console.log(`❌ Пользователь с кошельком ${walletAddress} не найден, реферальное вознаграждение не может быть начислено`);
      return false;
    }

    // Получаем информацию о реферале (если есть)
    let referralUsername = "реферальная система";
    let referrerWallet = null;
    
    // Пытаемся найти реферера (человека, который пригласил текущего пользователя)
    if (user.invited_by) {
      const referrer = await getUserById(user.invited_by);
      if (referrer) {
        referralUsername = referrer.username || referrer.telegram_id || "реферер";
        referrerWallet = referrer.wallet_address;
      }
    }

    // Начисляем баланс пользователю
    await addReferralRewardToBalance(user.id, amount, tokenType);

    // Отправляем уведомление
    const notificationSent = await notifyReferralRewardNew(
      user.telegram_id, 
      amount, 
      level,
      0.05, // процент (пример: 5% для первого уровня)
      referralUsername
    );

    if (notificationSent) {
      console.log(`✅ Реферальное вознаграждение успешно обработано для пользователя ${user.telegram_id} (${walletAddress})`);
    } else {
      console.log(`⚠️ Реферальное вознаграждение начислено, но уведомление не отправлено для пользователя ${user.telegram_id}`);
    }

    // Сохраняем в лог реферальных транзакций
    await logReferralTransaction(user.id, amount, tokenType, txHash, level, referrerWallet);

    return notificationSent;

  } catch (error) {
    console.error('❌ Ошибка обработки реферального вознаграждения:', error);
    return false;
  }
}

async function addReferralRewardToBalance(userId, amount, tokenType) {
  try {
    if (tokenType === 'USDT') {
      // Обновляем баланс USDT пользователя
      await pool.query(
        'UPDATE users SET balance_usdt = COALESCE(balance_usdt, 0) + $1, total_referral_earned = COALESCE(total_referral_earned, 0) + $1 WHERE id = $2',
        [amount, userId]
      );
      
      console.log(`✅ Баланс USDT пользователя ${userId} увеличен на ${amount} USDT`);
    } else if (tokenType === 'BNB') {
      // Обновляем баланс BNB пользователя
      await pool.query(
        'UPDATE users SET balance_bnb = COALESCE(balance_bnb, 0) + $1 WHERE id = $2',
        [amount, userId]
      );
      
      console.log(`✅ Баланс BNB пользователя ${userId} увеличен на ${amount} BNB`);
    }

    // Записываем в историю транзакций
    await pool.query(
      `INSERT INTO transactions (user_id, type, amount, currency, status, description, created_at) 
       VALUES ($1, 'referral_reward', $2, $3, 'completed', 'Реферальное вознаграждение', NOW())`,
      [userId, amount, tokenType]
    );

  } catch (error) {
    console.error('❌ Ошибка начисления реферального вознаграждения:', error);
    throw error;
  }
}

async function logReferralTransaction(userId, amount, tokenType, txHash, level, referrerWallet) {
  try {
    await pool.query(
      `INSERT INTO referral_transactions 
       (user_id, amount, token_type, tx_hash, level, referrer_wallet, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
      [userId, amount, tokenType, txHash, level, referrerWallet]
    );
    console.log(`📝 Логирована реферальная транзакция ${txHash}`);
  } catch (error) {
    console.error('❌ Ошибка логирования реферальной транзакции:', error);
  }
}

// 🔥 ФУНКЦИЯ УВЕДОМЛЕНИЯ О РЕФЕРАЛЬНОЙ НАГРАДЕ
export async function notifyReferralRewardNew(telegramId, amount, level, percent, referralUsername) {
  try {
    console.log(`🔔 Уведомление реферальной награды: TG ${telegramId}, ур.${level}, сумма: ${amount}, от: ${referralUsername}`);
    
    const bot = global.botInstance || state.botInstance;
    if (!bot) {
      console.log("❌ Бот не доступен для уведомления");
      return false;
    }
    
    const user = await getUserByTelegramId(telegramId);
    if (!user || user.is_blocked) {
      console.log(`⚠️ Пользователь ${telegramId} не найден или заблокирован`);
      return false;
    }
    
    const lang = user?.lang || "ru";
    const t = getTranslation(lang);
    
    // Формируем сообщение
    let message = `🎉 <b>Получено реферальное вознаграждение!</b>\n\n`;
    message += `💸 <b>Сумма:</b> ${parseFloat(amount).toFixed(4)} USDT\n`;
    
    // Создаем клавиатуру
    const keyboard = {
      inline_keyboard: [
        [{ text: '📊 Моя команда', callback_data: "my_team" }],
        [{ text: '💰 Мой баланс', callback_data: "my_balance" }]
      ]
    };
    
    // Отправляем сообщение
    await bot.telegram.sendMessage(telegramId, message, {
      parse_mode: "HTML",
      reply_markup: keyboard
    });
    
    console.log(`✅ Уведомление отправлено пользователю ${telegramId}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Ошибка отправки уведомления:`, error.message);
    
    // Если пользователь заблокировал бота
    if (error.response?.error_code === 403) {
      console.log(`🚫 Пользователь ${telegramId} заблокировал бота`);
      try {
        await pool.query(
          "UPDATE users SET is_blocked = true WHERE telegram_id = $1",
          [telegramId]
        );
      } catch (dbError) {
        console.error('Ошибка обновления статуса блокировки:', dbError);
      }
    }
    
    return false;
  }
}
// 🔥 ФУНКЦИЯ УВЕДОМЛЕНИЯ ОБ АКТИВАЦИИ УРОВНЯ
async function notifyLevelActivated(telegramId, level, currentInvestment, requiredInvestment) {
  try {
    const bot = global.botInstance || state.botInstance;
    if (!bot) return false;
    
    const user = await getUserByTelegramId(telegramId);
    if (!user || user.is_blocked) return false;
    
    const lang = user?.lang || "ru";
    const t = getTranslation(lang);
    const percent = REFERRAL_PERCENTS[level] * 100;
    
    let message = `🎉 <b>Поздравляем! Активирован уровень ${level}!</b>\n\n`;
    message += `💰 <b>Ваши инвестиции:</b> ${currentInvestment}$\n`;
    message += `🎯 <b>Требование уровня:</b> ${requiredInvestment}$\n`;
    message += `📈 <b>Ваш процент:</b> ${percent.toFixed(1)}%\n\n`;
    
    message += `Теперь вы будете получать ${percent.toFixed(1)}% от доходов ваших рефералов `;
    
    if (level === 1) {
      message += `1-го уровня`;
    } else if (level === 2) {
      message += `1-2 уровней`;
    } else if (level >= 3 && level <= 7) {
      message += `1-${level} уровней`;
    } else if (level >= 8 && level <= 10) {
      message += `1-${level} уровней`;
    } else {
      message += `1-${level} уровней`;
    }
    
    message += `!\n\n`;
    
    // Показываем следующий уровень, если он есть
    if (level < 17) {
      const nextLevel = level + 1;
      const nextPercent = REFERRAL_PERCENTS[nextLevel] * 100;
      const nextRequirement = LEVEL_ACTIVATION_REQUIREMENTS[nextLevel].investment;
      
      message += `➡️ <b>Следующий уровень ${nextLevel}:</b>\n`;
      message += `   💰 Требуется: ${nextRequirement}$\n`;
      message += `   📈 Процент: ${nextPercent.toFixed(1)}%\n`;
      message += `   📊 Осталось: ${Math.max(nextRequirement - currentInvestment, 0)}$`;
    }
    
    const keyboard = {
      inline_keyboard: [
        [{ text: '📊 Моя команда', callback_data: "my_team" }],
        [{ text: '🎯 Мои уровни', callback_data: "my_levels" }],
        [{ text: '💰 Инвестировать', callback_data: "invest" }]
      ]
    };
    
    await bot.telegram.sendMessage(telegramId, message, {
      parse_mode: "HTML",
      reply_markup: keyboard
    });
    
    return true;
    
  } catch (error) {
    console.error(`❌ Ошибка уведомления об активации уровня:`, error);
    return false;
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ ПЕРИОДИЧЕСКОЙ ПРОВЕРКИ УРОВНЕЙ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ
export async function checkAllUsersLevels() {
  try {
    console.log('🔍 Массовая проверка уровней всех пользователей...');
    
    // Получаем всех пользователей с инвестициями
    const usersResult = await pool.query(`
      SELECT DISTINCT i.user_id, u.telegram_id
      FROM investments i
      JOIN users u ON u.id = i.user_id
      WHERE i.status IN ('active', 'completed')
        AND u.is_blocked = false
      ORDER BY i.user_id
    `);
    
    console.log(`📊 Проверяем ${usersResult.rows.length} пользователей с инвестициями...`);
    
    let updatedCount = 0;
    
    for (const user of usersResult.rows) {
      try {
        // Получаем общую сумму инвестиций пользователя
        const investmentResult = await pool.query(
          `SELECT COALESCE(SUM(amount_usdt), 0) as total_investment
           FROM investments 
           WHERE user_id = $1 AND status IN ('active', 'completed')`,
          [user.user_id]
        );
        
        const totalInvestment = parseFloat(investmentResult.rows[0].total_investment);
        
        // Проверяем каждый уровень
        for (let level = 1; level <= 17; level++) {
          const requirements = LEVEL_ACTIVATION_REQUIREMENTS[level];
          
          // Проверяем, достиг ли пользователь уровня
          if (totalInvestment >= requirements.investment) {
            // Проверяем, активирован ли уже уровень
            const levelCheck = await pool.query(
              `SELECT 1 FROM user_active_levels 
               WHERE user_id = $1 AND level = $2 AND is_active = true`,
              [user.user_id, level]
            );
            
            if (levelCheck.rows.length === 0) {
              // Активируем уровень
              await activateUserLevel(user.user_id, level);
              updatedCount++;
            }
          }
        }
      } catch (userError) {
        console.error(`❌ Ошибка проверки пользователя ${user.user_id}:`, userError.message);
      }
    }
    
    console.log(`✅ Массовая проверка завершена. Обновлено ${updatedCount} уровней`);
    
  } catch (error) {
    console.error('❌ Ошибка массовой проверки уровней:', error);
  }
}

// 🔥 ТРИГГЕРНАЯ ФУНКЦИЯ ДЛЯ АВТОМАТИЧЕСКОЙ ПРОВЕРКИ УРОВНЕЙ
export async function setupInvestmentLevelTrigger() {
  console.log('🔧 Настройка триггера для проверки уровней после инвестиций...');
  
  // Запускаем периодическую проверку
  setInterval(async () => {
    try {
      // Находим новые инвестиции, которые еще не обрабатывались для уровней
      const newInvestments = await pool.query(`
        SELECT i.id, i.user_id, i.amount_usdt
        FROM investments i
        WHERE i.status IN ('active', 'completed')
          AND NOT EXISTS (
            SELECT 1 FROM level_activation_logs lal 
            WHERE lal.investment_id = i.id AND lal.action_type = 'level_check'
          )
        ORDER BY i.created_at DESC
        LIMIT 50
      `);
      
      if (newInvestments.rows.length > 0) {
        console.log(`💰 Найдено ${newInvestments.rows.length} новых инвестиций для проверки уровней`);
        
        for (const investment of newInvestments.rows) {
          try {
            await checkLevelsAfterInvestment(investment.user_id, investment.amount_usdt);
            
            // Логируем обработку
            await pool.query(
              `INSERT INTO level_activation_logs 
               (user_id, investment_id, action_type, metadata, created_at)
               VALUES ($1, $2, 'level_check', $3, NOW())`,
              [
                investment.user_id,
                investment.id,
                JSON.stringify({ amount: investment.amount_usdt, processed_at: new Date().toISOString() })
              ]
            );
          } catch (invError) {
            console.error(`❌ Ошибка обработки инвестиции ${investment.id}:`, invError.message);
          }
        }
      }
    } catch (error) {
      console.error('❌ Ошибка триггерной проверки уровней:', error);
    }
  }, 60 * 1000); // Проверка каждую минуту
}

// 🔥 ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ УРОВНЕЙ
export async function initializeLevelSystem() {
  try {
    console.log('🚀 Инициализация системы 17 уровней...');
    
    // Создаем необходимые таблицы, если их нет
    await createLevelTables();
    
    // Активируем 1 уровень для всех пользователей с инвестициями >= 100$
    const usersResult = await pool.query(`
      SELECT i.user_id, SUM(i.amount_usdt) as total_investment
      FROM investments i
      WHERE i.status IN ('active', 'completed')
      GROUP BY i.user_id
      HAVING SUM(i.amount_usdt) >= 100
    `);
    
    console.log(`👥 Активируем 1 уровень для ${usersResult.rows.length} пользователей...`);
    
    for (const user of usersResult.rows) {
      await activateUserLevel(user.user_id, 1);
    }
    
    console.log('✅ Система 17 уровней инициализирована');
    
  } catch (error) {
    console.error('❌ Ошибка инициализации системы уровней:', error);
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ТАБЛИЦ УРОВНЕЙ
async function createLevelTables() {
  try {
    // Таблица для активных уровней
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_active_levels (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 17),
        is_active BOOLEAN DEFAULT false,
        activated_at TIMESTAMP,
        activated_by VARCHAR(50),
        metadata JSONB,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(user_id, level)
      )
    `);
    
    // Таблица для статистики уровней
    await pool.query(`
      CREATE TABLE IF NOT EXISTS referral_level_stats (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        level INTEGER NOT NULL CHECK (level BETWEEN 1 AND 17),
        total_earned DECIMAL(18, 8) DEFAULT 0,
        transaction_count INTEGER DEFAULT 0,
        last_reward_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(user_id, level)
      )
    `);
    
    // Таблица для логов активации уровней
    await pool.query(`
      CREATE TABLE IF NOT EXISTS level_activation_logs (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        investment_id INTEGER REFERENCES investments(id),
        level INTEGER,
        action_type VARCHAR(50),
        metadata JSONB,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    
    // Добавляем колонку для общего реферального заработка
    await pool.query(`
      ALTER TABLE users 
      ADD COLUMN IF NOT EXISTS total_referral_earned DECIMAL(18, 8) DEFAULT 0
    `);
    
    console.log('✅ Таблицы уровней созданы/проверены');
    
  } catch (error) {
    console.error('❌ Ошибка создания таблиц уровней:', error);
  }
}

// 🔥 ПЕРИОДИЧЕСКАЯ ПРОВЕРКА РЕФЕРАЛЬНЫХ ТРАНЗАКЦИЙ
// 🔥 ОБНОВЛЕННАЯ ПЕРИОДИЧЕСКАЯ ПРОВЕРКА
export function startPeriodicReferralCheck() {
  console.log('🔄 ЗАПУСК ПЕРИОДИЧЕСКОЙ ПРОВЕРКИ РЕФЕРАЛЬНЫХ ТРАНЗАКЦИЙ');
  
  // Основная проверка каждые 15 минут (через контракт USDT)
  setInterval(() => {
    console.log('⏰ --- ПЕРИОДИЧЕСКАЯ ПРОВЕРКА ЧЕРЕЗ USDT КОНТРАКТ ---');
    checkUSDTContractForReferralTransfers().catch(error => {
      console.error('❌ Ошибка проверки через контракт:', error.message);
    });
  }, 15 * 60 * 1000);
  
  // Выборочная проверка кошельков каждые 30 минут
  setInterval(() => {
    console.log('🔄 --- ВЫБОРОЧНАЯ ПРОВЕРКА КОШЕЛЬКОВ ---');
    batchCheckReferralTransactions().catch(error => {
      console.error('❌ Ошибка выборочной проверки:', error.message);
    });
  }, 30 * 60 * 1000);
  
  // Полная проверка 1 раз в час
  setInterval(() => {
    console.log('🚀 --- ПОЛНАЯ ПРОВЕРКА ВСЕХ КОШЕЛЬКОВ ---');
    forceCheckReferralTransactions().catch(error => {
      console.error('❌ Ошибка полной проверки:', error.message);
    });
  }, 60 * 60 * 1000);
  
  // Первая проверка через 30 секунд
  setTimeout(() => {
    console.log('🚀 ПЕРВАЯ ПРОВЕРКА...');
    checkUSDTContractForReferralTransfers();
    setTimeout(() => batchCheckReferralTransactions(), 10000);
  }, 30000);
}

// 🔥 ОСНОВНАЯ ФУНКЦИЯ ПРОВЕРКИ РЕФЕРАЛЬНЫХ ТРАНЗАКЦИЙ
// 🔥 ОСНОВНАЯ ФУНКЦИЯ ПРОВЕРКИ РЕФЕРАЛЬНЫХ ТРАНЗАКЦИЙ (ИСПРАВЛЕННАЯ)
export async function forceCheckReferralTransactions() {
  try {
    console.log('🔍 ЗАПУСК ПРОВЕРКИ РЕФЕРАЛЬНЫХ ТРАНЗАКЦИЙ...');
    
    // Загружаем кошельки пользователей
    await loadUserWallets();
    const userWallets = Array.from(state.userWalletsSet || []);
    
    if (userWallets.length === 0) {
      console.log('❌ Нет кошельков пользователей для проверки');
      return;
    }
    
    console.log(`📊 Загружено ${userWallets.length} кошельков пользователей`);
    
    // Получаем последний блок
    const latestBlock = await getLatestBlockNumber();
    const startBlock = latestBlock - 10000; // Проверяем последние 10000 блоков (~2.5 дня)
    
    console.log(`📡 Проверка блоков: ${startBlock} - ${latestBlock} (диапазон: ${latestBlock - startBlock} блоков)`);
    
    let allFoundTxs = [];
    let processedCount = 0;
    
    // Проверяем транзакции для КАЖДОГО кошелька пользователя
    for (let i = 0; i < userWallets.length; i++) {
      const wallet = userWallets[i].toLowerCase();
      
      try {
        // Показываем прогресс каждые 100 кошельков
        if (i % 100 === 0) {
          console.log(`📊 Прогресс: проверено ${i}/${userWallets.length} кошельков...`);
        }
        
        // Получаем транзакции USDT для этого кошелька
        const walletTxs = await getWalletUSDTTransactions(wallet, startBlock, latestBlock);
        
        if (walletTxs.length > 0) {
          console.log(`💰 Найдено ${walletTxs.length} транзакций USDT для кошелька ${wallet.substring(0, 8)}...`);
          
          // Фильтруем только входящие транзакции
          const incomingTxs = walletTxs.filter(tx => 
            tx.to.toLowerCase() === wallet && 
            parseFloat(tx.value) / 1e18 >= 0.1 // Минимум 0.1 USDT
          );
          
          if (incomingTxs.length > 0) {
            console.log(`   📥 ${incomingTxs.length} входящих транзакций`);
            
            for (const tx of incomingTxs) {
              // Проверяем, не обрабатывали ли уже
              const existing = await pool.query(
                'SELECT id FROM transactions WHERE tx_hash = $1',
                [tx.hash]
              );
              
              if (existing.rows.length === 0) {
                // Проверяем, является ли это реферальной выплатой
                const isReferralTx = await isReferralTransaction(tx);
                
                if (isReferralTx) {
                  console.log(`🎯 Обнаружена реферальная транзакция!`);
                  console.log(`   📨 Кому: ${wallet.substring(0, 8)}...`);
                  console.log(`   💰 Сумма: ${parseFloat(tx.value) / 1e18} USDT`);
                  console.log(`   👤 От: ${tx.from.substring(0, 8)}...`);
                  console.log(`   📝 Хэш: ${tx.hash.substring(0, 10)}...`);
                  
                  // Обрабатываем как реферальную
                  await processReferralTransaction(tx);
                  processedCount++;
                  
                  // Задержка чтобы не перегружать API
                  await new Promise(resolve => setTimeout(resolve, 500));
                }
              }
            }
          }
        }
        
        // Задержка между запросами
        if (i % 10 === 0) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
      } catch (error) {
        console.error(`❌ Ошибка проверки кошелька ${wallet.substring(0, 8)}:`, error.message);
      }
    }
    
    console.log('📊 РЕЗУЛЬТАТЫ ПРОВЕРКИ:');
    console.log(`   📊 Проверено кошельков: ${userWallets.length}`);
    console.log(`   ✅ Обработано реферальных транзакций: ${processedCount}`);
    
  } catch (error) {
    console.error('❌ Ошибка проверки реферальных транзакций:', error);
  }
}
// 🔥 ФУНКЦИЯ ПОЛУЧЕНИЯ ТРАНЗАКЦИЙ USDT ДЛЯ КОШЕЛЬКА
async function getWalletUSDTTransactions(walletAddress, startBlock, endBlock) {
  try {
    const apiKey = process.env.BSCSCAN_API_KEY;
    if (!apiKey) {
      console.log('❌ BSCScan API ключ не установлен');
      return [];
    }
    
    const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${walletAddress}&contractaddress=${USDT_CONTRACT}&startblock=${startBlock}&endblock=${endBlock}&page=1&offset=100&sort=desc&apikey=${apiKey}`;
    
    const response = await axios.get(url, { timeout: 10000 });
    
    if (response.data.status === "1" && Array.isArray(response.data.result)) {
      return response.data.result;
    }
    
    return [];
    
  } catch (error) {
    console.error(`❌ Ошибка получения транзакций для ${walletAddress}:`, error.message);
    return [];
  }
}
// 🔥 ФУНКЦИЯ ПРОВЕРКИ, ЯВЛЯЕТСЯ ЛИ ТРАНЗАКЦИЯ РЕФЕРАЛЬНОЙ
async function isReferralTransaction(tx) {
  try {
    const amount = parseFloat(tx.value) / 1e18;
    const fromAddress = tx.from.toLowerCase();
    const toAddress = tx.to.toLowerCase();
    
    // 1. Проверяем известные реферальные кошельки
    const knownReferralWallets = [
      REFERRAL_REWARD_WALLET.toLowerCase(),
      "0x55d398326f99059ff775485246999027b3197955", // USDT контракт
      // Добавьте сюда другие известные адреса для реферальных выплат
    ];
    
    if (knownReferralWallets.includes(fromAddress)) {
      console.log(`✅ Транзакция от известного реферального кошелька`);
      return true;
    }
    
    // 2. Проверяем, является ли отправитель нашим пользователем
    const senderUser = await getUserByWalletAddress(fromAddress);
    if (senderUser) {
      console.log(`⚠️ Отправитель ${fromAddress.substring(0, 8)}... - наш пользователь, пропускаем`);
      return false;
    }
    
    // 3. Проверяем по комментариям или тегам (если есть)
    // (можно добавить логику проверки input data транзакции)
    
    // 4. Проверяем по сумме (реферальные выплаты обычно фиксированные или процентные)
    // Например: сумма > 0.1 USDT и не круглая сумма (0.1, 0.5, 1, 5 и т.д.)
    if (amount > 0.1 && !isRoundAmount(amount)) {
      console.log(`✅ Транзакция ${amount} USDT - подозрительная сумма для реферальной выплаты`);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error('❌ Ошибка проверки реферальной транзакции:', error);
    return false;
  }
}

// 🔥 ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ПРОВЕРКИ СУММ
function isRoundAmount(amount) {
  // Проверяем, является ли сумма "круглой" (0.1, 0.5, 1, 5, 10 и т.д.)
  const rounded = Math.round(amount * 100) / 100;
  return Math.abs(amount - rounded) < 0.000001;
}

// 🔥 АЛЬТЕРНАТИВНЫЙ МЕТОД: ПРОВЕРКА ПО ТРАНЗАКЦИЯМ КОНТРАКТА USDT
export async function checkUSDTContractForReferralTransfers() {
  try {
    console.log('🔍 ПРОВЕРКА ТРАНЗАКЦИЙ КОНТРАКТА USDT...');
    
    const apiKey = process.env.BSCSCAN_API_KEY;
    if (!apiKey) {
      console.log('❌ BSCScan API ключ не установлен');
      return;
    }
    
    // Получаем последний блок
    const latestBlock = await getLatestBlockNumber();
    const startBlock = latestBlock - 2000; // Последние 500 блоков (~2 часа)
    
    console.log(`📡 Проверка блоков USDT контракта: ${startBlock} - ${latestBlock}`);
    
    // Получаем все Transfer события контракта USDT
    const url = `https://api.bscscan.com/api?module=logs&action=getLogs&address=${USDT_CONTRACT}&fromBlock=${startBlock}&toBlock=${latestBlock}&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&page=1&offset=1000&apikey=${apiKey}`;
    
    const response = await axios.get(url, { timeout: 15000 });
    
    if (response.data.status === "1" && Array.isArray(response.data.result)) {
      const logs = response.data.result;
      console.log(`📊 Найдено ${logs.length} Transfer событий USDT`);
      
      // Загружаем кошельки пользователей
      await loadUserWallets();
      const userWallets = Array.from(state.userWalletsSet || []).map(w => w.toLowerCase());
      
      let processedCount = 0;
      
      for (const log of logs) {
        try {
          // Извлекаем адреса из topics
          const fromAddress = '0x' + log.topics[1].substring(26).toLowerCase();
          const toAddress = '0x' + log.topics[2].substring(26).toLowerCase();
          
          // Проверяем, является ли получатель нашим пользователем
          if (userWallets.includes(toAddress)) {
            // Получаем данные транзакции
            const txHash = log.transactionHash;
            const txData = await getTransactionDetails(txHash);
            
            if (txData) {
              // Проверяем, не обрабатывали ли уже
              const existing = await pool.query(
                'SELECT id FROM transactions WHERE tx_hash = $1',
                [txHash]
              );
              
              if (existing.rows.length === 0) {
                // Парсим количество токенов
                const amount = parseInt(log.data, 16) / Math.pow(10, 18);
                
                if (amount >= 0.1) {
                  console.log(`🎯 Найдена транзакция USDT к пользователю!`);
                  console.log(`   📨 Кому: ${toAddress.substring(0, 8)}...`);
                  console.log(`   💰 Сумма: ${amount} USDT`);
                  console.log(`   👤 От: ${fromAddress.substring(0, 8)}...`);
                  console.log(`   📝 Хэш: ${txHash.substring(0, 10)}...`);
                  
                  // Обрабатываем как потенциально реферальную
                  await processReferralTransaction({
                    hash: txHash,
                    from: fromAddress,
                    to: toAddress,
                    value: (amount * 1e18).toString(),
                    tokenDecimal: '18'
                  });
                  
                  processedCount++;
                  
                  // Задержка
                  await new Promise(resolve => setTimeout(resolve, 500));
                }
              }
            }
          }
          
        } catch (logError) {
          console.error(`❌ Ошибка обработки лога:`, logError.message);
        }
      }
      
      console.log(`✅ Обработано ${processedCount} потенциально реферальных транзакций`);
    } else {
      console.log('⚠️ Не удалось получить логи USDT контракта');
    }
    
  } catch (error) {
    console.error('❌ Ошибка проверки USDT контракта:', error);
  }
}

// 🔥 ФУНКЦИЯ ПОЛУЧЕНИЯ ДЕТАЛЕЙ ТРАНЗАКЦИИ
async function getTransactionDetails(txHash) {
  try {
    const apiKey = process.env.BSCSCAN_API_KEY;
    if (!apiKey) return null;
    
    const url = `https://api.bscscan.com/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=${apiKey}`;
    
    const response = await axios.get(url, { timeout: 10000 });
    
    if (response.data.result) {
      return response.data.result;
    }
    
    return null;
  } catch (error) {
    console.error(`❌ Ошибка получения деталей транзакции ${txHash.substring(0, 10)}:`, error.message);
    return null;
  }
}

// 🔥 ОБНОВЛЕННАЯ ФУНКЦИЯ ПРОВЕРКИ С ПАРАЛЛЕЛЬНЫМИ ЗАПРОСАМИ
export async function batchCheckReferralTransactions() {
  try {
    console.log('🔍 ПАКЕТНАЯ ПРОВЕРКА РЕФЕРАЛЬНЫХ ТРАНЗАКЦИЙ...');
    
    // 1. Сначала проверяем через контракт USDT (самый надежный способ)
    await checkUSDTContractForReferralTransfers();
    
    // 2. Затем делаем выборочную проверку кошельков
    await loadUserWallets();
    const userWallets = Array.from(state.userWalletsSet || []);
    
    if (userWallets.length === 0) return;
    
    // Берем случайные 50 кошельков для проверки
    const randomWallets = userWallets
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(50, userWallets.length));
    
    console.log(`📊 Выборочная проверка ${randomWallets.length} кошельков...`);
    
    const latestBlock = await getLatestBlockNumber();
    const startBlock = latestBlock - 5000;
    
    let processedCount = 0;
    
    // Параллельная проверка
    const batchSize = 5;
    for (let i = 0; i < randomWallets.length; i += batchSize) {
      const batch = randomWallets.slice(i, i + batchSize);
      const promises = batch.map(wallet => 
        checkWalletForReferralTransactions(wallet, startBlock, latestBlock)
      );
      
      const results = await Promise.allSettled(promises);
      processedCount += results.filter(r => r.status === 'fulfilled' && r.value > 0).length;
      
      // Задержка между батчами
      if (i + batchSize < randomWallets.length) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    console.log(`✅ Пакетная проверка завершена. Обработано транзакций: ${processedCount}`);
    
  } catch (error) {
    console.error('❌ Ошибка пакетной проверки:', error);
  }
}
// 🔥 ФУНКЦИЯ ПРОВЕРКИ ОДНОГО КОШЕЛЬКА
async function checkWalletForReferralTransactions(walletAddress, startBlock, endBlock) {
  try {
    const txs = await getWalletUSDTTransactions(walletAddress, startBlock, endBlock);
    
    if (txs.length === 0) return 0;
    
    const incomingTxs = txs.filter(tx => 
      tx.to.toLowerCase() === walletAddress.toLowerCase() && 
      parseFloat(tx.value) / 1e18 >= 0.1
    );
    
    let processed = 0;
    
    for (const tx of incomingTxs) {
      try {
        // Проверяем, не обрабатывали ли уже
        const existing = await pool.query(
          'SELECT id FROM transactions WHERE tx_hash = $1',
          [tx.hash]
        );
        
        if (existing.rows.length === 0) {
          // Обрабатываем
          await processReferralTransaction(tx);
          processed++;
          
          // Короткая задержка
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      } catch (txError) {
        console.error(`❌ Ошибка обработки транзакции:`, txError.message);
      }
    }
    
    return processed;
    
  } catch (error) {
    console.error(`❌ Ошибка проверки кошелька ${walletAddress.substring(0, 8)}:`, error.message);
    return 0;
  }
}

// 🔥 ФУНКЦИЯ ПРОЦЕССИНГА ТРАНЗАКЦИЙ
export async function processReferralTransaction(tx) {
  try {
    const amount = parseFloat(tx.value) / Math.pow(10, parseInt(tx.tokenDecimal || 18));
    const toAddress = tx.to.toLowerCase();
    
    console.log(`🔍 Обрабатываем транзакцию ${tx.hash.substring(0, 10)}...`);
    console.log(`   📨 Кому: ${toAddress.substring(0, 8)}`);
    console.log(`   💰 Сумма: ${amount} USDT`);
    console.log(`   👤 От: ${tx.from.substring(0, 8)}`);

    // Проверяем, не обрабатывали ли уже эту транзакцию
    const existingTx = await pool.query(
      'SELECT id FROM transactions WHERE tx_hash = $1 AND type = $2',
      [tx.hash, 'referral_reward']
    );

    if (existingTx.rows.length > 0) {
      console.log(`⚠️ Транзакция ${tx.hash.substring(0, 10)} уже обработана`);
      return;
    }

    // Обрабатываем транзакцию
    await processReferralRewardEnhanced(
      toAddress,
      amount,
      tx.hash,
      tx.from
    );
    
    console.log(`✅ Транзакция обработана: ${tx.hash.substring(0, 10)}`);
    
  } catch (error) {
    console.error(`❌ Ошибка обработки транзакции:`, error);
  }
}

// 🔥 ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

async function getUserById(userId) {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [userId]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error("❌ Ошибка получения пользователя по ID:", error);
    return null;
  }
}

async function getUserByWalletAddress(walletAddress) {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE LOWER(wallet_address) = LOWER($1)",
      [walletAddress]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error("❌ Ошибка поиска пользователя по кошельку:", error);
    return null;
  }
}

async function getUserByTelegramId(telegramId) {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE telegram_id = $1",
      [telegramId]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error("❌ Ошибка получения пользователя по telegram_id:", error);
    return null;
  }
}

async function checkUserLevelActivated(userId, level) {
  try {
    // Первый уровень активируется автоматически при наличии инвестиций
    if (level === 1) {
      const investmentResult = await pool.query(
        `SELECT COALESCE(SUM(amount_usdt), 0) as total_investment
         FROM investments 
         WHERE user_id = $1 AND status IN ('active', 'completed')`,
        [userId]
      );
      
      const totalInvestment = parseFloat(investmentResult.rows[0].total_investment);
      return totalInvestment >= LEVEL_ACTIVATION_REQUIREMENTS[1].investment;
    }
    
    const result = await pool.query(
      "SELECT 1 FROM user_active_levels WHERE user_id = $1 AND level = $2 AND is_active = true",
      [userId, level]
    );
    return result.rows.length > 0;
  } catch (error) {
    console.error("❌ Ошибка проверки уровня пользователя:", error);
    return false;
  }
}

function getReferralRewardPercent(level) {
  return REFERRAL_PERCENTS[level] || 0;
}

async function markTransactionAsProcessed(txHash, serviceType) {
  try {
    await pool.query(
      `INSERT INTO processed_transactions (tx_hash, service_type, processed_at) 
       VALUES ($1, $2, NOW()) 
       ON CONFLICT (tx_hash, service_type) DO UPDATE SET processed_at = NOW()`,
      [txHash, serviceType]
    );
  } catch (error) {
    console.error("Ошибка пометки транзакции:", error);
  }
}

async function getLatestBlockNumber() {
  const RPC_NODES = [
    'https://bsc-dataseed1.binance.org',
    'https://bsc-dataseed2.binance.org',
    'https://bsc-dataseed3.binance.org',
    'https://bsc-dataseed4.binance.org',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed2.defibit.io'
  ];
  
  for (const rpc of RPC_NODES) {
    try {
      const res = await fetch(rpc, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'eth_blockNumber',
          params: []
        })
      });

      const data = await res.json();
      if (data?.result) {
        console.log(`✅ Получен блок ${parseInt(data.result, 16)} через ${rpc}`);
        return parseInt(data.result, 16);
      }
    } catch (err) {
      console.log(`⚠️ RPC ${rpc} ошибка:`, err.message);
    }
  }

  throw new Error('Не удалось получить номер последнего блока с ни одного RPC');
}

// 🔥 ФУНКЦИИ ДЛЯ БОТА
export function setGlobalBot(bot) {
  global.botInstance = bot;
  state.botInstance = bot;
  console.log("✅ Бот установлен в глобальном контексте и состоянии");
}

// 🔥 ЭКСПОРТ ВСЕХ ФУНКЦИЙ ДЛЯ ИСПОЛЬЗОВАНИЯ
export {
  REFERRAL_PERCENTS,
  LEVEL_ACTIVATION_REQUIREMENTS
};