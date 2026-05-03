const bip39 = require('bip39');
const { ethers } = require('ethers'); // Import ethers properly
const { Wallet, JsonRpcProvider, Contract, formatUnits } = ethers;
const crypto = require('crypto');
const pool = require('../db');
const config = require('../config');
const logger = require('../utils/logger');
const NodeCache = require('node-cache');

const ALGORITHM = 'aes-256-cbc';
const IV_LENGTH = 16;
const ENCRYPTION_VERSION = 'v1';
const BALANCE_CACHE_TTL = 60; // 1 минута кэширования
const RPC_TIMEOUT = 10000; // 10 секунд

// Инициализация кэша
const balanceCache = new NodeCache({ stdTTL: BALANCE_CACHE_TTL });

class WalletServiceError extends Error {
  constructor(message, originalError) {
    super(message);
    this.name = 'WalletServiceError';
    this.originalError = originalError;
  }
}

// Инициализация провайдера с тайм-аутом
const provider = new JsonRpcProvider(config.bscRpc, {
  name: 'binance',
  chainId: 56,
  timeout: RPC_TIMEOUT
});

function getEncryptionKey() {
  try {
    if (!config.encryptionKey) {
      throw new Error('Encryption key is not configured');
    }

    const key = Buffer.from(config.encryptionKey, 'hex');
    
    if (key.length < 32) {
      throw new Error('Encryption key must be at least 32 bytes (64 hex characters)');
    }

    return key.slice(0, 32);
  } catch (error) {
    logger.error('Encryption key error:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    throw new WalletServiceError('Failed to get encryption key', error);
  }
}

function encryptSeed(seedPhrase) {
  if (!bip39.validateMnemonic(seedPhrase)) {
    throw new WalletServiceError('Invalid seed phrase provided for encryption');
  }

  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, getEncryptionKey(), iv);
    
    let encrypted = cipher.update(seedPhrase, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return `${ENCRYPTION_VERSION}:${iv.toString('hex')}:${encrypted}`;
  } catch (error) {
    logger.error('Seed encryption failed:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    throw new WalletServiceError('Failed to encrypt seed phrase', error);
  }
}
// Добавляем функцию для определения типа зашифрованных данных
function getEncryptedDataType(encryptedData) {
    if (!encryptedData) return 'unknown';
    
    try {
        const parts = encryptedData.split(':');
        if (parts.length < 3) return 'unknown';
        
        const [version, ivHex, encryptedText] = parts;
        
        // Пробуем расшифровать как seed-фразу
        const iv = Buffer.from(ivHex, 'hex');
        const decipher = crypto.createDecipheriv(ALGORITHM, getEncryptionKey(), iv);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        
        // Проверяем тип данных
        if (bip39.validateMnemonic(decrypted)) {
            return 'seed';
        }
        
        // Проверяем если это приватный ключ (64 hex символа)
        const cleaned = decrypted.replace(/[^0-9a-fA-F]/g, '');
        if (cleaned.length === 64 && /^[0-9a-fA-F]{64}$/.test(cleaned)) {
            return 'private_key';
        }
        
        return 'unknown';
    } catch (error) {
        return 'unknown';
    }
}

// Модифицируем decryptSeed чтобы она могла возвращать любой тип данных
function decryptAny(encryptedData) {
    if (!encryptedData) {
        throw new WalletServiceError('No encrypted data provided');
    }

    try {
        const parts = encryptedData.split(':');
        
        if (parts.length < 3) {
            throw new Error('Invalid encrypted data format');
        }

        const [version, ivHex, encryptedText] = parts;
        
        if (version !== ENCRYPTION_VERSION) {
            throw new Error(`Unsupported encryption version: ${version}`);
        }

        const iv = Buffer.from(ivHex, 'hex');
        if (iv.length !== IV_LENGTH) {
            throw new Error(`Invalid IV length: ${iv.length} bytes`);
        }

        const decipher = crypto.createDecipheriv(
            ALGORITHM, 
            getEncryptionKey(), 
            iv
        );
        
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        
        return decrypted;
    } catch (error) {
        logger.error('Decryption failed:', {
            error: error.message,
            stack: error.stack,
            encryptedData: encryptedData ? `${encryptedData.substring(0, 10)}...` : 'null',
            timestamp: new Date().toISOString()
        });
        throw new WalletServiceError('Failed to decrypt data', error);
    }
}

// Оставляем оригинальную decryptSeed для обратной совместимости
function decryptSeed(encryptedData) {
    const decrypted = decryptAny(encryptedData);
    
    if (!bip39.validateMnemonic(decrypted)) {
        throw new WalletServiceError('Decrypted data is not a valid seed phrase');
    }
    
    return decrypted;
}

// Функция для получения типа данных и расшифровки
function decryptWalletData(encryptedData) {
    const decrypted = decryptAny(encryptedData);
    
    // Определяем тип данных
    if (bip39.validateMnemonic(decrypted)) {
        return { type: 'seed', data: decrypted };
    }
    
    const cleaned = decrypted.replace(/[^0-9a-fA-F]/g, '');
    if (cleaned.length === 64 && /^[0-9a-fA-F]{64}$/.test(cleaned)) {
        return { type: 'private_key', data: cleaned };
    }
    
    throw new WalletServiceError('Unknown encrypted data type');
}

function encryptPrivateKey(privateKey) {
    if (!privateKey || typeof privateKey !== 'string') {
        throw new WalletServiceError('Invalid private key provided for encryption');
    }
    
    // Проверяем что это валидный приватный ключ (64 hex символа)
    const cleanedKey = privateKey.replace(/[^0-9a-fA-F]/g, '');
    if (cleanedKey.length !== 64) {
        throw new WalletServiceError('Invalid private key length');
    }
    
    if (!/^[0-9a-fA-F]{64}$/.test(cleanedKey)) {
        throw new WalletServiceError('Invalid private key format');
    }
    
    // Используем ту же логику шифрования что и для seed-фраз
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, getEncryptionKey(), iv);
    let encrypted = cipher.update(cleanedKey, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return `${ENCRYPTION_VERSION}:${iv.toString('hex')}:${encrypted}`;
}

function decryptPrivateKey(encryptedData) {
    if (!encryptedData) {
        throw new WalletServiceError('No encrypted data provided');
    }

    try {
        const parts = encryptedData.split(':');
        
        if (parts.length < 3) {
            throw new Error('Invalid encrypted data format');
        }

        const [version, ivHex, encryptedKey] = parts;
        
        if (version !== ENCRYPTION_VERSION) {
            throw new Error(`Unsupported encryption version: ${version}`);
        }

        const iv = Buffer.from(ivHex, 'hex');
        if (iv.length !== IV_LENGTH) {
            throw new Error(`Invalid IV length: ${iv.length} bytes`);
        }

        const decipher = crypto.createDecipheriv(
            ALGORITHM, 
            getEncryptionKey(), 
            iv
        );
        
        let decrypted = decipher.update(encryptedKey, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        
        // Проверяем что это валидный приватный ключ
        const cleanedKey = decrypted.replace(/[^0-9a-fA-F]/g, '');
        if (cleanedKey.length !== 64) {
            throw new Error('Decrypted data is not a valid private key');
        }
        
        return cleanedKey;
    } catch (error) {
        logger.error('Private key decryption failed:', {
            error: error.message,
            stack: error.stack,
            encryptedData: encryptedData ? `${encryptedData.substring(0, 10)}...` : 'null',
            timestamp: new Date().toISOString()
        });
        throw new WalletServiceError('Failed to decrypt private key', error);
    }
}
async function createWalletForUser(userId) {
  if (!userId) {
    throw new WalletServiceError('User ID is required');
  }

  try {
    const mnemonic = bip39.generateMnemonic();
    const wallet = Wallet.fromPhrase(mnemonic);
    const address = wallet.address;
    const encrypted = encryptSeed(mnemonic);

    const [res] = await pool.execute(
      'INSERT INTO wallets (user_id, address, encrypted_seed) VALUES (?, ?, ?)',
      [userId, address, encrypted]
    );

    logger.info('Wallet created successfully', {
      userId,
      walletId: res.insertId,
      address,
      timestamp: new Date().toISOString()
    });

    return { 
      id: res.insertId, 
      address, 
      mnemonic 
    };
  } catch (error) {
    logger.error('Wallet creation failed:', {
      error: error.message,
      userId,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    throw new WalletServiceError('Failed to create wallet', error);
  }
}

async function getWalletByUser(userId) {
  if (!userId) {
    throw new WalletServiceError('User ID is required');
  }

  try {
    const [rows] = await pool.execute(
      'SELECT * FROM wallets WHERE user_id = ?', 
      [userId]
    );
    
    if (!rows || rows.length === 0) {
      return null;
    }
    
    return rows[0];
  } catch (error) {
    logger.error('Failed to get wallet by user:', {
      error: error.message,
      userId,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    throw new WalletServiceError('Failed to retrieve wallet', error);
  }
}

async function getBalances(address) {
  // Проверка на пустой или невалидный адрес
  if (!address || typeof address !== 'string' || !ethers.isAddress(address)) { 
    throw new WalletServiceError('Неверный адрес кошелька');
  }

  // Ключ кэша для баланса
  const cacheKey = `balances:${address.toLowerCase()}`;
  
  // Проверка наличия данных в кэше
  const cachedBalances = balanceCache.get(cacheKey);
  if (cachedBalances) {
    logger.info('Используем кэшированные данные для баланса:', { address, balances: cachedBalances });
    return cachedBalances;
  }

  try {
    // Логирование начала получения балансов
    logger.info('Получаем баланс для адреса:', { address });

    // Получаем баланс BNB
    const bnbBalance = await provider.getBalance(address);
    const bnb = parseFloat(formatUnits(bnbBalance, 18));

    // Получаем баланс USDT
    const usdtAddress = '0x55d398326f99059fF775485246999027B3197955';
    const erc20Abi = [
      "function balanceOf(address owner) view returns (uint256)",
      "function decimals() view returns (uint8)"
    ];
    
    const token = new Contract(usdtAddress, erc20Abi, provider);
    const [tokenBalanceRaw, decimals] = await Promise.all([ 
      token.balanceOf(address),
      token.decimals()
    ]);

    const usdt = parseFloat(formatUnits(tokenBalanceRaw, decimals));

    // Формируем баланс и кэшируем
    const balances = { 
      bnb: isNaN(bnb) ? 0 : bnb,
      usdt: isNaN(usdt) ? 0 : usdt 
    };

    balanceCache.set(cacheKey, balances);
    logger.info('Баланс получен и сохранён в кэш:', { address, balances });

    return balances;
  } catch (error) {
    // Логирование ошибки при получении баланса
    logger.error('Ошибка при получении балансов для адреса:', {
      error: error.message,
      address,
      stack: error.stack,
      rpcUrl: config.bscRpc,
      timestamp: new Date().toISOString()
    });

    // Возвращаем кэшированные данные в случае ошибки
    const staleBalances = balanceCache.get(cacheKey, true);
    if (staleBalances) {
      logger.info('Используем устаревшие кэшированные данные баланса:', { address, balances: staleBalances });
      return staleBalances;
    }

    // Если данных нет, возвращаем 0 балансы
    return { bnb: 0, usdt: 0 };
  }
}

function formatBalance(balance) {
  const num = parseFloat(balance);
  return isNaN(num) ? '0.00000' : num.toFixed(4);
}
// Clear cache on process exit
process.on('SIGINT', () => {
  balanceCache.close();
});

module.exports = {
  createWalletForUser,
  getWalletByUser,
  getBalances,
  decryptSeed,
  encryptSeed,
  formatBalance,
  encryptPrivateKey,
  decryptPrivateKey,
  decryptWalletData,
  getEncryptedDataType,
  WalletServiceError,
  provider // Export provider for other modules to use
};
