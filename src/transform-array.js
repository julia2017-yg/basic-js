const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

   if (!Array.isArray(arr)) {
      throw new Error("arr is not Array");
    }
  
    return arr.reduce((res, el, i, ar) => {
      if (el === "--double-prev") {
        if (i !== 0 && ar[i - 2] !== "--discard-next") {
          res.push(ar[i - 1]);
        }
        return res;
      }
  
      if (el === "--double-next") {
        if (i !== ar.length - 1) {
          res.push(ar[i + 1]);
        }
        return res;
      }
  
      if (el === "--discard-prev" || ar[i - 1] === "--discard-next") {
        if (i !== 0 && ar[i - 2] !== "--discard-next") {
          res.pop();
        }
        return res;
      }
  
      if (el === "--discard-next") {
        if (i !== ar.length - 1) {
          res.push(el);
        }
        return res;
      }
  
      res.push(el);
      return res;
    }, []);

};
