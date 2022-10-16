/* Last:
      1) supports different str & addition
      2) correctly converts str and addition options to string
      3) correctly works with no separator & no additionSeparator
*/

const { NotImplementedError } = require('../extensions/index.js');

 function repeater(str, options) {
  let adding = '';
  if (options.addition !== undefined && options.additionRepeatTimes !== undefined&& options.additionSeparator !== undefined) {
    
    //console.log('three parametrs!');
    let addMass = [];
    for (let i = 1; i <= options.additionRepeatTimes; i++){
      addMass.push(options.addition);
    }
    //console.log(addMass);
    adding = addMass.join(options.additionSeparator);
  
  } else if (options.addition !== undefined && options.additionRepeatTimes !== undefined){
    //console.log('two parametrs');
    let addMass = [];
    for (let i = 1; i <= options.additionRepeatTimes; i++){
      addMass.push(options.addition);
    }
    //console.log(addMass);
    adding = addMass.join('');
  
  } else if (options.addition !== undefined && options.additionSeparator !== undefined) {
    adding = options.addition;
  }
  //console.log(adding);
  let blok = str + adding;
  let i = 0;
  let massiv = [];
  while (i < options.repeatTimes) {
    massiv.push(blok);
    i++;
  }
  if (options.repeatTimes === undefined) {
    massiv.push(blok);
  }
  //console.log('Pripear massiv:');
  //console.log(massiv);
  let answer;
  if (options.separator !== undefined) {
    answer = massiv.join(options.separator);
  } else {
    answer = massiv.join('+');
  }
  console.log(answer);
  return answer;
  }

module.exports = {
  repeater
};

/*
//('supports different str & addition', () => {
  console.log(repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' })=== '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]');
  //'9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]');
  console.log(repeater(-222, { repeatTimes: 4, separator: '||', addition: new Map(), additionRepeatTimes: 3, additionSeparator: '&&' })=== '-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
//'-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]||-222[object Map]&&[object Map]&&[object Map]');
  

  console.log(repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' })=== '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4');
  console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })=== 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
  console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })=== 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');



//('correctly converts str and addition options to string', () => {
  const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
  };

console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }) === 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT');


//('correctly works with no separator & no additionSeparator', () => {
  console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }), 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION');
  console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionSeparator: '222', additionRepeatTimes: 3 })=== 'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION');
  console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 })=== 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION');
*/