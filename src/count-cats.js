const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0;
let boxes = matrix.length;
matrix.forEach(box => {
for (let i = 0; i < box.length; i++) {
  if (box[i] === "^^") {
    cats += 1;
  }
  console.log(cats);
}});
return cats;
}

module.exports = {
  countCats
};
