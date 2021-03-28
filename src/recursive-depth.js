const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("input not Array");
    }
    if (arr.length === 0) return 1;
    const arrDepth = [];
    arr.forEach((element) => {
      let depth = 1;
      if (Array.isArray(element)) {
        depth += this.calculateDepth(element);
      }
      arrDepth.push(depth);
    });

    return Math.max(...arrDepth);
  }
};