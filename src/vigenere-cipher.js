const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  _getFormatedStrings(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Not enetred params");
    }
    const keyCodes = key
      .toUpperCase()
      .split("")
      .map((char) => {
        return char.charCodeAt() - 65;
      });
    const msgCodes = message
      .toUpperCase()
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
          return charCode - 65;
        } else {
          return char;
        }
      });

    return [msgCodes, keyCodes];
  }

  encrypt(message, key) {
    const [msgCodes, keyCodes] = this._getFormatedStrings(message, key);
    let j = 0;
    const encrypted = msgCodes.map((msgCode) => {
      if (typeof msgCode == "string") return msgCode;
      else {
        const keyCode = keyCodes[j];
        const encCode = (msgCode + keyCode) % 26;
        j == keyCodes.length - 1 ? (j = 0) : j++;
        return String.fromCharCode(encCode + 65);
      }
    });

    return this.isDirect ? encrypted.join("") : encrypted.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    const [encMsgCodes, keyCodes] = this._getFormatedStrings(
      encryptedMessage,
      key
    );
    let j = 0;
    const decrypted = encMsgCodes.map((msgCode) => {
      if (typeof msgCode == "string") return msgCode;
      else {
        const keyCode = keyCodes[j];
        const decCode = (msgCode + 26 - keyCode) % 26;
        j == keyCodes.length - 1 ? (j = 0) : j++;
        return String.fromCharCode(decCode + 65);
      }
    });

    return this.isDirect ? decrypted.join("") : decrypted.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
