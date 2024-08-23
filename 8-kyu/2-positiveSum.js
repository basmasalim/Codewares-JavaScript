//? Sol-1
function positiveSum1(arr) {
  let initValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      initValue += arr[i];
    }
  }
  return initValue;
}

//? Sol-2
function positiveSum2(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}

//? Sol-3
function positiveSum3(arr) {
  let sumPositive = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? (sumPositive += arr[i]) : 0;
  }
  return sumPositive;
}
