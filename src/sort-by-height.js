// !!! DONE !!!





const { NotImplementedError } = require('../extensions/index.js');

 function sortByHeight(arr) {
  console.log();
 let newArr = [];
 arr.forEach(element => {
  if (element !== -1) {
    newArr.push(element);
  }
 });
 console.log(newArr);
 newArr.sort((a, b) => a - b);
 console.log(newArr);
 let count = 0;//newArr.length;
 for (let i = 0; i < arr.length; i++){
  if (arr[i] !== -1) {
    arr[i] = newArr[count];
    count++;
  }
 }
 console.log(arr);
 return arr;
}

module.exports = {
  sortByHeight
};
