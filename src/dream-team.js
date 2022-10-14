const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
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
