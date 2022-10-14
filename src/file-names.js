// !!! DONE !!!



const { NotImplementedError } = require('../extensions/index.js');

 function renameFiles(names) {
  console.log('Начальный массив:');
  console.log(names);
  if (names.length === 0){
    return [];
  } else {
  let object = {};
  for (let index = 0; index < names.length; index++){

    if (index === names.lastIndexOf(names[index],0) || names.lastIndexOf(names[index],0) === -1 && object[names[index]] === undefined){
      object[names[index]] = 1;

    } else {
      object[names[index]] += 1;
      let worb = names[index] + `(${object[names[index]] - 1})`
      object[worb] = 1;
      names.splice(index, 1, worb);
    }
  }
  return names;
}}

module.exports = {
  renameFiles
};
