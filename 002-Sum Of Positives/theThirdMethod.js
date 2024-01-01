function positiveSum(arr) {
    let sumPositive =0;
    for (let i = 0; i < arr.length; i++) {
      arr[i]>0? sumPositive+=arr[i]: 0 ;   
    }
    return sumPositive;
  }
  console.log(positiveSum([1,5,-1,7,-2]));