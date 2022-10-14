// !!! DONE !!!



const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let cats = 0;
let boxes = matrix.length;
matrix.forEach(box => {
for (let i = 0; i < box.length; i++) {
  if (box[i] === "^^") {
    cats += 1;
  }
  //console.log(cats);
}});
return cats;
}

module.exports = {
  countCats
};
