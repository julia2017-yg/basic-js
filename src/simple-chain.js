const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (!value && typeof value === "undefined") this.chain.push("");
    else if (value === undefined) this.chain.push("undefined");
    else if (value === null) this.chain.push("null");
    else if (typeof value !== "string") this.chain.push(value.toString());
    else this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      this.chain[position] === undefined
    ) {
      this.chain = [];
      throw new Error("bad position");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join(" )~~( ");
    this.chain = [];
    return `( ${result} )`;
  },
};


module.exports = chainMaker;
