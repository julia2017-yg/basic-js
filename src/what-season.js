const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  date.getTime()
  const testDate = new Date(date.getTime());
  if (date.valueOf() !== testDate.valueOf()) {
    throw new CustomError("The date argument is invalid");
  }

  let saeson = '';
  const month = date.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 11:
      saeson = 'winter';   
      break;

    case 2:
    case 3:
    case 4:
      saeson = 'spring';   
      break;

    case 5:
    case 6:
    case 7:
      saeson = 'summer';   
      break;

    case 8:
    case 9:
    case 10:
      saeson = 'autumn';   
      break;
  
    // default:
    //   break;
  }
  
  return saeson;
  
};
