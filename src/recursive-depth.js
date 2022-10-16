/* Last:
4) works recursively
*/

const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  constructor(array) {
      this.array = array;
      //this.depth = 1;
    }
  
    calculateDepth(array=this.array, deep = 0, newArr = [], hasArr = false) {
      console.log(array);
  
      function takeStep(massiv, depth){
        deep += 1;
        console.log('deep = ' + depth)
        newArr = massiv.flat(depth);
        //console.log(newArr);
        hasArr = false;
  
        newArr.forEach(element => {
          if (Array.isArray(element)){
            hasArr = true;
          }
        });
  
        if (hasArr === true){
          takeStep(array, deep);
        } else {
          return deep;
        }
      }
      takeStep(array, deep);
      console.log(deep);
      return deep;
    }
}
/*
      if (!Array.isArray(array)) {
        throw new Error("Параметр не является маcсивом.");
      } else {
*/



module.exports = {
  DepthCalculator
};


/*Подсмотрела, но не понимаю как работает, хотя проходит 1 тест(((

calculateDepth(array = this.array, depth = 1) {
      if (depth > this.depth) this.depth = depth;
      for (let e of array) {
          if (Array.isArray(e)) {
              this.calculateDepth(e, depth + 1);
          }
      }
      return this.depth;
  }

/*Last:
      4) returns correct depth of nested arrays
      5) works recursively
*/