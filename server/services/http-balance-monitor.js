import { ethers } from 'ethers';

class HTTPBalanceMonitor {
  constructor() {
    this.provider = new ethers.JsonRpcProvider(
      "https://bsc-mainnet.nodereal.io/v1/e6bdf9c87e034e12905218d855f80f21",
      { chainId: 56, name: 'binance' }
    );
    
    this.usdtContract = new ethers.Contract(
      "0x55d398326f99059fF775485246999027B3197955",
      ["function balanceOf(address) view returns (uint256)"],
      this.provider
    );
    
    console.log('✅ HTTP провайдер инициализирован');
  }

  // 🔥 ПРОСТОЙ USDT БАЛАНС
  async getUSDTBalance(walletAddress) {
    try {
      console.log(`🔍 Запрос USDT баланса для ${walletAddress.substring(0, 8)}...`);
      
      const balanceWei = await this.usdtContract.balanceOf(walletAddress);
      const balance = parseFloat(ethers.formatUnits(balanceWei, 18));
      
      console.log(`✅ USDT баланс: ${balance} для ${walletAddress.substring(0, 8)}...`);
      return balance;

    } catch (error) {
      console.error(`❌ Ошибка USDT баланса: ${error.message}`);
      return null;
    }
  }

  // 🔥 ПРОСТОЙ BNB БАЛАНС
  async getBNBBalance(walletAddress) {
    try {
      console.log(`🔍 Запрос BNB баланса для ${walletAddress.substring(0, 8)}...`);
      
      const balanceWei = await this.provider.getBalance(walletAddress);
      const balance = parseFloat(ethers.formatUnits(balanceWei, 18));
      
      console.log(`✅ BNB баланс: ${balance} для ${walletAddress.substring(0, 8)}...`);
      return balance;

    } catch (error) {
      console.error(`❌ Ошибка BNB баланса: ${error.message}`);
      return null;
    }
  }

  // 🔥 ВСЕ БАЛАНСЫ
  async getAllBalances(walletAddress) {
    try {
      console.log(`💰 Получение всех балансов для ${walletAddress.substring(0, 8)}...`);
      
      const [bnbBalance, usdtBalance] = await Promise.all([
        this.getBNBBalance(walletAddress),
        this.getUSDTBalance(walletAddress)
      ]);

      return {
        bnb: bnbBalance,
        usdt: usdtBalance,
        wallet: walletAddress,
        timestamp: new Date().toISOString()
      };

    } catch (error) {
      console.error(`❌ Ошибка всех балансов: ${error.message}`);
      return {
        bnb: null,
        usdt: null,
        wallet: walletAddress,
        error: error.message
      };
    }
  }

  // 🔥 ТЕСТ СИСТЕМЫ
  async test() {
    const testWallet = "0x28A7A091d0e326836442bC297D7f88a6462e61D7";
    
    console.log('🧪 Тестирование HTTP мониторинга...');
    
    try {
      const balances = await this.getAllBalances(testWallet);
      console.log('🎉 ТЕСТ ПРОЙДЕН:', balances);
      return true;
    } catch (error) {
      console.log('❌ ТЕСТ ПРОВАЛЕН:', error.message);
      return false;
    }
  }
}

export default HTTPBalanceMonitor;