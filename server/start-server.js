import 'dotenv/config';
import logger from './utils/logger.js';
import { startServer } from './server/server.js';

(async () => {
  try {
    await startServer();
    logger.info('✅ Server started successfully');
  } catch (err) {
    logger.error('❌ Failed to start server', err);
    process.exit(1);
  }
})();