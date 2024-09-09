function findSmallestInt(arr) {
  //   let min = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] < min) {
  //       min = arr[i];
  //     }
  //   }
  //   return min;

  //? Sol-2
  return Math.min(...arr);
}

console.log(findSmallestInt([1, 56, 232, 8, 2]));
