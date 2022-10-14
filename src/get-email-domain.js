// !!! DONE !!!




const { NotImplementedError } = require('../extensions/index.js');

 function getEmailDomain(email) {
  let massiv = email.split('@');
  let answer = massiv[massiv.length - 1];
  console.log(answer);
  return answer;
  }

module.exports = {
  getEmailDomain
};
