
function positiveSum(arr) {
    return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
  }
  console.log(positiveSum([-1, -2, 8]));
