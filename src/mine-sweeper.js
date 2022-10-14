// !!! DONE !!!



const { NotImplementedError } = require('../extensions/index.js');

 function minesweeper(matrix) {
  let newMatrix = [];
  
    if (matrix.length === 3){
      newMatrix = [[],[],[]];
  
    let chekPoints00 = [matrix[0][1],matrix[1][0],matrix[1][1]];
    let chekPoints01 = [matrix[0][0],matrix[0][2],matrix[1][0],matrix[1][1],matrix[1][2]];
    let chekPoints02 = [matrix[0][1],matrix[1][1],matrix[1][2]];
    
    let chekPoints10 = [matrix[0][0],matrix[0][1],matrix[1][1],matrix[2][0],matrix[2][1],];
    let chekPoints11 = [matrix[0][0],matrix[0][1],matrix[0][2],matrix[1][0],matrix[1][2],matrix[2][0],matrix[2][1],matrix[2][2],];
    let chekPoints12 = [matrix[0][1],matrix[0][2],matrix[1][1],matrix[2][1],matrix[2][2]];
  
    let chekPoints20 = [matrix[1][0],matrix[1][1],matrix[2][1]];
    let chekPoints21 = [matrix[1][0],matrix[1][1],matrix[1][2],matrix[2][0],matrix[2][2],];
    let chekPoints22 = [matrix[1][1],matrix[1][2],matrix[2][1]];
  
    function makePoint(position, chekPoints){
    let sum = 0;
    chekPoints.forEach(elem =>{
      if (elem === true) {
        sum +=1;
      }
    });
    //console.log(sum);
    position.push(sum);
  }
  makePoint(newMatrix[0], chekPoints00);
  makePoint(newMatrix[0], chekPoints01);
  makePoint(newMatrix[0], chekPoints02);
  
  makePoint(newMatrix[1], chekPoints10);
  makePoint(newMatrix[1], chekPoints11);
  makePoint(newMatrix[1], chekPoints12);
  
  makePoint(newMatrix[2], chekPoints20);
  makePoint(newMatrix[2], chekPoints21);
  makePoint(newMatrix[2], chekPoints22);
  
    } else if (matrix.length === 2){
  
      newMatrix = [[],[]];
      let chekPoints00 = [matrix[0][1],matrix[1][0],matrix[1][1]];
      let chekPoints01 = [matrix[0][0],matrix[0][2],matrix[1][0],matrix[1][1],matrix[1][2]];
      let chekPoints02 = [matrix[0][1],matrix[1][1],matrix[1][2]];
      
      let chekPoints10 = [matrix[0][0],matrix[0][1],matrix[1][1],];
      let chekPoints11 = [matrix[0][0],matrix[0][1],matrix[0][2],matrix[1][0],matrix[1][2]];
      let chekPoints12 = [matrix[0][1],matrix[0][2],matrix[1][1],];
    
      function makePoint(position, chekPoints){
      let sum = 0;
      chekPoints.forEach(elem =>{
        if (elem === true) {
          sum +=1;
        }
      });
      //console.log(sum);
      position.push(sum);
    }
    makePoint(newMatrix[0], chekPoints00);
    makePoint(newMatrix[0], chekPoints01);
    makePoint(newMatrix[0], chekPoints02);
    
    makePoint(newMatrix[1], chekPoints10);
    makePoint(newMatrix[1], chekPoints11);
    makePoint(newMatrix[1], chekPoints12);
  
    }
  console.log(newMatrix);
  return newMatrix;
  }

module.exports = {
  minesweeper
};
