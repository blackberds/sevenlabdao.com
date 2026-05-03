const { ethers } = require('ethers');
const pool = require('../db');
const { decryptSeedб, decryptWalletData } = require('./wallet');
const logger = require('../utils/logger');
const config = require('../config');

// USDT Config (исправлено decimals на 18 для BSC)
const USDT_CONFIG = {
  address: '0x55d398326f99059fF775485246999027B3197955', // BSC USDT
  abi: [
    'function balanceOf(address) view returns (uint256)',
    'function transfer(address to, uint256 amount) returns (bool)',
    'function decimals() view returns (uint8)'
  ],
  decimals: 18 // Внимание! У USDT на BSC 18 decimals, а не 6
};

// Provider
const provider = new ethers.JsonRpcProvider(config.bscRpc);

// ---- Core ----
async function sendToPool(userId, amount, period) {
  logger.info(`sendToPool ENTER: userId=${userId}, amount=${amount}, period=${period}`);
  const connection = await pool.getConnection();
  let wallet;

  try {
    await connection.beginTransaction();

    // 1. Получаем данные кошелька
    const [wallets] = await connection.execute(
      `SELECT w.*, u.telegram_id 
       FROM wallets w
       JOIN users u ON w.user_id = u.id
       WHERE w.user_id = ?`,
      [userId]
    );
    
    if (!wallets.length) throw new Error('WALLET_NOT_FOUND');
    const walletData = wallets[0];

    if (amount <= 0) throw new Error('INVALID_AMOUNT');

    // 2. Декодируем данные кошелька в зависимости от типа
    const { decryptWalletData } = require('./wallet');
    const secretData = decryptWalletData(walletData.encrypted_seed);
    
    // 3. Создаем кошелек в зависимости от типа
    if (secretData.type === 'private_key') {
      // Создаем из приватного ключа
      const privateKey = '0x' + secretData.data;
      wallet = new ethers.Wallet(privateKey, provider);
    } else {
      // Создаем из seed-фразы
      wallet = ethers.Wallet.fromPhrase(secretData.data, provider);
    }

    // 4. Проверяем баланс BNB для газа
    await checkBNBBalance(wallet);

    // 5. Настраиваем контракт USDT
    const usdtContract = new ethers.Contract(USDT_CONFIG.address, USDT_CONFIG.abi, wallet);

    // 6. Получаем реальные decimals токена
    const decimals = await usdtContract.decimals();
    const amountWei = ethers.parseUnits(amount.toString(), decimals);

    // 7. Проверяем баланс USDT
    const balance = await usdtContract.balanceOf(wallet.address);
    if (balance < amountWei) {
      throw new Error(`INSUFFICIENT_USDT: Need ${amount} USDT but have ${ethers.formatUnits(balance, decimals)}`);
    }

    // 8. Отправляем USDT в пул
    const tx = await usdtContract.transfer(
      config.poolContractAddress, 
      amountWei
    );

    // 9. Ждем подтверждения (минимум 1 блок)
    const receipt = await tx.wait(1);
    if (receipt.status !== 1) throw new Error('TRANSACTION_FAILED');

    // 10. Сохраняем в БД
    await connection.execute(
      `INSERT INTO investments 
       (user_id, amount_decimal, period_days, status, tx_hash)
       VALUES (?, ?, ?, 'pending', ?)`,
      [userId, amount, period, tx.hash]
    );

    logger.info('USDT transfer successful', {
      userId,
      amount,
      period,
      txHash: tx.hash,
      timestamp: new Date().toISOString()
    });

    await connection.commit();
    return tx.hash;

  } catch (error) {
    await connection.rollback();
    logger.error('Transfer failed', { 
      userId, 
      error: error.message,
      stack: error.stack,
      amount,
      period
    });
    throw translateErrorForUser(error);
  } finally {
    if (connection) connection.release();
  }
}

// ---- Helpers ----
async function decryptSeedWithFallback(walletData) {
  try {
    // Используем новую функцию для определения типа данных
    const { decryptWalletData } = require('./wallet');
    
    const secretData = decryptWalletData(walletData.encrypted_seed);
    
    if (secretData.type === 'private_key') {
      // Для приватного ключа создаем кошелек из приватного ключа
      const privateKey = '0x' + secretData.data;
      const wallet = new ethers.Wallet(privateKey);
      // Возвращаем seed-фразу (генерируем временную для совместимости)
      // Или лучше переписать логику отправки чтобы поддерживала приватные ключи
      return wallet.mnemonic?.phrase || walletData.encrypted_seed;
    } else {
      // Это seed-фраза
      return secretData.data;
    }
  } catch (error) {
    if (walletData.backup_encrypted_seed) {
      logger.info('Using backup seed phrase');
      try {
        const secretData = decryptWalletData(walletData.backup_encrypted_seed);
        return secretData.data;
      } catch (backupError) {
        throw new Error('WALLET_RECOVERY_REQUIRED');
      }
    }
    throw new Error('WALLET_RECOVERY_REQUIRED');
  }
}

async function checkBNBBalance(wallet) {
  const [bnbBalance, feeData] = await Promise.all([
    wallet.provider.getBalance(wallet.address),
    wallet.provider.getFeeData()
  ]);
  const estimatedGasCost = (feeData.gasPrice) * 150000n;
  const minBnbRequired = estimatedGasCost * 1n;

  if (bnbBalance < minBnbRequired) {
    throw new Error(`INSUFFICIENT_BNB_FOR_GAS: Need ${ethers.formatEther(minBnbRequired)} BNB (has ${ethers.formatEther(bnbBalance)})`);
  }
}

function translateErrorForUser(error) {
  const errorMap = {
    'WALLET_NOT_FOUND': 'Кошелек не найден. Создайте или импортируйте кошелек.',
    'WALLET_RECOVERY_REQUIRED': 'Требуется восстановление кошелька. Обратитесь в поддержку.',
    'INVALID_AMOUNT': 'Сумма должна быть больше нуля.',
    'INSUFFICIENT_BNB_FOR_GAS': msg => {
      const matches = msg.match(/Need ([\d.]+) BNB \(has ([\d.]+)\)/);
      return matches ? `⚠️ Недостаточно BNB для комиссий сети\n\nТребуется: ${matches[1]} BNB\nНа балансе: ${matches[2]} BNB`
                    : '⚠️ Недостаточно BNB для комиссий сети (минимум 0.005 BNB)';
    },
    'INSUFFICIENT_USDT': msg => {
      const matches = msg.match(/Need ([\d.]+) USDT but have ([\d.]+)/);
      return matches ? `⚠️ Недостаточно USDT\n\nТребуется: ${matches[1]} USDT\nНа балансе: ${matches[2]} USDT`
                    : '⚠️ Недостаточно USDT';
    },
    'TRANSACTION_FAILED': '❌ Транзакция не выполнена. Попробуйте позже.',
    'default': '⚠️ Ошибка при переводе USDT. Попробуйте позже или обратитесь в поддержку.'
  };

  const baseError = error.message.split(':').pop().trim();
  for (const [key, handler] of Object.entries(errorMap)) {
    if (error.message.includes(key) || baseError.includes(key)) {
      return new Error(typeof handler === 'function' ? handler(error.message) : handler);
    }
  }
  return new Error(errorMap.default);
}

module.exports = { sendToPool };
