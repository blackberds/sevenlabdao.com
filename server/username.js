import pkg from 'pg';
import axios from 'axios';

const { Client } = pkg;

const BOT_TOKEN = "8311986091:AAHPqTqvh6fucGMCCGnVn2AA1ja62Jth9yg";
const db = new Client({
  user: "partnerbitn_usr",
  host: "localhost",
  database: "partnerbitnest",
  password: "w.nVEjWE.v;rnrw{",
  port: 5432,
});

async function getUsername(telegramId) {
  try {
    const res = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/getChat`, {
      params: { chat_id: telegramId }
    });
    return res.data.ok ? res.data.result.username : null;
  } catch (err) {
    console.error("Ошибка API:", err.response?.data || err.message);
    return null;
  }
}

async function updateUsernames() {
  await db.connect();
  const res = await db.query(`
    SELECT id, telegram_id FROM public.users
    WHERE (username IS NULL OR username = '')
      AND telegram_id IS NOT NULL
  `);

  console.log(`Найдено ${res.rows.length} пользователей без username`);

  for (const row of res.rows) {
    const username = await getUsername(row.telegram_id);
    if (username) {
      await db.query(
        "UPDATE public.users SET username = $1 WHERE id = $2",
        [username, row.id]
      );
      console.log(`✅ ${row.telegram_id} → @${username}`);
    } else {
      console.log(`⚠️ Нет username у ${row.telegram_id}`);
    }
  }

  await db.end();
  console.log("Готово!");
}

updateUsernames();