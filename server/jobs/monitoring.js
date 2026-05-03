// monitoring-optimized.js
import { Telegraf, Markup } from 'telegraf';
import { pool } from '../db.js';
import * as db from '../db.js'; // Добавляем импорт db
import config from '../config.js';
import logger from '../utils/logger.js';
import { state } from '../state.js';
import { ethers } from "ethers";
import axios from 'axios'; // Добавляем импорт axios
import { getUSDTBalance } from '../services/balances.js';
import { forceCheckReferralTransactions } from '../services/referral.js';
import { notifyReferralRewardNew } from '../services/notifications.js';
import { getGlobalBot } from '../bot/bot.js';

// 🔥 КОНСТАНТЫ
const USDT_CONTRACT = "0x55d398326f99059fF775485246999027B3197955";
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;

let isInitializing = false;
let balanceMonitoringInterval = null;
const userBalances = new Map();

// 🔥 КОНФИГУРАЦИЯ ДЛЯ МАСШТАБИРОВАНИЯ
const MONITORING_CONFIG = {
  BATCH_SIZE: 8,
  DELAY_BETWEEN_BATCHES: 2000,
  DELAY_BETWEEN_REQUESTS: 100,
  TIMEOUT_PER_REQUEST: 15000,
  MONITORING_INTERVAL: 45 * 1000,
  MAX_CONCURRENT_USERS: 100,
};

// 🔥 МНОГОУРОВНЕВЫЙ ПРОВАЙДЕР
const providers = [
  new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org"),
  new ethers.JsonRpcProvider("https://bsc-dataseed2.binance.org"),
  new ethers.JsonRpcProvider("https://bsc-dataseed3.binance.org"),
  new ethers.JsonRpcProvider("https://bsc-dataseed4.binance.org"),
];

let currentProviderIndex = 0;

// 🔥 МЕТРИКИ МОНИТОРИНГА
const monitoringMetrics = {
  totalChecks: 0,
  balanceIncreases: 0,
  errors: 0,
  lastCheck: null,
  totalProcessed: 0
};

// 🔥 ВАЛИДАЦИЯ АДРЕСА КОШЕЛЬКА
function validateWalletAddress(address) {
  if (!address) return false;
  if (typeof address !== 'string') return false;
  if (address.length !== 42) return false;
  if (!address.startsWith('0x')) return false;
  return ethers.isAddress(address);
}

// 🔥 ПРОВЕРКА РАБОТОСПОСОБНОСТИ ПРОВАЙДЕРА
async function isProviderWorking(provider) {
  try {
    await provider.getBlockNumber();
    return true;
  } catch (error) {
    console.warn(`Провайдер недоступен: ${error.message}`);
    return false;
  }
}

// 🔥 ПОЛУЧЕНИЕ РАБОЧЕГО ПРОВАЙДЕРА
async function getNextProvider() {
  let attempts = 0;
  
  // Проверяем провайдеры асинхронно
  const checkProviders = async () => {
    while (attempts < providers.length) {
      const provider = providers[currentProviderIndex];
      currentProviderIndex = (currentProviderIndex + 1) % providers.length;
      attempts++;
      
      if (await isProviderWorking(provider)) {
        return provider;
      }
    }
    return providers[0]; // Fallback на первый провайдер
  };
  
  return await checkProviders();
}

// 🔥 ЗАПРОС К BSCScan API
async function makeBscScanRequest(params) {
  if (!BSCSCAN_API_KEY) {
    throw new Error('BSCScan API ключ не настроен');
  }
  
  try {
    const response = await axios.get('https://api.bscscan.com/api', {
      params: { ...params, apikey: BSCSCAN_API_KEY },
      timeout: 10000
    });
    return response.data;
  } catch (error) {
    console.error('❌ Ошибка BSCScan API:', error.message);
    throw error;
  }
}

// 🔥 ОБНОВЛЕННАЯ ФУНКЦИЯ ОБРАБОТКИ РЕФЕРАЛЬНОЙ НАГРАДЫ
async function processReferralReward(userId, telegramId, amount, txHash, fromAddress, username, level) {
  try {
    console.log(`🎯 Обработка реферальной награды для ${telegramId}: ${amount} USDT (уровень ${level})`);

    // Импортируем функцию из referral.js
    const { processSingleReferralReward } = await import('../services/referral.js');
    
    // Используем существующую функцию обработки
    await processSingleReferralReward(
      userId,
      telegramId,
      amount,
      txHash,
      fromAddress,
      username,
      level
    );

  } catch (error) {
    console.error("❌ Ошибка обработки реферальной награды:", error);
    
    // 🔥 РЕЗЕРВНАЯ ОБРАБОТКА ПРИ ОШИБКЕ ИМПОРТА
    await processReferralRewardFallback(userId, telegramId, amount, txHash, fromAddress, username, level);
  }
}

// 🔥 РЕЗЕРВНАЯ ФУНКЦИЯ ОБРАБОТКИ РЕФЕРАЛЬНОЙ НАГРАДЫ
async function processReferralRewardFallback(userId, telegramId, amount, txHash, fromAddress, username, level) {
  try {
    console.log(`🔄 Резервная обработка реферальной награды для ${telegramId}`);

    const connection = await pool.connect();
    
    try {
      await connection.query("BEGIN");

      // 1. Обновляем баланс пользователя
      await connection.query(
        "UPDATE users SET balance_usdt = COALESCE(balance_usdt, 0) + $1 WHERE id = $2",
        [amount, userId]
      );

      // 2. Записываем транзакцию
      await connection.query(
        `INSERT INTO transactions 
         (user_id, amount, currency, type, description, status, tx_hash, sender_address)
         VALUES ($1, $2, 'USDT', 'referral_reward', $3, 'completed', $4, $5)`,
        [
          userId,
          amount,
          `Реферальное вознаграждение уровня ${level} от @${username}`,
          txHash,
          fromAddress
        ]
      );

      // 3. Записываем реферальное действие
      await connection.query(
        `INSERT INTO referral_actions 
         (referrer_id, referral_id, amount, level, action_type, tx_hash, description)
         VALUES ($1, $2, $3, $4, 'reward', $5, $6)`,
        [
          userId,
          await getUserIdByWalletAddress(fromAddress),
          amount,
          level,
          txHash,
          `Реферальное вознаграждение уровня ${level}`
        ]
      );

      await connection.query("COMMIT");

      // 4. Отправляем уведомление пользователю
      const { notifyReferralRewardNew } = await import('../services/referral.js');
      await notifyReferralRewardNew(
        telegramId,
        amount,
        username,
        level,
        userId
      );

      console.log(`✅ Реферальная награда успешно обработана (резервный метод) для пользователя ${telegramId}`);

    } catch (error) {
      await connection.query("ROLLBACK");
      throw error;
    } finally {
      connection.release();
    }

  } catch (error) {
    console.error(`❌ Ошибка резервной обработки реферальной награды:`, error);
  }
}

// 🔥 ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ID ПОЛЬЗОВАТЕЛЯ ПО КОШЕЛЬКУ
async function getUserIdByWalletAddress(walletAddress) {
  try {
    const result = await pool.query(
      "SELECT id FROM users WHERE LOWER(wallet_address) = LOWER($1)",
      [walletAddress]
    );
    return result.rows[0]?.id || null;
  } catch (error) {
    console.error("❌ Ошибка получения ID пользователя по кошельку:", error);
    return null;
  }
}

// 🔥 ПОЛУЧЕНИЕ АДРЕСА КОШЕЛЬКА ПОЛЬЗОВАТЕЛЯ
async function getUserWalletAddress(userId) {
  try {
    const result = await pool.query(
      "SELECT wallet_address FROM users WHERE id = $1",
      [userId]
    );
    return result.rows[0]?.wallet_address;
  } catch (error) {
    console.error("❌ Ошибка получения кошелька пользователя:", error);
    return null;
  }
}

// 🔥 ПОЛУЧЕНИЕ ПОЛЬЗОВАТЕЛЯ ПО АДРЕСУ КОШЕЛЬКА
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

// 🔥 ПРОЦЕНТ РЕФЕРАЛЬНЫХ НАГРАД ПО УРОВНЯМ
function getReferralRewardPercent(level) {
  const levelPercents = {
    1: 0.2, // 20% для 1 уровня
    2: 0.1, // 10% для 2 уровня
    3: 0.05, // 5% для 3 уровня
    4: 0.05, // 5% для 4 уровня
    5: 0.05, // 5% для 5 уровня
    6: 0.05, // 5% для 6 уровня
    7: 0.05, // 5% для 7 уровня
    8: 0.03, // 3% для 8 уровня
    9: 0.03, // 3% для 9 уровня
    10: 0.03, // 3% для 10 уровня
    11: 0.01, // 1% для 11 уровня
    12: 0.01, // 1% для 12 уровня
    13: 0.01, // 1% для 13 уровня
    14: 0.01, // 1% для 14 уровня
    15: 0.01, // 1% для 15 уровня
    16: 0.01, // 1% для 16 уровня
    17: 0.01, // 1% для 17 уровня
  };

  return levelPercents[level] || 0.01; // По умолчанию 1%
}

// 🔥 ФУНКЦИЯ ПРОВЕРКИ BSCScan API
async function checkBscScanAPIKey() {
  return !!BSCSCAN_API_KEY;
}

// 🔥 ФУНКЦИЯ ПОЛУЧЕНИЯ ПОСЛЕДНЕГО ДЕПОЗИТА ЧЕРЕЗ BSCScan
async function getLastDepositViaBscScan(walletAddress) {
  try {
    if (!BSCSCAN_API_KEY) return null;

    const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${walletAddress}&contractaddress=${USDT_CONTRACT}&page=1&offset=5&sort=desc&apikey=${BSCSCAN_API_KEY}`;

    const response = await axios.get(url, { timeout: 10000 });

    if (response.data.status === "1" && response.data.result.length > 0) {
      const latestTx = response.data.result[0];

      // Проверяем что это входящая транзакция
      if (latestTx.to.toLowerCase() === walletAddress.toLowerCase()) {
        console.log(`✅ BSCScan: найден отправитель: ${latestTx.from}`);
        return latestTx.from;
      }
    }

    return null;
  } catch (error) {
    console.log("⚠️ BSCScan API недоступен:", error.message);
    return null;
  }
}

// 🔥 ФОЛБЭК МЕТОД ЧЕРЕЗ BSCScan ДЛЯ ТРАНЗАКЦИЙ
async function getLastTransactionViaBscScanFallback(walletAddress) {
  try {
    if (!BSCSCAN_API_KEY) return null;

    const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${walletAddress}&page=1&offset=10&sort=desc&apikey=${BSCSCAN_API_KEY}`;

    const response = await axios.get(url, { timeout: 10000 });

    if (response.data.status === "1" && response.data.result.length > 0) {
      const usdtContract = USDT_CONTRACT.toLowerCase();
      const usdtTxs = response.data.result.filter(
        (tx) => tx.contractAddress && tx.contractAddress.toLowerCase() === usdtContract
      );

      if (usdtTxs.length > 0) {
        console.log(`✅ BSCScan fallback: последняя USDT транзакция от ${usdtTxs[0].from}`);
        return usdtTxs[0].from;
      }
    }

    return null;
  } catch (error) {
    console.log("⚠️ BSCScan fallback недоступен:", error.message);
    return null;
  }
}

// 🔥 ПОЛУЧЕНИЕ ОТПРАВИТЕЛЯ ПОСЛЕДНЕГО ДЕПОЗИТА
async function getLastDepositSender(walletAddress) {
  try {
    console.log(`🔍 Поиск последнего депозита для: ${walletAddress}`);

    // Пробуем получить данные через BSCScan API сначала
    const bscScanResult = await getLastDepositViaBscScan(walletAddress);
    if (bscScanResult) {
      return bscScanResult;
    }

    const provider = new ethers.JsonRpcProvider("https://bsc-dataseed.bnbchain.org/");
    const currentBlock = await provider.getBlockNumber();
    const fromBlock = Math.max(0, currentBlock - 1000);

    console.log(`📦 Проверяем блоки с ${fromBlock} по ${currentBlock}`);

    try {
      const transferTopic = ethers.id("Transfer(address,address,uint256)");
      const toTopic = ethers.zeroPadValue(walletAddress, 32);

      const logs = await provider.getLogs({
        address: USDT_CONTRACT,
        topics: [transferTopic, null, toTopic],
        fromBlock: fromBlock,
        toBlock: currentBlock,
      });

      console.log(`📊 Найдено ${logs.length} транзакций Transfer`);

      if (logs.length > 0) {
        const sortedLogs = logs.sort((a, b) => {
          if (a.blockNumber !== b.blockNumber) {
            return b.blockNumber - a.blockNumber;
          }
          return b.transactionIndex - a.transactionIndex;
        });

        const latestLog = sortedLogs[0];
        const iface = new ethers.Interface([
          "event Transfer(address indexed from, address indexed to, uint256 value)",
        ]);

        const parsedLog = iface.parseLog(latestLog);

        console.log(`✅ Найден отправитель: ${parsedLog.args.from}`);
        console.log(`💰 Сумма: ${ethers.formatUnits(parsedLog.args.value, 18)} USDT`);
        console.log(`📝 TX Hash: ${latestLog.transactionHash}`);

        return parsedLog.args.from;
      } else {
        console.log(`❌ Транзакции не найдены для адреса: ${walletAddress}`);
        return null;
      }
    } catch (rpcError) {
      console.error("❌ Ошибка RPC запроса:", rpcError.message);
      return await getLastTransactionViaBscScanFallback(walletAddress);
    }
  } catch (error) {
    console.error("❌ Общая ошибка получения отправителя:", error.message);
    return null;
  }
}

// 🔥 ОБРАБОТКА ДЕПОЗИТА
async function processDeposit(userId, telegramId, amount, txHashOrSource, fromAddress = null) {
  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");

    const userIdStr = userId.toString();
    const poolAddress = "0xFCc442275A2620E40F17598F9987F320fB57526e";
    
    // Проверяем, является ли это транзакцией в пул
    const isPoolTransaction = fromAddress && 
      fromAddress.toLowerCase() === poolAddress.toLowerCase();

    if (isPoolTransaction) {
      console.log(`🔍 Обнаружена транзакция в пул от пользователя ${userId}`);
       
      const queueCheck = await connection.query(
        "SELECT id FROM loan_management WHERE user_id = $1 AND loan_status = 'pending'",
        [userIdStr]
      );

      if (queueCheck.rows.length > 0) {
        console.log(`🚫 Пользователь ${userId} в очереди на займ и отправил в пул, исключаем из очереди`);
        
        await connection.query(
          "DELETE FROM loan_management WHERE user_id = $1 AND loan_status = 'pending'",
          [userIdStr]
        );
        
        await connection.query(
          "UPDATE users SET loan_queue_removed = true WHERE id = $1",
          [userIdStr]
        );
        
        try {
          const bot = getGlobalBot();
          if (bot) {
            await bot.telegram.sendMessage(
              telegramId,
              "❌ Вы исключены из очереди на получение средств в долг, так как отправили средства в пул ликвидности самостоятельно."
            );
          }
        } catch (notifyError) {
          console.error("Ошибка отправки уведомления:", notifyError);
        }
      }
    }

    // Записываем транзакцию
    await connection.query(
      `INSERT INTO transactions 
       (user_id, amount, currency, type, description, status, tx_hash, sender_address)
       VALUES ($1, $2, 'USDT', 'deposit', 'Входящая транзакция USDT', 'completed', $3, $4)`,
      [
        userIdStr,
        amount,
        typeof txHashOrSource === "string" ? txHashOrSource : null,
        fromAddress,
      ],
    );

    await connection.query("COMMIT");
	
  } catch (error) {
    await connection.query("ROLLBACK");
    console.error("Ошибка обработки депозита:", error);
  } finally {
    connection.release();
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ О РЕФЕРЕРЕ
async function getReferrerInfo(userId) {
  try {
    const result = await pool.query(`
      SELECT 
        rr.referrer_id,
        u.telegram_id as referrer_telegram_id,
        rr.level
      FROM referral_relations rr
      JOIN users u ON u.id = rr.referrer_id
      WHERE rr.referral_id = $1 
        AND u.is_blocked = false
        AND rr.level <= 15
      ORDER BY rr.level ASC
      LIMIT 1
    `, [userId]);

    if (result.rows.length > 0) {
      return result.rows[0];
    }
    return null;
  } catch (error) {
    console.error("❌ Ошибка получения информации о реферере:", error);
    return null;
  }
}

// 🔥 ПРОВЕРКА КОНТРАКТНОГО АДРЕСА
async function checkIfContractAddress(address) {
  try {
    const provider = await getNextProvider();
    const code = await provider.getCode(address);
    return code !== '0x';
  } catch (error) {
    console.error("❌ Ошибка проверки контракта:", error);
    return false;
  }
}

// 🔥 ПРОВЕРКА ЧАСТОТЫ ТРАНЗАКЦИЙ
async function checkIfFrequentSender(address) {
  try {
    // Проверяем через BSCScan API количество исходящих транзакций
    const result = await makeBscScanRequest({
      module: 'account',
      action: 'txlist',
      address: address,
      startblock: '0',
      endblock: '99999999',
      page: '1',
      offset: '1',
      sort: 'desc'
    });

    if (result.status === '1' && result.result.length > 0) {
      const txCount = parseInt(result.result[0].nonce) + 1;
      return txCount > 10; // Если более 10 транзакций - вероятно, это сервисный кошелек
    }
    
    return false;
  } catch (error) {
    console.error("❌ Ошибка проверки частоты транзакций:", error);
    return false;
  }
}

// 🔥 ПРОВЕРКА ПАТТЕРНА СУММЫ
function checkAmountPattern(amount) {
  // Реферальные начисления часто имеют круглые суммы или определенные проценты
  const roundedAmount = Math.round(amount * 100) / 100;
  const isRounded = Math.abs(amount - roundedAmount) < 0.001;
  
  // Проверяем типичные суммы реферальных начислений
  const typicalAmounts = [0.1, 0.5, 1, 2, 5, 10, 20, 50, 100];
  const isTypicalAmount = typicalAmounts.some(typical => 
    Math.abs(amount - typical) < 0.01
  );

  return isRounded || isTypicalAmount;
}

// 🔥 ПРОВЕРКА РЕФЕРАЛЬНОЙ НАГРАДЫ
async function isReferralReward(senderAddress, amount = null) {
  if (!senderAddress) return false;

  const REFERRAL_WALLETS = [
    "0xb25ecdaC023d7DD8bc24FA3Bf93afEfc9DFb24ae",
    "0x2C82AC6cb7fb2184fF4460fa9ded92c6d384aA86",
  ].map(addr => addr.toLowerCase());

  const normalizedSender = senderAddress.toLowerCase();
  
  if (REFERRAL_WALLETS.includes(normalizedSender)) {
    return true;
  }

  // Проверяем только если amount предоставлен
  let isReferralAmountPattern = false;
  if (amount !== null) {
    isReferralAmountPattern = checkAmountPattern(amount);
  }
  
  const isContractAddress = await checkIfContractAddress(senderAddress);
  const isFrequentSender = await checkIfFrequentSender(senderAddress);

  return isContractAddress || isFrequentSender || isReferralAmountPattern;
}

// 🔥 ОБРАБОТКА УВЕЛИЧЕНИЯ БАЛАНСА С РЕФЕРАЛЬНЫМИ НАЧИСЛЕНИЯМИ
async function processBalanceIncrease(user, currentBalance, difference, senderAddress) {
  const { id, telegram_id, address } = user;

  try {
    // Обновляем баланс пользователя
    await pool.query("UPDATE users SET balance_usdt = $1 WHERE id = $2", [
      currentBalance,
      id,
    ]);

    const userInfo = await pool.query(
      "SELECT username FROM users WHERE id = $1",
      [id],
    );

    const username = userInfo.rows[0]?.username || "пользователь";

    // 🔥 ПРОВЕРЯЕМ, ЯВЛЯЕТСЯ ЛИ ЭТО РЕФЕРАЛЬНЫМ НАЧИСЛЕНИЕМ
    if (senderAddress && await isReferralReward(senderAddress, difference)) {
      console.log(`🎯 Обнаружено реферальное начисление для пользователя ${telegram_id}: ${difference} USDT`);
      
      // Получаем информацию о реферере
      const referrerInfo = await getReferrerInfo(id);
      
      if (referrerInfo) {
        const { referrer_id, referrer_telegram_id, level } = referrerInfo;
        
        // 🔥 ОБРАБАТЫВАЕМ КАК РЕФЕРАЛЬНОЕ НАЧИСЛЕНИЕ
        await processReferralReward(
          referrer_id, 
          referrer_telegram_id, 
          difference, 
          `ref_${Date.now()}`, // Генерируем хэш для авто-определенных транзакций
          senderAddress, 
          username, 
          level
        );
      } else {
        console.log(`⚠️ У пользователя ${telegram_id} нет активного реферера`);
        
        // 🔥 ВСЕ РАВНО СОХРАНЯЕМ КАК ОБЫЧНЫЙ ДЕПОЗИТ
        await processDeposit(
          id, telegram_id, difference, "auto-detected", senderAddress
        );
      }
    } else {
      // 🔥 ОБЫЧНЫЙ ДЕПОЗИТ
      console.log(`💳 Обнаружен обычный депозит для пользователя ${telegram_id}: ${difference} USDT`);
      await processDeposit(
        id, telegram_id, difference, "auto-detected", senderAddress
      );
    }
  } catch (error) {
    console.error(`❌ Ошибка обработки увеличения баланса:`, error);
  }
}

// 🔥 ОПТИМИЗИРОВАННАЯ ФУНКЦИЯ ПРОВЕРКИ БАЛАНСА С КЭШИРОВАНИЕМ
async function checkSingleUserBalanceOptimized(user, provider) {
  const { id, telegram_id, address, last_balance } = user;

  try {
    // Валидируем адрес кошелька
    if (!validateWalletAddress(address)) {
      console.error(`❌ Невалидный адрес кошелька для пользователя ${telegram_id}: ${address}`);
      return null;
    }

    // Используем кэшированный баланс если есть
    const cachedBalance = userBalances.get(address.toLowerCase());
    let currentBalance;

    if (cachedBalance !== undefined) {
      currentBalance = cachedBalance;
    } else {
      currentBalance = await getUSDTBalance(address, provider);
      if (currentBalance === null) return null;
      
      // Кэшируем баланс
      userBalances.set(address.toLowerCase(), currentBalance);
    }

    const lastBalance = parseFloat(last_balance) || 0;
    const balanceDifference = currentBalance - lastBalance;

    if (balanceDifference > 0.0001) {
      console.log(`💰 Баланс увеличился для ${telegram_id}: +${balanceDifference.toFixed(4)} USDT`);

      // 🔥 ОТЛОЖЕННАЯ ПРОВЕРКА ИСТОЧНИКА - не блокируем основной поток
      setTimeout(async () => {
        try {
          const senderAddress = await getLastDepositSender(address);
          await processBalanceIncrease(user, currentBalance, balanceDifference, senderAddress);
        } catch (error) {
          console.error(`Ошибка обработки увеличения баланса:`, error);
        }
      }, 0);

      return { increased: true, difference: balanceDifference };
    }

    return { increased: false, difference: 0 };
  } catch (error) {
    console.error(`Ошибка проверки баланса для ${telegram_id}:`, error.message);
    return null;
  }
}

// 🔥 ОПТИМИЗИРОВАННАЯ ПРОВЕРКА ВСЕХ БАЛАНСОВ
export async function checkAllUserBalancesOptimized() {
  try {
    console.log("🔍 Оптимизированная проверка балансов...");
    monitoringMetrics.totalChecks++;
    monitoringMetrics.lastCheck = new Date();

    const usersResult = await pool.query(`
      SELECT 
        id, 
        telegram_id, 
        balance_usdt as last_balance, 
        wallet_address as address 
      FROM users 
      WHERE is_blocked = FALSE
        AND telegram_id IS NOT NULL
        AND telegram_id != ''
        AND wallet_address IS NOT NULL
        AND wallet_address != ''
      ORDER BY last_activity DESC
      LIMIT $1
    `, [MONITORING_CONFIG.MAX_CONCURRENT_USERS]);

    console.log(`📊 Проверяем ${usersResult.rows.length} пользователей`);

    let processed = 0;
    let errors = 0;
    let balanceIncreases = 0;

    // 🔥 РАЗБИВАЕМ НА БАТЧИ С РАСПРЕДЕЛЕНИЕМ ПРОВАЙДЕРОВ
    for (let i = 0; i < usersResult.rows.length; i += MONITORING_CONFIG.BATCH_SIZE) {
      const batch = usersResult.rows.slice(i, i + MONITORING_CONFIG.BATCH_SIZE);
      
      const batchPromises = batch.map(async (user, index) => {
        // Распределяем провайдеры внутри батча
        const provider = providers[index % providers.length];
        
        await new Promise(resolve => 
          setTimeout(resolve, index * MONITORING_CONFIG.DELAY_BETWEEN_REQUESTS)
        );

        try {
          const result = await Promise.race([
            checkSingleUserBalanceOptimized(user, provider),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Timeout')), MONITORING_CONFIG.TIMEOUT_PER_REQUEST)
            )
          ]);

          processed++;
          if (result?.increased) balanceIncreases++;

          return result;
        } catch (error) {
          errors++;
          console.error(`❌ Ошибка в батче для ${user.telegram_id}:`, error.message);
          return null;
        }
      });

      await Promise.allSettled(batchPromises);

      // 🔥 ПАУЗА МЕЖДУ БАТЧАМИ
      if (i + MONITORING_CONFIG.BATCH_SIZE < usersResult.rows.length) {
        await new Promise(resolve => 
          setTimeout(resolve, MONITORING_CONFIG.DELAY_BETWEEN_BATCHES)
        );
      }
    }

    monitoringMetrics.totalProcessed += processed;
    monitoringMetrics.balanceIncreases += balanceIncreases;
    monitoringMetrics.errors += errors;

    console.log(`✅ Проверка завершена. Обработано: ${processed}, увеличений: ${balanceIncreases}, ошибок: ${errors}`);
    
    return { processed, balanceIncreases, errors };
  } catch (error) {
    monitoringMetrics.errors++;
    console.error("❌ Общая ошибка проверки балансов:", error);
    throw error;
  }
}

// 🔥 УМНАЯ ИНИЦИАЛИЗАЦИЯ БАЛАНСОВ
export async function initializeUserBalancesSmart() {
  if (isInitializing) {
    console.log('⚠️ Инициализация уже выполняется');
    return;
  }

  isInitializing = true;
  
  try {
    console.log('🔄 Умная инициализация балансов...');
    
    const userWalletsArray = Array.from(state.userWalletsSet || []);
    let initializedCount = 0;
    let errorCount = 0;

    // 🔥 ПРИОРИТЕТИЗАЦИЯ: сначала активные пользователи
    const activeUsers = await pool.query(`
      SELECT wallet_address 
      FROM users 
      WHERE wallet_address = ANY($1)
        AND last_activity > NOW() - INTERVAL '7 days'
      ORDER BY last_activity DESC
    `, [userWalletsArray]);

    const activeWallets = activeUsers.rows.map(row => row.wallet_address.toLowerCase());
    const otherWallets = userWalletsArray.filter(w => !activeWallets.includes(w));
    
    const prioritizedWallets = [...activeWallets, ...otherWallets];

    console.log(`🎯 Приоритетная инициализация: ${activeWallets.length} активных + ${otherWallets.length} остальных`);

    for (let i = 0; i < prioritizedWallets.length; i += MONITORING_CONFIG.BATCH_SIZE) {
      const batch = prioritizedWallets.slice(i, i + MONITORING_CONFIG.BATCH_SIZE);
      
      const batchResults = await Promise.allSettled(
        batch.map(async (wallet, index) => {
          const provider = providers[index % providers.length];
          
          await new Promise(resolve => 
            setTimeout(resolve, index * MONITORING_CONFIG.DELAY_BETWEEN_REQUESTS)
          );

          try {
            if (!validateWalletAddress(wallet)) {
              errorCount++;
              return { success: false, wallet, error: 'Invalid address' };
            }

            const balance = await getUSDTBalance(wallet, provider);
            if (balance !== null) {
              userBalances.set(wallet, balance);
              initializedCount++;
              return { success: true, wallet, balance };
            } else {
              errorCount++;
              return { success: false, wallet, error: 'Balance null' };
            }
          } catch (error) {
            errorCount++;
            return { success: false, wallet, error: error.message };
          }
        })
      );

      // 🔥 ЛОГИРОВАНИЕ ПРОГРЕССА
      if (i % 50 === 0 || initializedCount % 100 === 0) {
        console.log(`📊 Инициализация: ${initializedCount}/${prioritizedWallets.length}, ошибок: ${errorCount}`);
      }

      await new Promise(resolve => 
        setTimeout(resolve, MONITORING_CONFIG.DELAY_BETWEEN_BATCHES)
      );
    }

    console.log(`✅ Умная инициализация завершена: ${initializedCount} кошельков, ошибок: ${errorCount}`);
    
  } catch (error) {
    console.error('❌ Ошибка умной инициализации:', error);
  } finally {
    isInitializing = false;
  }
}

// 🔥 ФУНКЦИЯ ИНИЦИАЛИЗАЦИИ БАЛАНСОВ В ФОНЕ
async function initializeUserBalancesBackground() {
  try {
    console.log('🔄 Фоновая инициализация балансов...');
    await initializeUserBalancesSmart();
  } catch (error) {
    console.error('❌ Ошибка фоновой инициализации балансов:', error);
  }
}

// 🔥 ФУНКЦИЯ ЗАПУСКА ИНТЕРВАЛА МОНИТОРИНГА
function startBalanceMonitoringInterval() {
  if (balanceMonitoringInterval) {
    clearInterval(balanceMonitoringInterval);
  }

  balanceMonitoringInterval = setInterval(async () => {
    try {
      await checkAllUserBalancesOptimized();
    } catch (error) {
      console.error('❌ Ошибка мониторинга балансов:', error.message);
    }
  }, MONITORING_CONFIG.MONITORING_INTERVAL);

  console.log(`⏰ Мониторинг балансов запущен (${MONITORING_CONFIG.MONITORING_INTERVAL/1000} сек)`);
}

// 🔥 ОБНОВЛЕННЫЙ ЗАПУСК МОНИТОРИНГА
export function startOptimizedBalanceMonitoring() {
  if (balanceMonitoringInterval) {
    clearInterval(balanceMonitoringInterval);
  }

  balanceMonitoringInterval = setInterval(async () => {
    try {
      await checkAllUserBalancesOptimized();
    } catch (error) {
      console.error('❌ Ошибка оптимизированного мониторинга:', error.message);
    }
  }, MONITORING_CONFIG.MONITORING_INTERVAL);

  console.log(`⏰ Оптимизированный мониторинг запущен (${MONITORING_CONFIG.MONITORING_INTERVAL/1000} сек)`);
}

// 🔥 ФУНКЦИЯ ДЛЯ ПРИОРИТЕТНОЙ ПРОВЕРКИ ОДНОГО ПОЛЬЗОВАТЕЛЯ
export async function checkUserBalancePriority(userId) {
  try {
    const userResult = await pool.query(`
      SELECT id, telegram_id, balance_usdt as last_balance, wallet_address as address
      FROM users WHERE id = $1
    `, [userId]);

    if (userResult.rows.length === 0) return null;

    const user = userResult.rows[0];
    const provider = await getNextProvider();
    
    return await checkSingleUserBalanceOptimized(user, provider);
  } catch (error) {
    console.error(`❌ Ошибка приоритетной проверки пользователя ${userId}:`, error);
    return null;
  }
}

// 🔥 ЗАГРУЗКА КОШЕЛЬКОВ ПОЛЬЗОВАТЕЛЕЙ
export async function loadUserWallets() {
  try {
    console.log("🔄 Загрузка кошельков пользователей для мониторинга...");

    // 🔥 ИСПРАВЛЯЕМ ЗАПРОС: берем ТОЛЬКО пользователей с завершенным онбордингом
    const result = await pool.query(`
      SELECT DISTINCT LOWER(wallet_address) as wallet_address 
      FROM users 
      WHERE wallet_address IS NOT NULL 
        AND wallet_address != '' 
        AND wallet_address != '0'
        AND is_blocked = false
        AND progress_completed = true 
        AND LENGTH(wallet_address) >= 42
    `);

    const userWallets = result.rows
      .map((row) => row.wallet_address.toLowerCase())
      .filter(addr => {
        const isValid = validateWalletAddress(addr);
        if (!isValid) {
          console.log(`❌ Невалидный адрес: ${addr}`);
        }
        return isValid;
      });

    state.userWalletsSet = new Set(userWallets);

    console.log(`✅ Загружено ${userWallets.length} кошельков пользователей для мониторинга`);

    // 🔥 ЛОГИРУЕМ ПЕРВЫЕ 5 КОШЕЛЬКОВ ДЛЯ ПРОВЕРКИ
    if (userWallets.length > 0) {
      console.log(`👛 Примеры: ${userWallets.slice(0, 5).map(w => w.substring(0, 8) + '...').join(', ')}`);
    }

    return userWallets.length;

  } catch (error) {
    console.error("❌ Критическая ошибка загрузки кошельков пользователей:", error.message);
    state.userWalletsSet = new Set();
    return 0;
  }
}

// 🔥 ЗАПУСК ПОСТОЯННОГО МОНИТОРИНГА БАЛАНСОВ
export async function startContinuousBalanceMonitoring() {
  console.log('💰 Запуск постоянного мониторинга балансов пользователей...');
  
  const apiKeyValid = await checkBscScanAPIKey();
  if (!apiKeyValid) {
    console.log('⚠️ Продолжаем без BSCScan API, только WebSocket мониторинг');
  }

  // 🔥 ЗАГРУЖАЕМ КОШЕЛЬКИ БЕЗ БЛОКИРОВКИ
  const walletCount = await loadUserWallets();
  
  // 🔥 ИСПРАВЛЕНИЕ: используем state.userWalletsSet вместо global.userWalletsSet
  if (!state.userWalletsSet || state.userWalletsSet.size === 0) {
    console.log('⚠️ Нет кошельков для мониторинга');
    return;
  }

  console.log(`📊 Начинаем мониторинг ${state.userWalletsSet.size} кошельков...`);

  // 🔥 ЗАПУСКАЕМ МОНИТОРИНГ СРАЗУ, А ИНИЦИАЛИЗАЦИЯ В ФОНЕ
  startBalanceMonitoringInterval();
  
  console.log(`✅ Загружено ${state.userWalletsSet ? state.userWalletsSet.size : 0} кошельков`);

  // 4. Если API ключ валидный, запускаем BSCScan проверки
  if (apiKeyValid) {
    setTimeout(() => {
      console.log('🔍 Запуск немедленной проверки реферальных начислений через BSCScan...');
      forceCheckReferralTransactions();
    }, 10000);

    // Периодические проверки
    setInterval(() => {
      console.log('🔄 Периодическая проверка реферальных начислений (BSCScan)...');
      forceCheckReferralTransactions();
    }, 1 * 60 * 1000); // Каждые 1 минут
  }

  // 🔥 ИНИЦИАЛИЗАЦИЯ БАЛАНСОВ В ФОНОВОМ РЕЖИМЕ
  initializeUserBalancesBackground();

  console.log('✅ Постоянный мониторинг балансов запущен (инициализация в фоне)');
}

// 🔥 ПОЛУЧЕНИЕ МЕТРИК МОНИТОРИНГА
export function getMonitoringMetrics() {
  return { ...monitoringMetrics };
}

// 🔥 ЭКСПОРТИРУЕМ userBalances ДЛЯ ДОСТУПА ИЗ ДРУГИХ МОДУЛЕЙ
export { userBalances };