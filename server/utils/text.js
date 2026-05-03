import { locales } from '../locales/locales.js';

// УБИРАЕМ async - функция синхронная
export function getText(lang, key, data = {}) {
  try {
    const userLang = (lang || "ru").trim().toLowerCase();

    // Получаем локализованный текст
    let text = locales[userLang]?.[key] || locales["ru"]?.[key] || key;

    // Обработка функциональных переводов
    if (typeof text === "function") {
      // Для функциональных переводов передаем данные как параметры
      const params = Object.values(data);
      const result = text(...params);
      return result;
    }

    // Обработка строковых переводов с плейсхолдерами
    if (typeof text === "string" && data && typeof data === "object") {
      for (const [placeholder, value] of Object.entries(data)) {
        const regex = new RegExp(`{${placeholder}}`, "g");
        text = text.replace(regex, value);
      }
    }
    return text;
  } catch (error) {
    console.error("Error in getText:", error, "lang:", lang, "key:", key);
    return key;
  }
}

// Тоже делаем синхронной
export function formatText(text, data = {}) {
  if (!text || typeof text !== "string") return text;

  let result = text;

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== null) {
      // поддержка {key}
      result = result.replace(new RegExp(`{${key}}`, "g"), value.toString());
      // поддержка ${key}
      result = result.replace(
        new RegExp(`\\$\\{${key}\\}`, "g"),
        value.toString(),
      );
    }
  }

  return result;
}