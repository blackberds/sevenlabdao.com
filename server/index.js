// Загрузка .env
import 'dotenv/config';

// Импорты через ES синтаксис
import { startBot } from './bot/bot.js';
import { startServer } from './server/server.js';
//import { startNotifications } from './services/notifications.js';
import logger from './utils/logger.js';

(async () => {
  try {
    await startBot();
    await startServer();
    //await startNotifications();
    logger.info('All services started');
  } catch (err) {
    logger.error('Failed to start services', err);
    process.exit(1);
  }
})();
 