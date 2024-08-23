function findAverage(array) {
  let num = 0;
  if (
    array.length === null ||
    array.length === undefined ||
    array.length === 0
  ) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      num += array[i];
    }
    return num / array.length;
  }
}

console.log(findAverage([1, 2, 1]));

/**
 * [1,1,1] = 1
 * [2,2,2] = 2
 * [3,3,3] = 3
 * [1,2,3,4] = 2.5
 * Average = their sum divided by their number
 */
