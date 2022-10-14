// !!! DONE !!!


const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  console.log('');
  console.log(sampleActivity);

  if (typeof sampleActivity !== "string") {
    console.log('no string!');
    return false;
  } else {
    let finalActivity = Number(sampleActivity);
    console.log(finalActivity);
    console.log(Number.isNaN(finalActivity));

    if (Number.isNaN(finalActivity) || finalActivity <= 0) {
      console.log('task is NaN!');
      return false;
    } else {
      let answer = Math.log(MODERN_ACTIVITY / finalActivity) / 0.693 * HALF_LIFE_PERIOD;
      if (!isFinite(answer)) {
        console.log('task is Infinity!');
      return false;
      } else {
        //console.log('answer befor ceil ' + answer);
        answer = Math.ceil(answer);
        if (answer <= 0) {
          return false;
        } else {
        //console.log('answer after ceil ' + answer);
        return answer;
      }
    }
  }
}
}

module.exports = {
  dateSample
};
