// ? Sol-1
function sumArray1(array) {
  if (array == null || array.length <= 2) {
    return 0;
  }

  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum - max - min;
}

//? Sol-2
function sumArray2(array) {
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
}
