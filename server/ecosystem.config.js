// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'telegram-bot',
    script: './bot.js',
    
    // Настройки логов
    log_file: './logs/combined.log',      // Общий лог
    out_file: './logs/out.log',           // stdout
    error_file: './logs/error.log',       // stderr
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    
    // Опции процесса
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '1G',
    autorestart: true,
    watch: false,
    
    // Переменные окружения
    env: {
      NODE_ENV: 'production',
      NODE_OPTIONS: '--max_old_space_size=1024'
    },
    env_development: {
      NODE_ENV: 'development'
    }
  }]
};