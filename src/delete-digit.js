const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString();
  let maxNumber = 0;
  for (let i = 0; i < digits.length; i = i + 1) {
    const newDigit = parseInt(digits.slice(0, i) + digits.slice(i + 1), 10)
    if (newDigit > maxNumber) {
      maxNumber = newDigit;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
