const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  console.log('Начальный массив:');
  console.log(names);
  if (names.length === 0){
    return [];
  } else {
  let object = {};
  for (let index = 0; index < names.length; index++){
    //console.log(index + ' and ' + names.lastIndexOf(names[index],0));

    if (index === names.lastIndexOf(names[index],0) || names.lastIndexOf(names[index],0) === -1 && object[names[index]] === undefined){
      //console.log("#" + index);
      //newMass.push(names[index]);
      object[names[index]] = 1;
      //console.log(object);

    } else {
      //console.log("#" + index);
      object[names[index]] += 1;
      //console.log(object);
      let worb = names[index] + `(${object[names[index]] - 1})`
      //console.log(worb);
      object[worb] = 1;
      //console.log('apdate object:');
      //console.log(object);
      names.splice(index, 1, worb);
      //newMass.push(worb);
      //.log(object);
    }
  }
  return names;
}}

module.exports = {
  renameFiles
};
