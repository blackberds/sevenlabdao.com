import HTTPBalanceMonitor from "./http-balance-monitor.js";
import { pool } from "../db.js";

class SimpleMonitor {
  constructor() {
    this.balanceMonitor = new HTTPBalanceMonitor();
    this.isMonitoring = false;
  }

  // 🔍 Проверка баланса одного пользователя
  async checkUserBalance(userId) {
    try {
      const { rows } = await pool.query(
        `SELECT id, telegram_id, wallet_address, balance_usdt 
         FROM users WHERE id = $1`,
        [userId]
      );

      if (!rows.length) return null;
      const user = rows[0];
      if (!user.wallet_address) return null;

      const currentBalance = await this.balanceMonitor.getUSDTBalance(user.wallet_address);
      if (currentBalance === null) return null;

      const lastBalance = parseFloat(user.balance_usdt) || 0;
      const difference = currentBalance - lastBalance;

      if (difference > 0.0001) {
        console.log(`💰 Депозит: +${difference.toFixed(4)} USDT (${user.telegram_id})`);

        await pool.query(
          "UPDATE users SET balance_usdt = $1 WHERE id = $2",
          [currentBalance, userId]
        );

        return {
          increased: true,
          difference,
          newBalance: currentBalance,
          userId,
          telegramId: user.telegram_id
        };
      }

      return { increased: false, difference: 0, newBalance: currentBalance };
    } catch (error) {
      console.error(`❌ Ошибка проверки баланса: ${error.message}`);
      return null;
    }
  }

  // 🔁 Мониторинг активных пользователей
  async monitorActiveUsers(limit = 10) {
    if (this.isMonitoring) return;
    this.isMonitoring = true;

    try {
      console.log("🔍 Запуск HTTP мониторинга...");

      const { rows: users } = await pool.query(
        `SELECT id, telegram_id, wallet_address, balance_usdt
         FROM users
         WHERE is_blocked = false
           AND wallet_address IS NOT NULL
           AND last_activity > NOW() - INTERVAL '1 day'
         ORDER BY last_activity DESC
         LIMIT $1`,
        [limit]
      );

      console.log(`📊 Найдено ${users.length} пользователей`);
      let balanceIncreases = 0;

      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        try {
          const result = await this.checkUserBalance(user.id);
          if (result?.increased) {
            balanceIncreases++;
            console.log(`🎯 Обнаружен депозит: +${result.difference.toFixed(4)} USDT`);
          }

          if (i < users.length - 1)
            await new Promise((resolve) => setTimeout(resolve, 1000));

        } catch (error) {
          console.error(`❌ Ошибка пользователя ${user.telegram_id}: ${error.message}`);
        }
      }

      console.log(`✅ Мониторинг завершен. Изменений: ${balanceIncreases}`);
    } catch (error) {
      console.error("❌ Ошибка мониторинга:", error.message);
    } finally {
      this.isMonitoring = false;
    }
  }

  // 💰 Получить все балансы кошелька
  async getWalletBalances(walletAddress) {
    return await this.balanceMonitor.getAllBalances(walletAddress);
  }
}

export default SimpleMonitor;
