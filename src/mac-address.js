const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  console.log();
  console.log(n);
  let massiv = n.split('-');
  if (massiv.length < 6) {
      console.log('it`s not code!');
      return false;
  } else {
      let answer = true;

      massiv.forEach(element => {
        let letters = element.split('');
        letters.forEach(letter =>{
          //console.log(parseInt(letter, 16));
          if (Number.isNaN(parseInt(letter, 16)) === true){
            console.log(parseInt(letter, 16));
            answer = false;
          }})
      });
      return answer;
    }
}
module.exports = {
  isMAC48Address
};
