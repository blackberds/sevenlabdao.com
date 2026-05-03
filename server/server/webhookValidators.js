import crypto from 'crypto';

/**
 * Валидаторы вебхуков для платежных провайдеров
 */

/**
 * Валидация вебхука YooKassa
 * YooKassa использует заголовок 'Webhook-Signature' с форматом:
 * v1=<signature>, v1=<signature> или просто <signature>
 */
export function validateYooWebhook(req, secret) {
  if (!secret) {
    console.warn('YooKassa secret not provided');
    return false;
  }

  const signatureHeader = req.headers['webhook-signature'];
  if (!signatureHeader) {
    console.warn('Missing YooKassa signature header');
    return false;
  }

  try {
    const rawBody = JSON.stringify(req.body);
    
    // Извлекаем подпись из заголовка (может быть в формате "v1=signature" или просто "signature")
    let signature;
    if (signatureHeader.includes('=')) {
      const parts = signatureHeader.split('=');
      signature = parts[1];
    } else {
      signature = signatureHeader;
    }

    // Создаем HMAC SHA256
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(rawBody);
    const calculatedSignature = hmac.digest('hex');

    // Безопасное сравнение
    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(calculatedSignature)
    );

    if (!isValid) {
      console.warn('YooKassa signature mismatch', {
        received: signature,
        calculated: calculatedSignature
      });
    }

    return isValid;

  } catch (error) {
    console.error('YooKassa webhook validation error:', error);
    return false;
  }
}

/**
 * Валидация вебхука CryptoBot
 * CryptoBot использует заголовок 'Crypto-Pay-Api-Signature'
 * и требует точного совпадения подписи
 */
export function validateCryptoBotWebhook(req, secret) {
  if (!secret) {
    console.warn('CryptoBot secret not provided');
    return false;
  }

  // Правильное название заголовка
  const signature = req.headers['crypto-pay-api-signature'];
  if (!signature) {
    console.warn('Missing CryptoBot signature header. Available headers:', Object.keys(req.headers));
    return false;
  }

  try {
    // Для CryptoBot важно использовать RAW тело запроса
    // Добавьте middleware для сохранения raw body
    const rawBody = req.rawBody;
    if (!rawBody) {
      console.warn('Raw body not available. Add middleware to save raw body.');
      return false;
    }

    // Создаем HMAC SHA256
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(rawBody);
    const calculatedSignature = hmac.digest('hex');

    console.log('Signature validation:', {
      received: signature,
      calculated: calculatedSignature,
      secret: secret.substring(0, 10) + '...', // Логируем только часть секрета
      rawBodyLength: rawBody.length
    });

    // Безопасное сравнение подписей
    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(calculatedSignature)
    );

    if (!isValid) {
      console.warn('CryptoBot signature mismatch');
    }

    return isValid;

  } catch (error) {
    console.error('CryptoBot webhook validation error:', error);
    return false;
  }
}

/**
 * Middleware для сохранения raw body (обязательно для CryptoBot)
 */
export function rawBodyMiddleware(req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
}

/**
 * Универсальный валидатор для тестирования
 */
export function testWebhookValidation(provider, req, secret) {
  switch (provider) {
    case 'yookassa':
      return validateYooWebhook(req, secret);
    case 'cryptobot':
      return validateCryptoBotWebhook(req, secret);
    default:
      console.warn(`Unknown provider: ${provider}`);
      return false;
  }
}

// УДАЛИТЕ ЭТУ СТРОКУ: module.exports = { ... };