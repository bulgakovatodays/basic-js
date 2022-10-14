// !!! DONE !!!





const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = {};
  answer.turns = Math.pow(2, disksNumber)-1;
  answer.seconds = Math.floor((Math.pow(2, disksNumber) - 1)/ turnsSpeed * 3600);
  return answer;
}

module.exports = {
  calculateHanoi
};
