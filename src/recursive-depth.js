const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.find((el) => Array.isArray(el))
      ? 1 + this.calculateDepth(arr.flat())
      : 1;
  }
};
