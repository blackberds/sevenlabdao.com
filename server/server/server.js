import express from 'express';
import path from 'path';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { pool } from '../db.js';
import config from '../config.js';
import logger from '../utils/logger.js';
import bodyParser from 'body-parser';
import webApp from './webapp.js';
import { validateYooWebhook, validateCryptoBotWebhook } from './webhookValidators.js';
import { Telegraf } from 'telegraf';
import crypto from 'crypto';
import { getTranslation } from '../locales/locales.js';
import session from 'express-session';
import pgSession from 'connect-pg-simple';
import cors from 'cors';
const PostgresSessionStore = pgSession(session);
// Добавьте эту функцию
function rawBodyMiddleware(req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
}
// server.js - добавьте после импортов

// Middleware для аутентификации
// Middleware для аутентификации
function authMiddleware(req, res, next) {
  try {
    console.log('🔐 Auth middleware checking session:', {
      sessionId: req.sessionID,
      userId: req.session?.userId,
      hasSession: !!req.session?.userId
    });

    if (!req.session || !req.session.userId) {
      console.error('❌ No valid session or userId');
      return res.status(401).json({ 
        ok: false, 
        error: 'Not authenticated',
        details: 'No valid session found'
      });
    }
    
    // Преобразуем userId в число если нужно
    if (typeof req.session.userId === 'string') {
      req.session.userId = parseInt(req.session.userId);
    }
    
    req.user = { id: req.session.userId };
    console.log('✅ User authenticated:', req.user.id);
    next();
  } catch (error) {
    console.error('❌ Auth middleware error:', error);
    return res.status(401).json({ 
      ok: false, 
      error: 'Authentication failed',
      details: error.message 
    });
  }
}
const AUTO_MESSAGES = {
    urgent_subscription: (daysLeft, username = '') => {
        const greeting = username ? `, ${username}` : '';
        let message = `⏰ <b>СРОЧНОЕ УВЕДОМЛЕНИЕ${greeting}!</b>\n\n`;
        
        if (daysLeft === 1) {
            message += `🚨 <b>Ваша подписка истекает ЗАВТРА!</b>\n\n`;
        } else {
            message += `🚨 <b>Ваша подписка истекает через ${daysLeft} дня!</b>\n\n`;
        }
        
        
        message += `💎 <b>Не упустите преимущества!</b>\n`;
        message += `Перейдите в Партнёрская программа - Реф. ссылка в боте\n\n`;
        
        message += `<i>С уважением, команда BitnestRus</i> 💙`;
        
        return message;
    },

    expiring_subscription: (daysLeft, username = '') => {
        const greeting = username ? `, ${username}` : '';
        let message = `⏳ <b>Напоминание о подписке${greeting}</b>\n\n`;
        
        message += `Ваша премиум-подписка активна еще ${daysLeft} дней.\n\n`;
        
        message += `💳 <b>Как продлить:</b>\n`;
        message += `Перейдите в Партнёрская программа - Реф. ссылка в боте\n\n`;
        
        message += `<i>С заботой о вашем успехе,</i>\n`;
        message += `<i>Команда BitnestRus</i> 🚀`;
        
        return message;
    },
no_investments: (username = '') => {
        const greeting = username ? `, ${username}` : '';
        return `⚠️ <b>ВАЖНОЕ УВЕДОМЛЕНИЕ</b>

🟢 ⏰ <b>СРОЧНОЕ УВЕДОМЛЕНИЕ${greeting}: ВАШ БОНУС $10 000 АКТИВЕН 24 ЧАСА!</b>

ВНИМАНИЕ! Мы зарезервировали для вас деньги в долг $10 000, но он может скоро сгореть!

По нашей статистике, вы еще не совершали операции в боте. Это значит, что вы можете получить максимальный стартовый бонус!

⚡️ <b>Почему нужно действовать СЕЙЧАС:</b>
✅ Бонус доступен только новым клиентам
✅ Лимитированное предложение
✅ Простая процедура получения

🚨 <b>Не откладывайте!</b> Ваш персональный бонус $10 000 может перейти другому клиенту.

🎯 <b>Заберите свои деньги сейчас</b>

<em>P.S. Это последнее напоминание о вашем бонусе. После истечения 24 часов предложение будет аннулировано.</em>

🛠️ По вопросам: @BitnestRusSupport`;
    }
};


async function startServer() {
  const app = express();

  app.set('trust proxy', 1);
  
  const sessionStore = new PostgresSessionStore({
    pool: pool,
    tableName: 'user_sessions',
    createTableIfMissing: true
  });

  // CORS должен быть самым первым
  app.use(cors({
    origin: ['https://sevenlabdao.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'tg-init-data']
  }));
  
  app.options('/{*path}', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sevenlabdao.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, tg-init-data');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.status(200).send();
  });
  app.use(session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET || 'b3b813bcf664a49290c687d3b3ffd8a1d6e2935320b60053bc7a573e6e3d9b22',
    resave: true,
    saveUninitialized: true,
    cookie: { 
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'none',
      domain: 'sevenlabdao.com'
    },
    name: 'bitnest.sid',
    rolling: true
  }));

  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
        fontSrc: ["'self'", "https://cdnjs.cloudflare.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        frameAncestors: ["'self'"],
        formAction: ["'self'"]
      }
    }
  }));
  app.use(bodyParser.json({ 
    limit: '1mb',
    verify: rawBodyMiddleware 
  }));
  app.use(bodyParser.urlencoded({ 
    extended: true,
    verify: rawBodyMiddleware 
  }));

  // Настройка шаблонизатора EJS
  app.set('view engine', 'ejs');
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  app.set('views', path.join(__dirname, 'views'));
  // ✅ ДОБАВЬТЕ ЭТО: Статические файлы
  app.use('/css', express.static(path.join(__dirname, 'views', 'css')));
  app.use('/js', express.static(path.join(__dirname, 'views', 'js')));
  app.use('/images', express.static(path.join(__dirname, 'views', 'images')));
  app.use(express.static('/var/www/sevenlabdao__usr/data/www/sevenlabdao.com'));

  // Подключите маршруты из webApp к основному приложению
  app.use(webApp);

  // Ограничение частоты запросов
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 200, // максимум 200 запросов за окно
    standardHeaders: true,
    legacyHeaders: false
  });
  app.use(apiLimiter);
  
  // Middleware аутентификации администратора
  app.use('/admin', async (req, res, next) => {
    const secret = req.headers['x-admin-secret'] || req.query.secret;
    if (!secret || secret !== config.adminSecret) {
      return res.status(401).send('Unauthorized');
    }
    
    // Добавляем метод для рендеринга с query
    res.renderWithQuery = (view, options = {}) => {
      res.render(view, { ...options, query: req.query });
    };
    next();
  });

  // Middleware для сохранения raw body (ОБЯЗАТЕЛЬНО для CryptoBot)
    app.use(express.json({ 
    verify: (req, res, buf, encoding) => {
      rawBodyMiddleware(req, res, buf, encoding);
    }
  }));
  
  // ==================== API ЭНДПОИНТЫ ДЛЯ REACT APP ====================
// В server.js найдите секцию API эндпоинтов и добавьте middleware к /api/stats/period

// ==================== API ЭНДПОИНТЫ ДЛЯ REACT APP ====================
app.get('/api/telegram-avatar/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const response = await fetch(`https://t.me/i/userpic/320/${username}.jpg`);
    const buffer = await response.buffer();
    res.set('Content-Type', 'image/jpeg');
    res.set('Cache-Control', 'public, max-age=21600'); // 6 часов
    res.send(buffer);
  } catch (error) {
    res.status(404).send('Avatar not found');
  }
});
app.get('/api/stats/period', authMiddleware, async (req, res) => {
  try {
    const { period } = req.query;
    const userId = req.user?.id;
    
    console.log(`📊 Fetching period stats for user ${userId}, period: ${period}`);
    
    if (!userId) {
      return res.status(401).json({ ok: false, error: 'Unauthorized' });
    }
    
    // Определяем дату начала периода
    let startDate;
    const now = new Date();
    
    switch(period) {
      case 'today':
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case 'week':
        startDate = new Date(now);
        startDate.setDate(now.getDate() - 7);
        break;
      case 'twoWeeks':
        startDate = new Date(now);
        startDate.setDate(now.getDate() - 14);
        break;
      case 'month':
        startDate = new Date(now);
        startDate.setMonth(now.getMonth() - 1);
        break;
      case 'threeMonths':
        startDate = new Date(now);
        startDate.setMonth(now.getMonth() - 3);
        break;
      case 'sixMonths':
        startDate = new Date(now);
        startDate.setMonth(now.getMonth() - 6);
        break;
      case 'allTime':
      default:
        startDate = null;
    }
    
    console.log(`📅 Start date for period ${period}:`, startDate);
    
    // Запрос к базе данных
    let stats;
    if (startDate) {
      // Статистика за период
      console.log(`📊 Querying stats for period from ${startDate} for user ${userId}`);
      
      // Исправленный запрос - убрали лишние параметры
      const statsQuery = `
        SELECT 
          -- Гости за период (все зашедшие по ссылке)
          (SELECT COUNT(DISTINCT rr.referral_id) 
           FROM referral_relations rr
           WHERE rr.referrer_id = $1 
           AND rr.created_at >= $2) as guests,
          
          -- Зарегистрированные рефералы за период
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1 
           AND rr.created_at >= $2) as referrals,
          
          -- Рефералы с активными инвестициями за период
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1 
           AND rr.created_at >= $2
           AND EXISTS (
             SELECT 1 FROM investments i 
             WHERE i.user_id = u.id 
             AND i.status = 'active' 
             AND i.amount_decimal > 0
           )) as investors,
          
          -- Рефералы с активной подпиской за период
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1 
           AND rr.created_at >= $2
           AND EXISTS (
             SELECT 1 FROM user_subscriptions us 
             WHERE us.user_id = u.id 
             AND us.status = 'active' 
             AND us.expires_at > NOW()
           )) as partners,
          
          -- Активный пулл за период
          COALESCE((
            SELECT SUM(i.amount_decimal)
            FROM referral_relations rr
            JOIN users u ON rr.referral_id = u.id
            JOIN investments i ON u.id = i.user_id
            WHERE rr.referrer_id = $1 
            AND rr.created_at >= $2
            AND i.status = 'active'
            AND i.amount_decimal > 0
          ), 0) as activePool,
          
          -- Партнерский профит за период
          COALESCE((
            SELECT SUM(t.amount)
            FROM transactions t
            WHERE t.user_id = $1 
            AND t.type = 'referral_reward'
            AND t.status = 'completed'
            AND t.created_at >= $2
          ), 0) as partnerProfit,
          
          -- Новые пользователи сегодня
          (SELECT COUNT(*) 
           FROM referral_relations rr 
           WHERE rr.referrer_id = $1 
           AND DATE(rr.created_at) = CURRENT_DATE) as newUsers
      `;
      
      try {
        const statsResult = await pool.query(statsQuery, [userId, startDate]);
        stats = statsResult.rows[0] || {};
        console.log(`✅ Period stats result:`, stats);
      } catch (queryError) {
        console.error('❌ Query error:', queryError);
        stats = {};
      }
    } else {
      // Общая статистика (allTime)
      console.log(`📊 Querying all-time stats for user ${userId}`);
      
      const allTimeQuery = `
        SELECT 
          -- Все гости
          (SELECT COUNT(DISTINCT rr.referral_id) 
           FROM referral_relations rr 
           WHERE rr.referrer_id = $1) as guests,
          
          -- Все зарегистрированные рефералы
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1) as referrals,
          
          -- Все рефералы с инвестициями
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1
           AND EXISTS (
             SELECT 1 FROM investments i 
             WHERE i.user_id = u.id 
             AND i.status = 'active' 
             AND i.amount_decimal > 0
           )) as investors,
          
          -- Все рефералы с подпиской
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1
           AND EXISTS (
             SELECT 1 FROM user_subscriptions us 
             WHERE us.user_id = u.id 
             AND us.status = 'active' 
             AND us.expires_at > NOW()
           )) as partners,
          
          -- Весь активный пулл
          COALESCE((
            SELECT SUM(i.amount_decimal)
            FROM referral_relations rr
            JOIN users u ON rr.referral_id = u.id
            JOIN investments i ON u.id = i.user_id
            WHERE rr.referrer_id = $1
            AND i.status = 'active'
            AND i.amount_decimal > 0
          ), 0) as activePool,
          
          -- Весь партнерский профит
          COALESCE((
            SELECT SUM(t.amount)
            FROM transactions t
            WHERE t.user_id = $1 
            AND t.type = 'referral_reward'
            AND t.status = 'completed'
          ), 0) as partnerProfit,
          
          -- Новые пользователи сегодня
          (SELECT COUNT(*) 
           FROM referral_relations rr 
           WHERE rr.referrer_id = $1 
           AND DATE(rr.created_at) = CURRENT_DATE) as newUsers
      `;
      
      try {
        const allTimeResult = await pool.query(allTimeQuery, [userId]);
        stats = allTimeResult.rows[0] || {};
        console.log(`✅ All-time stats result:`, stats);
      } catch (queryError) {
        console.error('❌ All-time query error:', queryError);
        stats = {};
      }
    }
    
    // Неактивный пулл всегда 0 для периодичной статистики
    // (если нужен расчет, нужно добавить логику)
    stats.inactivePool = 0;
    
    // Преобразуем числа
    const formattedStats = {
      guests: parseInt(stats.guests) || 0,
      referrals: parseInt(stats.referrals) || 0,
      investors: parseInt(stats.investors) || 0,
      partners: parseInt(stats.partners) || 0,
      activePool: parseFloat(stats.activePool) || 0,
      inactivePool: 0,
      partnerProfit: parseFloat(stats.partnerProfit) || 0,
      newUsers: parseInt(stats.newUsers) || 0
    };
    
    console.log(`📈 Final stats for period ${period}:`, formattedStats);
    
    res.json({
      ok: true,
      stats: formattedStats,
      period: period,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Error in stats period endpoint:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

app.get('/api/debug/stats-session', authMiddleware, async (req, res) => {
  console.log('🔍 Stats session debug:', {
    sessionId: req.sessionID,
    userId: req.user?.id,
    authenticated: !!req.user?.id
  });
  
  res.json({
    sessionId: req.sessionID,
    userId: req.user?.id,
    authenticated: !!req.user?.id,
    debug: 'This endpoint uses authMiddleware'
  });
});

app.get('/api/debug/headers', async (req, res) => {
  res.json({
    headers: req.headers,
    cookies: req.headers.cookie
  });
});
 // server.js - найдите app.post('/api/auth/signin', ... и обновите:
// ========== Progress check endpoint ==========
app.get('/api/user/progress-status', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log('📝 Checking progress status for user:', userId);
    
    const { rows } = await pool.query(
      `SELECT id, telegram_id, username, 
              progress_completed, progress_step,
              disclaimer_accepted, disclaimer_accepted_at
       FROM users 
       WHERE id = $1`,
      [userId]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ 
        ok: false, 
        error: 'User not found' 
      });
    }
    
    const user = rows[0];
    
    console.log('✅ Progress status:', {
      userId: user.id,
      progress_completed: user.progress_completed,
      progress_step: user.progress_step,
      disclaimer_accepted: user.disclaimer_accepted
    });
    
    res.json({ 
      ok: true,
      user: {
        id: user.id,
        progress_completed: user.progress_completed || false,
        progress_step: user.progress_step || 0,
        disclaimer_accepted: user.disclaimer_accepted || false,
        disclaimer_accepted_at: user.disclaimer_accepted_at
      }
    });
    
  } catch (error) {
    console.error('❌ Progress status error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Server error',
      details: error.message 
    });
  }
});
// ========== Complete user registration after disclaimer ==========
app.post('/api/user/complete-registration', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const { walletAddress, referralLink } = req.body;
    
    console.log('📝 Completing registration for user:', userId, {
      walletAddress: walletAddress ? 'provided' : 'not provided',
      referralLink: referralLink ? 'provided' : 'not provided'
    });

    // Валидация wallet address если он предоставлен
    if (walletAddress) {
      // Проверка формата BSC адреса
      const isValidAddress = /^0x[0-9a-fA-F]{40}$/.test(walletAddress.trim());
      if (!isValidAddress) {
        return res.status(400).json({
          ok: false,
          error: 'Invalid wallet address format'
        });
      }
    }

    // Обновляем пользователя в базе данных
    const result = await pool.query(
      `UPDATE users 
       SET progress_completed = true,
           progress_step = 8,
           wallet_address = COALESCE($2, wallet_address),
           bsc_wallet = COALESCE($2, bsc_wallet),
           referral_link_bitnest = COALESCE($3, referral_link_bitnest),
           disclaimer_accepted = true,
           disclaimer_accepted_at = NOW(),
           updated_at = NOW()
       WHERE id = $1
       RETURNING id, telegram_id, username, 
                 progress_completed, progress_step,
                 wallet_address, bsc_wallet,
                 referral_link_bitnest,
                 disclaimer_accepted, disclaimer_accepted_at`,
      [userId, walletAddress ? walletAddress.trim() : null, referralLink]
    );
    
    if (result.rowCount === 0) {
      return res.status(404).json({ 
        ok: false, 
        error: 'User not found' 
      });
    }
    
    const updatedUser = result.rows[0];
    
    console.log('✅ Registration completed for user:', {
      userId: updatedUser.id,
      progress_completed: updatedUser.progress_completed,
      wallet_address: updatedUser.wallet_address ? 'saved' : 'not saved',
      referral_link_bitnest: updatedUser.referral_link_bitnest ? 'saved' : 'not saved'
    });
    
    res.json({ 
      ok: true,
      message: 'Registration completed successfully',
      user: {
        id: updatedUser.id,
        progress_completed: updatedUser.progress_completed,
        progress_step: updatedUser.progress_step,
        walletAddress: updatedUser.wallet_address || updatedUser.bsc_wallet,
        referralLink: updatedUser.referral_link_bitnest,
        disclaimer_accepted: updatedUser.disclaimer_accepted
      }
    });
    
  } catch (error) {
    console.error('❌ Complete registration error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Server error',
      details: error.message 
    });
  }
});
// В server.js добавьте:

app.get('/api/user/registration-data', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log('📝 Getting registration data for user:', userId);
    
    const { rows } = await pool.query(
      `SELECT id, telegram_id, username, 
              wallet_address, bsc_wallet,
              referral_link_bitnest,
              progress_completed, progress_step,
              disclaimer_accepted
       FROM users 
       WHERE id = $1`,
      [userId]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ 
        ok: false, 
        error: 'User not found' 
      });
    }
    
    const user = rows[0];
    
    res.json({
      ok: true,
      user: {
        id: user.id,
        walletAddress: user.wallet_address || user.bsc_wallet,
        referralLink: user.referral_link_bitnest,
        progressCompleted: user.progress_completed,
        progressStep: user.progress_step,
        disclaimerAccepted: user.disclaimer_accepted
      }
    });
    
  } catch (error) {
    console.error('❌ Get registration data error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Server error',
      details: error.message 
    });
  }
});
app.post('/api/user/update-progress', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log('📝 Updating progress for user:', userId);
    
    const result = await pool.query(
      `UPDATE users 
       SET progress_completed = true,
           progress_step = 8,
           updated_at = NOW()
       WHERE id = $1
       RETURNING id, telegram_id, username, progress_completed, progress_step`,
      [userId]
    );
    
    if (result.rowCount === 0) {
      return res.status(404).json({ 
        ok: false, 
        error: 'User not found' 
      });
    }
    
    const updatedUser = result.rows[0];
    
    console.log('✅ Progress updated for user:', {
      userId: updatedUser.id,
      progress_completed: updatedUser.progress_completed,
      progress_step: updatedUser.progress_step
    });
    
    res.json({ 
      ok: true,
      message: 'Progress completed successfully',
      user: {
        id: updatedUser.id,
        progress_completed: updatedUser.progress_completed,
        progress_step: updatedUser.progress_step
      }
    });
    
  } catch (error) {
    console.error('❌ Update progress error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Server error',
      details: error.message 
    });
  }
});
app.post('/api/auth/signin', async (req, res) => {
  try {
    const { initData } = req.body;
    
    console.log('🔐 Sign in attempt with initData:', initData ? 'Has data' : 'No data');
    
    if (!initData) {
      return res.status(401).json({ ok: false, error: 'Init data required' });
    }

    // Простая валидация initData
    const params = new URLSearchParams(initData);
    const userParam = params.get('user');
    
    if (!userParam) {
      return res.status(401).json({ ok: false, error: 'No user data in initData' });
    }

    const userData = JSON.parse(userParam);
    const telegramId = userData.id;

    if (!telegramId) {
      return res.status(401).json({ ok: false, error: 'No user ID' });
    }

    console.log('✅ Telegram user data:', userData);

    // Поиск или создание пользователя
    const { rows: userRows } = await pool.query(
      `INSERT INTO users (telegram_id, username, first_name, last_name, lang, is_premium, last_activity)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       ON CONFLICT (telegram_id) 
       DO UPDATE SET 
         username = EXCLUDED.username,
         first_name = EXCLUDED.first_name,
         last_name = EXCLUDED.last_name,
         lang = EXCLUDED.lang,
         is_premium = EXCLUDED.is_premium,
         last_activity = NOW()
       RETURNING id, telegram_id, username, first_name, last_name, balance_usdt, lang,
                 wallet_address, bsc_wallet, disclaimer_accepted, disclaimer_accepted_at`,
      [
        telegramId,
        userData.username,
        userData.first_name,
        userData.last_name,
        userData.lang,
        userData.is_premium || false
      ]
    );

    const user = userRows[0];
    
    // Устанавливаем сессию
    req.session.userId = user.id;
    req.session.telegramId = user.telegram_id;
    
    console.log('✅ Session data set:', {
      sessionId: req.sessionID,
      userId: req.session.userId,
      telegramId: req.session.telegramId
    });

    // Явно сохраняем сессию
    req.session.save((err) => {
      if (err) {
        console.error('❌ Session save error:', err);
        return res.status(500).json({ ok: false, error: 'Session save failed' });
      }
      
      console.log('💾 Session saved successfully, sessionId:', req.sessionID);
      
      // Устанавливаем куки вручную если нужно
      res.cookie('bitnest.sid', req.sessionID, {
        secure: true,
        httpOnly: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000,
        domain: 'sevenlabdao.com'
      });

      res.json({ 
        ok: true, 
        user: {
          id: user.id,
          telegramId: user.telegram_id,
          username: user.username,
          firstName: user.first_name,
          lastName: user.last_name,
          balance: user.balance_usdt || 0,
          language: user.lang,
          walletAddress: user.wallet_address || user.bsc_wallet,
          disclaimer_accepted: user.disclaimer_accepted || false,
          disclaimer_accepted_at: user.disclaimer_accepted_at
        },
        sessionId: req.sessionID // Для отладки
      });
    });
    
  } catch (error) {
    console.error('❌ Sign in error:', error);
    res.status(500).json({ ok: false, error: 'Internal server error: ' + error.message });
  }
});
// Пример для Node.js/Express сервера
// server.js - добавьте после других API эндпоинтов (например, после /api/command/data)

// ========== Disclaimer endpoints ==========
app.post('/api/user/update-disclaimer', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log('📝 Updating disclaimer for user:', userId);
    
    // Обновляем пользователя в базе данных
    const result = await pool.query(
      `UPDATE users 
       SET disclaimer_accepted = true,
           disclaimer_accepted_at = NOW(),
           updated_at = NOW()
       WHERE id = $1
       RETURNING id, telegram_id, username, disclaimer_accepted, disclaimer_accepted_at`,
      [userId]
    );
    
    if (result.rowCount === 0) {
      return res.status(404).json({ 
        ok: false, 
        error: 'User not found' 
      });
    }
    
    const updatedUser = result.rows[0];
    
    console.log('✅ Disclaimer updated for user:', {
      userId: updatedUser.id,
      telegramId: updatedUser.telegram_id,
      disclaimer_accepted: updatedUser.disclaimer_accepted,
      disclaimer_accepted_at: updatedUser.disclaimer_accepted_at
    });
    
    res.json({ 
      ok: true,
      message: 'Disclaimer accepted successfully',
      user: {
        id: updatedUser.id,
        disclaimer_accepted: updatedUser.disclaimer_accepted,
        disclaimer_accepted_at: updatedUser.disclaimer_accepted_at
      }
    });
    
  } catch (error) {
    console.error('❌ Update disclaimer error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Server error',
      details: error.message 
    });
  }
});

// Получение статуса дисклеймера
app.get('/api/user/disclaimer-status', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log('📝 Getting disclaimer status for user:', userId);
    
    const { rows } = await pool.query(
      `SELECT id, telegram_id, username, 
              disclaimer_accepted, disclaimer_accepted_at
       FROM users 
       WHERE id = $1`,
      [userId]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ 
        ok: false, 
        error: 'User not found' 
      });
    }
    
    const user = rows[0];
    
    console.log('✅ Disclaimer status:', {
      userId: user.id,
      disclaimer_accepted: user.disclaimer_accepted,
      disclaimer_accepted_at: user.disclaimer_accepted_at
    });
    
    res.json({ 
      ok: true,
      user: {
        id: user.id,
        disclaimer_accepted: user.disclaimer_accepted || false,
        disclaimer_accepted_at: user.disclaimer_accepted_at
      }
    });
    
  } catch (error) {
    console.error('❌ Get disclaimer status error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Server error',
      details: error.message 
    });
  }
});
app.get('/api/user/disclaimer-status', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log('📝 Getting disclaimer status for user:', userId);
    
    const { rows } = await pool.query(
      `SELECT id, telegram_id, username, 
              disclaimer_accepted, disclaimer_accepted_at
       FROM users 
       WHERE id = $1`,
      [userId]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ 
        ok: false, 
        error: 'User not found' 
      });
    }
    
    const user = rows[0];
    
    console.log('✅ Disclaimer status:', {
      userId: user.id,
      disclaimer_accepted: user.disclaimer_accepted,
      disclaimer_accepted_at: user.disclaimer_accepted_at
    });
    
    res.json({ 
      ok: true,
      user: {
        id: user.id,
        disclaimer_accepted: user.disclaimer_accepted || false,
        disclaimer_accepted_at: user.disclaimer_accepted_at
      }
    });
    
  } catch (error) {
    console.error('❌ Get disclaimer status error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Server error',
      details: error.message 
    });
  }
});
// Добавьте в server.js
app.get('/api/debug/investments-error', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    // Попробуем выполнить запрос по частям для диагностики
    console.log('🔍 Debug investments for user:', req.session.userId);

    // Проверим существование таблиц
    const tables = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('investments', 'referral_relations', 'investment_cycles')
    `);
    
    console.log('📊 Available tables:', tables.rows);

    res.json({
      userId: req.session.userId,
      availableTables: tables.rows,
      message: 'Debug information'
    });
  } catch (error) {
    console.error('Debug investments error:', error);
    res.status(500).json({ error: error.message });
  }
});
// Добавьте этот эндпоинт для тестирования
app.post('/api/auth/telegram-signin', async (req, res) => {
  try {
    const tg = window.Telegram?.WebApp;
    if (!tg) {
      return res.status(400).json({ ok: false, error: 'Telegram WebApp not available' });
    }

    const initData = tg.initData;
    if (!initData) {
      return res.status(400).json({ ok: false, error: 'No init data from Telegram' });
    }

    console.log('🔐 Telegram signin with initData');

    // Отправляем initData на сервер для аутентификации
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ initData })
    });

    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error('Telegram signin error:', error);
    res.status(500).json({ ok: false, error: error.message });
  }
});
// server.js - найдите app.get('/api/auth/check', ... и обновите:

app.get('/api/auth/check', async (req, res) => {
  try {
    console.log('🔍 Auth check - session data:', {
      sessionId: req.sessionID,
      userId: req.session.userId,
      hasSession: !!req.session.userId
    });

    if (!req.session.userId) {
      console.log('❌ No user ID in session');
      return res.json({ ok: true, user: null });
    }

    const { rows: userRows } = await pool.query(
      `SELECT id, telegram_id, username, first_name, last_name, 
              balance_usdt, lang, wallet_address, bsc_wallet,
              disclaimer_accepted, disclaimer_accepted_at
       FROM users WHERE id = $1`,
      [req.session.userId]
    );

    if (userRows.length === 0) {
      console.log('❌ User not found in database for session userId:', req.session.userId);
      req.session.destroy();
      return res.json({ ok: true, user: null });
    }

    const user = userRows[0];
    
    console.log('✅ User found in auth check:', user.id);
    
    res.json({ 
      ok: true, 
      user: {
        id: user.id,
        telegramId: user.telegram_id,
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        balance: user.balance_usdt || 0,
        language: user.lang,
        walletAddress: user.wallet_address || user.bsc_wallet,
        disclaimer_accepted: user.disclaimer_accepted || false,
        disclaimer_accepted_at: user.disclaimer_accepted_at
      }
    });
  } catch (error) {
    console.error('❌ Auth check error:', error);
    res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

  app.post('/api/auth/signout', async (req, res) => {
    try {
      req.session.destroy();
      res.json({ ok: true });
    } catch (error) {
      console.error('Sign out error:', error);
      res.status(500).json({ ok: false, error: 'Internal server error' });
    }
  });

  // User profile endpoint
  app.get('/api/user/profile', async (req, res) => {
    try {
      if (!req.session.userId) {
        return res.status(401).json({ ok: false, error: 'Not authenticated' });
      }

      const { rows: userRows } = await pool.query(
        `SELECT u.*, 
                us.status as subscription_status,
                us.expires_at as subscription_expires
         FROM users u
         LEFT JOIN user_subscriptions us ON u.id = us.user_id AND us.status = 'active'
         WHERE u.id = $1`,
        [req.session.userId]
      );

      if (userRows.length === 0) {
        return res.status(404).json({ ok: false, error: 'User not found' });
      }

      const user = userRows[0];
      
      res.json({ 
        ok: true, 
        user: {
          id: user.id,
          telegramId: user.telegram_id,
          username: user.username,
          firstName: user.first_name,
          lastName: user.last_name,
          balance: user.balance_usdt || 0,
          language: user.lang,
          walletAddress: user.wallet_address || user.bsc_wallet,
          subscription: {
            active: user.subscription_status === 'active',
            expiresAt: user.subscription_expires
          }
        }
      });
    } catch (error) {
      console.error('Profile fetch error:', error);
      res.status(500).json({ ok: false, error: 'Internal server error' });
    }
  });

app.get('/api/investments', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    console.log('📈 Fetching investments for user:', req.session.userId);

    let totalProfit = 0;
    let referralCount = 0;
    let teamCount = 0;
    let totalCapital = 0;
    let nearestInvestment = null;

    try {
      // 1. Получаем активные инвестиции пользователя
      const activeInvestmentsQuery = `
        SELECT * FROM investments 
        WHERE user_id = $1 AND status = 'active'
        ORDER BY 
          CASE WHEN expires_at IS NOT NULL THEN expires_at ELSE created_at + INTERVAL '14 days' END ASC
        LIMIT 1
      `;
      
      const { rows: activeInvestments } = await pool.query(activeInvestmentsQuery, [req.session.userId]);
      
      console.log(`📊 Found ${activeInvestments.length} active investments for user`);

if (activeInvestments.length > 0) {
  const investment = activeInvestments[0];
  
  // Рассчитываем дату окончания (используем expires_at или вычисляем из created_at + period_days)
  let expiresAt = investment.expires_at;
  let daysLeft = 14; // по умолчанию
  
  if (expiresAt) {
    const now = new Date();
    expiresAt = new Date(expiresAt);
    const timeDiff = expiresAt - now;
    daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  } else if (investment.period_days) {
    daysLeft = investment.period_days;
  }

  // Рассчитываем возврат - ИСПРАВЛЕННАЯ ЛОГИКА
  const amount = parseFloat(investment.amount_decimal) || 0;
  const expectedProfit = parseFloat(investment.expected_profit) || 0;
  const returnAmount = parseFloat(investment.return_amount) || 0;
  
  // Минимальный возврат - это исходная сумма
  const returnMin = amount;
  
  // Максимальный возврат - исходная сумма + прибыль
  let returnMax;
  
  if (expectedProfit > amount) {
    // Если expectedProfit больше суммы, значит это общая сумма возврата
    returnMax = expectedProfit;
  } else if (expectedProfit > 0) {
    // Если expectedProfit меньше суммы, значит это прибыль
    returnMax = amount + expectedProfit;
  } else if (returnAmount > amount) {
    // Если return_amount больше суммы, используем его
    returnMax = returnAmount;
  } else if (returnAmount > 0) {
    // Если return_amount меньше суммы, прибавляем к сумме
    returnMax = amount + returnAmount;
  } else {
    // По умолчанию: сумма + 15%
    returnMax = amount * 1.15;
  }

  // Убедимся что returnMax всегда больше returnMin
  if (returnMax <= returnMin) {
    returnMax = returnMin * 1.15; // Минимум +15%
  }

  nearestInvestment = {
    id: investment.id,
    duration: `${daysLeft > 0 ? daysLeft : 1} Days`,
    returnMin: Math.round(returnMin),
    returnMax: Math.round(returnMax),
    txHash: investment.tx_hash || `INV-${investment.id}`,
    expires_at: expiresAt,
    daysLeft: daysLeft,
    isRealData: true
  };

  console.log('✅ Using REAL investment data:', {
    amount,
    expectedProfit,
    returnAmount,
    calculatedReturnMin: returnMin,
    calculatedReturnMax: returnMax
  });
}

      // 2. Получаем общую статистику
      const statsQuery = `
        SELECT 
          COALESCE(SUM(
            CASE 
              WHEN profit_amount ~ '^[0-9.]+$' THEN profit_amount::numeric 
              ELSE 0 
            END
          ), 0) as total_profit,
          COALESCE(SUM(amount_decimal), 0) as total_capital
        FROM investments 
        WHERE user_id = $1 AND status = 'active'
      `;
      
      const { rows: statsRows } = await pool.query(statsQuery, [req.session.userId]);
      
      if (statsRows.length > 0) {
        totalProfit = parseFloat(statsRows[0].total_profit) || 0;
        totalCapital = parseFloat(statsRows[0].total_capital) || 0;
      }

    } catch (error) {
      console.warn('⚠️ Investments query failed:', error.message);
    }

    // 3. Получаем реферальную статистику
    try {
      const referralQuery = `
        SELECT COUNT(*) as referral_count
        FROM referral_relations 
        WHERE referrer_id = $1
      `;
      const { rows: referralRows } = await pool.query(referralQuery, [req.session.userId]);
      referralCount = parseInt(referralRows[0]?.referral_count) || 0;

      const teamQuery = `
        SELECT COUNT(*) as team_count
        FROM referral_relations rr2
        WHERE rr2.referrer_id IN (
          SELECT referral_id FROM referral_relations WHERE referrer_id = $1
        )
      `;
      const { rows: teamRows } = await pool.query(teamQuery, [req.session.userId]);
      teamCount = parseInt(teamRows[0]?.team_count) || 0;
    } catch (error) {
      console.warn('⚠️ Referral relations query failed:', error.message);
    }

    // 4. Если нет реальных данных, используем заглушки
    if (!nearestInvestment) {
      nearestInvestment = {
        id: 21,
        duration: "14 Days",
        returnMin: 1389,
        returnMax: 1590.23,
        txHash: "06D903J094I0JNE83",
        isRealData: false
      };
      console.log('ℹ️ Using DEFAULT investment data (no active investments found)');
    }

    // Рассчитываем процент профита
    const profitPercentage = totalCapital > 0 ? 
      Math.round((totalProfit / totalCapital) * 100) : 28;

    console.log('✅ Final investments data:', {
      totalProfit,
      profitPercentage,
      referralCount,
      teamCount,
      totalCapital,
      hasRealInvestmentData: nearestInvestment.isRealData
    });

    res.json({ 
      ok: true, 
      stats: {
        profit: totalProfit > 0 ? totalProfit : 9822,
        profitPercentage: profitPercentage > 0 ? profitPercentage : 28,
        referrals: referralCount > 0 ? referralCount : 2842,
        team: teamCount > 0 ? teamCount : 18482,
        capital: totalCapital > 0 ? totalCapital : 800.235,
        currentCycle: nearestInvestment
      },
      hasRealData: nearestInvestment.isRealData
    });
  } catch (error) {
    console.error('❌ Investments fetch error:', error);
    
    res.json({ 
      ok: true, 
      stats: {
        profit: 9822,
        profitPercentage: 28,
        referrals: 2842,
        team: 18482,
        capital: 800.235,
        currentCycle: {
          id: 21,
          duration: "14 Days",
          returnMin: 1389,
          returnMax: 1590.23,
          txHash: "06D903J094I0JNE83",
          isRealData: false
        }
      },
      hasRealData: false
    });
  }
});
// Добавьте в начале, перед всеми маршрутами /api/user/*
app.use('/api/user/{*path}', (req, res, next) => {
  console.log('👤 User API Request:', {
    method: req.method,
    originalUrl: req.originalUrl,
    path: req.path,
    params: req.params,
    query: req.query,
    sessionUserId: req.session?.userId
  });
  next();
});

app.get('/api/debug/routes', (req, res) => {
  const routes = [
    { path: '/api/user/activated-levels', method: 'GET' },
    { path: '/api/user/:id', method: 'GET' },
    { path: '/api/user/sync-levels', method: 'POST' },
    { path: '/api/user/upgrade-level', method: 'POST' }
  ];
  
  res.json({
    routes: routes,
    note: 'Specific routes should come before parameterized routes'
  });
});
 // ЗАМЕНИТЕ текущий app.get('/api/referrals/stats'
app.get('/api/referrals/stats', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    console.log('📊 Fetching referral stats for user:', req.session.userId);

    // Проверяем существование таблицы referral_relations
    const { rows: tableCheck } = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'referral_relations'
      ) as table_exists
    `);

    const hasReferralTable = tableCheck[0]?.table_exists;

    let referrals = 0;
    let team = 0;
    let capital = 0;

    if (hasReferralTable) {
      try {
        // Прямые рефералы
        const referralsQuery = `
          SELECT COUNT(*) as referral_count
          FROM referral_relations 
          WHERE referrer_id = $1
        `;
        const { rows: refRows } = await pool.query(referralsQuery, [req.session.userId]);
        referrals = parseInt(refRows[0]?.referral_count) || 0;

        // Команда (рефералы рефералов)
        const teamQuery = `
          SELECT COUNT(*) as team_count
          FROM referral_relations rr2
          WHERE rr2.referrer_id IN (
            SELECT referral_id FROM referral_relations WHERE referrer_id = $1
          )
        `;
        const { rows: teamRows } = await pool.query(teamQuery, [req.session.userId]);
        team = parseInt(teamRows[0]?.team_count) || 0;

        // Капитал из investments таблицы
        const { rows: tableCheck2 } = await pool.query(`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'investments'
          ) as table_exists
        `);

        if (tableCheck2[0]?.table_exists) {
          const capitalQuery = `
            SELECT COALESCE(SUM(amount_decimal), 0) as total_capital
            FROM investments 
            WHERE user_id = $1 AND status = 'active'
          `;
          const { rows: capitalRows } = await pool.query(capitalQuery, [req.session.userId]);
          capital = parseFloat(capitalRows[0]?.total_capital) || 0;
        }

      } catch (error) {
        console.warn('⚠️ Referral stats query failed, using defaults:', error.message);
      }
    }

    // Fallback значения если таблиц нет или произошла ошибка
    if (!hasReferralTable || referrals === 0) {
      referrals = 13000;
      team = 13000;
      capital = 100000;
    }

    console.log('✅ Referral stats prepared:', { referrals, team, capital });

    res.json({ 
      ok: true, 
      stats: {
        referrals: referrals,
        team: team,
        capital: capital
      }
    });
  } catch (error) {
    console.error('❌ Referral stats fetch error:', error);
    
    // Fallback данные
    res.json({ 
      ok: true, 
      stats: {
        referrals: 13000,
        team: 13000,
        capital: 100000
      }
    });
  }
});

  // Subscription endpoint
  app.get('/api/subscription', async (req, res) => {
    try {
      if (!req.session.userId) {
        return res.status(401).json({ ok: false, error: 'Not authenticated' });
      }

      const { rows } = await pool.query(
        `SELECT us.* 
         FROM user_subscriptions us
         WHERE us.user_id = $1 AND us.status = 'active' AND us.expires_at > NOW()
         ORDER BY us.expires_at DESC 
         LIMIT 1`,
        [req.session.userId]
      );

      const subscription = rows[0];

      res.json({ 
        ok: true, 
        subscription: {
          active: !!subscription,
          type: subscription?.subscription_type || 'free',
          expiresAt: subscription?.expires_at || null
        }
      });
    } catch (error) {
      console.error('Subscription fetch error:', error);
      res.status(500).json({ ok: false, error: 'Internal server error' });
    }
  });
app.post('/admin/manage-user', async (req, res) => {
    try {
        const { secret } = req.query;
        const { action, userId, telegramId } = req.body;

        // Проверка секретного ключа
        if (secret !== process.env.ADMIN_SECRET) {
            return res.status(403).json({ success: false, error: 'Access denied' });
        }

        if (!action || !userId) {
            return res.status(400).json({ success: false, error: 'Missing required parameters' });
        }

        if (action === 'unblock') {
            // Разблокировка пользователя
            await pool.query(
                'UPDATE users SET is_blocked = false WHERE id = $1',
                [userId]
            );
            
            return res.json({ 
                success: true, 
                message: 'Пользователь успешно разблокирован' 
            });

        } else if (action === 'delete') {
            // Удаление пользователя из базы данных
            // Сначала удаляем связанные записи, затем пользователя
            await pool.query('BEGIN');

            try {
                // Удаляем связанные записи (адаптируйте под вашу схему базы данных)
                await pool.query('DELETE FROM investments WHERE user_id = $1', [userId]);
                await pool.query('DELETE FROM transactions WHERE user_id = $1', [userId]);
                await pool.query('DELETE FROM referral_relations WHERE referrer_id = $1 OR referral_id = $1', [userId]);
                await pool.query('DELETE FROM user_active_levels WHERE user_id = $1', [userId]);
                await pool.query('DELETE FROM loan_management WHERE user_id = $1', [userId]);
                
                // Удаляем самого пользователя
                await pool.query('DELETE FROM users WHERE id = $1', [userId]);

                await pool.query('COMMIT');
                
                return res.json({ 
                    success: true, 
                    message: 'Пользователь и все связанные данные успешно удалены' 
                });

            } catch (error) {
                await pool.query('ROLLBACK');
                throw error;
            }

        } else {
            return res.status(400).json({ success: false, error: 'Invalid action' });
        }

    } catch (error) {
        console.error('User management error:', error);
        return res.status(500).json({ 
            success: false, 
            error: 'Internal server error: ' + error.message 
        });
    }
});
app.get('/admin/notify', async (req, res) => {
    try {
        console.log('🔄 Loading notify page data...');
        
        // Получаем общее количество пользователей
        const totalUsersResult = await pool.query('SELECT COUNT(*) as count FROM users');
        const totalUsers = parseInt(totalUsersResult.rows[0]?.count) || 0;

        // Получаем количество активных пользователей
        const activeUsersResult = await pool.query(
            "SELECT COUNT(*) as count FROM users WHERE (last_activity > NOW() - INTERVAL '7 days' OR created_at > NOW() - INTERVAL '7 days') AND (status IS NULL OR status = 'active')"
        );
        const activeUsers = parseInt(activeUsersResult.rows[0]?.count) || 0;

        // Получаем количество заблокированных пользователей
        const blockedUsersResult = await pool.query(
            "SELECT COUNT(*) as count FROM users WHERE status = 'blocked'"
        );
        const blockedUsers = parseInt(blockedUsersResult.rows[0]?.count) || 0;

        // СРОЧНЫЕ подписки (1-3 дня)
        const urgentSubscriptionsResult = await pool.query(`
            SELECT COUNT(DISTINCT us.user_id) as count 
            FROM user_subscriptions us
            INNER JOIN users u ON us.user_id = u.id
            WHERE us.status = 'active' 
            AND us.expires_at BETWEEN NOW() AND NOW() + INTERVAL '3 days'
            AND (u.status IS NULL OR u.status != 'blocked')
        `);
        const urgentSubscriptions = parseInt(urgentSubscriptionsResult.rows[0]?.count) || 0;

        // Истекающие подписки (4-7 дней)
        const expiringSubscriptionsResult = await pool.query(`
            SELECT COUNT(DISTINCT us.user_id) as count 
            FROM user_subscriptions us
            INNER JOIN users u ON us.user_id = u.id
            WHERE us.status = 'active' 
            AND us.expires_at BETWEEN NOW() + INTERVAL '4 days' AND NOW() + INTERVAL '7 days'
            AND (u.status IS NULL OR u.status != 'blocked')
        `);
        const expiringSubscriptions = parseInt(expiringSubscriptionsResult.rows[0]?.count) || 0;

        // НОВАЯ СТАТИСТИКА: пользователи без инвестиций
        const noInvestmentsUsersResult = await pool.query(`
            SELECT COUNT(DISTINCT u.id) as count 
            FROM users u
            WHERE (u.status IS NULL OR u.status != 'blocked')
            AND NOT EXISTS (
                SELECT 1 FROM investments i 
                WHERE i.user_id = u.id 
                AND i.status = 'active'
                AND i.amount_decimal > 0
            )
            AND u.created_at <= NOW() - INTERVAL '1 hour'
        `);
        const noInvestmentsUsers = parseInt(noInvestmentsUsersResult.rows[0]?.count) || 0;

        // Истекшие подписки
        const expiredSubscriptionsResult = await pool.query(`
            SELECT COUNT(DISTINCT us.user_id) as count 
            FROM user_subscriptions us
            INNER JOIN users u ON us.user_id = u.id
            WHERE (us.status = 'pending' OR us.expires_at < NOW())
            AND (u.status IS NULL OR u.status != 'blocked')
        `);
        const expiredSubscriptions = parseInt(expiredSubscriptionsResult.rows[0]?.count) || 0;

        // Детальная статистика
        const pendingSubscriptionsResult = await pool.query(`
            SELECT COUNT(DISTINCT us.user_id) as count 
            FROM user_subscriptions us
            INNER JOIN users u ON us.user_id = u.id
            WHERE us.status = 'pending'
            AND (u.status IS NULL OR u.status != 'blocked')
        `);
        const pendingSubscriptions = parseInt(pendingSubscriptionsResult.rows[0]?.count) || 0;

        const timeExpiredSubscriptionsResult = await pool.query(`
            SELECT COUNT(DISTINCT us.user_id) as count 
            FROM user_subscriptions us
            INNER JOIN users u ON us.user_id = u.id
            WHERE us.status = 'active'
            AND us.expires_at < NOW()
            AND (u.status IS NULL OR u.status != 'blocked')
        `);
        const timeExpiredSubscriptions = parseInt(timeExpiredSubscriptionsResult.rows[0]?.count) || 0;

        // Получаем список заблокированных пользователей
        const blockedUsersListResult = await pool.query(`
            SELECT id, telegram_id, username, created_at 
            FROM users 
            WHERE status = 'blocked'
            ORDER BY created_at DESC
            LIMIT 50
        `);

        console.log('✅ Notify page data loaded successfully');

        res.renderWithQuery('notify', { 
            totalUsers,
            activeUsers,
            blockedUsers,
            urgentSubscriptions,
            expiringSubscriptions,
            noInvestmentsUsers, // НОВЫЙ ПАРАМЕТР
            expiredSubscriptions,
            pendingSubscriptions,
            timeExpiredSubscriptions,
            blockedUsersList: blockedUsersListResult.rows
        });
    } catch (error) {
        console.error('❌ Error loading notify page:', error);
        logger.error('Error loading notify page:', error);
        
        // Fallback значения
        res.renderWithQuery('notify', { 
            totalUsers: 0,
            activeUsers: 0,
            blockedUsers: 0,
            urgentSubscriptions: 0,
            expiringSubscriptions: 0,
            noInvestmentsUsers: 0,
            expiredSubscriptions: 0,
            pendingSubscriptions: 0,
            timeExpiredSubscriptions: 0,
            blockedUsersList: []
        });
    }
});


// Эндпоинт для детальной отладки подписок
app.get('/admin/debug/subscriptions', async (req, res) => {
  try {
    // Все подписки
    const allSubscriptions = await pool.query(`
      SELECT us.*, u.telegram_id, u.username, u.created_at as user_created
      FROM user_subscriptions us
      INNER JOIN users u ON us.user_id = u.id
      WHERE (u.status IS NULL OR u.status != 'blocked')
      ORDER BY us.status, us.expires_at
    `);

    // Pending подписки
    const pendingSubscriptions = await pool.query(`
      SELECT us.*, u.telegram_id, u.username 
      FROM user_subscriptions us
      INNER JOIN users u ON us.user_id = u.id
      WHERE us.status = 'pending'
      AND (u.status IS NULL OR u.status != 'blocked')
      ORDER BY us.created_at DESC
    `);

    // Истекшие по времени подписки
    const timeExpiredSubscriptions = await pool.query(`
      SELECT us.*, u.telegram_id, u.username,
             CEIL(DATE_PART('day', NOW() - us.expires_at)) as days_expired
      FROM user_subscriptions us
      INNER JOIN users u ON us.user_id = u.id
      WHERE us.status = 'active'
      AND us.expires_at < NOW()
      AND (u.status IS NULL OR u.status != 'blocked')
      ORDER BY us.expires_at DESC
    `);

    // Истекающие подписки
    const expiringSubscriptions = await pool.query(`
      SELECT us.*, u.telegram_id, u.username,
             CEIL(DATE_PART('day', us.expires_at - NOW())) as days_left
      FROM user_subscriptions us
      INNER JOIN users u ON us.user_id = u.id
      WHERE us.status = 'active'
      AND us.expires_at BETWEEN NOW() AND NOW() + INTERVAL '7 days'
      AND (u.status IS NULL OR u.status != 'blocked')
      ORDER BY us.expires_at ASC
    `);

    res.json({
      summary: {
        total: allSubscriptions.rows.length,
        pending: pendingSubscriptions.rows.length,
        timeExpired: timeExpiredSubscriptions.rows.length,
        expiring: expiringSubscriptions.rows.length,
        active: allSubscriptions.rows.filter(sub => sub.status === 'active' && sub.expires_at > new Date()).length
      },
      details: {
        all: allSubscriptions.rows,
        pending: pendingSubscriptions.rows,
        timeExpired: timeExpiredSubscriptions.rows,
        expiring: expiringSubscriptions.rows
      }
    });
  } catch (error) {
    console.error('Error in subscriptions debug:', error);
    res.status(500).json({ error: error.message });
  }
});
app.get('/admin/debug/users', async (req, res) => {
  try {
    const totalResult = await pool.query('SELECT COUNT(*) as count FROM users');
    const allUsersResult = await pool.query('SELECT id, telegram_id, username, created_at FROM users LIMIT 10');
    
    res.json({
      totalCount: totalResult.rows[0].count,
      sampleUsers: allUsersResult.rows,
      database: pool.options.database // покажет имя базы данных
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
  /**
   * Страница кошельков
   */
  app.get('/admin/wallets', async (req, res) => {
    try {
      const { rows: wallets } = await pool.query('SELECT * FROM wallets ORDER BY amount DESC');
      const { rows: totalBalanceRows } = await pool.query('SELECT SUM(amount) as "totalBalance" FROM wallets');

      res.renderWithQuery('wallets', { 
        wallets: wallets,
        totalBalance: totalBalanceRows[0].totalBalance || 0,
        activeWallets: wallets.filter(w => w.amount > 0).length
      });
    } catch (error) {
      logger.error('Error loading wallets:', error);
      res.renderWithQuery('wallets', { 
        wallets: [],
        totalBalance: 0,
        activeWallets: 0
      });
    }
  });

  /**
   * Страница настроек
   */
  app.get('/admin/settings', async (req, res) => {
    try {
      const { rows: totalUsersRows } = await pool.query('SELECT COUNT(*) as "totalUsers" FROM users');
      res.renderWithQuery('settings', { totalUsers: totalUsersRows[0].totalUsers });
    } catch (error) {
      logger.error('Error loading settings:', error);
      res.renderWithQuery('settings', { totalUsers: 0 });
    }
  });
/**
 * Главная страница административной панели
 */
app.get('/admin', async (req, res) => {
  try {
    console.log('🔄 Загрузка данных для дашборда...');
    
    // Получаем общее количество пользователей
    const totalUsersResult = await pool.query('SELECT COUNT(*) as count FROM users');
    const totalUsers = parseInt(totalUsersResult.rows[0]?.count) || 0;
    console.log('👥 Total users:', totalUsers);

    // Подсчёт новых пользователей за последние 30 дней
    const newUsersResult = await pool.query(
      "SELECT COUNT(*) as count FROM users WHERE created_at >= NOW() - INTERVAL '30 days'"
    );
    const newUsers = parseInt(newUsersResult.rows[0]?.count) || 0;
    console.log('🆕 New users (30 days):', newUsers);

    // Получаем количество активных пользователей (используем last_activity или created_at)
    const activeUsersResult = await pool.query(
      "SELECT COUNT(*) as count FROM users WHERE (last_activity > NOW() - INTERVAL '7 days' OR created_at > NOW() - INTERVAL '7 days') AND (status IS NULL OR status = 'active')"
    );
    const activeUsers = parseInt(activeUsersResult.rows[0]?.count) || 0;
    console.log('🚀 Active users (7 days):', activeUsers);

    // Получаем количество заблокированных пользователей
    const blockedUsersResult = await pool.query(
      "SELECT COUNT(*) as count FROM users WHERE status = 'blocked' OR is_blocked = true"
    );
    const blockedUsers = parseInt(blockedUsersResult.rows[0]?.count) || 0;
    console.log('🚫 Blocked users:', blockedUsers);

    // Получаем общий баланс из balance_usdt пользователей
    const totalBalanceResult = await pool.query(
      'SELECT COALESCE(SUM(balance_usdt), 0) as total FROM users WHERE balance_usdt > 0'
    );
    const totalBalance = parseFloat(totalBalanceResult.rows[0]?.total) || 0;
    console.log('💰 Total balance (USDT):', totalBalance);

    // Получаем общую сумму активных инвестиций
    const totalInvestmentsResult = await pool.query(
      "SELECT COALESCE(SUM(amount_decimal), 0) as total FROM investments WHERE status = 'active'"
    );
    const totalInvestments = parseFloat(totalInvestmentsResult.rows[0]?.total) || 0;
    console.log('📈 Total active investments:', totalInvestments);

    // Получаем количество успешных платежей за сегодня
    const todayTransactionsResult = await pool.query(
      "SELECT COUNT(*) as count FROM payments WHERE created_at::date = CURRENT_DATE AND status = 'completed'"
    );
    const todayTransactions = parseInt(todayTransactionsResult.rows[0]?.count) || 0;
    console.log('💳 Today transactions:', todayTransactions);

    // Получаем общую сумму успешных платежей за сегодня
    const todayVolumeResult = await pool.query(
      "SELECT COALESCE(SUM(amount), 0) as total FROM payments WHERE created_at::date = CURRENT_DATE AND status = 'completed'"
    );
    const todayVolume = parseFloat(todayVolumeResult.rows[0]?.total) || 0;
    console.log('💸 Today volume:', todayVolume);

    // Получаем количество активных подписок
    const activeSubscriptionsResult = await pool.query(
      "SELECT COUNT(*) as count FROM user_subscriptions WHERE status = 'active' AND expires_at > NOW()"
    );
    const activeSubscriptions = parseInt(activeSubscriptionsResult.rows[0]?.count) || 0;
    console.log('🎫 Active subscriptions:', activeSubscriptions);

    // Рассчитываем рост
    const growthRate = totalUsers > 0 ? (newUsers / totalUsers * 100) : 0;
    
    // Общий объем (баланс + инвестиции)
    const totalVolume = totalBalance + totalInvestments;

    console.log('✅ Данные успешно загружены');

    res.renderWithQuery('index', { 
      title: 'BITNEST Admin',
      totalUsers,
      newUsers,
      totalBalance,
      totalInvestments,
      todayTransactions,
      todayVolume,
      activeUsers,
      blockedUsers,
      activeSubscriptions,
      growthRate,
      totalVolume,
      formatNumber: (num) => {
        if (num === undefined || num === null) return '0';
        return new Intl.NumberFormat('en-US').format(num);
      },
      formatMoney: (amount) => {
        if (amount === undefined || amount === null) return '$0';
        const num = Number(amount);
        if (isNaN(num)) return '$0';

        if (num >= 1000000) {
          return '$' + (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
          return '$' + (num / 1000).toFixed(1) + 'K';
        }
        return '$' + Math.round(num).toLocaleString();
      },
      formatPercent: (value) => {
        if (value === undefined || value === null) return '0%';
        const num = Number(value);
        if (isNaN(num)) return '0%';
        return num.toFixed(1) + '%';
      },
      formatCrypto: (amount) => {
        if (amount === undefined || amount === null) return '0';
        const num = Number(amount);
        if (isNaN(num)) return '0';
        
        if (num >= 1) {
          return num.toFixed(2);
        } else {
          return num.toFixed(6);
        }
      }
    });
  } catch (error) {
    console.error('❌ Ошибка загрузки данных:', error);
    logger.error('Error fetching dashboard stats:', error);
    
    // Fallback значения
    res.renderWithQuery('index', { 
      title: 'BITNEST Admin',
      totalUsers: 0,
      newUsers: 0,
      totalBalance: 0,
      totalInvestments: 0,
      todayTransactions: 0,
      todayVolume: 0,
      activeUsers: 0,
      blockedUsers: 0,
      activeSubscriptions: 0,
      growthRate: 0,
      totalVolume: 0,
      formatNumber: (num) => num ? new Intl.NumberFormat('en-US').format(num) : '0',
      formatMoney: (amount) => {
        if (!amount) return '$0';
        const num = Number(amount);
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(1) + 'K';
        return '$' + num.toFixed(0);
      },
      formatPercent: (value) => value ? value.toFixed(1) + '%' : '0%',
      formatCrypto: (amount) => {
        if (!amount) return '0';
        const num = Number(amount);
        if (num >= 1) return num.toFixed(2);
        return num.toFixed(6);
      }
    });
  }
});

app.get('/admin/debug/database', async (req, res) => {
  try {
    // Проверяем существование таблиц
    const tables = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    // Проверяем структуру таблицы users
    const usersStructure = await pool.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'users' 
      ORDER BY ordinal_position
    `);
    
    // Проверяем есть ли данные в таблице users
    const usersData = await pool.query('SELECT COUNT(*) as count, MAX(created_at) as latest FROM users');
    
    // Проверяем структуру таблицы wallets
    const walletsStructure = await pool.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'wallets' 
      ORDER BY ordinal_position
    `);
    
    // Проверяем есть ли данные в таблице wallets
    const walletsData = await pool.query('SELECT COUNT(*) as count, SUM(amount) as total FROM wallets');
    
    res.json({
      database: {
        tables: tables.rows.map(t => t.table_name),
        users: {
          structure: usersStructure.rows,
          data: usersData.rows[0]
        },
        wallets: {
          structure: walletsStructure.rows,
          data: walletsData.rows[0]
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
  /**
   * Страница списка пользователей
   */
  /**
 * Страница списка пользователей
 */
app.get('/admin/users', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 100;
    const offset = (page - 1) * limit;

    // Получаем общее количество пользователей
    const totalCountResult = await pool.query('SELECT COUNT(*) as count FROM users');
    const totalCount = parseInt(totalCountResult.rows[0].count);

    // Получаем пользователей с пагинацией
    const { rows } = await pool.query(
      `SELECT * FROM users 
       ORDER BY created_at DESC 
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    const totalPages = Math.ceil(totalCount / limit);

    res.renderWithQuery('users', { 
      users: rows,
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
      limit: limit
    });
  } catch (error) {
    logger.error('Error fetching users:', error);
    res.renderWithQuery('error', { message: 'Ошибка загрузки пользователей' });
  }
});

  /**
   * Страница детальной информации о пользователе
   */
  app.get('/admin/user/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const { rows: userRows } = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
      const { rows: walletRows } = await pool.query('SELECT * FROM wallets WHERE user_id = $1', [userId]);
      const { rows: investmentsRows } = await pool.query('SELECT * FROM investments WHERE user_id = $1', [userId]);
      
      res.renderWithQuery('user_detail', { 
        user: userRows[0] || {}, 
        wallet: walletRows[0] || null, 
        investments: investmentsRows || [] 
      });
    } catch (error) {
      logger.error('Error fetching user details:', error);
      res.renderWithQuery('error', { message: 'Ошибка загрузки данных пользователя' });
    }
  });

  // ==================== API ЭНДПОИНТЫ ====================

  /**
   * API: Получение списка пользователей
   */
  app.get('/api/users', async (req, res) => {
    try {
      const { rows } = await pool.query(
        `SELECT id, telegram_id, username, referrer_id, created_at 
         FROM users ORDER BY created_at DESC LIMIT 1000`
      );
      res.json({ ok: true, users: rows });
    } catch (error) {
      logger.error('API Error fetching users:', error);
      res.status(500).json({ ok: false, error: 'Internal server error' });
    }
  });

app.get('/api/user/activated-levels', async (req, res) => {
  console.log('=== ACTIVATED LEVELS ENDPOINT CALLED ===');
  
  try {
    console.log('📡 Activated levels endpoint called');
    
    // Проверяем сессию
    if (!req.session || !req.session.userId) {
      console.error('❌ No valid session or userId');
      return res.status(401).json({ 
        ok: false, 
        error: 'Not authenticated',
        details: 'No valid session found'
      });
    }

    const userId = req.session.userId;
    console.log(`✅ User ID from session: ${userId}, type: ${typeof userId}`);
    
    // Убедимся что userId это число
    const numericUserId = parseInt(userId);
    if (isNaN(numericUserId)) {
      console.error(`❌ Invalid user ID: ${userId}`);
      return res.status(400).json({ 
        ok: false, 
        error: 'Invalid user ID',
        details: `User ID must be a number, got: ${userId}`
      });
    }

    console.log(`🔍 Processing activated levels for user ID: ${numericUserId}`);

    // 1. Сначала проверяем существование таблицы user_active_levels
    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'user_active_levels'
      ) as table_exists
    `);
    
    const hasTable = tableCheck.rows[0]?.table_exists;
    console.log(`📊 user_active_levels table exists: ${hasTable}`);
    
    let activatedLevels = [1]; // По умолчанию уровень 1
    
    if (hasTable) {
      try {
        // Получаем активированные уровни из таблицы
        const levelsResult = await pool.query(`
          SELECT level FROM user_active_levels 
          WHERE user_id = $1 AND is_active = true 
          ORDER BY level
        `, [numericUserId]);
        
        activatedLevels = levelsResult.rows.map(row => row.level);
        console.log(`📊 Database levels for user ${numericUserId}:`, activatedLevels);
        
        // Если нет активированных уровней, добавляем уровень 1
        if (activatedLevels.length === 0) {
          console.log(`⚠️ No levels in DB for user ${numericUserId}, adding level 1`);
          
          try {
            await pool.query(`
              INSERT INTO user_active_levels (user_id, level, is_active)
              VALUES ($1, 1, true)
              ON CONFLICT (user_id, level) DO NOTHING
            `, [numericUserId]);
            
            activatedLevels = [1];
            console.log(`✅ Added level 1 for user ${numericUserId}`);
          } catch (insertError) {
            console.warn('Could not add default level:', insertError.message);
          }
        }
        
      } catch (dbError) {
        console.error('❌ Database query error:', dbError.message);
        console.error('Query parameters:', { userId: numericUserId });
        
        // Пробуем создать таблицу если она сломана
        try {
          await pool.query(`
            CREATE TABLE IF NOT EXISTS user_active_levels (
              id SERIAL PRIMARY KEY,
              user_id INTEGER NOT NULL REFERENCES users(id),
              level INTEGER NOT NULL CHECK (level >= 1 AND level <= 17),
              is_active BOOLEAN DEFAULT true,
              activated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              deactivated_at TIMESTAMP,
              investment_amount DECIMAL(20,8) DEFAULT 0,
              total_investment DECIMAL(20,8) DEFAULT 0,
              expires_at TIMESTAMP,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              UNIQUE(user_id, level)
            )
          `);
          console.log('✅ Created user_active_levels table');
          
          // Добавляем уровень 1 для пользователя
          await pool.query(`
            INSERT INTO user_active_levels (user_id, level, is_active)
            VALUES ($1, 1, true)
            ON CONFLICT (user_id, level) DO NOTHING
          `, [numericUserId]);
          
        } catch (createError) {
          console.error('Error creating table:', createError.message);
        }
      }
    } else {
      console.log(`⚠️ Table user_active_levels doesn't exist`);
      
      // Создаем таблицу
      try {
        await pool.query(`
          CREATE TABLE IF NOT EXISTS user_active_levels (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id),
            level INTEGER NOT NULL CHECK (level >= 1 AND level <= 17),
            is_active BOOLEAN DEFAULT true,
            activated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            deactivated_at TIMESTAMP,
            investment_amount DECIMAL(20,8) DEFAULT 0,
            total_investment DECIMAL(20,8) DEFAULT 0,
            expires_at TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, level)
          )
        `);
        console.log('✅ Created user_active_levels table');
        
        // Добавляем уровень 1 для пользователя
        await pool.query(`
          INSERT INTO user_active_levels (user_id, level, is_active)
          VALUES ($1, 1, true)
          ON CONFLICT (user_id, level) DO NOTHING
        `, [numericUserId]);
        
      } catch (createError) {
        console.error('Error creating table:', createError.message);
      }
    }
    
    // 2. Получаем информацию о пуле (инвестициях)
    let totalInvested = 0;
    try {
      const investmentResult = await pool.query(`
        SELECT COALESCE(SUM(amount_decimal), 0) as total
        FROM investments 
        WHERE user_id = $1 
        AND status = 'active'
        AND amount_decimal > 0
      `, [numericUserId]);
      
      totalInvested = parseFloat(investmentResult.rows[0]?.total) || 0;
      console.log(`💰 Total invested for user ${numericUserId}: $${totalInvested}`);
    } catch (invError) {
      console.warn('Could not calculate total invested:', invError.message);
    }
    
    // 3. Рассчитываем уровни на основе пула (если логика отличается от таблицы)
    const calculatedLevels = [];
    for (let level = 1; level <= 17; level++) {
      const requiredAmount = level * 100;
      if (totalInvested >= requiredAmount) {
        calculatedLevels.push(level);
      }
    }
    
    // Если нет уровней, добавляем уровень 1
    if (calculatedLevels.length === 0) {
      calculatedLevels.push(1);
    }
    
    console.log(`📈 Calculated levels based on pool $${totalInvested}:`, calculatedLevels);
    
    // 4. Определяем следующий уровень
    const currentMaxLevel = Math.max(...activatedLevels);
    const nextLevel = currentMaxLevel < 17 ? currentMaxLevel + 1 : null;
    const nextLevelRequirement = nextLevel ? nextLevel * 100 : null;
    const missingForNextLevel = nextLevelRequirement ? 
      Math.max(0, nextLevelRequirement - totalInvested) : 0;
    
    // 5. Подготавливаем ответ
    const response = {
      ok: true,
      levels: activatedLevels,
      calculatedLevels: calculatedLevels, // Для отладки
      poolInfo: {
        totalInvested: totalInvested,
        currentMaxLevel: currentMaxLevel,
        nextLevel: nextLevel,
        nextLevelRequirement: nextLevelRequirement,
        missingForNextLevel: missingForNextLevel,
        poolStatus: totalInvested >= 100 ? 'active' : 'inactive'
      },
      _debug: {
        userId: numericUserId,
        timestamp: new Date().toISOString(),
        hasLevelsTable: hasTable
      }
    };

    console.log(`✅ Success response for user ${numericUserId}:`, {
      levels: activatedLevels,
      totalInvested: totalInvested,
      nextLevel: nextLevel
    });
    
    return res.json(response);

  } catch (error) {
    console.error('💥 UNEXPECTED ERROR in activated-levels endpoint:', error);
    console.error('Error stack:', error.stack);
    console.error('Request at time of error:', {
      sessionId: req.sessionID,
      userId: req.session?.userId,
      url: req.url,
      method: req.method
    });
    
    // Безопасный fallback ответ
    return res.json({
      ok: true,
      levels: [1],
      poolInfo: {
        totalInvested: 0,
        currentMaxLevel: 1,
        nextLevel: 2,
        nextLevelRequirement: 200,
        missingForNextLevel: 200,
        poolStatus: 'inactive'
      },
      _error: {
        message: 'Server error occurred',
        timestamp: new Date().toISOString()
      },
      _fallback: true
    });
  }
});
  /**
   * API: Получение детальной информации о пользователе
   */
  app.get('/api/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    
    
    
    // Запрещаем доступ к специальным маршрутам через этот эндпоинт
    const reservedPaths = ['activated-levels', 'sync-levels', 'upgrade-level'];
    if (reservedPaths.includes(userId)) {
      return res.status(400).json({ 
        ok: false, 
        error: 'Invalid user ID',
        details: `"${userId}" is a reserved path, not a user ID`
      });
    }
    
    // Проверяем что userId это число
    const numericUserId = parseInt(userId);
    if (isNaN(numericUserId)) {
      return res.status(400).json({ 
        ok: false, 
        error: 'Invalid user ID format',
        details: `Expected number, got: ${userId}`
      });
    }
    
    console.log(`🔍 Fetching user details for ID: ${numericUserId}`);
    
    const { rows: userRows } = await pool.query('SELECT * FROM users WHERE id = $1', [numericUserId]);
    const { rows: walletRows } = await pool.query('SELECT * FROM wallets WHERE user_id = $1', [numericUserId]);
    const { rows: investmentsRows } = await pool.query('SELECT * FROM investments WHERE user_id = $1', [numericUserId]);
    
    res.json({ 
      ok: true, 
      user: userRows[0] || null, 
      wallet: walletRows[0] || null, 
      investments: investmentsRows || [] 
    });
  } catch (error) {
    console.error('❌ API Error fetching user details:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Internal server error',
      details: error.message 
    });
  }
});
app.post('/admin/notify', async (req, res) => {
  let bot;
  try {
    console.log('📨 Received notification request:', req.body);
    
    const { message, messageType, recipients, priority } = req.body;
    
    // Validate required fields
    if (!message || message.trim() === '') {
      console.log('❌ Message validation failed');
      return res.status(400).json({ 
        ok: false, 
        success: false,
        error: 'Message content is required' 
      });
    }

    // Initialize bot without starting it
    bot = new Telegraf(config.telegramToken);
    
    let users = [];
    let userCount = 0;

    // Build different queries based on recipient type
    switch (recipients) {
      case 'active':
        const activeQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status
          FROM users u
          WHERE (u.status IS NULL OR u.status != 'blocked')
          AND (u.last_activity > NOW() - INTERVAL '7 days' OR u.created_at > NOW() - INTERVAL '7 days')
          ORDER BY u.id
        `;
        const activeResult = await pool.query(activeQuery);
        users = activeResult.rows;
        userCount = users.length;
        console.log(`👥 Active users (7 days): ${userCount}`);
        break;

      case 'inactive':
        const inactiveQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status
          FROM users u
          WHERE (u.status IS NULL OR u.status != 'blocked')
          AND (u.last_activity IS NULL OR u.last_activity < NOW() - INTERVAL '30 days')
          ORDER BY u.id
        `;
        const inactiveResult = await pool.query(inactiveQuery);
        users = inactiveResult.rows;
        userCount = users.length;
        console.log(`👥 Inactive users (30+ days): ${userCount}`);
        break;

      case 'premium':
        const premiumQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status
          FROM users u
          WHERE (u.status IS NULL OR u.status != 'blocked')
          AND EXISTS (SELECT 1 FROM user_subscriptions WHERE user_id = u.id AND status = 'active' AND expires_at > NOW())
          ORDER BY u.id
        `;
        const premiumResult = await pool.query(premiumQuery);
        users = premiumResult.rows;
        userCount = users.length;
        console.log(`👥 Premium users: ${userCount}`);
        break;

      case 'no_investments':
        const noInvestmentsQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status
          FROM users u
          WHERE (u.status IS NULL OR u.status != 'blocked')
          AND NOT EXISTS (
            SELECT 1 FROM investments i 
            WHERE i.user_id = u.id 
            AND i.status = 'active'
            AND i.amount_decimal > 0
          )
          AND u.created_at <= NOW() - INTERVAL '1 hour'
          ORDER BY u.id
        `;
        const noInvestmentsResult = await pool.query(noInvestmentsQuery);
        users = noInvestmentsResult.rows;
        userCount = users.length;
        console.log(`👥 Users without investments: ${userCount}`);
        break;

      case 'with_investments':
        const withInvestmentsQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status
          FROM users u
          WHERE (u.status IS NULL OR u.status != 'blocked')
          AND EXISTS (
            SELECT 1 FROM investments i 
            WHERE i.user_id = u.id 
            AND i.status = 'active'
            AND i.amount_decimal > 0
          )
          ORDER BY u.id
        `;
        const withInvestmentsResult = await pool.query(withInvestmentsQuery);
        users = withInvestmentsResult.rows;
        userCount = users.length;
        console.log(`👥 Users with investments: ${userCount}`);
        break;

      case 'expired_subscription':
        const expiredSubscriptionQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status,
                 us.status as subscription_status,
                 us.expires_at
          FROM users u
          INNER JOIN user_subscriptions us ON us.user_id = u.id
          WHERE (u.status IS NULL OR u.status != 'blocked')
          AND (us.status = 'pending' OR us.expires_at < NOW())
          ORDER BY u.id
        `;
        const expiredSubscriptionResult = await pool.query(expiredSubscriptionQuery);
        users = expiredSubscriptionResult.rows;
        userCount = users.length;
        console.log(`👥 Users with expired subscriptions: ${userCount}`);
        break;

      case 'expiring_subscription':
        // Get detailed info including days left for personalization
        const expiringSubscriptionQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status,
                 us.expires_at,
                 CEIL(DATE_PART('day', us.expires_at - NOW())) as days_left
          FROM users u
          INNER JOIN user_subscriptions us ON us.user_id = u.id
          WHERE (u.status IS NULL OR u.status != 'blocked')
          AND us.status = 'active'
          AND us.expires_at BETWEEN NOW() AND NOW() + INTERVAL '7 days'
          ORDER BY us.expires_at ASC
        `;
        const expiringSubscriptionResult = await pool.query(expiringSubscriptionQuery);
        users = expiringSubscriptionResult.rows;
        userCount = users.length;
        console.log(`⏰ Users with expiring subscriptions (7 days): ${userCount}`);
        break;

      case 'urgent_subscription':
        // СРОЧНЫЕ подписки (1-3 дня)
        const urgentSubscriptionQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status,
                 us.expires_at,
                 CEIL(DATE_PART('day', us.expires_at - NOW())) as days_left
          FROM users u
          INNER JOIN user_subscriptions us ON us.user_id = u.id
          WHERE (u.status IS NULL OR u.status != 'blocked')
          AND us.status = 'active'
          AND us.expires_at BETWEEN NOW() AND NOW() + INTERVAL '3 days'
          ORDER BY us.expires_at ASC
        `;
        const urgentSubscriptionResult = await pool.query(urgentSubscriptionQuery);
        users = urgentSubscriptionResult.rows;
        userCount = users.length;
        console.log(`🚨 URGENT subscriptions (1-3 days): ${userCount}`);
        break;

      case 'all':
      default:
        const allQuery = `
          SELECT DISTINCT u.telegram_id, u.username, u.id, u.status
          FROM users u
          WHERE (u.status IS NULL OR u.status != 'blocked')
          ORDER BY u.id
        `;
        const allResult = await pool.query(allQuery);
        users = allResult.rows;
        userCount = users.length;
        console.log(`👥 All users: ${userCount}`);
        break;
    }
    
    console.log(`📊 Total users found for category "${recipients}": ${userCount}`);
    
    // ДЕТАЛЬНАЯ ПРОВЕРКА: Если пользователей нет, возвращаем понятную ошибку
    if (!users || users.length === 0) {
      console.log(`❌ No users found for criteria: ${recipients}`);
      
      // Получаем общую статистику для отладки
      const totalUsersResult = await pool.query('SELECT COUNT(*) as count FROM users');
      const totalUsers = parseInt(totalUsersResult.rows[0]?.count) || 0;
      
      const activeUsersResult = await pool.query(
        "SELECT COUNT(*) as count FROM users WHERE (u.status IS NULL OR u.status != 'blocked')"
      );
      const activeUsers = parseInt(activeUsersResult.rows[0]?.count) || 0;
      
      return res.status(400).json({
        ok: false,
        success: false,
        error: 'No users found matching the selected criteria',
        details: {
          criteria: recipients,
          totalUsersInDatabase: totalUsers,
          activeUsers: activeUsers,
          suggestion: 'Try selecting a different user group or check if users exist in the database'
        }
      });
    }

    let successCount = 0;
    let failCount = 0;
    let blockedCount = 0;
    const failedUsers = [];
    const blockedUsers = [];

    // Format base message
    let baseMessage = message.trim();
    
    // Add priority emoji
    const priorityEmoji = {
      'low': '🔵',
      'normal': '🟢', 
      'high': '🟡',
      'urgent': '🔴'
    };

    if (priority && priorityEmoji[priority]) {
      baseMessage = `${priorityEmoji[priority]} ${baseMessage}`;
    }

    // Add message type prefix
    const typePrefix = {
      'announcement': '📢 АНОНС\n\n',
      'update': '🔄 ОБНОВЛЕНИЕ\n\n',
      'promotion': '🎁 АКЦИЯ\n\n',
      'alert': '⚠️ ВАЖНОЕ УВЕДОМЛЕНИЕ\n\n'
    };

    if (messageType && typePrefix[messageType]) {
      baseMessage = `${typePrefix[messageType]}${baseMessage}`;
    }

    console.log(`✉️ Starting to send messages to ${users.length} users...`);

    // Send personalized messages
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      
      try {
        console.log(`📤 Sending to user ${i+1}/${users.length}: ${user.telegram_id} (${user.username || 'no username'})`);
        
        let personalizedMessage = baseMessage;
        
        // PERSONALIZATION: Add user-specific information
        if (user.username) {
          personalizedMessage = personalizedMessage.replace(/{username}/g, user.username);
          personalizedMessage = personalizedMessage.replace(/{user_id}/g, user.id);
        }

        // PERSONALIZATION: For expiring subscriptions - add days left
        if ((recipients === 'expiring_subscription' || recipients === 'urgent_subscription') && user.days_left !== undefined && user.days_left !== null) {
          const daysLeft = Math.max(0, Math.ceil(user.days_left));
          
          let daysText = '';
          if (daysLeft === 0) {
            daysText = "⏰ <b>Ваша подписка истекает СЕГОДНЯ!</b>";
          } else if (daysLeft === 1) {
            daysText = "⏰ <b>Ваша подписка истекает ЗАВТРА!</b>";
          } else {
            daysText = `⏰ <b>Ваша подписка истекает через ${daysLeft} дней!</b>`;
          }
          
          personalizedMessage += `\n\n${daysText}`;
          
          // Add urgency based on days left
          if (daysLeft <= 1) {
            personalizedMessage += "\n\n🚨 <b>СРОЧНО!</b> Успейте продлить до истечения срока!";
          } else if (daysLeft <= 3) {
            personalizedMessage += "\n\n🔥 Успейте продлить! Осталось всего несколько дней!";
          }
        }

        // PERSONALIZATION: For expired subscriptions - add specific info
        if (recipients === 'expired_subscription') {
          if (user.subscription_status === 'pending') {
            personalizedMessage += "\n\n❌ <b>Статус вашей подписки: ОЖИДАНИЕ АКТИВАЦИИ</b>";
          } else if (user.expires_at && user.expires_at < new Date()) {
            personalizedMessage += "\n\n❌ <b>Срок вашей подписки ИСТЕК</b>";
          }
        }

        // PERSONALIZATION: For users without investments
        if (recipients === 'no_investments') {
          personalizedMessage += "\n\n🎁 <b>Специальное предложение для новых пользователей!</b>";
          personalizedMessage += "\nПолучите бонус $10,000 для начала инвестирования!";
        }

        // Add appropriate footer
        if (recipients === 'expiring_subscription' || recipients === 'expired_subscription' || recipients === 'urgent_subscription') {
          personalizedMessage += `\n\n<em>💎 Для продления подписки используйте кнопку ниже</em>`;
        } else if (recipients === 'no_investments') {
          personalizedMessage += `\n\n<em>🚀 Начните инвестировать прямо сейчас!</em>`;
        } else {
          personalizedMessage += `\n\n<em>🛠️ По вопросам: @BitnestRusSupport</em>`;
        }

        // Create appropriate keyboard
        const getKeyboard = () => {
          if (recipients === 'no_investments') {
            return {
              inline_keyboard: [[
                {
                  text: "🚀 ВЗЯТЬ В ДОЛГ $10,000",
                  callback_data: "take_loan_10000"
                }
              ]]
            };
          }
          else if (recipients === 'expiring_subscription' || recipients === 'expired_subscription' || recipients === 'urgent_subscription') {
            return {
              inline_keyboard: [[
                {
                  text: "💎 ПРОДЛИТЬ ПОДПИСКУ",
                  url: "https://t.me/BitnestRusBot?start=links"
                }
              ]]
            };
          }
          return null;
        };

        const keyboard = getKeyboard();
        const messageOptions = {
          parse_mode: 'HTML',
          disable_web_page_preview: true
        };

        if (keyboard) {
          messageOptions.reply_markup = keyboard;
        }
        
        await bot.telegram.sendMessage(user.telegram_id, personalizedMessage, messageOptions);
        
        successCount++;
        
        // Update last activity
        await pool.query(
          "UPDATE users SET last_activity = NOW() WHERE id = $1",
          [user.id]
        );

        // Rate limiting - be gentle with Telegram API
        if (i < users.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
      } catch (error) {
        console.error(`❌ Error sending to user ${user.telegram_id}:`, error.message);
        
        if (error.response && error.response.error_code === 403) {
          // User blocked the bot
          blockedCount++;
          blockedUsers.push({
            userId: user.telegram_id,
            username: user.username || 'Unknown User'
          });
          
          // Mark user as blocked
          await pool.query(
            "UPDATE users SET status = 'blocked' WHERE id = $1",
            [user.id]
          );
        } else {
          failCount++;
          failedUsers.push({
            userId: user.telegram_id,
            username: user.username || 'Unknown User',
            reason: error.message
          });
        }
      }
    }

    // Log results
    console.log('✅ Notification sending completed:', {
      messageType,
      recipients,
      priority,
      total: users.length,
      success: successCount,
      failed: failCount,
      blocked: blockedCount,
      personalized: (recipients === 'expiring_subscription' || recipients === 'expired_subscription' || recipients === 'urgent_subscription' || recipients === 'no_investments')
    });

    logger.info('Notification sending completed', {
      messageType,
      recipients,
      priority,
      total: users.length,
      success: successCount,
      failed: failCount,
      blocked: blockedCount
    });

    // Return proper JSON response
    res.json({ 
      ok: true, 
      success: true,
      sentCount: successCount,
      failedCount: failCount,
      blockedCount: blockedCount,
      blockedUsers: blockedUsers,
      failedUsers: failedUsers,
      totalUsers: users.length,
      personalized: (recipients === 'expiring_subscription' || recipients === 'expired_subscription' || recipients === 'urgent_subscription' || recipients === 'no_investments'),
      message: `Уведомления отправлены ${successCount} пользователям` + 
               (failCount > 0 ? ` (не удалось: ${failCount})` : '') +
               (blockedCount > 0 ? ` (заблокировали бота: ${blockedCount})` : '')
    });
    
  } catch (error) {
    console.error('💥 Critical error in admin notify:', error);
    logger.error('Error in admin notify:', error);
    
    res.status(500).json({ 
      ok: false, 
      success: false,
      error: 'Internal server error',
      message: error.message,
      details: 'Check server logs for more information'
    });
  } finally {
  // Safe cleanup without calling stop()
  if (bot && typeof bot.telegram !== 'undefined') {
    // Just clear the reference
    bot = null;
  }
}
});

  // ==================== ВЕБХУКИ ====================

  /**
   * Вебхук для обработки платежей YooKassa
   */
  app.post('/webhook/yookassa', async (req, res) => {
    try {
      // Валидация подписи вебхука
      if (!validateYooWebhook(req, config.yookassaSecret)) {
        logger.warn('Invalid YooKassa signature');
        return res.status(400).send('invalid signature');
      }

      const payload = req.body;
      const providerId = payload?.object?.id || payload?.id;
      
      if (!providerId) {
        return res.status(400).send('missing provider id');
      }

      // Проверка на дубликаты
      const { rows: existing } = await pool.query(
        'SELECT id FROM payments WHERE provider = $1 AND provider_payment_id = $2', 
        ['yookassa', providerId]
      );
      
      if (existing.length) {
        logger.info('Duplicate webhook from yookassa %s', providerId);
        return res.json({ ok: true });
      }

      // Извлечение данных из payload
      const amount = payload?.object?.amount?.value || 0;
      const currency = payload?.object?.amount?.currency || 'RUB';
      const metadata = payload?.object?.metadata || {};
      const username = metadata?.username || metadata?.telegram_id || null;

      // Поиск пользователя по username или telegram_id
      let userId = null;
      if (username) {
        const { rows: userRows } = await pool.query(
          'SELECT id FROM users WHERE username = $1 OR telegram_id = $2', 
          [username, username]
        );
        if (userRows.length) userId = userRows[0].id;
      }

      // Сохранение платежа в базу
      await pool.query(
        `INSERT INTO payments 
         (provider, provider_payment_id, amount, currency, user_id, status, raw) 
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          'yookassa', 
          providerId, 
          amount, 
          currency, 
          userId, 
          payload?.object?.status || 'unknown', 
          JSON.stringify(payload)
        ]
      );

      // TODO: Обновление баланса пользователя / создание инвестиции

      res.json({ ok: true });
    } catch (error) {
      logger.error('YooKassa webhook error:', error);
      res.status(500).send('error');
    }
  });
/**
 * Вебхук для CryptoBot с альтернативным путем
 */
app.post('/cryptobot/webhook', async (req, res) => {
  try {
      console.log("🔔 Получен вебхук от CryptoBot (альтернативный путь):", req.body);

      // Используем ту же логику, что и для /webhook/cryptobot
      if (!req.body || !req.body.id) {
          return res.status(400).send('invalid payload');
      }

      const payload = req.body;
      const providerId = payload.id;

      // Проверка на дубликаты
      const { rows: existing } = await pool.query(
          'SELECT id FROM payments WHERE provider_payment_id = $1', 
          [providerId]
      );
      
      if (existing.length) {
          console.log('⚠️ Дубликат вебхука:', providerId);
          return res.json({ ok: true });
      }

      // Обрабатываем memo
      let memo = {};
      if (typeof payload.memo === 'string') {
          try {
              memo = JSON.parse(payload.memo);
          } catch (e) {
              memo = { raw: payload.memo };
          }
      } else {
          memo = payload.memo || {};
      }

      // Извлекаем telegram_id
      const telegramId = memo.telegram_id || payload.telegram_id;
      if (!telegramId) {
          console.error('❌ Telegram ID не найден в payload');
          return res.status(400).send('telegram_id required');
      }

      // Находим пользователя
      const { rows: userRows } = await pool.query(
          'SELECT id FROM users WHERE telegram_id = $1', 
          [telegramId]
      );
      
      if (!userRows.length) {
          console.error('❌ Пользователь не найден:', telegramId);
          return res.status(404).send('user not found');
      }

      const userId = userRows[0].id;
      const amount = parseFloat(payload.amount || payload.value || 0);
      const currency = payload.asset || payload.currency || 'USDT';
      const status = payload.status === 'paid' ? 'completed' : 'pending';

      console.log(`💳 Обработка платежа: ${amount} ${currency} для пользователя ${userId}`);

      // Сохраняем платеж
      await pool.query(
          `INSERT INTO payments 
           (provider, provider_payment_id, amount, currency, user_id, status, raw) 
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          ['cryptobot', providerId, amount, currency, userId, status, JSON.stringify(payload)]
      );

      // Если платеж успешный - активируем подписку
      if (status === 'completed') {
          const expiresAt = new Date();
          expiresAt.setDate(expiresAt.getDate() + 30); // 30 дней

          await pool.query(
              `INSERT INTO user_subscriptions 
               (user_id, subscription_type, price, payment_hash, expires_at, status)
               VALUES ($1, 'link_access', $2, $3, $4, 'active')
               ON CONFLICT (user_id, subscription_type) 
               DO UPDATE SET
                  price = EXCLUDED.price,
                  payment_hash = EXCLUDED.payment_hash,
                  expires_at = EXCLUDED.expires_at,
                  status = 'active',
                  updated_at = NOW()`,
              [userId, amount, providerId, expiresAt]
          );

          console.log('✅ Подписка активирована для пользователя:', userId);

          // Отправляем уведомление через глобального бота
          // Добавьте здесь логику отправки уведомления, если нужно 
      }

      res.json({ ok: true });
      
  } catch (error) {
      console.error('❌ Ошибка обработки вебхука:', error);
      res.status(500).send('internal error');
  }
});
app.post('/webhook/cryptobot', async (req, res) => {
    try {
        console.log("🔔 Получен вебхук от CryptoBot:", req.body);

        // Упрощенная валидация (для тестирования)
        if (!req.body || !req.body.id) {
            return res.status(400).send('invalid payload');
        }

        const payload = req.body;
        const providerId = payload.id;

        // Проверка на дубликаты
        const { rows: existing } = await pool.query(
            'SELECT id FROM payments WHERE provider_payment_id = $1', 
            [providerId]
        );
        
        if (existing.length) {
            console.log('⚠️ Дубликат вебхука:', providerId);
            return res.json({ ok: true });
        }

        // Обрабатываем memo
        let memo = {};
        if (typeof payload.memo === 'string') {
            try {
                memo = JSON.parse(payload.memo);
            } catch (e) {
                memo = { raw: payload.memo };
            }
        } else {
            memo = payload.memo || {};
        }

        // Извлекаем telegram_id
        const telegramId = memo.telegram_id || payload.telegram_id;
        if (!telegramId) {
            console.error('❌ Telegram ID не найден в payload');
            return res.status(400).send('telegram_id required');
        }

        // Находим пользователя
        const { rows: userRows } = await pool.query(
            'SELECT id FROM users WHERE telegram_id = $1', 
            [telegramId]
        );
        
        if (!userRows.length) {
            console.error('❌ Пользователь не найден:', telegramId);
            return res.status(404).send('user not found');
        }

        const userId = userRows[0].id;
        const amount = parseFloat(payload.amount || payload.value || 0);
        const currency = payload.asset || payload.currency || 'USDT';
        
        // Определяем статус платежа
        let status = 'pending';
        if (payload.status === 'completed' || payload.status === 'paid') {
            status = 'completed';
        }

        console.log(`💳 Обработка платежа: ${amount} ${currency} для пользователя ${userId}, статус: ${status}`);

        // Сохраняем платеж
        await pool.query(
            `INSERT INTO payments 
             (provider, provider_payment_id, amount, currency, user_id, status, raw) 
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            ['cryptobot', providerId, amount, currency, userId, status, JSON.stringify(payload)]
        );

        // Если платеж успешный - активируем подписку
        if (status === 'completed') {
            // Импортируем функцию renewUserSubscription
            const { renewUserSubscription } = await import('../bot/bot.js');
            
            // Обновляем подписку пользователя
            const success = await renewUserSubscription(
                userId, 
                amount, 
                providerId // Используем providerId как payment_hash
            );

            if (success) {
                console.log('✅ Подписка активирована для пользователя:', userId);

                // Отправляем уведомление через глобального бота
                const bot = getGlobalBot();
                if (bot) {
                    try {
                        await bot.telegram.sendMessage(
                            telegramId,
                            '🎉 <b>Ваша подписка успешно активирована!</b>\n\n' +
                            'Теперь вы можете настроить свои реферальные ссылки в разделе "Настройки".',
                            {
                                parse_mode: 'HTML',
                                reply_markup: {
                                    inline_keyboard: [
                                        [{ text: '🔗 Настроить ссылки', callback_data: 'link_settings' }]
                                    ]
                                }
                            }
                        );
                        console.log('✅ Уведомление отправлено пользователю:', telegramId);
                    } catch (error) {
                        console.error('❌ Ошибка отправки уведомления:', error);
                    }
                }
            } else {
                console.error('❌ Ошибка активации подписки для пользователя:', userId);
            }
        }

        res.json({ ok: true });
        
    } catch (error) {
        console.error('❌ Ошибка обработки вебхука:', error);
        res.status(500).send('internal error');
    }
});
app.post('/admin/quick-notify', async (req, res) => {
    let bot;
    try {
        console.log('🚀 Quick notification request:', req.body);
        
        const { recipients, type } = req.body;
        
        if (!recipients) {
            return res.status(400).json({
                ok: false,
                success: false,
                error: 'Recipients type is required'
            });
        }

        // Initialize bot
        bot = new Telegraf(config.telegramToken);
        
        let users = [];
        let daysStats = [];

        // Build query based on recipient type
        if (recipients === 'urgent_subscription') {
            // ... существующий код для подписок ...
            
        } else if (recipients === 'expiring_subscription') {
            // ... существующий код для подписок ...
            
        } else if (recipients === 'no_investments') {
            // НОВЫЙ КОД: пользователи без инвестиций
            const noInvestmentsQuery = `
                SELECT DISTINCT u.telegram_id, u.username, u.id, u.status,
                       u.created_at,
                       COALESCE((
                           SELECT SUM(i.amount_decimal) 
                           FROM investments i 
                           WHERE i.user_id = u.id 
                           AND i.status = 'active'
                       ), 0) as total_invested
                FROM users u
                WHERE (u.status IS NULL OR u.status != 'blocked')
                AND NOT EXISTS (
                    SELECT 1 FROM investments i 
                    WHERE i.user_id = u.id 
                    AND i.status = 'active'
                    AND i.amount_decimal > 0
                )
                AND u.created_at <= NOW() - INTERVAL '1 hour'  -- минимум 1 час после регистрации
                ORDER BY u.created_at DESC
            `;
            const noInvestmentsResult = await pool.query(noInvestmentsQuery);
            users = noInvestmentsResult.rows;
            
            console.log(`🎁 Found ${users.length} users without any investments`);
        }

        if (users.length === 0) {
            return res.status(400).json({
                ok: false,
                success: false,
                error: 'No users found matching the selected criteria'
            });
        }

        let successCount = 0;
        let failCount = 0;
        let blockedCount = 0;

        // Send personalized messages
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            
            try {
                console.log(`📤 Sending to user ${i+1}/${users.length}: ${user.telegram_id}`);
                
                let message;
                let keyboard = null;
                
                // Выбираем сообщение в зависимости от типа рассылки
                if (recipients === 'urgent_subscription') {
                    message = AUTO_MESSAGES.urgent_subscription(user.days_left, user.username);
                    keyboard = {
                        inline_keyboard: [[
                            {
                                text: "💎 ПРОДЛИТЬ ПОДПИСКУ",
                                url: "https://t.me/BitnestRusBot?start=links"
                            }
                        ]]
                    };
                } else if (recipients === 'expiring_subscription') {
                    message = AUTO_MESSAGES.expiring_subscription(user.days_left, user.username);
                    keyboard = {
                        inline_keyboard: [[
                            {
                                text: "💎 ПРОДЛИТЬ ПОДПИСКУ", 
                                url: "https://t.me/BitnestRusBot?start=links"
                            }
                        ]]
                    };
                } else if (recipients === 'no_investments') {
                    // НОВЫЙ КОД: сообщение для пользователей без инвестиций
                    message = AUTO_MESSAGES.no_investments(user.username);
                    keyboard = {
                        inline_keyboard: [[
                            {
                                text: "🚀 ВЗЯТЬ В ДОЛГ $10,000",
                                callback_data: "take_loan_10000"
                            }
                        ]]
                    };
                }

                const messageOptions = {
                    parse_mode: 'HTML',
                    disable_web_page_preview: true
                };

                if (keyboard) {
                    messageOptions.reply_markup = keyboard;
                }

                await bot.telegram.sendMessage(user.telegram_id, message, messageOptions);
                
                successCount++;
                
                // Update last activity
                await pool.query(
                    "UPDATE users SET last_activity = NOW() WHERE id = $1",
                    [user.id]
                );

                // Rate limiting
                if (i < users.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
                
            } catch (error) {
                console.error(`❌ Error sending to user ${user.telegram_id}:`, error.message);
                
                if (error.response && error.response.error_code === 403) {
                    // User blocked the bot
                    blockedCount++;
                    
                    // Mark user as blocked
                    await pool.query(
                        "UPDATE users SET status = 'blocked' WHERE id = $1",
                        [user.id]
                    );
                } else {
                    failCount++;
                }
            }
        }

        // Log results
        console.log('✅ Quick notification completed:', {
            recipients,
            total: users.length,
            success: successCount,
            failed: failCount,
            blocked: blockedCount
        });

        // Return results
        res.json({ 
            ok: true, 
            success: true,
            sentCount: successCount,
            failedCount: failCount,
            blockedCount: blockedCount,
            totalUsers: users.length,
            personalized: true,
            daysStats: daysStats,
            message: `Автоматические уведомления отправлены ${successCount} пользователям`
        });
        
    } catch (error) {
        console.error('💥 Critical error in quick notify:', error);
        logger.error('Error in quick notify:', error);
        
        res.status(500).json({ 
            ok: false, 
            success: false,
            error: 'Internal server error',
            message: error.message 
        });
    } finally {
  // Safe cleanup without calling stop()
  if (bot && typeof bot.telegram !== 'undefined') {
    // Just clear the reference
    bot = null;
  }
    }
});
app.get('/debug/subscription/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await checkLinkSubscription(userId);
        
        res.json({
            userId: userId,
            hasSubscription: result,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/api/command/data', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    console.log('📊 Fetching command data for user:', req.session.userId);

    // Получаем данные пользователя
    const userQuery = `
      SELECT u.*, 
             us.status as subscription_status,
             us.expires_at as subscription_expires
      FROM users u
      LEFT JOIN user_subscriptions us ON u.id = us.user_id AND us.status = 'active'
      WHERE u.id = $1
    `;
    const { rows: userRows } = await pool.query(userQuery, [req.session.userId]);
    
    if (userRows.length === 0) {
      return res.status(404).json({ ok: false, error: 'User not found' });
    }

    const user = userRows[0];

    // ========== РАСЧЕТ РЕАЛЬНОЙ СТАТИСТИКИ ==========
    
    try {
      // 1. ОСНОВНАЯ СТАТИСТИКА
      const statsQuery = `
        SELECT 
          -- Все гости (все кто зашел по ссылке)
          (SELECT COUNT(DISTINCT referral_id) 
           FROM referral_relations 
           WHERE referrer_id = $1) as guests,
          
          -- Зарегистрированные рефералы
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1) as referrals,
          
          -- Рефералы с активными инвестициями
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1
           AND EXISTS (
             SELECT 1 FROM investments i 
             WHERE i.user_id = u.id 
             AND i.status = 'active' 
             AND i.amount_decimal > 0
           )) as investors,
          
          -- Рефералы с активной подпиской
          (SELECT COUNT(DISTINCT u.id) 
           FROM referral_relations rr 
           JOIN users u ON rr.referral_id = u.id 
           WHERE rr.referrer_id = $1
           AND EXISTS (
             SELECT 1 FROM user_subscriptions us 
             WHERE us.user_id = u.id 
             AND us.status = 'active' 
             AND us.expires_at > NOW()
           )) as partners
      `;
      
      const { rows: statsRows } = await pool.query(statsQuery, [req.session.userId]);
      const stats = statsRows[0];
      
      const guests = parseInt(stats?.guests) || 0;
      const referrals = parseInt(stats?.referrals) || 0;
      const investors = parseInt(stats?.investors) || 0;
      const partners = parseInt(stats?.partners) || 0;

      // 2. АКТИВНЫЙ ПУЛЛ - сумма ВСЕХ активных инвестиций ВСЕЙ команды (1-17 уровней)
      const activePoolQuery = `
        WITH RECURSIVE team_tree AS (
          SELECT rr.referral_id, 1 as level
          FROM referral_relations rr
          WHERE rr.referrer_id = $1 AND rr.level = 1
          
          UNION ALL
          
          SELECT rr.referral_id, tt.level + 1
          FROM referral_relations rr
          JOIN team_tree tt ON rr.referrer_id = tt.referral_id
          WHERE tt.level < 17
          AND rr.level = 1
        ),
        all_team_members AS (
          SELECT DISTINCT referral_id as user_id
          FROM team_tree
        )
        SELECT COALESCE(SUM(i.amount_decimal), 0) as active_pool
        FROM investments i
        WHERE i.user_id IN (SELECT user_id FROM all_team_members)
        AND i.status = 'active'
        AND i.amount_decimal > 0
      `;
      
      const { rows: activePoolRows } = await pool.query(activePoolQuery, [req.session.userId]);
      const activePool = parseFloat(activePoolRows[0]?.active_pool) || 0;

      // 3. ПАРТНЕРСКИЙ ПРОФИТ
      const partnerProfitQuery = `
        SELECT COALESCE(SUM(t.amount), 0) as total_profit
        FROM transactions t
        WHERE t.user_id = $1 
        AND t.type = 'referral_reward'
        AND t.status = 'completed'
      `;
      
      const { rows: partnerProfitRows } = await pool.query(partnerProfitQuery, [req.session.userId]);
      const partnerProfit = parseFloat(partnerProfitRows[0]?.total_profit) || 0;

      // 4. НЕАКТИВНЫЙ ПУЛЛ - правильный расчет для ВСЕЙ структуры
      const inactivePoolQuery = `
        WITH RECURSIVE team_tree AS (
          SELECT rr.referral_id, 1 as level
          FROM referral_relations rr
          WHERE rr.referrer_id = $1 AND rr.level = 1
          
          UNION ALL
          
          SELECT rr.referral_id, tt.level + 1
          FROM referral_relations rr
          JOIN team_tree tt ON rr.referrer_id = tt.referral_id
          WHERE tt.level < 17
          AND rr.level = 1
        ),
        team_with_levels AS (
          SELECT DISTINCT tt.referral_id as user_id, tt.level
          FROM team_tree tt
          JOIN users u ON tt.referral_id = u.id
        ),
        expected_by_level AS (
          SELECT 
            level,
            COUNT(*) as user_count,
            CASE 
              WHEN level = 1 THEN 100
              WHEN level = 2 THEN 50
              WHEN level = 3 THEN 25
              WHEN level BETWEEN 4 AND 10 THEN 10
              ELSE 5
            END as expected_per_user
          FROM team_with_levels
          GROUP BY level
        )
        SELECT COALESCE(SUM(user_count * expected_per_user), 0) as expected_total
        FROM expected_by_level
      `;
      
      const { rows: expectedRows } = await pool.query(inactivePoolQuery, [req.session.userId]);
      const expectedTotal = parseFloat(expectedRows[0]?.expected_total) || 0;

      // Неактивный пулл = Ожидаемые - Фактические
      const inactivePool = Math.max(expectedTotal - activePool, 0);

      // ========== ФОРМИРОВАНИЕ ОТВЕТА ==========
      const responseData = {
        ok: true,
        user: {
          name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'Unknown User',
          rank: 'Рент. Лейтенант',
          nextRank: 'Маршал',
          balance: user.balance_usdt || 0,
          referralLink: `https://t.me/BitnestRusBot?start=B${user.telegram_id}`,
          linkExpires: user.subscription_expires ? 
            new Date(user.subscription_expires).toLocaleDateString('ru-RU') : '24.02.2026'
        },
        stats: {
          guests: guests,
          referrals: referrals,
          investors: investors,
          partners: partners,
          activePool: activePool,
          inactivePool: inactivePool,
          partnerProfit: partnerProfit
        },
        _debug: {
          expectedTotal: expectedTotal,
          activePool: activePool
        }
      };

      console.log('✅ Реальная статистика:', {
        guests,
        referrals,
        investors,
        partners,
        activePool,
        inactivePool,
        partnerProfit,
        expectedTotal
      });

      res.json(responseData);

    } catch (error) {
      console.error('❌ Ошибка расчета статистики:', error);
      
      // Fallback
      res.json({
        ok: true,
        user: {
          name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'Unknown User',
          rank: 'Рент. Лейтенант',
          nextRank: 'Маршал',
          balance: user.balance_usdt || 0,
          referralLink: `https://t.me/BitnestRusBot?start=B${user.telegram_id}`,
          linkExpires: user.subscription_expires ? 
            new Date(user.subscription_expires).toLocaleDateString('ru-RU') : '24.02.2026'
        },
        stats: {
          guests: 0,
          referrals: 0,
          investors: 0,
          partners: 0,
          activePool: 0,
          inactivePool: 0,
          partnerProfit: 0
        },
        _note: 'Используются тестовые данные из-за ошибки расчета'
      });
    }

  } catch (error) {
    console.error('❌ Command data fetch error:', error);
    res.status(500).json({ ok: false, error: 'Server error' });
  }
});

// Добавьте этот эндпоинт в ваш server.js (после /api/user/activated-levels)

app.post('/api/user/sync-levels', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    console.log(`🔄 Manual sync request for user ${req.session.userId}`);
    
    // Получаем общую сумму активных инвестиций пользователя
    const { rows: investmentRows } = await pool.query(`
      SELECT COALESCE(SUM(amount_decimal), 0) as total_invested
      FROM investments 
      WHERE user_id = $1 AND status = 'active'
    `, [req.session.userId]);

    const totalInvested = parseFloat(investmentRows[0]?.total_invested) || 0;
    
    console.log(`💰 Total invested for user ${req.session.userId}: $${totalInvested}`);
    
    // Определяем активные уровни на основе инвестиций
    const levelsConfig = Array.from({ length: 17 }, (_, i) => ({
      level: i + 1,
      minInvestment: 100 * (i + 1)
    }));

    const calculatedLevels = levelsConfig
      .filter(config => totalInvested >= config.minInvestment)
      .map(config => config.level);

    // Всегда добавляем уровень 1, если нет активных инвестиций
    if (calculatedLevels.length === 0 && totalInvested === 0) {
      calculatedLevels.push(1);
    }

    console.log(`📊 Calculated levels for $${totalInvested}:`, calculatedLevels);

    // Синхронизируем уровни
    await pool.query('BEGIN');
    
    let activatedCount = 0;
    let deactivatedCount = 0;

    // Деактивируем уровни, которые больше не соответствуют пулу
    if (calculatedLevels.length > 0) {
      const deactivateResult = await pool.query(`
        UPDATE user_active_levels 
        SET 
          is_active = false, 
          deactivated_at = CASE WHEN is_active = true THEN NOW() ELSE deactivated_at END
        WHERE user_id = $1 
        AND level NOT IN (${calculatedLevels.map((_, i) => `$${i + 2}`).join(',')})
        AND is_active = true
        RETURNING id
      `, [req.session.userId, ...calculatedLevels]);
      
      deactivatedCount = deactivateResult.rowCount || 0;
    }

    // Активируем соответствующие уровни
    for (const level of calculatedLevels) {
      const minInvestment = 100 * level;
      
      const result = await pool.query(`
        INSERT INTO user_active_levels 
        (user_id, level, investment_id, investment_amount, total_investment, expires_at, is_active, activated_at) 
        VALUES ($1, $2, 0, $3, $4, NOW() + INTERVAL '30 days', true, NOW())
        ON CONFLICT (user_id, level) 
        DO UPDATE SET 
          is_active = true,
          investment_amount = GREATEST(user_active_levels.investment_amount, $3),
          total_investment = $4,
          expires_at = GREATEST(user_active_levels.expires_at, NOW() + INTERVAL '30 days'),
          activated_at = CASE 
            WHEN user_active_levels.activated_at IS NULL THEN NOW()
            ELSE user_active_levels.activated_at 
          END,
          deactivated_at = NULL
        RETURNING id
      `, [req.session.userId, level, minInvestment, totalInvested]);
      
      if (result.rowCount > 0) {
        activatedCount++;
      }
    }

    await pool.query('COMMIT');

    console.log(`✅ Levels synced for user ${req.session.userId}: ${activatedCount} activated, ${deactivatedCount} deactivated`);

    // Получаем обновленные данные
    const { rows: updatedLevelRows } = await pool.query(`
      SELECT level FROM user_active_levels 
      WHERE user_id = $1 AND is_active = true 
      ORDER BY level
    `, [req.session.userId]);

    const updatedLevels = updatedLevelRows.map(row => row.level);
    
    // Определяем следующий уровень
    const currentMaxLevel = Math.max(...updatedLevels);
    const nextLevel = currentMaxLevel < 17 ? currentMaxLevel + 1 : null;
    const nextLevelRequirement = nextLevel ? nextLevel * 100 : null;
    const missingForNextLevel = nextLevelRequirement ? 
      Math.max(0, nextLevelRequirement - totalInvested) : 0;

    res.json({ 
      ok: true, 
      message: 'Уровни успешно синхронизированы с текущим пулом',
      levels: updatedLevels,
      poolInfo: {
        totalInvested: totalInvested,
        currentMaxLevel: currentMaxLevel,
        nextLevel: nextLevel,
        nextLevelRequirement: nextLevelRequirement,
        missingForNextLevel: missingForNextLevel,
        poolStatus: totalInvested >= 100 ? 'active' : 'inactive'
      },
      stats: {
        activated: activatedCount,
        deactivated: deactivatedCount,
        totalInvested: totalInvested
      }
    });

  } catch (error) {
    await pool.query('ROLLBACK');
    console.error('❌ Error syncing levels:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Server error', 
      message: error.message,
      details: 'Check server logs for more information'
    });
  }
});

app.post('/api/user/upgrade-level', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    console.log(`🔼 Manual upgrade request for user ${req.session.userId}:`, req.body);
    
    const { level } = req.body;
    
    if (!level || level < 1 || level > 17) {
      return res.status(400).json({ 
        ok: false, 
        error: 'Invalid level. Level must be between 1 and 17' 
      });
    }

    // Получаем текущий пул
    const { rows: investmentRows } = await pool.query(`
      SELECT COALESCE(SUM(amount_decimal), 0) as total_invested
      FROM investments 
      WHERE user_id = $1 AND status = 'active'
    `, [req.session.userId]);

    const totalInvested = parseFloat(investmentRows[0]?.total_invested) || 0;
    
    // Требования для уровня
    const requiredAmount = 100 * level;
    
    // Проверяем достаточно ли средств в пуле
    if (totalInvested < requiredAmount) {
      return res.status(400).json({ 
        ok: false, 
        error: `Недостаточно средств в пуле для уровня ${level}`,
        details: {
          required: requiredAmount,
          current: totalInvested,
          missing: requiredAmount - totalInvested
        },
        suggestion: 'Пополните пул инвестиций'
      });
    }

    // Просто возвращаем успех - уровни управляются автоматически
    res.json({ 
      ok: true, 
      message: `Уровень ${level} будет активирован автоматически при наличии $${requiredAmount} в пуле`,
      note: 'Уровни управляются автоматически на основе суммы в пуле инвестиций',
      currentPool: totalInvested,
      requiredForLevel: requiredAmount
    });

  } catch (error) {
    console.error('❌ Error in manual upgrade:', error);
    res.status(500).json({ ok: false, error: 'Server error' });
  }
});

app.get('/api/command', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    console.log('📊 Fetching command data for user:', req.session.userId);

    // Используйте ту же логику что и в /api/command/data
    const userQuery = `
      SELECT u.*, 
             us.status as subscription_status,
             us.expires_at as subscription_expires
      FROM users u
      LEFT JOIN user_subscriptions us ON u.id = us.user_id AND us.status = 'active'
      WHERE u.id = $1
    `;
    
    const { rows: userRows } = await pool.query(userQuery, [req.session.userId]);
    
    if (userRows.length === 0) {
      return res.status(404).json({ ok: false, error: 'User not found' });
    }

    const user = userRows[0];

    
    res.json({ 
      ok: true,
      user: {
        id: user.id,
        telegramId: user.telegram_id,
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        referralLink: `https://t.me/BitnestRusBot?start=B${user.telegram_id}`,
        linkExpires: user.subscription_expires ? 
          new Date(user.subscription_expires).toLocaleDateString('ru-RU') : '30.12.2025'
      },
      stats: {
        guests: 0,
        referrals: 0,
        investors: 0,
        partners: 0,
        activePool: 0,
        inactivePool: 0,
        partnerProfit: 0
      },
      team: [
        {
          id: 1,
          name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'User',
          username: user.username ? `@${user.username}` : `ID:${user.telegram_id}`,
          portfolio: user.balance_usdt || 0,
          turnover: 0,
          level: 1
        }
      ]
    });

  } catch (error) {
    console.error('❌ Command fetch error:', error);
    res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});
app.get('/api/team/level/:level', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    const level = parseInt(req.params.level);
    
    if (level < 1 || level > 17) {
      return res.status(400).json({ ok: false, error: 'Invalid level' });
    }

    console.log(`📊 Fetching team data for level ${level}, user:`, req.session.userId);

    let teamMembers = [];

    if (level === 1) {
      // Прямые рефералы (уровень 1) - используем referrer_id из referral_relations
      const directReferralsQuery = `
        SELECT 
          u.id,
          u.first_name,
          u.last_name, 
          u.username,
          u.telegram_id,
          u.created_at as registration_date,
          ur.first_name as referrer_first_name,
          ur.last_name as referrer_last_name,
          ur.username as referrer_username,
          COALESCE(SUM(i.amount_decimal), 0) as portfolio,
          COALESCE(SUM(CASE WHEN i.status = 'active' THEN i.amount_decimal ELSE 0 END), 0) as turnover,
          1 as level,
          -- Статистика рефералов для этого пользователя
          (SELECT COUNT(*) FROM referral_relations rr2 WHERE rr2.referrer_id = u.id) as guests,
          (SELECT COUNT(*) FROM referral_relations rr2 WHERE rr2.referrer_id = u.id) as referrals,
          (SELECT COUNT(DISTINCT i2.user_id) FROM investments i2 
           WHERE i2.user_id IN (SELECT rr2.referral_id FROM referral_relations rr2 WHERE rr2.referrer_id = u.id)
           AND i2.status = 'active' AND i2.amount_decimal > 0) as investors,
          (SELECT COUNT(DISTINCT us.user_id) FROM user_subscriptions us 
           WHERE us.user_id IN (SELECT rr2.referral_id FROM referral_relations rr2 WHERE rr2.referrer_id = u.id)
           AND us.status = 'active' AND us.expires_at > NOW()) as partners,
          'Гость 2/3' as rank, -- Заглушка для ранга
          '0/8' as training -- Заглушка для обучения
        FROM referral_relations rr
        JOIN users u ON rr.referral_id = u.id
        LEFT JOIN users ur ON rr.referrer_id = ur.id
        LEFT JOIN investments i ON u.id = i.user_id
        WHERE rr.referrer_id = $1 AND rr.level = 1
        GROUP BY u.id, u.first_name, u.last_name, u.username, u.telegram_id, u.created_at,
                 ur.first_name, ur.last_name, ur.username
        ORDER BY portfolio DESC
      `;
      
      const { rows: membersRows } = await pool.query(directReferralsQuery, [req.session.userId]);
      
      teamMembers = membersRows.map(member => ({
        id: member.id,
        name: `${member.first_name || ''} ${member.last_name || ''}`.trim() || 'Unknown User',
        username: member.username ? `@${member.username}` : `ID:${member.telegram_id}`,
        telegram_id: member.telegram_id,
        portfolio: parseFloat(member.portfolio) || 0,
        turnover: parseFloat(member.turnover) || 0,
        level: member.level,
        referrer_name: member.referrer_first_name ? 
          `${member.referrer_first_name} ${member.referrer_last_name || ''}`.trim() : null,
        registration_date: member.registration_date ? 
          new Date(member.registration_date).toLocaleDateString('ru-RU') : 'Не указана',
        rank: member.rank,
        guests: parseInt(member.guests) || 0,
        referrals: parseInt(member.referrals) || 0,
        investors: parseInt(member.investors) || 0,
        partners: parseInt(member.partners) || 0,
        training: member.training
      }));

    } else {
      // Уровни 2-17 (рефералы рефералов)
      const levelQuery = `
        WITH RECURSIVE team_tree AS (
          -- Прямые рефералы (уровень 1)
          SELECT referral_id, 1 as level
          FROM referral_relations 
          WHERE referrer_id = $1 AND level = 1
          
          UNION ALL
          
          -- Рефералы рефералов
          SELECT rr.referral_id, tt.level + 1
          FROM referral_relations rr
          JOIN team_tree tt ON rr.referrer_id = tt.referral_id
          WHERE tt.level < $2 AND rr.level = 1
        )
        SELECT 
          u.id,
          u.first_name,
          u.last_name,
          u.username,
          u.telegram_id,
          u.created_at as registration_date,
          ur.first_name as referrer_first_name,
          ur.last_name as referrer_last_name,
          ur.username as referrer_username,
          COALESCE(SUM(i.amount_decimal), 0) as portfolio,
          COALESCE(SUM(CASE WHEN i.status = 'active' THEN i.amount_decimal ELSE 0 END), 0) as turnover,
          tt.level,
          -- Статистика рефералов для этого пользователя
          (SELECT COUNT(*) FROM referral_relations rr2 WHERE rr2.referrer_id = u.id) as guests,
          (SELECT COUNT(*) FROM referral_relations rr2 WHERE rr2.referrer_id = u.id) as referrals,
          (SELECT COUNT(DISTINCT i2.user_id) FROM investments i2 
           WHERE i2.user_id IN (SELECT rr2.referral_id FROM referral_relations rr2 WHERE rr2.referrer_id = u.id)
           AND i2.status = 'active' AND i2.amount_decimal > 0) as investors,
          (SELECT COUNT(DISTINCT us.user_id) FROM user_subscriptions us 
           WHERE us.user_id IN (SELECT rr2.referral_id FROM referral_relations rr2 WHERE rr2.referrer_id = u.id)
           AND us.status = 'active' AND us.expires_at > NOW()) as partners,
          'Гость 2/3' as rank,
          '0/8' as training
        FROM team_tree tt
        JOIN users u ON tt.referral_id = u.id
        LEFT JOIN users ur ON (
          SELECT referrer_id FROM referral_relations 
          WHERE referral_id = u.id AND level = 1 LIMIT 1
        ) = ur.id
        LEFT JOIN investments i ON u.id = i.user_id
        WHERE tt.level = $2
        GROUP BY u.id, u.first_name, u.last_name, u.username, u.telegram_id, u.created_at,
                 ur.first_name, ur.last_name, ur.username, tt.level
        ORDER BY portfolio DESC
      `;
      
      const { rows: membersRows } = await pool.query(levelQuery, [req.session.userId, level]);
      
      teamMembers = membersRows.map(member => ({
        id: member.id,
        name: `${member.first_name || ''} ${member.last_name || ''}`.trim() || 'Unknown User',
        username: member.username ? `@${member.username}` : `ID:${member.telegram_id}`,
        telegram_id: member.telegram_id,
        portfolio: parseFloat(member.portfolio) || 0,
        turnover: parseFloat(member.turnover) || 0,
        level: member.level,
        referrer_name: member.referrer_first_name ? 
          `${member.referrer_first_name} ${member.referrer_last_name || ''}`.trim() : null,
        registration_date: member.registration_date ? 
          new Date(member.registration_date).toLocaleDateString('ru-RU') : 'Не указана',
        rank: member.rank,
        guests: parseInt(member.guests) || 0,
        referrals: parseInt(member.referrals) || 0,
        investors: parseInt(member.investors) || 0,
        partners: parseInt(member.partners) || 0,
        training: member.training
      }));
    }

    console.log(`✅ Found ${teamMembers.length} members for level ${level}`);

    // Если нет реальных данных, используем fallback
    if (teamMembers.length === 0) {
      teamMembers = getFallbackTeamMembers(level);
    }

    res.json({ 
      ok: true, 
      members: teamMembers,
      level: level,
      totalCount: teamMembers.length
    });

  } catch (error) {
    console.error(`❌ Error fetching team level ${req.params.level}:`, error);
    
    // В случае ошибки возвращаем fallback данные
    const fallbackMembers = getFallbackTeamMembers(parseInt(req.params.level));
    
    res.json({ 
      ok: true, 
      members: fallbackMembers,
      level: parseInt(req.params.level),
      totalCount: fallbackMembers.length,
      fallback: true
    });
  }
});
// Функция для fallback данных
function getFallbackTeamMembers(level) {
  const levelData = {
    1: [
      {
        id: 1,
        name: 'Null',
        username: '@null',
        telegram_id: 0,
        portfolio: 0,
        turnover: 0,
        level: 1,
        referrer_name: 'Null',
        registration_date: '00.00.0000',
        rank: 'Гость 0/3',
        guests: 0,
        referrals: 0,
        investors: 0,
        partners: 0,
        training: '0/8'
      }
    ]
  };

  return levelData[level] || [];
}
// Эндпоинт для получения данных команды
app.get('/api/team/data', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ ok: false, error: 'Not authenticated' });
    }

    // Получаем реферальную статистику
    const referralStats = await pool.query(`
      SELECT 
        COUNT(*) as total_referrals,
        COUNT(DISTINCT rr2.referral_id) as total_team
      FROM referral_relations rr
      LEFT JOIN referral_relations rr2 ON rr.referral_id = rr2.referrer_id
      WHERE rr.referrer_id = $1
    `, [req.session.userId]);

    // Получаем инвестиции команды
    const teamInvestments = await pool.query(`
      SELECT 
        COALESCE(SUM(i.amount_decimal), 0) as team_capital,
        COUNT(DISTINCT i.user_id) as active_investors
      FROM investments i
      WHERE i.user_id IN (
        SELECT referral_id FROM referral_relations WHERE referrer_id = $1
        UNION
        SELECT rr2.referral_id FROM referral_relations rr2 
        WHERE rr2.referrer_id IN (SELECT referral_id FROM referral_relations WHERE referrer_id = $1)
      )
      AND i.status = 'active'
    `, [req.session.userId]);

    res.json({
      ok: true,
      team: {
        totalMembers: parseInt(referralStats.rows[0]?.total_team) || 0,
        totalReferrals: parseInt(referralStats.rows[0]?.total_referrals) || 0,
        teamCapital: parseFloat(teamInvestments.rows[0]?.team_capital) || 0,
        activeInvestors: parseInt(teamInvestments.rows[0]?.active_investors) || 0
      }
    });
  } catch (error) {
    console.error('Team data fetch error:', error);
    res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});
/**
 * Вебхук для уведомлений о реферальных пополнениях
 */
app.post('/webhook/referral-deposit', async (req, res) => {
  console.log("🔔 ВЕБХУК: Получен запрос о реферальном пополнении");
  
  try {
    console.log("📨 Данные:", req.body);

    // Простая валидация
    const { wallet, amount, txHash, from } = req.body;
    
    if (!wallet || !amount || !txHash) {
      console.log('❌ Невалидные данные вебхука:', { wallet, amount, txHash });
      return res.status(400).json({ 
        ok: false, 
        error: 'Missing required fields: wallet, amount, txHash' 
      });
    }

    console.log(`💸 Обработка реферального пополнения: ${amount} USDT на ${wallet}`);

    // 🔥 ДИНАМИЧЕСКИ ИМПОРТИРУЕМ ФУНКЦИИ
    const referralModule = await import('../services/referral.js');
    const { processReferralRewardEnhanced, processReferralRewardSimple } = referralModule;

    // Используем существующую функцию обработки
    await processReferralRewardEnhanced(
      wallet,
      amount,
      txHash,
      from
    );

    console.log('✅ Реферальное пополнение успешно обработано');

    res.json({ 
      ok: true, 
      message: 'Referral deposit processed successfully',
      processed: true 
    });

  } catch (error) {
    console.error('❌ Ошибка обработки вебхука:', error);
    
    // Пробуем обработать через упрощенную функцию
    try {
      const { wallet, amount, txHash, from } = req.body;
      console.log('🔄 Вебхук не сработал, обрабатываем локально...');
      
      const referralModule = await import('../referral.js');
      const { processReferralRewardSimple } = referralModule;
      
      await processReferralRewardSimple(wallet, amount, txHash, from);
      
      res.json({ 
        ok: true, 
        message: 'Referral deposit processed with fallback',
        fallback: true 
      });
    } catch (fallbackError) {
      console.error('❌ Фолбэк обработка также не удалась:', fallbackError);
      res.status(500).json({ 
        ok: false, 
        error: 'Internal server error',
        details: fallbackError.message 
      });
    }
  }
});
// Функция для синхронизации уровней всех пользователей
async function syncAllUserLevels() {
  console.log('🔄 Starting sync of all user levels...');
  
  try {
    // Получаем всех пользователей с активными инвестициями
    const { rows: users } = await pool.query(`
      SELECT DISTINCT u.id as user_id, 
             COALESCE(SUM(i.amount_decimal), 0) as total_invested
      FROM users u
      LEFT JOIN investments i ON u.id = i.user_id AND i.status = 'active'
      WHERE i.amount_decimal > 0 OR u.id IN (SELECT DISTINCT user_id FROM user_active_levels)
      GROUP BY u.id
    `);

    console.log(`📊 Found ${users.length} users to sync`);

    let syncedCount = 0;
    let errorCount = 0;

    for (const user of users) {
      try {
        const userId = user.user_id;
        const totalInvested = parseFloat(user.total_invested) || 0;

        // Определяем активные уровни
        const levelsConfig = Array.from({ length: 17 }, (_, i) => ({
          level: i + 1,
          minInvestment: 100 * (i + 1)
        }));

        const activeLevels = levelsConfig
          .filter(config => totalInvested >= config.minInvestment)
          .map(config => config.level);

        // Гарантируем уровень 1 
        if (activeLevels.length === 0) {
          activeLevels.push(1);
        }

        // Синхронизируем уровни
        await pool.query('BEGIN');

        // Деактивируем несоответствующие уровни
        if (activeLevels.length > 0) {
          await pool.query(`
            UPDATE user_active_levels 
            SET is_active = false, deactivated_at = NOW()
            WHERE user_id = $1 
            AND level NOT IN (${activeLevels.map((_, i) => `$${i + 2}`).join(',')})
            AND is_active = true
          `, [userId, ...activeLevels]);
        }

        // Активируем соответствующие уровни
        for (const level of activeLevels) {
          const minInvestment = 100 * level;
          
          await pool.query(`
            INSERT INTO user_active_levels 
            (user_id, level, investment_id, investment_amount, total_investment, expires_at, is_active) 
            VALUES ($1, $2, 0, $3, $4, NOW() + INTERVAL '30 days', true)
            ON CONFLICT (user_id, level) 
            DO UPDATE SET 
              is_active = true,
              investment_amount = GREATEST(user_active_levels.investment_amount, $3),
              total_investment = $4,
              expires_at = GREATEST(user_active_levels.expires_at, NOW() + INTERVAL '30 days'),
              deactivated_at = NULL
          `, [userId, level, minInvestment, totalInvested]);
        }

        await pool.query('COMMIT');
        syncedCount++;
        
        if (syncedCount % 100 === 0) {
          console.log(`✅ Synced ${syncedCount} users...`);
        }
      } catch (userError) {
        await pool.query('ROLLBACK');
        console.error(`❌ Error syncing user ${user.user_id}:`, userError.message);
        errorCount++;
      }
    }

    console.log(`🎉 Sync completed: ${syncedCount} users synced, ${errorCount} errors`);
    return { syncedCount, errorCount };
    
  } catch (error) {
    console.error('❌ Error in syncAllUserLevels:', error);
    throw error;
  }
}

// Эндпоинт для запуска синхронизации
app.post('/admin/sync-all-levels', async (req, res) => {
  try {
    const { secret } = req.query;
    
    if (!secret || secret !== config.adminSecret) {
      return res.status(401).json({ ok: false, error: 'Unauthorized' });
    }

    console.log('🔄 Admin requested sync of all user levels');
    
    // Запускаем в фоне
    syncAllUserLevels().then(result => {
      console.log('✅ Sync completed:', result);
    }).catch(error => {
      console.error('❌ Sync failed:', error);
    });

    res.json({ 
      ok: true, 
      message: 'Level synchronization started in background',
      note: 'Check server logs for progress'
    });

  } catch (error) {
    console.error('Error starting sync:', error);
    res.status(500).json({ ok: false, error: error.message });
  }
});
app.post('/admin/delete-all-blocked', async (req, res) => {
    try {
        const secret = req.query.secret;
        
        // Проверка авторизации
        if (secret !== config.adminSecret) {
            return res.status(401).json({ 
                success: false, 
                error: 'Unauthorized: Invalid admin secret' 
            });
        }
        
        console.log('🔍 Поиск пользователей, которые заблокировали бота (is_blocked = TRUE)...');
        
        // 1. Проверяем существование столбца is_blocked
        const checkColumn = await pool.query(`
            SELECT EXISTS (
                SELECT 1 
                FROM information_schema.columns 
                WHERE table_name = 'users' 
                AND column_name = 'is_blocked'
            ) as has_is_blocked
        `);
        
        const hasIsBlockedColumn = checkColumn.rows[0]?.has_is_blocked || false;
        
        if (!hasIsBlockedColumn) {
            console.log('❌ Столбец is_blocked не найден в таблице users');
            return res.json({
                success: false,
                deletedCount: 0,
                message: 'Столбец is_blocked не найден в таблице users. Невозможно определить заблокировавших бота пользователей.',
                error: 'Column is_blocked does not exist'
            });
        }
        
        console.log('✅ Столбец is_blocked существует');
        
        // 2. Ищем пользователей с is_blocked = TRUE
        const blockedUsers = await pool.query(`
            SELECT id, telegram_id, username, is_blocked, status, created_at
            FROM users 
            WHERE is_blocked = TRUE
        `);
        
        console.log(`👥 Найдено пользователей с is_blocked = TRUE: ${blockedUsers.rows.length}`);
        
        // 3. Логируем детальную информацию
        if (blockedUsers.rows.length > 0) {
            console.log('📊 Детализация найденных пользователей (первые 10):');
            blockedUsers.rows.slice(0, 10).forEach((user, index) => {
                console.log(`  ${index + 1}. ID: ${user.id}, Telegram: ${user.telegram_id}, Username: ${user.username || 'нет'}, Зарегистрирован: ${new Date(user.created_at).toLocaleDateString('ru-RU')}`);
            });
            
            if (blockedUsers.rows.length > 10) {
                console.log(`  ... и ещё ${blockedUsers.rows.length - 10} пользователей`);
            }
        }
        
        if (blockedUsers.rows.length === 0) {
            console.log('✅ Нет пользователей с is_blocked = TRUE');
            return res.json({
                success: true,
                deletedCount: 0,
                message: 'Нет пользователей, которые заблокировали бота (is_blocked = TRUE)',
                stats: await getDatabaseStats()
            });
        }
        
        // Получаем ID пользователей для удаления
        const userIds = blockedUsers.rows.map(user => user.id);
        
        // Начинаем транзакцию
        await pool.query('BEGIN');
        
        try {
            console.log(`🗑️ Начинаем удаление ${userIds.length} пользователей с is_blocked = TRUE...`);
            
            // Список таблиц для очистки (в порядке зависимостей)
            const tablesToClean = [
                // ДОБАВЛЕНО: Сначала удаляем из manual_review_requests
                { name: 'manual_review_requests', query: 'DELETE FROM manual_review_requests WHERE user_id = ANY($1)' },
                { name: 'investments', query: 'DELETE FROM investments WHERE user_id = ANY($1)' },
                { name: 'transactions', query: 'DELETE FROM transactions WHERE user_id = ANY($1)' },
                { name: 'user_subscriptions', query: 'DELETE FROM user_subscriptions WHERE user_id = ANY($1)' },
                { name: 'referral_relations', query: 'DELETE FROM referral_relations WHERE referrer_id = ANY($1) OR referral_id = ANY($1)' },
                { name: 'payments', query: 'DELETE FROM payments WHERE user_id = ANY($1)' },
                { name: 'user_active_levels', query: 'DELETE FROM user_active_levels WHERE user_id = ANY($1)' },
                { name: 'user_sessions', query: "DELETE FROM user_sessions WHERE sess::jsonb->>'userId'::text = ANY($1)" }
            ];
            
            // Удаляем связанные данные
            let totalDeletedFromRelated = 0;
            for (const table of tablesToClean) {
                try {
                    console.log(`🗑️ Удаление из таблицы ${table.name}...`);
                    const result = await pool.query(table.query, [userIds]);
                    const deletedCount = result.rowCount || 0;
                    totalDeletedFromRelated += deletedCount;
                    
                    if (deletedCount > 0) {
                        console.log(`   ✅ Удалено записей из ${table.name}: ${deletedCount}`);
                    } else {
                        console.log(`   ℹ️ В таблице ${table.name} нет данных для удаления`);
                    }
                    
                } catch (e) {
                    if (e.message.includes('does not exist')) {
                        console.log(`   ℹ️ Таблица ${table.name} не существует, пропускаем`);
                    } else {
                        console.warn(`   ⚠️ Не удалось удалить из ${table.name}:`, e.message);
                        // Продолжаем, даже если не удалось очистить связанные таблицы
                    }
                }
            }
            
            console.log(`📊 Всего удалено из связанных таблиц: ${totalDeletedFromRelated} записей`);
            
            // Удаляем самих пользователей
            console.log('🗑️ Удаление пользователей из таблицы users...');
            const deleteResult = await pool.query(
                'DELETE FROM users WHERE id = ANY($1) RETURNING id, telegram_id, username, is_blocked, created_at',
                [userIds]
            );
            
            const deletedCount = deleteResult.rows.length;
            console.log(`✅ Удалено пользователей: ${deletedCount}`);
            
            await pool.query('COMMIT');
            
            // Обновляем статистику блокировок на странице (если нужно)
            const stats = await getDatabaseStats();
            
            console.log('🎯 Удаление завершено успешно!');
            
            res.json({
                success: true,
                deletedCount: deletedCount,
                message: `Успешно удалено ${deletedCount} пользователей, которые заблокировали бота (is_blocked = TRUE)`,
                stats: stats,
                deletedUsers: deleteResult.rows.map(user => ({
                    id: user.id,
                    telegramId: user.telegram_id,
                    username: user.username || 'Без имени',
                    is_blocked: user.is_blocked,
                    registered: new Date(user.created_at).toLocaleDateString('ru-RU')
                })),
                debug: {
                    totalFound: blockedUsers.rows.length,
                    actuallyDeleted: deletedCount,
                    totalRelatedDeleted: totalDeletedFromRelated
                }
            });
            
        } catch (error) {
            await pool.query('ROLLBACK');
            console.error('❌ Ошибка при удалении:', error);
            res.status(500).json({ 
                success: false, 
                error: error.message 
            });
            return;
        }
        
    } catch (error) {
        console.error('💥 Error deleting all blocked users:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// Вспомогательная функция для получения статистики
async function getDatabaseStats() {
    try {
        // Проверяем существование столбца is_blocked
        const checkColumn = await pool.query(`
            SELECT EXISTS (
                SELECT 1 
                FROM information_schema.columns 
                WHERE table_name = 'users' 
                AND column_name = 'is_blocked'
            ) as has_is_blocked
        `);
        
        const hasIsBlockedColumn = checkColumn.rows[0]?.has_is_blocked || false;
        
        if (!hasIsBlockedColumn) {
            return {
                totalUsers: 'неизвестно',
                remainingBlocked: 0,
                blockedPercentage: '0.0',
                hasIsBlockedColumn: false
            };
        }
        
        const totalUsersResult = await pool.query('SELECT COUNT(*) as count FROM users');
        const blockedUsersResult = await pool.query(
            "SELECT COUNT(*) as count FROM users WHERE is_blocked = TRUE"
        );
        
        const totalUsers = parseInt(totalUsersResult.rows[0]?.count) || 0;
        const blockedUsers = parseInt(blockedUsersResult.rows[0]?.count) || 0;
        
        return {
            totalUsers: totalUsers,
            remainingBlocked: blockedUsers,
            blockedPercentage: totalUsers > 0 ? ((blockedUsers / totalUsers) * 100).toFixed(1) : '0.0',
            hasIsBlockedColumn: true
        };
    } catch (error) {
        console.error('Error getting database stats:', error);
        return {
            totalUsers: 'неизвестно',
            remainingBlocked: 'неизвестно',
            blockedPercentage: '0.0',
            hasIsBlockedColumn: false
        };
    }
}

// Дополнительный эндпоинт для быстрого просмотра заблокированных
app.get('/admin/view-blocked-users', async (req, res) => {
    try {
        const secret = req.query.secret;
        
        if (secret !== config.adminSecret) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        
        // Проверяем существование столбца is_blocked
        const checkColumn = await pool.query(`
            SELECT EXISTS (
                SELECT 1 
                FROM information_schema.columns 
                WHERE table_name = 'users' 
                AND column_name = 'is_blocked'
            ) as has_is_blocked
        `);
        
        const hasIsBlockedColumn = checkColumn.rows[0]?.has_is_blocked || false;
        
        if (!hasIsBlockedColumn) {
            return res.json({
                error: 'Столбец is_blocked не найден в таблице users',
                hasIsBlockedColumn: false
            });
        }
        
        // Получаем список заблокированных пользователей
        const blockedUsers = await pool.query(`
            SELECT 
                id, 
                telegram_id, 
                username, 
                is_blocked, 
                status, 
                created_at,
                last_activity,
                COALESCE((
                    SELECT COUNT(*) 
                    FROM investments 
                    WHERE user_id = users.id 
                    AND status = 'active'
                ), 0) as active_investments,
                COALESCE((
                    SELECT COUNT(*) 
                    FROM referral_relations 
                    WHERE referrer_id = users.id
                ), 0) as referrals_count
            FROM users 
            WHERE is_blocked = TRUE
            ORDER BY created_at DESC
            LIMIT 100
        `);
        
        // Статистика
        const totalUsers = await pool.query('SELECT COUNT(*) as count FROM users');
        const blockedUsersCount = await pool.query("SELECT COUNT(*) as count FROM users WHERE is_blocked = TRUE");
        
        const stats = {
            totalUsers: parseInt(totalUsers.rows[0]?.count) || 0,
            blockedUsers: parseInt(blockedUsersCount.rows[0]?.count) || 0,
            percentage: 0
        };
        
        if (stats.totalUsers > 0) {
            stats.percentage = ((stats.blockedUsers / stats.totalUsers) * 100).toFixed(2);
        }
        
        res.json({
            success: true,
            hasIsBlockedColumn: true,
            stats: stats,
            users: blockedUsers.rows.map(user => ({
                id: user.id,
                telegramId: user.telegram_id,
                username: user.username,
                is_blocked: user.is_blocked,
                status: user.status,
                registered: new Date(user.created_at).toLocaleDateString('ru-RU'),
                lastActivity: user.last_activity ? new Date(user.last_activity).toLocaleDateString('ru-RU') : 'никогда',
                activeInvestments: parseInt(user.active_investments),
                referralsCount: parseInt(user.referrals_count)
            }))
        });
        
    } catch (error) {
        console.error('Error viewing blocked users:', error);
        res.status(500).json({ error: error.message });
    }
});
/**
 * Функция для создания подписи вебхука (опционально)
 */
function createWebhookSignature(payload, secret) {
  const crypto = require('crypto');
  const hmac = crypto.createHmac('sha256', secret);
  
  // Создаем строку для подписи (исключаем саму подпись)
  const { signature, ...payloadWithoutSig } = payload;
  const sortedPayload = JSON.stringify(payloadWithoutSig, Object.keys(payloadWithoutSig).sort());
  
  hmac.update(sortedPayload);
  return hmac.digest('hex');
}
  // ==================== СЛУЖЕБНЫЕ ЭНДПОИНТЫ ====================

  /**
   * Health check endpoint
   */
  app.get('/health', (req, res) => {
    res.json({ ok: true, ts: Date.now() });
  });

  // Запуск сервера
  app.listen(config.port, () => {
    logger.info('Server started on https://sevenlabdao.com', config.port);
  });
}

export { startServer };