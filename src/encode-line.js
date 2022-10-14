const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  //console.log('');
  //console.log(str);
  if (str.length === 0) {
    return '';
  } else {
  let massiv = str.split('');
  //console.log(massiv);
  for (let i = 0; i < massiv.length-1; i++) {
    //console.log(massiv[i][0] + ' and ' + massiv[i+1]);
    if (massiv[i][0] === massiv[i+1]){
      //console.log(massiv[i][0] === massiv[i+1]);
      massiv[i] += massiv[i+1];
      massiv.splice(i+1, 1);
      i--;
    };
  }
  //console.log(massiv);
  let result = '';
  massiv.forEach(element => {
    if (element.length === 1){
      result +=element;
    } else {
      result = result + element.length + element[0];
    }
  });
  return(result);
    
  }
}

module.exports = {
  encodeLine
};
