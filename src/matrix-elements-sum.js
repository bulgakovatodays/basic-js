// !!! DONE !!!





const { NotImplementedError } = require('../extensions/index.js');

 function getMatrixElementsSum(matrix) {
  console.log('');
  let answer = 0;
  for (let i = 0; i < matrix.length; i++){
    
    let band = matrix[i];
    console.log(band);
    let prevBand = matrix[i-1];
    //console.log(prevBand);
    if (!Array.isArray(band)){
      return 0;
    } else {
      for (let index = 0; index < band.length; index++){
        if (prevBand !== undefined) {
          if (prevBand[index] !== 0) {
          answer += band[index];
        }
      } else {
        answer += band[index];
      }
    }
  }}
console.log('answer = ' + answer);
return answer;
}

module.exports = {
  getMatrixElementsSum
};
