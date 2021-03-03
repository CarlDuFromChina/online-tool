import CryptoJS from 'crypto-js'

export function encrypt(word, key = '') {
  return CryptoJS.AES.encrypt(word, key).toString();
}

export function decrypt(word, key = '') {
  var bytes = CryptoJS.AES.decrypt(word, key);
  var originTxt = bytes.toString(CryptoJS.enc.Utf8);
  return originTxt;
}