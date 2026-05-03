require('dotenv').config();
const { decryptSeed } = require('./services/wallet');
const pool = require('./db');

async function testDecryption(walletId) {
  try {
    const [wallets] = await pool.execute(
      'SELECT * FROM wallets WHERE id = ?',
      [walletId]
    );

    if (!wallets.length) {
      console.error('Wallet not found');
      return;
    }

    const wallet = wallets[0];
    console.log('Attempting to decrypt wallet:', wallet.id);
    
    try {
      const seed = decryptSeed(wallet.encrypted_seed);
      console.log('✅ Successfully decrypted seed phrase');
      console.log('First 10 chars:', seed.substring(0, 10) + '...');
    } catch (error) {
      console.error('❌ Decryption failed:', error.message);
      console.log('Encrypted data sample:', wallet.encrypted_seed.substring(0, 30) + '...');
    }
  } catch (error) {
    console.error('Script error:', error);
  }
}

// Test with a specific wallet ID
testDecryption(2);