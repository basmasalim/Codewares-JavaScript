function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i + 1];
    }
  }
  return null;
}

/**
 * [1,2,3,4,6,7,8] = 6
 * [1,2,3,4] = null
 */

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7]));
