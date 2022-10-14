// !!! DONE !!!





const { NotImplementedError } = require('../extensions/index.js');

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
