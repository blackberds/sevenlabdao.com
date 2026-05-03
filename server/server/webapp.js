import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from '../db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Настройка EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Функция для получения информации о реферере
async function getReferrerInfo(refId) {
    try {
        if (!refId || refId === 'default') {
            return null;
        }

        // Запрос к базе данных для получения информации о реферере
        const query = `
            SELECT 
                id,
                username,
                first_name,
                last_name,
                created_at
            FROM users 
            WHERE id = $1
        `;
        
        const result = await pool.query(query, [refId]);
        
        if (result.rows.length === 0) {
            console.log(`Referrer with ID ${refId} not found`);
            return null;
        }
        
        return result.rows[0];
    } catch (error) {
        console.error('Error fetching referrer info:', error);
        return null;
    }
}
// Функция для генерации корректной ссылки TokenPocket
function generateTokenPocketLink(cleanLink) {
    // Параметры для открытия DApp в TokenPocket
    const params = {
        url: cleanLink,    // URL вашего DApp
        chain: "BSC",      // Укажите нужный блокчейн
        source: "bitnest"  // Идентификатор источника
    };
    
    // Кодируем параметры в строку JSON
    const encodedParams = encodeURIComponent(JSON.stringify(params));
    
    // Формируем глубокую ссылку для TokenPocket
    return `tpdapp://open?params=${encodedParams}`;
}
// Функция для генерации ссылки MetaMask
function generateMetaMaskLink(cleanLink) {
    return `https://metamask.app.link/dapp/${cleanLink.replace(/^https?:\/\//, '')}`;
}

// Функция для извлечения чистой ссылки
function extractCleanLink(displayLink) {
    try {
        const url = new URL(displayLink);
        return url.href; // возвращаем весь URL, а не только ref
    } catch (e) {
        return displayLink;
    }
}
app.get('/referral-app', async (req, res) => {
    try {
        const { ref, link } = req.query;
        
        // Получаем информацию о реферере из базы данных
        let referrerInfo = null;
        if (ref && ref !== 'default') {
            referrerInfo = await getReferrerInfo(ref);
        }

        // Устанавливаем значения по умолчанию, если параметры не переданы
        const refLink = ref || 'default';
        const displayLink = link || 'https://bitnest.ad/RQTPT';

        console.log('Referral app accessed with params:', { ref: refLink, link: displayLink });

        // Извлекаем чистую ссылку для кошельков
        const cleanLink = extractCleanLink(displayLink);

        // Генерируем специальные ссылки для кошельков
        const walletLinks = {
           tokenpocket: generateTokenPocketLink(cleanLink),
           metamask: generateMetaMaskLink(cleanLink),
           browser: cleanLink
       };

        res.render('referral-app', {
            refLink: refLink,
            displayLink: displayLink,
            cleanLink: cleanLink, // Добавляем чистую ссылку
            referrerInfo: referrerInfo,
            walletLinks: walletLinks,
            botUsername: process.env.BOT_USERNAME || 'BitNest_Support_Bot'
        });
    } catch (error) {
        console.error('Error in referral app:', error);
        // В случае ошибки используем значения по умолчанию
        const cleanLink = 'https://bitnest.ad/RQTPT';
        res.render('referral-app', {
            refLink: 'default',
            displayLink: 'https://bitnest.ad/RQTPT',
            cleanLink: cleanLink,
            referrerInfo: null,
            walletLinks: {
                tokenpocket: generateTokenPocketLink(cleanLink),
                metamask: generateMetaMaskLink(cleanLink),
                browser: cleanLink
            },
            botUsername: process.env.BOT_USERNAME || 'BitNest_Support_Bot'
        });
    }
});
app.get('/pool-app', (req, res) => {
    const { amount, period, user, ref } = req.query;
    
    // Рендерим HTML страницу с параметрами
    res.render('pool-app', {
        amount: amount || '0',
        period: period || '0',
        userWallet: user || '',
        ref: ref || ''
    });
});
// Роут для обработки выбора опции
app.post('/process-choice', (req, res) => {
    try {
        const { choice, ref, display_link, platform } = req.body;
        
        console.log('User choice:', choice, 'Referral:', ref, 'Display Link:', display_link, 'Platform:', platform);
        
        res.json({ 
            success: true, 
            message: 'Choice processed successfully',
            timestamp: new Date().toISOString(),
            data: {
                choice,
                ref,
                display_link,
                platform
            }
        });
    } catch (error) {
        console.error('Error processing choice:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error processing choice',
            error: error.message 
        });
    }
});

export default app;