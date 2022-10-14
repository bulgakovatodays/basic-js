// !!! DONE !!!




const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members) {
  //console.log(members);
  let massiv = [];
  if (!Array.isArray(members)) {
    return false;
  } else {
  members.forEach(member => {
   if (typeof member === 'string') {
    member = member.trim();
     let a = member.slice(0,1);
     a = a.toUpperCase();
     massiv.push(a);
   }
  });
   massiv.sort();
   let string = massiv.join('');
  return string;
}
}

module.exports = {
  createDreamTeam
};
