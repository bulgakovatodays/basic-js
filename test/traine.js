function countCats(matrix) {
  let cats = 0;
matrix.forEach(box => {
  console.log(box);
for (let i = 0; i < box.length; i++) {
  if (box[i] === '^^') {
    console.log(box[i]);
    cats += 1;
  }
  console.log('cats ' + cats);
}});
return cats;
}


//'level 0.1', () => {
countCats([
      ['##', 'dd', '00'],
      ['^^', '..', 'ss'],
      ['AA', 'dd', 'Oo'],
    ]);//, 1);

  //'level 0.2', () => {
countCats([
      ['##', 'dd', '00'],
      ['^ ^', '..', 'ss'],
      ['AA', 'dd', 'Oo'],
    ]);//, 0);

//'level 0.3', () => {
countCats([
      ['##', 'dd', '00'],
      [' ^^ ', '..', 'ss'],
      ['AA', 'dd', 'Oo'],
    ]);//, 0);

//'level 0.4', () => {
countCats([
      ['##', 'dd', '00'],
      ['^', '^', 'ss'],
      ['AA', 'dd', 'Oo'],
    ]);//, 0);