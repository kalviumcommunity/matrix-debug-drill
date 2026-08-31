const crypto = require('crypto');

function deriveKeyAndIv(key) {
  const hash = crypto.createHash('sha256').update(key).digest();
  return { derivedKey: hash, iv: hash.slice(0, 16) };
}

function hashValue(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

function encryptValue(text, key) {
  const { derivedKey, iv } = deriveKeyAndIv(key);
  const cipher = crypto.createCipheriv('aes-256-cbc', derivedKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decryptValue(encrypted, key) {
  const { derivedKey, iv } = deriveKeyAndIv(key);
  const decipher = crypto.createDecipheriv('aes-256-cbc', derivedKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = { hashValue, encryptValue, decryptValue };
