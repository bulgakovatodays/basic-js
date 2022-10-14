const { NotImplementedError } = require('../extensions/index.js');

 function deleteDigit(num) {
  let string = String(num);
  let massiv = [Number(string.slice(1, string.length))];

for (let i = 1; i < string.length-1; i++){
  let a = Number(string.slice(0, i) + string.slice(i+1, string.length));
  //console.log(a);
  massiv.push(a);
}
massiv.push(Number(string.slice(0, string.length-1)));
console.log(massiv);
let max = massiv[0];
massiv.forEach(element => {
  if (max < element) {
    max = element;
  }
});
return max;
}

module.exports = {
  deleteDigit
};
