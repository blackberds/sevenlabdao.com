const fs = require('fs');
const path = require('path');

class TranslationService {
  constructor() {
    this.locales = {};
    this.defaultLanguage = 'ru';
    this.loadLocales();
  }

  loadLocales() {
    const localesPath = path.join(__dirname, '../locales');
    const files = fs.readdirSync(localesPath);
    
    files.forEach(file => {
      if (file.endsWith('.json')) {
        const lang = file.split('.')[0];
        const content = fs.readFileSync(path.join(localesPath, file), 'utf8');
        this.locales[lang] = JSON.parse(content);
      }
    });
  }

  get(lang, key, params = {}) {
    const keys = key.split('.');
    let value = this.locales[lang] || this.locales[this.defaultLanguage];
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        // Fallback to default language
        value = this.locales[this.defaultLanguage];
        for (const k2 of keys) {
          value = value[k2];
          if (value === undefined) return key; // Return key if not found
        }
        break;
      }
    }

    // Replace placeholders
    if (typeof value === 'string') {
      return value.replace(/{(\w+)}/g, (match, p1) => {
        return params[p1] !== undefined ? params[p1] : match;
      });
    }
    
    return value;
  }

  getAvailableLanguages() {
    return Object.keys(this.locales);
  }
}

module.exports = new TranslationService();