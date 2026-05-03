// cleanupBlockedUsers.js
import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
const { Pool } = pg;

// Получаем текущую директорию
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Загружаем .env
const envPath = join(__dirname, '..', '.env');
console.log(`Загружаю .env из: ${envPath}`);
dotenv.config({ path: envPath });

const BOT_TOKEN = process.env.BOT_TOKEN;
const PROJECT_CHAT_ID = process.env.PROJECT_CHAT_ID;

if (!BOT_TOKEN) {
    console.error('❌ BOT_TOKEN не найден');
    process.exit(1);
}

console.log('🔍 Проверка заблокированных пользователей');
console.log('Токен:', `${BOT_TOKEN.substring(0, 10)}...`);
console.log('Группа:', PROJECT_CHAT_ID || 'не указана');

// Создаем пул соединений с базой
function createDatabasePool() {
    try {
        const connectionString = process.env.DATABASE_URL;
        if (!connectionString) {
            console.error('❌ DATABASE_URL не найден');
            return null;
        }

        console.log('🔗 Подключаюсь к базе данных...');
        
        const pool = new Pool({
            connectionString: connectionString,
            ssl: false,
            max: 5, // Ограничиваем количество соединений
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 10000
        });

        return pool;
    } catch (error) {
        console.error('❌ Ошибка создания пула:', error.message);
        return null;
    }
}

// Основная функция
async function checkAndRemoveBlockedUsers() {
    let pool = null;
    let bot = null;
    
    try {
        // 1. Подключаемся к базе
        pool = createDatabasePool();
        if (!pool) {
            throw new Error('Не удалось подключиться к базе данных');
        }
        
        // Тестируем подключение
        const client = await pool.connect();
        console.log('✅ Подключение к базе успешно');
        
        // Получаем статистику
        const stats = await client.query(`
            SELECT 
                COUNT(*) as total_users,
                COUNT(CASE WHEN is_blocked = true THEN 1 END) as blocked_users,
                COUNT(CASE WHEN is_blocked = false THEN 1 END) as active_users
            FROM users 
            WHERE telegram_id IS NOT NULL
        `);
        
        const statsData = stats.rows[0];
        console.log('📊 Статистика пользователей:');
        console.log(`   Всего: ${statsData.total_users}`);
        console.log(`   Активных: ${statsData.active_users}`);
        console.log(`   Заблокированных: ${statsData.blocked_users}`);
        
        client.release();
        
        // 2. Создаем и настраиваем бота
        console.log('\n🤖 Инициализирую бота...');
        bot = new Telegraf(BOT_TOKEN, {
            telegram: {
                apiRoot: 'https://api.telegram.org'
            }
        });
        
        // НЕ ЗАПУСКАЕМ бота в режиме polling, просто получаем информацию
        const botInfo = await bot.telegram.getMe();
        console.log(`✅ Бот: ${botInfo.first_name} (@${botInfo.username})`);
        
        // 3. Получаем пользователей для проверки
        console.log('\n📊 Получаю пользователей для проверки...');
        const usersResult = await pool.query(`
            SELECT id, telegram_id, username, first_name, last_name, is_blocked 
            FROM users 
            WHERE telegram_id IS NOT NULL 
            AND is_blocked = false
            AND telegram_id::bigint > 0
            ORDER BY created_at DESC
        `);
        
        const users = usersResult.rows;
        console.log(`👥 Пользователей для проверки: ${users.length}`);
        
        if (users.length === 0) {
            console.log('ℹ️ Нет пользователей для проверки');
            return;
        }
        
        let checkedCount = 0;
        let blockedCount = 0;
        let removedFromGroupCount = 0;
        let errorsCount = 0;
        
        console.log('\n🚀 Начинаю проверку...\n');
        
        // 4. Проверяем каждого пользователя
        for (const user of users) {
            checkedCount++;
            const telegramId = user.telegram_id;
            const displayName = user.username || user.first_name || `ID:${telegramId}`;
            
            console.log(`[${checkedCount}/${users.length}] 👤 ${displayName}`);
            
            try {
                // Проверяем статус пользователя
                const chatMember = await bot.telegram.getChatMember(telegramId, botInfo.id);
                
                // Определяем статус
                const status = chatMember.status;
                console.log(`   📊 Статус: ${status}`);
                
                // Если пользователь заблокировал бота или вышел
                if (status === 'left' || status === 'kicked') {
                    console.log(`   🚫 Пользователь заблокировал бота`);
                    
                    blockedCount++;
                    
                    // Помечаем как заблокированного в базе
                    await pool.query(
                        'UPDATE users SET is_blocked = true, updated_at = NOW() WHERE telegram_id = $1',
                        [telegramId]
                    );
                    console.log(`   📝 Помечен как заблокированный`);
                    
                    // Удаляем из группы если указана
                    if (PROJECT_CHAT_ID) {
                        try {
                            await bot.telegram.banChatMember(PROJECT_CHAT_ID, telegramId);
                            console.log(`   ✅ Удален из группы`);
                            removedFromGroupCount++;
                        } catch (groupError) {
                            if (groupError.code === 400 && groupError.description.includes('USER_NOT_PARTICIPANT')) {
                                console.log(`   ℹ️ Не состоит в группе`);
                            } else {
                                console.log(`   ⚠️ Ошибка удаления из группы: ${groupError.message}`);
                            }
                        }
                    }
                } else {
                    console.log(`   ✅ Активен`);
                }
                
            } catch (error) {
                errorsCount++;
                
                // Обработка разных типов ошибок
                if (error.code === 403 && error.description.includes('bot was blocked')) {
                    console.log(`   🚫 Пользователь заблокировал бота (403)`);
                    
                    blockedCount++;
                    
                    // Помечаем как заблокированного
                    await pool.query(
                        'UPDATE users SET is_blocked = true, updated_at = NOW() WHERE telegram_id = $1',
                        [telegramId]
                    );
                    console.log(`   📝 Помечен как заблокированный`);
                    
                } else if (error.code === 400 && error.description.includes('chat not found')) {
                    console.log(`   ℹ️ Чат не найден - возможно, пользователь не начинал диалог с ботом`);
                    
                } else if (error.code === 400 && error.description.includes('user not found')) {
                    console.log(`   ℹ️ Пользователь не найден - возможно, аккаунт удален`);
                    
                    // Можно пометить как неактивного
                    await pool.query(
                        'UPDATE users SET is_blocked = true, updated_at = NOW() WHERE telegram_id = $1',
                        [telegramId]
                    );
                    console.log(`   📝 Помечен как неактивный (аккаунт удален)`);
                    
                } else {
                    console.log(`   ⚠️ Ошибка: ${error.message}`);
                }
            }
            
            // Задержка между запросами (1 секунда)
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // 5. Выводим итоги
        console.log('\n' + '='.repeat(50));
        console.log('📊 ИТОГОВАЯ СТАТИСТИКА');
        console.log('='.repeat(50));
        console.log(`👥 Всего проверено: ${checkedCount}`);
        console.log(`✅ Активных: ${checkedCount - blockedCount - errorsCount}`);
        console.log(`🚫 Заблокировали бота: ${blockedCount}`);
        console.log(`👥 Удалено из группы: ${removedFromGroupCount}`);
        console.log(`⚠️ Ошибок проверки: ${errorsCount}`);
        
        if (blockedCount > 0) {
            const percentage = ((blockedCount / checkedCount) * 100).toFixed(1);
            console.log(`📈 Процент заблокировавших: ${percentage}%`);
        }
        
        // 6. Рекомендации
        console.log('\n💡 РЕКОМЕНДАЦИИ:');
        if (blockedCount > 0) {
            console.log(`   • Найдено ${blockedCount} заблокированных пользователей`);
            console.log('   • Они помечены как is_blocked = true в базе');
            console.log('   • Запустите скрипт снова для полной проверки всех пользователей');
        } else {
            console.log('   • Заблокированных пользователей не обнаружено');
        }
        
        // Если мы проверили только часть пользователей, предлагаем продолжить
        const totalActiveUsers = parseInt(statsData.active_users);
        if (checkedCount < totalActiveUsers) {
            const remaining = totalActiveUsers - checkedCount;
            console.log(`\n⚠️ Проверено только ${checkedCount} из ${totalActiveUsers} пользователей`);
            console.log(`   • Осталось проверить: ${remaining} пользователей`);
            console.log('   • Увеличьте LIMIT в SQL запросе для полной проверки');
        }
        
    } catch (error) {
        console.error('❌ Критическая ошибка:', error.message);
        
    } finally {
        // 7. Корректно закрываем все соединения
        console.log('\n🔧 Завершение работы...');
        
        try {
            if (pool) {
                await pool.end();
                console.log('✅ Соединение с базой закрыто');
            }
        } catch (poolError) {
            console.error('❌ Ошибка закрытия пула:', poolError.message);
        }
        
        try {
            if (bot) {
                // Если бот был запущен, останавливаем его
                if (bot.polling) {
                    await bot.stop();
                    console.log('✅ Бот остановлен');
                }
            }
        } catch (botError) {
            console.error('❌ Ошибка остановки бота:', botError.message);
        }
        
        console.log('✅ Скрипт завершен');
    }
}

// Дополнительные функции

// Функция для проверки конкретного пользователя
async function checkSingleUser(telegramId) {
    if (!BOT_TOKEN) {
        console.error('❌ BOT_TOKEN не найден');
        return;
    }
    
    const bot = new Telegraf(BOT_TOKEN);
    
    try {
        console.log(`🔍 Проверка пользователя ${telegramId}...`);
        
        const botInfo = await bot.telegram.getMe();
        console.log(`🤖 Бот: ${botInfo.first_name}`);
        
        const chatMember = await bot.telegram.getChatMember(telegramId, botInfo.id);
        console.log(`📊 Статус: ${chatMember.status}`);
        
        if (chatMember.status === 'left' || chatMember.status === 'kicked') {
            console.log('🚫 Пользователь заблокировал бота');
        } else {
            console.log('✅ Пользователь активен');
        }
        
    } catch (error) {
        if (error.code === 403 && error.description.includes('bot was blocked')) {
            console.log('🚫 Пользователь заблокировал бота (403)');
        } else if (error.code === 400 && error.description.includes('chat not found')) {
            console.log('ℹ️ Чат не найден - пользователь не начинал диалог с ботом');
        } else {
            console.log(`⚠️ Ошибка: ${error.message}`);
        }
    }
}

// Функция для массовой проверки (без базы данных)
async function checkMultipleUsers(userIds = []) {
    if (!BOT_TOKEN || userIds.length === 0) {
        console.error('❌ Не указаны пользователи для проверки');
        return;
    }
    
    const bot = new Telegraf(BOT_TOKEN);
    
    try {
        const botInfo = await bot.telegram.getMe();
        console.log(`🤖 Бот: ${botInfo.first_name}`);
        console.log(`👥 Пользователей для проверки: ${userIds.length}\n`);
        
        let blockedCount = 0;
        
        for (let i = 0; i < userIds.length; i++) {
            const telegramId = userIds[i];
            
            try {
                const chatMember = await bot.telegram.getChatMember(telegramId, botInfo.id);
                
                if (chatMember.status === 'left' || chatMember.status === 'kicked') {
                    console.log(`[${i+1}/${userIds.length}] ${telegramId}: 🚫 Заблокировал`);
                    blockedCount++;
                } else {
                    console.log(`[${i+1}/${userIds.length}] ${telegramId}: ✅ Активен (${chatMember.status})`);
                }
                
            } catch (error) {
                if (error.code === 403 && error.description.includes('bot was blocked')) {
                    console.log(`[${i+1}/${userIds.length}] ${telegramId}: 🚫 Заблокировал (403)`);
                    blockedCount++;
                } else {
                    console.log(`[${i+1}/${userIds.length}] ${telegramId}: ⚠️ ${error.message}`);
                }
            }
            
            // Задержка
            if (i < userIds.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        
        console.log('\n📊 Итоги:');
        console.log(`Проверено: ${userIds.length}`);
        console.log(`Заблокировали: ${blockedCount}`);
        
        if (blockedCount > 0) {
            const percentage = ((blockedCount / userIds.length) * 100).toFixed(1);
            console.log(`Процент: ${percentage}%`);
        }
        
    } catch (error) {
        console.error('❌ Ошибка:', error.message);
    }
}

// Экспортируем функции
export { 
    checkAndRemoveBlockedUsers, 
    checkSingleUser, 
    checkMultipleUsers 
};

// Если скрипт запускается напрямую
if (import.meta.url === `file://${process.argv[1]}`) {
    console.log('🚀 Запуск основной функции проверки...\n');
    
    // Проверяем, есть ли аргументы командной строки
    const args = process.argv.slice(2);
    
    if (args.length === 1 && args[0] === '--test') {
        // Тестовый режим - проверяем только 5 пользователей
        console.log('🧪 ТЕСТОВЫЙ РЕЖИМ (проверка 5 пользователей)\n');
        checkAndRemoveBlockedUsers().catch(console.error);
        
    } else if (args.length > 0) {
        // Проверка конкретных пользователей из аргументов
        console.log(`👥 Проверка указанных пользователей: ${args.join(', ')}\n`);
        checkMultipleUsers(args.map(id => parseInt(id))).catch(console.error);
        
    } else {
        // Полная проверка (ограничена 20 пользователями по умолчанию)
        checkAndRemoveBlockedUsers().catch(console.error);
    }
}