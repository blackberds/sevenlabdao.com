import { ethers } from 'ethers';

class WSBalanceMonitor {
  constructor() {
    this.wsUrl = "wss://bsc-mainnet.nodereal.io/ws/v1/e6bdf9c87e034e12905218d855f80f21";
    this.provider = null;
    this.usdtContract = null;
    this.isConnected = false;
    this.userWallets = new Set();
    
    this.initializeProvider();
  }

  async initializeProvider() {
    try {
      console.log('🔄 Инициализация WebSocket провайдера...');
      
      this.provider = new ethers.WebSocketProvider(this.wsUrl, 56);
      this.usdtContract = new ethers.Contract(
        "0x55d398326f99059fF775485246999027B3197955",
        ["function balanceOf(address) view returns (uint256)"],
        this.provider
      );

      // Ждем подключения
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('WebSocket timeout')), 10000);
        
        // Проверяем состояние соединения
        const checkConnection = () => {
          if (this.provider.websocket.readyState === 1) {
            clearTimeout(timeout);
            this.isConnected = true;
            console.log('✅ WebSocket подключен к nodereal');
            resolve();
          } else if (this.provider.websocket.readyState === 3) {
            clearTimeout(timeout);
            reject(new Error('WebSocket connection failed'));
          }
        };

        // Периодически проверяем соединение
        const interval = setInterval(checkConnection, 100);
        
        // Также слушаем события
        this.provider.websocket.onopen = () => {
          clearInterval(interval);
          clearTimeout(timeout);
          this.isConnected = true;
          console.log('✅ WebSocket подключен к nodereal');
          resolve();
        };

        this.provider.websocket.onerror = (error) => {
          clearInterval(interval);
          clearTimeout(timeout);
          console.error('❌ WebSocket ошибка:', error);
          reject(error);
        };
      });

      this.setupEventListeners();
      
    } catch (error) {
      console.error('❌ Ошибка инициализации WebSocket:', error.message);
      this.isConnected = false;
      // Пробуем переподключиться через 5 секунд
      setTimeout(() => this.initializeProvider(), 5000);
    }
  }

  setupEventListeners() {
    this.provider.websocket.onclose = () => {
      console.log('🔌 WebSocket соединение закрыто');
      this.isConnected = false;
      setTimeout(() => this.initializeProvider(), 5000);
    };

    this.provider.websocket.onerror = (error) => {
      console.error('❌ WebSocket ошибка:', error);
      this.isConnected = false;
    };
  }

  // 🔥 ПРОСТОЙ USDT БАЛАНС
  async getUSDTBalance(walletAddress) {
    try {
      if (!this.isConnected || !this.provider) {
        throw new Error('WebSocket не подключен');
      }

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
      if (!this.isConnected || !this.provider) {
        throw new Error('WebSocket не подключен');
      }

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


  // 🔥 ЗАКРЫТИЕ СОЕДИНЕНИЯ
  async destroy() {
    if (this.provider) {
      await this.provider.destroy();
      this.isConnected = false;
    }
  }
}

export default WSBalanceMonitor;