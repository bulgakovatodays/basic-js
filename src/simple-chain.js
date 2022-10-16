/* Left:
removeLinks works correctly;
*/

const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  massiv: [],

  getLength() {
    console.log(this.massiv.length);
    return this.massiv.length;
  },
  addLink(value) {
    value = String(value);
    this.massiv.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || position <= 1 || position > this.massiv.length){
      this.massiv = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.massiv.splice((position-1),1);
      return this;
    }
  },
  reverseChain() {
    this.massiv.reverse();
    return this;
  },
  finishChain() {
    let string = '( ' + this.massiv.join(' )~~( ') + ' )'; //   
    console.log(this.string);
    this.massiv = [];
    return string;
  }
};





module.exports = {
  chainMaker
};
