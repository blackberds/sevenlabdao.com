// config.js
export default {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL,
  telegramToken: process.env.TELEGRAM_TOKEN,
  adminSecret: process.env.ADMIN_SECRET,
  yookassaSecret: process.env.YOOKASSA_SECRET,
  cryptobotSecret: process.env.CRYPTOBOT_SECRET,
  operatorTgId: process.env.OPERATOR_TG_ID ? process.env.OPERATOR_TG_ID.split(',').map(id => id.trim()) : [],
  
  // 🔥 ДОБАВЛЯЕМ НАСТРОЙКИ ДЛЯ ВЕБХУКА РЕФЕРАЛЬНЫХ ПОПОЛНЕНИЙ
  referralWebhookSecret: process.env.REFERRAL_WEBHOOK_SECRET || 'f9b2b6bf8361d90dbc39636e3f14576acd998b654f451430958fbf15df4a8121',
  webhookBaseUrl: process.env.WEBHOOK_BASE_URL || 'https://sevenlabdao.com',
  
  // Настройки для BSC Scan
  bscScanApiKey: process.env.BSCSCAN_API_KEY || '8ZDZGGTUN8ZD4E88KW83VMJGTJN9TVKB43'
};