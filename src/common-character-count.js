const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  console.log(' ');

  let mass1 = s1.split('');
  let sistem1 = {};
  //console.log(mass1);
  mass1.forEach(element => {
    //console.log(element);
    if (element in sistem1){
      sistem1[element] +=1;
    } else {
      sistem1[element] = 1;
    }
  });
  console.log(sistem1);

  let mass2 = s2.split('');
  let sistem2 = {};
  //console.log(mass2);
  mass2.forEach(element => {
    //console.log(element);
    if (element in sistem2){
      sistem2[element] +=1;
    } else {
      sistem2[element] = 1;
    }
  });
  console.log(sistem2);
let answer = {};
  for (key in sistem1){
    for (kee in sistem2){
    if (kee === key){
      if (sistem2[kee] > sistem1[key]) {
        answer[key] = sistem2[kee] - Math.abs(sistem2[kee] - sistem1[key]);
      } else if (sistem2[kee] < sistem1[key]) {
        answer[key] = sistem1[key] - Math.abs(sistem1[key] - sistem2[kee]);
      } else {
        answer[key] = sistem1[key];
      }
    }
  }}
  console.log(answer);
  let result = 0;
  for (key in answer){
    result += answer[key];
  }
  return result;
};



  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

module.exports = {
  getCommonCharacterCount
};
