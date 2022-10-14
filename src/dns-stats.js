// !!! DONE !!!



const { NotImplementedError } = require('../extensions/index.js');


 function getDNSStats(domains) {
  console.log();
if (!Array.isArray(domains) || domains.length === 0){
  return {};
} else {
  let object = {};

  domains.forEach(element => {
    //console.log(element);
    let bloks = element.split('.');
    let start = '.' + bloks[bloks.length-1];

    if (start in object){
      object[start] += 1;
    } else {object[start] = 1};
    //console.log(object);

    for (let i = bloks.length - 2; i >= 0; i--){
      start = start + '.' + bloks[i];

      if (start in object){
        object[start] += 1;
      } else {object[start] = 1};
    }
  });
  return object;
}
}

module.exports = {
  getDNSStats
};
