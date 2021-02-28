const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  static alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  encrypt(message, key) {
    let lowered = message.toLowerCase();
    let loweredKey = key.toLowerCase();
    let res = "";
    let nonLetterCounter = 0;
    for (let i = 0; i < lowered.length; i++) {
      let char = lowered[i];
      if (/[^a-z]/.test(char)) {
        res += char;
        nonLetterCounter++;
      } else {
        let charInd = VigenereCipheringMachine.alphabet.indexOf(char);
        let keyInd = VigenereCipheringMachine.alphabet.indexOf(
          loweredKey[(i - nonLetterCounter) % loweredKey.length],
        );
        let newInd = (charInd + keyInd) % 26;
        res += VigenereCipheringMachine.alphabet[newInd];
      }
    }
    return res.toUpperCase();
  }
  decrypt(message, key) {
    let lowered = message.toLowerCase();
    let loweredKey = key.toLowerCase();
    let res = "";
    let nonLetterCounter = 0;
    for (let i = 0; i < lowered.length; i++) {
      let char = lowered[i];
      if (/[^a-z]/.test(char)) {
        res += char;
        nonLetterCounter++;
      } else {
        let charInd = VigenereCipheringMachine.alphabet.indexOf(char);
        let keyInd = VigenereCipheringMachine.alphabet.indexOf(
          loweredKey[(i - nonLetterCounter) % loweredKey.length],
        );
        let newInd = (charInd - keyInd + 26) % 26;
        res += VigenereCipheringMachine.alphabet[newInd];
      }
    }
    return res.toUpperCase();
  }
}
module.exports = VigenereCipheringMachine;

//throw new CustomError("Not implemented");
