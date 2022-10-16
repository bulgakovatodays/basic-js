/* Last:
      5) throws an error with message "Invalid date!" on invalid argument
      6) throws an error with message "Invalid date!" on tricky moment
      7) throws an error with message "Invalid date!" on a very tricky moment
*/
const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if (date !== undefined){
    if (!isNaN(Date.parse(date))){
      let season;
      let month = date.getMonth();
      if (month < 2 || month === 11) {
        season = 'winter';
      } else if (month < 5) {
        season = 'spring';
      } else if (month < 8) {
        season = 'summer';
      } else {
        season = 'autumn';
    };
    return season;
    }
  } else {
    return 'Unable to determine the time of year!';
  }
}

module.exports = {
  getSeason
};

/*
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

console.log(getSeason());
  // => 'Unable to determine the time of year!');
*/
/*
//'throws an error with message "Invalid date!" on invalid argument', function () {
  console.log(getSeason(new Date(840, 0, 6, 9, 20, 31, 683)));//, 'winter');
  console.log(getSeason('foo'));
  console.log(getSeason({ John: 'Smith' }));
  console.log(getSeason(20192701));
  console.log(getSeason([2019, '27', 0 + '1']));
  console.log(getSeason(() => new Date()));
// =>'Invalid date!');

//'throws an error with message "Invalid date!" on tricky moment', function () {
            const fakeDate = {
                toString() {
                    return Date.prototype.toString.call(new Date());
                },
                [Symbol.toStringTag]: 'Date'
            };

            Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

            const res = checkForThrowingErrors.call(this, [
                () => getSeason(fakeDate)
            ], 'Invalid date!');

            assert.strictEqual(res.every($ => $ === CORRECT_RESULT_MSG), true);
        });

        it.optional('throws an error with message "Invalid date!" on a very tricky moment', function () {
            const deeperFakeDate = {
                toString() {
                    return Date.prototype.toString.call(new Date());
                },
                getMonth() {
                    return Date.prototype.getMonth.call(new Date());
                },
                getFullYear() {
                    return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
                },
                getDate() {
                    return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
                },
                getHours() {
                    return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
                },
                getMinutes() {
                    return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
                },
                getSeconds() {
                    return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
                },
                getMilliseconds() {
                    return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
                },
                getDay() {
                    return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
                },
                [Symbol.toStringTag]: 'Date'
            };

            Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

            const res = checkForThrowingErrors.call(this, [
                () => getSeason(deeperFakeDate)
            ], 'Invalid date!');

            assert.strictEqual(res.every($ => $ === CORRECT_RESULT_MSG), true);
        });
    });
});
*/