const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members || !members.length) return false;
    let mainLetter = [];

    members.map(str => {
      if(typeof(str) ==='string' && str !== '') {
        mainLetter.push(str.trimLeft()[0].toUpperCase());

      }
    });
    return mainLetter.sort().join("");
  
  
};
