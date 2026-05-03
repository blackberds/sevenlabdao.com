let botInstance = null;

export function setBotInstance(bot) {
  botInstance = bot;
}

export function getBotInstance() {
  return botInstance;
}

export async function sendMessage(chatId, message, options = {}) {
  if (!botInstance) {
    console.error('Bot instance not set');
    return false;
  }
  
  try {
    await botInstance.telegram.sendMessage(chatId, message, options);
    return true;
  } catch (error) {
    console.error('Error sending message:', error);
    return false;
  }
}