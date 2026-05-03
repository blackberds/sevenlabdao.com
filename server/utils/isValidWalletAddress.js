// utils.js
export // Простая валидация без checksum проверки
function isValidWalletAddress(address) {
  if (!address || typeof address !== 'string') {
    return false;
  }
  
  const trimmedAddress = address.trim();
  
  // Проверяем базовый формат: начинается с 0x и содержит 40 hex символов
  const isValidFormat = /^0x[a-fA-F0-9]{40}$/.test(trimmedAddress);
  
  // Проверяем, что это не нулевой адрес
  const isNotZeroAddress = trimmedAddress !== '0x0000000000000000000000000000000000000000';
  
  // Дополнительные проверки можно добавить здесь
  const isNotTestAddress = !trimmedAddress.toLowerCase().startsWith('0xdead');
  
  return isValidFormat && isNotZeroAddress && isNotTestAddress;
}

export function keccak256(data) {
  // Создаем хеш SHA3-256 (Keccak)
  const hash = crypto.createHash('sha3-256');
  hash.update(Buffer.from(data, 'utf8'));
  return hash.digest('hex');
}

export function isValidChecksumAddress(address) {
  try {
    const addressWithoutPrefix = address.substring(2);
    const addressHash = keccak256(address.toLowerCase());
    
    for (let i = 0; i < 40; i++) {
      const hashByte = parseInt(addressHash[i], 16);
      
      if (hashByte > 7) {
        if (addressWithoutPrefix[i] !== addressWithoutPrefix[i].toUpperCase()) {
          return false;
        }
      } else {
        if (addressWithoutPrefix[i] !== addressWithoutPrefix[i].toLowerCase()) {
          return false;
        }
      }
    }
    
    return true;
  } catch (error) {
    console.error('Checksum validation error:', error);
    return false;
  }
}