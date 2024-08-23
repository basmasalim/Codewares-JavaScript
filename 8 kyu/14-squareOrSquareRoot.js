function squareOrSquareRoot(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      newArray.push(Math.sqrt(array[i]));
    } else {
      newArray.push(array[i] * array[i]);
    }
  }
  return newArray;
}


// sol2
function squareOrSquareRoot2(array) {
  return array.map((number) => Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number*number)
}

console.log(squareOrSquareRoot2([4, 3, 9, 7, 2, 1]));
