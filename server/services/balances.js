import { Telegraf } from 'telegraf';
import { pool } from '../db.js';
import config from '../config.js';
import logger from '../utils/logger.js';
import { state } from '../state.js';
import { ethers } from "ethers";

// 🔥 ОПТИМИЗИРОВАННАЯ КОНФИГУРАЦИЯ ПРОВАЙДЕРОВ
const rpcProviders = [
  "https://bsc-dataseed.bnbchain.org/",
  "https://bsc-dataseed1.bnbchain.org/",
  "https://bsc-dataseed2.bnbchain.org/", 
  "https://bsc-dataseed3.bnbchain.org/",
  "https://bsc-dataseed4.bnbchain.org/",
  "https://bsc-dataseed.binance.org/",
  "https://bsc-dataseed1.binance.org/",
  "https://bsc-dataseed2.binance.org/",
  "https://bsc-dataseed3.binance.org/",
  "https://bsc-dataseed4.binance.org/"
];
// В конфигурации добавьте:
const REQUEST_CONFIG = {
  BATCH_SIZE: 10, // Уменьшите до 10-20
  DELAY_BETWEEN_REQUESTS: 100, // Увеличьте до 100-200 мс
  DELAY_BETWEEN_BATCHES: 2000, // Увеличьте до 2 секунд
  USE_BALANCE_OF_ONLY: true, // Флаг для использования только balanceOf
  REQUEST_TIMEOUT: 10000, // Таймаут запроса
  MAX_RETRIES: 2, // Максимум попыток
  HEALTH_CHECK_INTERVAL: 60000, // Проверка здоровья провайдеров
};

// Используйте разные RPC endpoints для балансировки нагрузки
const RPC_ENDPOINTS = [
  'https://rpc.ankr.com/bsc',
  'https://bsc-dataseed1.binance.org',
  'https://bsc-dataseed2.binance.org',
];
// 🔥 КОНСТАНТЫ ДЛЯ ПОДДЕРЖИВАЕМЫХ ТОКЕНОВ
const TOKEN_CONFIGS = {
  USDT: {
    contract: "0x55d398326f99059fF775485246999027B3197955",
    decimals: 18,
    abi: [
      "function balanceOf(address account) view returns (uint256)",
      "function decimals() view returns (uint8)",
    ]
  },
  USDC: {
    contract: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC на BSC
    decimals: 18, // USDC на BSC имеет 18 decimals
    abi: [
      "function balanceOf(address account) view returns (uint256)",
      "function decimals() view returns (uint8)",
    ]
  }
};
// Ротация RPC endpoints
let currentRpcIndex = 0;
function getNextRpcEndpoint() {
  const endpoint = RPC_ENDPOINTS[currentRpcIndex];
  currentRpcIndex = (currentRpcIndex + 1) % RPC_ENDPOINTS.length;
  return endpoint;
}
// 🔥 ПРЕИНИЦИАЛИЗИРОВАННЫЕ ПРОВАЙДЕРЫ
const preInitializedProviders = rpcProviders.map(url => 
  new ethers.JsonRpcProvider(url, 56)
);

// 🔥 КЭШИ И СТАТИСТИКА
let usdtDecimalsCache = null;
let currentProviderIndex = 0;
let requestCounter = 0;
const requestStats = new Map();
const balanceCache = new Map(); // Кэш балансов
const CACHE_TTL = 60000; // 1 минута кэширования

// 🔥 ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ СЛЕДУЮЩЕГО РАБОЧЕГО ПРОВАЙДЕРА
function getNextHealthyProvider() {
  const startIndex = currentProviderIndex;
  
  for (let i = 0; i < preInitializedProviders.length; i++) {
    const index = (startIndex + i) % preInitializedProviders.length;
    const provider = preInitializedProviders[index];
    const stats = requestStats.get(index) || { success: 0, errors: 0 };
    
    // Предпочитаем провайдеры с меньшим количеством ошибок
    if (stats.errors === 0 || stats.success / (stats.success + stats.errors) > 0.7) {
      currentProviderIndex = (index + 1) % preInitializedProviders.length;
      return { provider, index };
    }
  }
  
  // Если все провайдеры проблемные, берем следующий по кругу
  const index = currentProviderIndex;
  currentProviderIndex = (currentProviderIndex + 1) % preInitializedProviders.length;
  return { provider: preInitializedProviders[index], index };
}

// 🔥 ОБНОВЛЕНИЕ СТАТИСТИКИ ПРОВАЙДЕРА
function updateProviderStats(index, success) {
  const stats = requestStats.get(index) || { success: 0, errors: 0 };
  
  if (success) {
    stats.success++;
  } else {
    stats.errors++;
  }
  
  // Ограничиваем статистику последними 100 запросами
  if (stats.success + stats.errors > 100) {
    const ratio = stats.success / (stats.success + stats.errors);
    stats.success = Math.floor(ratio * 50);
    stats.errors = 50 - stats.success;
  }
  
  requestStats.set(index, stats);
}
// 🔥 УНИВЕРСАЛЬНАЯ ФУНКЦИЯ ПОЛУЧЕНИЯ БАЛАНСА ТОКЕНА
export async function getTokenBalance(walletAddress, token = "USDT", customProvider = null) {
  if (!walletAddress || !ethers.isAddress(walletAddress)) {
    console.log(`❌ Неверный адрес кошелька: ${walletAddress}`);
    return "0";
  }

  // 🔥 ПРОВЕРКА КЭША С УЧЕТОМ ТОКЕНА
  const cacheKey = `${token.toLowerCase()}_${walletAddress.toLowerCase()}`;
  const cached = balanceCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log(`📦 Используем кэш ${token} баланса для ${walletAddress.substring(0, 8)}...`);
    return cached.balance;
  }

  const tokenConfig = TOKEN_CONFIGS[token.toUpperCase()];
  if (!tokenConfig) {
    console.log(`❌ Токен ${token} не поддерживается`);
    return "0";
  }

  let retries = 0;
  
  while (retries <= REQUEST_CONFIG.MAX_RETRIES) {
    const { provider, index } = customProvider ? 
      { provider: customProvider, index: -1 } : getNextHealthyProvider();

    try {
      requestCounter++;
      
      // 🔥 ИНТЕЛЛЕКТУАЛЬНАЯ ЗАДЕРЖКА ДЛЯ РАСПРЕДЕЛЕНИЯ НАГРУЗКИ
      if (requestCounter % REQUEST_CONFIG.BATCH_SIZE === 0 && !customProvider) {
        await new Promise(resolve => 
          setTimeout(resolve, REQUEST_CONFIG.DELAY_BETWEEN_BATCHES)
        );
      }

      const tokenContract = new ethers.Contract(
        tokenConfig.contract,
        tokenConfig.abi,
        provider
      );

      // 🔥 КЭШИРОВАНИЕ DECIMALS ДЛЯ КАЖДОГО ТОКЕНА
      const decimalsCacheKey = `decimals_${token}`;
      let decimals = tokenConfig.decimals; // значение по умолчанию
      
      try {
        // Пробуем получить decimals из контракта (с кэшированием)
        const cachedDecimals = balanceCache.get(decimalsCacheKey);
        if (cachedDecimals) {
          decimals = cachedDecimals.value;
        } else {
          const contractDecimals = await Promise.race([
            tokenContract.decimals(),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Decimals timeout')), 3000)
            )
          ]);
          decimals = parseInt(contractDecimals.toString());
          balanceCache.set(decimalsCacheKey, {
            value: decimals,
            timestamp: Date.now()
          });
        }
      } catch (decimalsError) {
        console.warn(`⚠️ Не удалось получить decimals для ${token}, используем значение по умолчанию ${decimals}`);
      }

      // 🔥 ЗАПРОС БАЛАНСА С ТАЙМАУТОМ
      const balance = await Promise.race([
        tokenContract.balanceOf(walletAddress),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error(`${token} balance timeout`)), REQUEST_CONFIG.REQUEST_TIMEOUT)
        )
      ]);

      const formattedBalance = ethers.formatUnits(balance.toString(), decimals);
      
      // 🔥 ОБНОВЛЯЕМ СТАТИСТИКУ И КЭШ
      if (index !== -1) {
        updateProviderStats(index, true);
      }
      
      // Сохраняем в кэш
      balanceCache.set(cacheKey, {
        balance: formattedBalance,
        timestamp: Date.now(),
        token: token
      });
      
      // 🔥 ЛОГИРУЕМ ТОЛЬКО КАЖДЫЙ 10-Й ЗАПРОС ДЛЯ УМЕНЬШЕНИЯ СПАМА
      if (requestCounter % 10 === 0) {
        console.log(`✅ Баланс ${walletAddress.substring(0, 8)}...: ${formattedBalance} ${token} (запрос #${requestCounter})`);
      }
      
      return formattedBalance;
      
    } catch (error) {
      if (index !== -1) {
        updateProviderStats(index, false);
      }
      
      retries++;
      
      // 🔥 ИНТЕЛЛЕКТУАЛЬНАЯ ОБРАБОТКА ОШИБОК
      if (error.message.includes('rate limit') || error.info?.error?.code === -32005) {
        console.warn(`🚫 Rate limit на провайдере ${index} для ${token}, пробуем следующий...`);
        continue;
      }
      
      if (error.message.includes('timeout') || error.message.includes('network')) {
        console.warn(`⏰ Timeout/network error на провайдере ${index} для ${token}, повтор ${retries}/${REQUEST_CONFIG.MAX_RETRIES}...`);
        if (retries <= REQUEST_CONFIG.MAX_RETRIES) {
          await new Promise(resolve => 
            setTimeout(resolve, REQUEST_CONFIG.DELAY_BETWEEN_REQUESTS * retries)
          );
          continue;
        }
      }
      
      // Для других ошибок сразу пробуем следующий провайдер
      console.warn(`❌ Ошибка провайдера ${index} для ${token}: ${error.message}`);
    }
  }

  console.error(`❌ Все попытки исчерпаны для адреса ${walletAddress} (${token})`);
  return "0";
}
// 🔥 ПРОВЕРКА ЗДОРОВЬЯ ПРОВАЙДЕРОВ
async function checkProviderHealth() {
  console.log('🔍 Проверка здоровья RPC провайдеров...');
  
  const healthChecks = preInitializedProviders.map(async (provider, index) => {
    try {
      const startTime = Date.now();
      await Promise.race([
        provider.getNetwork(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
      ]);
      const responseTime = Date.now() - startTime;
      
      updateProviderStats(index, true);
      console.log(`✅ Провайдер ${index}: OK (${responseTime}ms)`);
      return { index, healthy: true, responseTime };
    } catch (error) {
      updateProviderStats(index, false);
      console.log(`❌ Провайдер ${index}: ERROR - ${error.message}`);
      return { index, healthy: false, error: error.message };
    }
  });
  
  const results = await Promise.allSettled(healthChecks);
  const healthyCount = results.filter(r => r.value?.healthy).length;
  
  console.log(`📊 Статус провайдеров: ${healthyCount}/${preInitializedProviders.length} здоровы`);
  return healthyCount > 0;
}

// 🔥 ОПТИМИЗИРОВАННАЯ ФУНКЦИЯ ПОЛУЧЕНИЯ БАЛАНСА USDT
export async function getUSDTBalance(walletAddress, customProvider = null) {
  return await getTokenBalance(walletAddress, "USDT", customProvider);
}
export async function getUSDCBalance(walletAddress, customProvider = null) {
  return await getTokenBalance(walletAddress, "USDC", customProvider);
}

// 🔥 МАССОВАЯ ПРОВЕРКА БАЛАНСОВ ДЛЯ ЛЮБОГО ТОКЕНА
export async function getTokenBalancesBatch(walletAddresses, token = "USDT") {
  if (!walletAddresses || walletAddresses.length === 0) {
    return new Map();
  }

  console.log(`🔍 Массовая проверка ${walletAddresses.length} кошельков (${token})...`);
  
  const results = new Map();
  let processed = 0;
  let errors = 0;
  let rateLimitCount = 0;
  
  const tokenConfig = TOKEN_CONFIGS[token.toUpperCase()];
  if (!tokenConfig) {
    console.log(`❌ Токен ${token} не поддерживается для массовой проверки`);
    return results;
  }

  const RATE_LIMIT_CONFIG = {
    BATCH_SIZE: 10,
    DELAY_BETWEEN_REQUESTS: 50,
    DELAY_BETWEEN_BATCHES: 1000,
    MAX_RETRIES: 3,
    RATE_LIMIT_BACKOFF: 3000,
  };

  // 🔥 УПРОЩЕННЫЙ МЕТОД ДЛЯ ПРОВЕРКИ БАЛАНСА
  async function getSimpleTokenBalance(wallet) {
    const { provider } = getNextHealthyProvider();
    const contract = new ethers.Contract(
      tokenConfig.contract,
      tokenConfig.abi,
      provider
    );
    
    const balance = await contract.balanceOf(wallet);
    return ethers.formatUnits(balance, tokenConfig.decimals);
  }

  // 🔥 МЕТОД С ПОВТОРНЫМИ ПОПЫТКАМИ
  async function getBalanceWithRetry(wallet, retryCount = 0) {
    try {
      const balance = await getSimpleTokenBalance(wallet);
      return { success: true, balance };
    } catch (error) {
      const isRateLimit = error.message && error.message.includes('rate limit');
      
      if (isRateLimit && retryCount < RATE_LIMIT_CONFIG.MAX_RETRIES) {
        rateLimitCount++;
        const backoffTime = RATE_LIMIT_CONFIG.RATE_LIMIT_BACKOFF * (retryCount + 1);
        console.warn(`⚠️ Rate limit обнаружен для ${wallet} (${token}), повторная попытка ${retryCount + 1}/${RATE_LIMIT_CONFIG.MAX_RETRIES} через ${backoffTime}мс`);
        
        await new Promise(resolve => setTimeout(resolve, backoffTime));
        return getBalanceWithRetry(wallet, retryCount + 1);
      }
      
      throw error;
    }
  }

  // 🔥 ПРОЦЕССИМ КОШЕЛЬКИ ПООЧЕРЕДНО
  for (let i = 0; i < walletAddresses.length; i++) {
    const wallet = walletAddresses[i];
    
    try {
      // 🔥 ИНТЕЛЛЕКТУАЛЬНАЯ ЗАДЕРЖКА МЕЖДУ ЗАПРОСАМИ
      if (i > 0 && i % RATE_LIMIT_CONFIG.BATCH_SIZE === 0) {
        console.log(`⏸️  Пауза между батчами ${token}... (обработано: ${processed}/${walletAddresses.length})`);
        await new Promise(resolve => 
          setTimeout(resolve, RATE_LIMIT_CONFIG.DELAY_BETWEEN_BATCHES)
        );
      }
      
      await new Promise(resolve => 
        setTimeout(resolve, RATE_LIMIT_CONFIG.DELAY_BETWEEN_REQUESTS)
      );

      const result = await getBalanceWithRetry(wallet);
      
      if (result.success) {
        results.set(wallet, result.balance);
      } else {
        results.set(wallet, "0");
      }
      
      processed++;
      
      // 🔥 ЛОГИРОВАНИЕ ПРОГРЕССА
      if (processed % 20 === 0 || processed === walletAddresses.length) {
        const progressPercent = ((processed / walletAddresses.length) * 100).toFixed(1);
        console.log(`📊 Прогресс ${token}: ${processed}/${walletAddresses.length} (${progressPercent}%), ошибок: ${errors}, rate limit'ов: ${rateLimitCount}`);
      }
      
    } catch (error) {
      errors++;
      results.set(wallet, "0");
      console.warn(`❌ Ошибка ${token} для ${wallet}: ${error.message}`);
      
      if (errors % 10 === 0) {
        console.warn(`⚠️  Много ошибок ${token} (${errors}), делаю паузу...`);
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
  }

  console.log(`✅ Массовая проверка ${token} завершена!`);
  console.log(`   Успешно: ${processed}`);
  console.log(`   Ошибок: ${errors}`);
  console.log(`   Rate limit'ов: ${rateLimitCount}`);
  
  return results;
}

// 🔥 АЛИАС ДЛЯ ОБРАТНОЙ СОВМЕСТИМОСТИ
export async function getUSDTBalancesBatch(walletAddresses) {
  return await getTokenBalancesBatch(walletAddresses, "USDT");
}

// 🔥 НОВАЯ ФУНКЦИЯ ДЛЯ USDC
export async function getUSDCBalancesBatch(walletAddresses) {
  return await getTokenBalancesBatch(walletAddresses, "USDC");
}
// 🔥 АЛЬТЕРНАТИВНЫЙ ВАРИАНТ: ПАРАЛЛЕЛЬНАЯ ОБРАБОТКА С ОЧЕРЕДЬЮ
export async function getUSDTBalancesBatchParallel(walletAddresses) {
  if (!walletAddresses || walletAddresses.length === 0) {
    return new Map();
  }

  const results = new Map();
  const CONCURRENT_LIMIT = 5; // Максимальное количество параллельных запросов
  const DELAY = 200; // Задержка между запуском запросов
  
  console.log(`🔍 Параллельная проверка ${walletAddresses.length} кошельков (лимит: ${CONCURRENT_LIMIT} одновременных запросов)...`);

  // 🔥 ФУНКЦИЯ ДЛЯ ОБРАБОТКИ ОДНОГО КОШЕЛЬКА
  async function processWallet(wallet) {
    try {
      const contract = new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS);
      const balance = await contract.methods.balanceOf(wallet).call();
      return {
        wallet,
        balance: web3.utils.fromWei(balance, 'mwei'),
        success: true
      };
    } catch (error) {
      console.warn(`⚠️ Ошибка для ${wallet}: ${error.message}`);
      return {
        wallet,
        balance: "0",
        success: false,
        error: error.message
      };
    }
  }

  // 🔥 ОЧЕРЕДЬ С КОНТРОЛЕМ ПОТОКОВ
  const queue = [];
  let active = 0;
  let index = 0;
  let completed = 0;
  
  return new Promise((resolve) => {
    function runNext() {
      // Если все кошельки обработаны и нет активных запросов
      if (index >= walletAddresses.length && active === 0) {
        console.log(`✅ Параллельная проверка завершена: ${completed}/${walletAddresses.length}`);
        resolve(results);
        return;
      }
      
      // Запускаем новые запросы пока есть слоты
      while (active < CONCURRENT_LIMIT && index < walletAddresses.length) {
        const wallet = walletAddresses[index];
        index++;
        active++;
        
        (async () => {
          try {
            // Добавляем небольшую задержку перед запуском
            await new Promise(resolve => setTimeout(resolve, DELAY));
            
            const result = await processWallet(wallet);
            results.set(result.wallet, result.balance);
            completed++;
            
            // Логируем прогресс каждые 50 кошельков
            if (completed % 50 === 0) {
              const progressPercent = ((completed / walletAddresses.length) * 100).toFixed(1);
              console.log(`📊 Прогресс: ${completed}/${walletAddresses.length} (${progressPercent}%)`);
            }
          } finally {
            active--;
            runNext();
          }
        })();
      }
    }
    
    runNext();
  });
}

// 🔥 ОПТИМИЗИРОВАННАЯ ФУНКЦИЯ ДЛЯ BNB
export async function getBNBBalance(walletAddress, customProvider = null) {
  if (!walletAddress || !ethers.isAddress(walletAddress)) {
    return "0";
  }

  const cacheKey = `bnb_${walletAddress.toLowerCase()}`;
  const cached = balanceCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.balance;
  }

  let retries = 0;
  
  while (retries <= REQUEST_CONFIG.MAX_RETRIES) {
    const { provider, index } = customProvider ? 
      { provider: customProvider, index: -1 } : getNextHealthyProvider();

    try {
      const balance = await Promise.race([
        provider.getBalance(walletAddress),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('BNB balance timeout')), REQUEST_CONFIG.REQUEST_TIMEOUT)
        )
      ]);

      const formattedBalance = ethers.formatEther(balance);
      
      if (index !== -1) {
        updateProviderStats(index, true);
      }
      
      balanceCache.set(cacheKey, {
        balance: formattedBalance,
        timestamp: Date.now()
      });
      
      return formattedBalance;
      
    } catch (error) {
      if (index !== -1) {
        updateProviderStats(index, false);
      }
      
      retries++;
      console.warn(`❌ Ошибка BNB баланса для ${walletAddress}: ${error.message}`);
      
      if (retries <= REQUEST_CONFIG.MAX_RETRIES) {
        await new Promise(resolve => 
          setTimeout(resolve, REQUEST_CONFIG.DELAY_BETWEEN_REQUESTS * retries)
        );
      }
    }
  }

  return "0";
}

// 🔥 ОПТИМИЗИРОВАННАЯ ФУНКЦИЯ ДЛЯ ВСЕХ БАЛАНСОВ
// 🔥 ОПТИМИЗИРОВАННАЯ ФУНКЦИЯ ДЛЯ ВСЕХ БАЛАНСОВ (ВКЛЮЧАЯ USDC)
export async function getBalances(walletAddress, includeUSDC = true) {
  try {
    // 🔥 ПАРАЛЛЕЛЬНАЯ ПРОВЕРКА БАЛАНСОВ
    const balancePromises = [
      getUSDTBalance(walletAddress),
      getBNBBalance(walletAddress)
    ];
    
    if (includeUSDC) {
      balancePromises.push(getUSDCBalance(walletAddress));
    }
    
    const balances = await Promise.all(balancePromises);

    const result = {
      bnb: parseFloat(balances[1]) || 0,
      usdt: parseFloat(balances[0]) || 0,
    };
    
    if (includeUSDC) {
      result.usdc = parseFloat(balances[2]) || 0;
      result.total_usd = (result.usdt + result.usdc).toFixed(4); // Общая сумма в USD
    }
    
    return result;
    
  } catch (error) {
    console.error(`❌ Ошибка получения балансов для ${walletAddress}:`, error);
    return {
      bnb: 0,
      usdt: 0,
      usdc: 0,
      total_usd: "0"
    };
  }
}

// 🔥 ФУНКЦИЯ ДЛЯ СОВМЕСТИМОСТИ
export async function getUSDTBalanceOnly(walletAddress) {
  try {
    const balanceStr = await getUSDTBalance(walletAddress);
    return parseFloat(balanceStr) || 0;
  } catch (error) {
    console.error("Ошибка получения баланса USDT:", error);
    return 0;
  }
}

// 🔥 ЗАПУСК ПЕРИОДИЧЕСКОЙ ПРОВЕРКИ ПРОВАЙДЕРОВ
setInterval(() => {
  checkProviderHealth();
}, REQUEST_CONFIG.HEALTH_CHECK_INTERVAL);

// 🔥 ИНИЦИАЛИЗАЦИЯ ПРИ СТАРТЕ
setTimeout(() => {
  checkProviderHealth();
}, 5000);

// 🔥 ЭКСПОРТ СТАТИСТИКИ ДЛЯ МОНИТОРИНГА
export function getProviderStats() {
  return Array.from(requestStats.entries()).map(([index, stats]) => ({
    provider: rpcProviders[index],
    ...stats,
    successRate: stats.success + stats.errors > 0 ? 
      (stats.success / (stats.success + stats.errors)) * 100 : 0
  }));
}

export function getCacheStats() {
  return {
    cachedEntries: balanceCache.size,
    requestCounter,
    currentProviderIndex
  };
}

// 🔥 ФУНКЦИЯ ОЧИСТКИ КЭША
export function clearBalanceCache() {
  const beforeSize = balanceCache.size;
  balanceCache.clear();
  console.log(`🧹 Кэш очищен: удалено ${beforeSize} записей`);
}