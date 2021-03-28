const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = options;

  const string = typeof str != "string" ? `${str}` : str;
  const result = [];
  let i = 0;
  do {
    let subStr = string;
    if (addition !== "") {
      const addProps = {
        repeatTimes: additionRepeatTimes,
        separator: additionSeparator,
      };
      subStr += repeater(addition, addProps);
    }
    result.push(subStr);
    i++;
  } while (i < repeatTimes);

  return result.join(separator);
};
  