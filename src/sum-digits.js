// !!! DONE !!!



const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  console.log(' ');
  let result = 0;
  let massiv = String(n).split('');
  massiv.forEach(element => {
    result += Number(element);
    return result;
  });
  let answer = 0;
  
  massiv = String(result).split('');

  massiv.forEach(element => {
    answer += Number(element);
    return answer;
    });
    console.log('answer:')
return answer;
}

module.exports = {
  getSumOfDigits
};
