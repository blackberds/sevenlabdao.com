import cron from 'node-cron';
import { Telegraf } from 'telegraf';
import { pool } from '../db.js';
import config from '../config.js';
import logger from '../utils/logger.js';
// Добавьте эту функцию в начало файла
export function initializeBot(botInstance) {
  if (botInstance) {
    global.botInstance = botInstance;
    state.botInstance = botInstance;
    console.log("✅ Бот инициализирован для сервиса уведомлений");
    return true;
  }
  return false;
}

// Альтернативная функция для создания бота из токена
export function initializeBotFromToken(token) {
  try {
    if (!token) {
      console.log("❌ Токен бота не предоставлен");
      return false;
    }
    
    const bot = new Telegraf(token);
    global.botInstance = bot;
    state.botInstance = bot;
    console.log("✅ Бот создан из токена для сервиса уведомлений");
    return true;
  } catch (error) {
    console.error("❌ Ошибка создания бота из токена:", error);
    return false;
  }
}
function getGlobalBot() {
  // Пробуем получить бот из разных источников
  if (global.botInstance) {
    return global.botInstance;
  }
  
  if (state.botInstance) {
    return state.botInstance;
  }
  
  // Пытаемся создать бота из конфига
  if (config.telegramBotToken) {
    try {
      const bot = new Telegraf(config.telegramBotToken);
      global.botInstance = bot;
      state.botInstance = bot;
      console.log("✅ Бот создан из конфига в getGlobalBot");
      return bot;
    } catch (error) {
      console.error("❌ Ошибка создания бота из конфига:", error);
    }
  }
  
  console.log("❌ Бот не доступен в getGlobalBot");
  return null;
}
function formatBalance(balance) {
  return parseFloat(balance).toFixed(4);
}
// РЕАЛИЗАЦИЯ ЧЕРЕЗ BSCSCAN API
async function getBalancesBscScan(walletAddress) {
  try {
    const apiKey = process.env.BSCSCAN_API_KEY;
    if (!apiKey) {
      console.log('❌ BSCSCAN_API_KEY не установлен в .env файле');
      return { bnb: '0', usdt: '0' };
    }

    console.log(`🔍 Запрос балансов через BSCScan для: ${walletAddress}`);

    // Добавляем таймаут для запросов
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      // Баланс BNB
      const bnbResponse = await fetch(
        `https://api.bscscan.com/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`,
        { signal: controller.signal }
      );
      const bnbData = await bnbResponse.json();
      
      // Баланс USDT
      const usdtContractAddress = '0x55d398326f99059ff775485246999027b3197955';
      const usdtResponse = await fetch(
        `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${usdtContractAddress}&address=${walletAddress}&tag=latest&apikey=${apiKey}`,
        { signal: controller.signal }
      );
      const usdtData = await usdtResponse.json();
      
      clearTimeout(timeoutId);

      const balances = {
        bnb: '0',
        usdt: '0'
      };

      // Обрабатываем BNB баланс
      if (bnbData.status === '1') {
        balances.bnb = (parseFloat(bnbData.result) / 1e18).toString();
      } else {
        console.log('❌ Ошибка получения BNB баланса:', bnbData.message);
      }

      // Обрабатываем USDT баланс
      if (usdtData.status === '1') {
        // USDT имеет 18 decimals на BSC
        balances.usdt = (parseFloat(usdtData.result) / 1e18).toString();
      } else {
        console.log('❌ Ошибка получения USDT баланса:', usdtData.message);
      }

      console.log(`📊 BSCScan балансы: BNB=${balances.bnb}, USDT=${balances.usdt}`);
      return balances;

    } catch (fetchError) {
      clearTimeout(timeoutId);
      throw fetchError;
    }

  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('❌ Таймаут запроса к BSCScan API');
    } else {
      console.error('❌ Ошибка BSCScan API:', error);
    }
    return { bnb: '0', usdt: '0' };
  }
}

// ПОЛНАЯ РЕАЛИЗАЦИЯ getBalances
async function getBalances(walletAddress) {
  try {
    console.log(`🔍 Получаем балансы для адреса: ${walletAddress}`);
    
    // Сначала пробуем BSCScan API (более надежный)
    const bscscanBalances = await getBalancesBscScan(walletAddress);
    
    // Если BSCScan вернул данные, используем их
    if (bscscanBalances && (bscscanBalances.bnb !== '0' || bscscanBalances.usdt !== '0')) {
      console.log('✅ Балансы получены через BSCScan');
      return bscscanBalances;
    }
    
    console.log('⚠️ BSCScan вернул нулевые балансы, пробуем Web3...');
    
    // Fallback на Web3
    const web3Balances = await getBalancesWeb3(walletAddress);
    console.log('✅ Балансы получены через Web3');
    return web3Balances;

  } catch (error) {
    console.error('❌ Ошибка получения балансов:', error);
    return {
      bnb: '0',
      usdt: '0'
    };
  }
}
async function getBNBBalance(walletAddress) {
  try {
    const apiKey = process.env.BSCSCAN_API_KEY;
    if (!apiKey) {
      console.log('⚠️ BSCSCAN_API_KEY не установлен');
      return '0';
    }
    
    const response = await fetch(`https://api.bscscan.com/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`);
    // ... остальной код
  } catch (error) {
    // обработка ошибок
  }
}

// Реализация получения баланса USDT (BEP-20)
async function getUSDTBalance(walletAddress) {
  try {
    const apiKey = process.env.BSCSCAN_API_KEY;
    if (!apiKey) {
      console.log('⚠️ BSCSCAN_API_KEY не установлен');
      return '0';
    }
    
    const usdtContractAddress = '0x55d398326f99059ff775485246999027b3197955';
    const response = await fetch(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${usdtContractAddress}&address=${walletAddress}&tag=latest&apikey=${apiKey}`);
    
    const data = await response.json();
    
    if (data.status === '1') {
      const balanceInUSDT = parseFloat(data.result) / 1e18;
      return balanceInUSDT.toString();
    }
    
    return '0';
  } catch (error) {
    console.error('Ошибка получения баланса USDT:', error);
    return '0';
  }
}

async function getBalancesWeb3(walletAddress) {
  try {
    const { default: Web3 } = await import('web3');
    const web3 = new Web3('https://bsc-dataseed.binance.org/');
    
    console.log(`🔗 Подключаемся к BSC через Web3...`);

    // Баланс BNB
    const bnbBalanceWei = await web3.eth.getBalance(walletAddress);
    const bnbBalance = web3.utils.fromWei(bnbBalanceWei, 'ether');

    // Баланс USDT
    const usdtContractAddress = '0x55d398326f99059ff775485246999027b3197955';
    const usdtContractABI = [
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        type: "function"
      }
    ];

    const usdtContract = new web3.eth.Contract(usdtContractABI, usdtContractAddress);
    
    // Получаем баланс и decimals
    const [usdtBalanceWei, decimalsResult] = await Promise.all([
      usdtContract.methods.balanceOf(walletAddress).call(),
      usdtContract.methods.decimals().call().catch(() => '18') // fallback to 18
    ]);

    const decimals = parseInt(decimalsResult);
    
    // ПРАВИЛЬНАЯ конвертация BigInt в число
    const usdtBalanceWeiBigInt = BigInt(usdtBalanceWei);
    const divisor = 10n ** BigInt(decimals);
    
    // Вычисляем целую и дробную части
    const wholePart = usdtBalanceWeiBigInt / divisor;
    const fractionalPart = usdtBalanceWeiBigInt % divisor;
    
    // Собираем итоговый баланс как строку
    let usdtBalance;
    if (fractionalPart === 0n) {
      usdtBalance = wholePart.toString();
    } else {
      // Форматируем дробную часть с ведущими нулями
      const fractionalStr = fractionalPart.toString().padStart(decimals, '0');
      // Убираем trailing zeros
      usdtBalance = `${wholePart.toString()}.${fractionalStr}`.replace(/\.?0+$/, '');
    }

    console.log(`📊 Web3 балансы: BNB=${bnbBalance}, USDT=${usdtBalance}`);
    
    return {
      bnb: bnbBalance.toString(),
      usdt: usdtBalance.toString()
    };

  } catch (error) {
    console.error('❌ Ошибка Web3 получения балансов:', error);
    return {
      bnb: '0',
      usdt: '0'
    };
  }
}

async function isValidUserForNotifications(telegramId) {
  return true;
}

async function isValidUserForRegistrationNotifications(telegramId) {
  return true;
}

async function getUserByTelegramId(telegramId) {
  const result = await pool.query('SELECT * FROM users WHERE telegram_id = $1', [telegramId]);
  return result.rows[0] || null;
}

function getTranslation(lang) {
  const translations = {
    ru: {
      referral_reward_notification: (params) => `🎉 Вы получили реферальное вознаграждение: ${params.amount} USDT`,
      referral_reward_my_portfolio: '📊 Мой портфель'
    },
    en: {
      referral_reward_notification: (params) => `🎉 You received referral reward: ${params.amount} USDT`,
      referral_reward_my_portfolio: '📊 My Portfolio'
    }
  };
  return translations[lang] || translations.ru;
}

// Глобальное состояние
const state = {
  botInstance: null
};
export async function notifyReferralRewardNew(telegramId, amount, referralUsername = "реферальная система", level = 1) {
  try {
    console.log(`🔔 START notifyReferralRewardNew: TG ${telegramId}, amount: ${amount}, level: ${level}, referral: ${referralUsername}`);
    
    // Пытаемся получить бота из разных источников
    let bot = getGlobalBot();
    if (!bot) {
      console.log("❌ Бот не доступен для отправки уведомления");
      
      // Попытка создать бота из токена
      if (process.env.BOT_TOKEN) {
        console.log("🔄 Пытаемся создать бота из токена...");
        const { Telegraf } = await import('telegraf');
        bot = new Telegraf(process.env.BOT_TOKEN);
        initializeBot(bot);
      }
      
      if (!bot) {
        console.log("❌ Не удалось инициализировать бота");
        return false;
      }
    }

    // Получаем информацию о пользователе
    const user = await getUserByTelegramId(telegramId);
    if (!user) {
      console.log(`❌ Пользователь с TG ID ${telegramId} не найден в базе данных`);
      return false;
    }

    console.log(`👤 Найден пользователь: ID ${user.id}, TG ${user.telegram_id}, username: ${user.username}`);

    if (user.is_blocked) {
      console.log(`⚠️ Пользователь ${telegramId} заблокирован, пропускаем уведомление`);
      return false;
    }

    const lang = user?.lang || "ru";
    const translations = getTranslation(lang);

    // Формируем сообщение в зависимости от уровня реферала
    let message;
    if (level === 1) {
      message = `🎉 <b>Реферальное вознаграждение</b>\n\n` +
                `💰 Вы получили: <b>${parseFloat(amount).toFixed(4)} USDT</b>\n` +
                `👥 От реферала: ${referralUsername}\n` +
                `📊 Уровень: 1 (прямой реферал)`;
    } else {
      message = `🎉 <b>Реферальное вознаграждение ${level} уровня</b>\n\n` +
                `💰 Вы получили: <b>${parseFloat(amount).toFixed(4)} USDT</b>\n` +
                `👥 От реферала ${level} уровня: ${referralUsername}`;
    }

    console.log(`📨 Подготовлено сообщение для пользователя ${telegramId}: ${message}`);

    // Создаем клавиатуру
    const keyboard = {
      inline_keyboard: [
        [{ text: translations.referral_reward_my_portfolio, callback_data: "my_investments" }],
        [{ text: "👥 Мои рефералы", callback_data: "my_referrals" }]
      ]
    };

    // Отправляем сообщение
    await bot.telegram.sendMessage(telegramId, message, {
      parse_mode: "HTML",
      reply_markup: keyboard
    });

    console.log(`✅ Реферальное уведомление отправлено пользователю ${telegramId}`);
    
    // Логируем отправку уведомления в базу
    await logNotificationSent(telegramId, 'referral_reward', amount);
    
    return true;

  } catch (error) {
    console.error(`❌ Ошибка отправки реферального уведомления пользователю ${telegramId}:`, error.message);
    
    // Обработка специфических ошибок Telegram
    if (error.response?.error_code === 403) {
      console.log(`🚫 Пользователь ${telegramId} заблокировал бота`);
      await markUserAsBlocked(telegramId);
    } else if (error.response?.error_code === 400) {
      console.log(`❌ Неверный запрос для пользователя ${telegramId}:`, error.response.description);
    } else if (error.code === 'ETELEGRAM') {
      console.log(`❌ Ошибка Telegram API:`, error.message);
    } else if (error.message.includes('chat not found')) {
      console.log(`❌ Чат с пользователем ${telegramId} не найден`);
      await markUserAsBlocked(telegramId);
    }
    
    return false;
  }
}
async function getUserByWalletAddress(walletAddress) {
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE wallet_address = $1 OR LOWER(wallet_address) = LOWER($1)',
      [walgramAddress]
    );
    
    if (result.rows.length > 0) {
      console.log(`✅ Найден пользователь по кошельку ${walletAddress}: TG ID ${result.rows[0].telegram_id}`);
      return result.rows[0];
    } else {
      console.log(`❌ Пользователь с кошельком ${walletAddress} не найден в базе`);
      return null;
    }
  } catch (error) {
    console.error('❌ Ошибка поиска пользователя по кошельку:', error);
    return null;
  }
}

// Вспомогательные функции
async function logNotificationSent(telegramId, type, amount) {
  try {
    await pool.query(
      `INSERT INTO notification_logs (telegram_id, type, amount, sent_at) 
       VALUES ($1, $2, $3, NOW())`,
      [telegramId, type, amount]
    );
  } catch (error) {
    console.error('Ошибка логирования уведомления:', error);
  }
}

async function markUserAsBlocked(telegramId) {
  try {
    await pool.query(
      "UPDATE users SET is_blocked = true WHERE telegram_id = $1",
      [telegramId]
    );
    console.log(`✅ Пользователь ${telegramId} помечен как заблокированный`);
  } catch (dbError) {
    console.error('Ошибка при обновлении статуса блокировки:', dbError);
  }
}

// ГЛАВНАЯ ФУНКЦИЯ ДЛЯ ЗАПУСКА ВСЕХ СЕРВИСОВ
export async function startAllNotificationServices(botInstance = null) {
  console.log("🚀 ЗАПУСК ВСЕХ СЕРВИСОВ УВЕДОМЛЕНИЙ...");
  
  try {
    // Инициализируем бота если передан
    if (botInstance) {
      initializeBot(botInstance);
    } else if (config.telegramBotToken) {
      // Или создаем из конфига
      initializeBotFromToken(config.telegramBotToken);
    }
    
    // Проверяем, что бот доступен
    const bot = getGlobalBot();
    if (!bot) {
      console.log("⚠️ ВНИМАНИЕ: Бот не инициализирован. Уведомления не будут работать!");
    } else {
      console.log("✅ Бот готов для отправки уведомлений");
    }
    
    // Запускаем сервисы
    //await start24hNotificationService();
    await scheduleBalanceReports();
    await startIncompleteRegistrationService();
    
    console.log("✅ ВСЕ СЕРВИСЫ УВЕДОМЛЕНИЙ УСПЕШНО ЗАПУЩЕНЫ");
    
  } catch (error) {
    console.error("❌ ОШИБКА ЗАПУСКА СЕРВИСОВ УВЕДОМЛЕНИЙ:", error);
  }
}

export async function start24hNotificationService() {
  console.log("⏰ Сервис 24h уведомлений запущен");

  const CHECK_INTERVAL = 6 * 60 * 60 * 1000; // 6 часов

  // Первая проверка через 2 минуты
  setTimeout(() => {
    console.log("🔄 Первый запуск проверки 24h уведомлений...");
    checkAndSend24hMissedProfitNotifications().catch(error => {
      console.error("Ошибка первой проверки 24h уведомлений:", error);
    });
  }, 120000);

  // Периодическая проверка
  setInterval(() => {
    console.log("🔄 Периодическая проверка 24h уведомлений...");
    checkAndSend24hMissedProfitNotifications().catch(error => {
      console.error("Ошибка периодической проверки 24h уведомлений:", error);
    });
  }, CHECK_INTERVAL);

  console.log("✅ Сервис 24h уведомлений успешно запущен");
}

// СЕРВИС ДЛЯ РЕГИСТРАЦИОННЫХ УВЕДОМЛЕНИЙ
export async function startIncompleteRegistrationService() {
  console.log("⏰ Сервис уведомлений о незавершенной регистрации запущен");

  const CHECK_INTERVAL = 6 * 60 * 60 * 1000; // 6 часов

  // Первая проверка через 1 минуту
  setTimeout(() => {
    console.log("🔄 Первый запуск проверки регистрационных уведомлений...");
    checkAndSendIncompleteRegistrationNotifications().catch(error => {
      console.error("Ошибка первой проверки регистрационных уведомлений:", error);
    });
  }, 60000);

  // Периодическая проверка
  setInterval(() => {
    console.log("🔄 Периодическая проверка регистрационных уведомлений...");
    checkAndSendIncompleteRegistrationNotifications().catch(error => {
      console.error("Ошибка периодической проверки регистрационных уведомлений:", error);
    });
  }, CHECK_INTERVAL);

  console.log("✅ Сервис уведомлений о незавершенной регистрации успешно запущен");
}

// ИСПРАВЛЕННАЯ ФУНКЦИЯ ПЛАНИРОВАНИЯ ОТЧЕТОВ
export async function scheduleBalanceReports() {
  console.log("⏰ Планировщик ежедневных отчетов о балансе запущен");

  // Простое расписание - каждые 6 часов
  cron.schedule('0 */6 * * *', async () => {
    try {
      console.log('⏰ Запуск отправки отчета баланса по расписанию');
      await sendDailyBalanceReport();
    } catch (error) {
      console.error('❌ Ошибка отправки отчета баланса:', error);
    }
  });

  // Первый запуск через 1 минуту после старта
  setTimeout(async () => {
    try {
      console.log('⏰ Первый запуск отчета баланса');
      await sendDailyBalanceReport();
    } catch (error) {
      console.error('❌ Ошибка первого запуска отчета:', error);
    }
  }, 60000);

  console.log("✅ Планировщик ежедневных отчетов о балансе успешно настроен");
}

// ИСПРАВЛЕННАЯ ФУНКЦИЯ ОТПРАВКИ ОТЧЕТА
export async function sendDailyBalanceReport() {
  console.log(`💰 ЗАПУСК ОТПРАВКИ ЕЖЕДНЕВНОГО ОТЧЕТА БАЛАНСА`);
  
  try {
    const WALLET_ADDRESS = "0x902db455190EBACb897D0709DBAdB54bED18DaeF";
    const CHAT_ID_NOTIF = process.env.CHAT_ID_NOTIF;

    if (!CHAT_ID_NOTIF) {
      console.log("❌ .CHAT_ID_NOTIF не установлен, пропускаем отправку отчета");
      return;
    }

    console.log(`📊 Получаем балансы для адреса: ${WALLET_ADDRESS}`);
    const balances = await getBalances(WALLET_ADDRESS);
    
    // ДЕТАЛЬНАЯ ПРОВЕРКА БАЛАНСОВ
    console.log('🔍 Детальная проверка полученных балансов:', balances);
    
    if (balances.bnb === '0' && balances.usdt === '0') {
      console.log('⚠️ ВНИМАНИЕ: Получены нулевые балансы!');
      console.log('🔧 Возможные причины:');
      console.log('   1. Не установлен BSCSCAN_API_KEY в .env');
      console.log('   2. Проблемы с подключением к BSC сети');
      console.log('   3. Кошелек действительно пустой');
      console.log('   4. Ошибки в API запросах');
    }
    
    const bnbBalance = formatBalance(balances.bnb);
    const usdtBalance = formatBalance(balances.usdt);

    const reportMessage = `
📊 <b>Ежедневный отчет баланса</b>

⏰ Время: ${new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })} МСК

💰 <b>Балансы:</b>
• BNB: <b>${bnbBalance}</b>
• USDT: <b>${usdtBalance}</b>

📌 <b>Адрес кошелька:</b>
<code>${WALLET_ADDRESS}</code>

${(balances.bnb === '0' && balances.usdt === '0') ? '⚠️ <i>Возможны проблемы с получением данных</i>' : ''}
    `;

    const bot = getGlobalBot();
    if (bot) {
      console.log(`📨 Отправляем отчет в чат: ${CHAT_ID_NOTIF}`);
      await bot.telegram.sendMessage(CHAT_ID_NOTIF, reportMessage, {
        parse_mode: "HTML",
      });
      console.log(`✅ Ежедневный отчет баланса отправлен в чат ${CHAT_ID_NOTIF}`);
    } else {
      console.log("❌ Бот не доступен для отправки отчета");
    }
  } catch (error) {
    console.error("❌ ОШИБКА ОТПРАВКИ ЕЖЕДНЕВНОГО ОТЧЕТА БАЛАНСА:", error);
  }
}

// ТЕСТОВАЯ ФУНКЦИЯ ДЛЯ РУЧНОГО ЗАПУСКА
export async function testSendBalanceReport() {
  console.log("🧪 ТЕСТОВЫЙ ЗАПУСК ОТЧЕТА БАЛАНСА");
  await sendDailyBalanceReport();
}

async function checkAndSend24hMissedProfitNotifications() {
  try {
    console.log('🔍 Проверка 24h упущенной прибыли...');

    const usersWithMissedProfit = await pool.query(`
      SELECT u.id, u.telegram_id, u.lang, u.balance_usdt,
             COALESCE(SUM(i.amount_decimal), 0) as total_investment
      FROM users u
      LEFT JOIN investments i ON i.user_id = u.id AND i.status = 'active'
      WHERE u.is_blocked = false
        AND u.progress_completed = true
        AND u.telegram_id IS NOT NULL
        AND (u.last_24h_notification IS NULL OR u.last_24h_notification < NOW() - INTERVAL '24 hours')
      GROUP BY u.id, u.telegram_id, u.lang, u.balance_usdt
      HAVING COALESCE(SUM(i.amount_decimal), 0) > 0
    `);

    console.log(`📊 Найдено пользователей для 24h уведомлений: ${usersWithMissedProfit.rows.length}`);

    for (const user of usersWithMissedProfit.rows) {
      try {
        // 🔥 ИСПРАВЛЕНИЕ: Правильно формируем данные для уведомления
        const missedProfitData = {
          amount: parseFloat(user.total_investment),
          missedProfit: parseFloat(user.total_investment) * 0.004 // 0.4% за день
        };

        const success = await notifyMissedProfit24h(user, missedProfitData);
        
        if (success) {
          // Обновляем время последнего уведомления
          await pool.query(
            'UPDATE users SET last_24h_notification = NOW() WHERE id = $1',
            [user.id]
          );
        }
      } catch (error) {
        console.error(`❌ Ошибка обработки пользователя ${user.telegram_id}:`, error);
      }
    }

  } catch (error) {
    console.error('❌ Ошибка в checkAndSend24hMissedProfitNotifications:', error);
  }
}
export async function notifyIncompleteRegistration(telegramId) {
  try {
    const bot = getGlobalBot();
    if (!bot) {
      console.log("Бот не доступен для отправки уведомления notifyIncompleteRegistration");
      return;
    }

    const message =
      `📝 <b>Завершите регистрацию</b>\n\n` +
      `⚡ Вы начали регистрацию, но не завершили ее\n\n` +
      `💫 Завершите регистрацию чтобы начать зарабатывать\n\n` +
      `Нажмите /start чтобы продолжить`;

    await bot.telegram.sendMessage(telegramId, message, {
      parse_mode: "HTML",
    });

    console.log(
      `✅ Уведомление о незавершенной регистрации отправлено пользователю ${telegramId}`,
    );
  } catch (error) {
  
    if (error.response?.error_code === 403 && 
        error.response.description.includes('bot was blocked by the user')) {
      console.log(`Пользователь ${telegramId} заблокировал бота`);
    }
  }
}

export async function checkAndSendIncompleteRegistrationNotifications() {
  try {
    console.log("🔍 Запуск проверки уведомлений о незавершенной регистрации...");
    
    const usersResult = await pool.query(`
      SELECT 
        u.id,
        u.telegram_id,
        u.username,
        u.created_at,
        u.last_incomplete_registration_notification
      FROM users u
      WHERE u.is_blocked = false
        AND u.progress_completed = false
        AND u.telegram_id IS NOT NULL
        AND u.telegram_id != ''
        AND (u.last_incomplete_registration_notification IS NULL 
             OR u.last_incomplete_registration_notification < NOW() - INTERVAL '12 hours')
      LIMIT 50
    `);

    console.log(
      `📊 Найдено ${usersResult.rows.length} пользователей с незавершенной регистрацией`,
    );

    let notifiedCount = 0;
    let errorCount = 0;

    for (const user of usersResult.rows) {
      try {
        const canReceive = await isValidUserForRegistrationNotifications(user.telegram_id);
        if (!canReceive) {
          console.log(
            `⏭️ Пропускаем пользователя ${user.telegram_id} - недоступен для уведомлений`,
          );
          continue;
        }

        await notifyIncompleteRegistration(user.telegram_id);

        await pool.query(
          "UPDATE users SET last_incomplete_registration_notification = NOW() WHERE id = $1",
          [user.id]
        );

        notifiedCount++;
        console.log(
          `✅ Уведомление о незавершенной регистрации отправлено пользователю ${user.telegram_id}`,
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

      } catch (error) {
        errorCount++;
        console.error(
          `❌ Ошибка при отправке уведомления о регистрации пользователю ${user.telegram_id}:`,
          error.message,
        );
        
        if (error.response && error.response.error_code === 429) {
          const retryAfter = error.response.parameters?.retry_after || 30;
          console.log(`⏳ Получен 429, ждем ${retryAfter} секунд`);
          await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        }
      }
    }

    console.log(
      `📊 Итоги уведомлений о регистрации: отправлено: ${notifiedCount}, ошибок: ${errorCount}`,
    );
  } catch (error) {
    console.error("Ошибка проверки уведомлений о незавершенной регистрации:", error);
  }
}

async function notifyMissedProfit24h(user, missedProfitData) {
  try {
    const bot = getGlobalBot();
    if (!bot) {
      console.log('❌ Бот не доступен для отправки 24h уведомления');
      return false;
    }

    const lang = user.lang || 'ru';
    
    // 🔥 ИСПРАВЛЕНИЕ 1: Используем правильные переменные
    const telegramId = user.telegram_id;
    
    // 🔥 ИСПРАВЛЕНИЕ 2: Убираем ссылку на loan.lang, используем lang
    const messages = {
      ru: `❌ <b>Вы упустили прибыль в размере 0.4%</b>\n\n` +
          `💰 За последние 24 часа вы могли заработать дополнительный доход.\n\n` +
          `⚡ <b>Не упускайте возможности!</b>\n` +
          `Активируйте свои инвестиции для получения прибыли.`,
      en: `❌ <b>You missed profit of 0.4%</b>\n\n` +
          `💰 Over the past 24 hours, you could have earned additional income.\n\n` +
          `⚡ <b>Don't miss opportunities!</b>\n` +
          `Activate your investments to start earning.`
    };

    const message = messages[lang] || messages.ru;

    // 🔥 ИСПРАВЛЕНИЕ 3: Используем правильную переменную lang вместо loan.lang
    const keyboard = {
      inline_keyboard: [
        [{ text: "📊 " + (lang === 'en' ? "Send USDT" : "💸 Отправить USDT"), callback_data: "invest_now" }]
      ]
    };

    // 🔥 ИСПРАВЛЕНИЕ 4: Используем telegramId вместо неопределенной переменной
    await bot.telegram.sendMessage(telegramId, message, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });

    console.log(`✅ 24h уведомление об упущенной прибыли отправлено пользователю ${telegramId}`);
    return true;
  } catch (error) {
    // 🔥 ИСПРАВЛЕНИЕ 5: Используем user.telegram_id для consistency
    const telegramId = user.telegram_id;
    
    if (error.response && error.response.error_code === 403 && error.response.description.includes('bot was blocked by the user')) {
      console.log(`Пользователь ${telegramId} заблокировал бота, помечаем как заблокированного`);
      
      try {
        await pool.query(
          "UPDATE users SET is_blocked = true WHERE telegram_id = $1",
          [telegramId]
        );
        console.log(`✅ Пользователь ${telegramId} помечен как заблокированный`);
      } catch (dbError) {
        console.error('Ошибка при обновлении статуса блокировки пользователя:', dbError);
      }
    } else {
      console.error(
        "Ошибка отправки 24h уведомления об упущенной прибыли:",
        error,
      );
    }
    return false;
  }
}

async function sendLoanReturnNotification(loan) {
  try {
    const messageText = {
      ru: `
🎉 <b>ПОЗДРАВЛЯЕМ!</b>

💰 <b>Возвращена сумма из циркуляции: $${(loan.loan_amount + loan.profit_amount).toFixed(2)}</b>

📊 <b>Детали:</b>
• Возврат команде: $${loan.loan_amount.toFixed(2)}
• Ваша прибыль: $${loan.profit_amount.toFixed(2)}
• Сумма займа: $${loan.loan_amount.toFixed(2)}

⭐ <b>$${loan.loan_amount.toFixed(2)} возвращены в командный пул</b>

💼 <b>Ваша прибыль осталась у вас!</b>
Спасибо, что воспользовались нашей программой займа!
      `,
      en: `
🎉 <b>CONGRATULATIONS!</b>

💰 <b>Returned from circulation: $${(loan.loan_amount + loan.profit_amount).toFixed(2)}</b>

📊 <b>Details:</b>
• Return to team: $${loan.loan_amount.toFixed(2)}
• Your profit: $${loan.profit_amount.toFixed(2)}  
• Loan amount: $${loan.loan_amount.toFixed(2)}

⭐ <b>$${loan.loan_amount.toFixed(2)} returned to team pool</b>

💼 <b>Your profit stays with you!</b>
Thank you for using our loan program!
      `
    };
 
    const keyboard = {
      inline_keyboard: [
        [
          { text: "📊 " + (loan.lang === 'en' ? "My Portfolio" : "Мой портфель"), callback_data: "my_investments" },
          { text: "🚀 " + (loan.lang === 'en' ? "Borrow Again" : "Еще раз"), callback_data: "take_loan_10000" },
        ],
      ]
    };

    const bot = getGlobalBot();
    if (bot) {
      await bot.telegram.sendMessage(loan.telegram_id, messageText[loan.lang] || messageText.ru, {
        parse_mode: "HTML",
        reply_markup: keyboard,
      });
    }
  } catch (error) {
    console.error("Ошибка отправки уведомления о возврате:", error);
  }
}