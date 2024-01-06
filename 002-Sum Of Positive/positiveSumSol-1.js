// initValue = 0
// Array Loop
// Check if the number is postive or not
// Add the number to the initValue if Positive

function positiveSum(arr) {
    let initValue = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        initValue += arr[i];
      }
    }
    return initValue;
  }
  console.log(positiveSum([-1, -2, 8]));
