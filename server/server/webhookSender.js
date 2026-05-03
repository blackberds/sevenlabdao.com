// services/webhookSender.js
import axios from 'axios';
import config from '../config.js';
import crypto from 'crypto'; // 🔥 ES6 импорт

/**
 * Сервис для отправки вебхуков о реферальных пополнениях
 */
export class ReferralWebhookSender {
  constructor() {
    this.webhookUrl = `${config.webhookBaseUrl}/webhook/referral-deposit`;
    this.secret = config.referralWebhookSecret;
  }

  /**
   * Отправляет уведомление о реферальном пополнении
   */
  async sendReferralDeposit(data) {
    try {
      const payload = {
        wallet: data.walletAddress,
        amount: data.amount,
        txHash: data.transactionHash,
        from: data.fromAddress || null,
        timestamp: data.timestamp || new Date().toISOString(),
        currency: data.currency || 'USDT',
        network: data.network || 'BSC'
      };

      console.log(`📤 ОТПРАВКА ВЕБХУКА: ${data.amount} USDT на ${data.walletAddress}`);

      const response = await axios.post(this.webhookUrl, payload, {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Bitnest-Referral-Bot/1.0'
        }
      });

      if (response.data.ok) {
        console.log('✅ Вебхук успешно доставлен');
        return true;
      } else {
        console.log('❌ Вебхук доставлен, но сервер вернул ошибку:', response.data);
        return false;
      }

    } catch (error) {
      console.error('❌ Ошибка отправки вебхука:', error.message);
      
      if (error.response) {
        console.error('Детали ошибки:', {
          status: error.response.status,
          data: error.response.data
        });
      }
      
      return false;
    }
  }
}

export const webhookSender = new ReferralWebhookSender();