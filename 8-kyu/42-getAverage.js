function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return parseInt(sum / marks.length);
}

console.log(getAverage([1, 5, 87, 45, 8, 8]));

//? Sol2
// marks.reduce(((sum,i)=> sum + i ) / marks.length)
