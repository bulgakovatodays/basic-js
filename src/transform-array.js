/* Left:
control sequences work properly
*/





const { NotImplementedError } = require('../extensions/index.js');

function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

function transform(arr1) {
  if (Array.isArray(arr1)) {
  let arr = [];
    const comands = [`--discard-next`, `--discard-prev`, `--double-next`, `--double-prev`];
    let firstChek = [];
  for (let i = 0; i < comands.length; i++){
    if (!arr1.includes(comands[i])) {
      firstChek.push(false);
    } else {firstChek.push(true);}
  }
  if (!firstChek.includes(true)){
    return arr1;
  } else {
    arr1.forEach(element => {
    arr.push(element);
  });
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== 'number') {
      //console.log(arr[i]);
      switch (arr[i]) {
      case `--discard-next`: {
        if (arr[i+1] !== undefined) {
          //console.log((i+1) +'. arr[i+1] - '+ arr[i+1]);
          arr.splice((i+1), 1, 'delite');
          //console.log(arr);
        }
        break;
      };
      case `--discard-prev`: {
        if (arr[i-1] !== undefined) {
          //console.log((i+1) +'. arr[i-1] - '+ arr[i-1]);
          arr.splice((i-1), 1, 'delite');
          //console.log(arr);
        }
        break;
      };
      case `--double-next`: {
        if (arr[i+1] !== undefined) {
          let a = arr[i+1];
          //console.log((i-1) + '. arr[i+1] - '+ arr[i+1]);
          arr.splice((i+1), 0, a);
        }
        break;
      };
      case `--double-prev`: {
        if (arr[i-1] !== undefined) {
          let a = arr[i-1];
          //console.log((i-1) + '. arr[i-1] - '+ arr[i-1]);
          arr.splice((i-1), 0, a);
          i++;
        }
        break;
      };
    }
  }
}
//console.log(arr);
function checkMassiv(massiv){
  for (let i = 0; i < massiv.length; i++){
    //console.log(massiv[i]);
    if (typeof massiv[i] !== 'number') {
      let index = massiv.indexOf(massiv[i]);
      massiv.splice(index, 1);
      i--;
    }
  }
};
checkMassiv(arr);

return arr;
}} else {
  throw new UserException("\'arr\' parameter must be an instance of the Array!");
}}

/*
  * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
  * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
  * `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
  * `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
  */

module.exports = {
  transform
};
