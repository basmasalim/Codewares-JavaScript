function isPalindrome(x) {
  let arr = x.toLowerCase().split("");
  if (x === "") {
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1]) {
      return true;
    }
    return false;
  }
}

console.log(isPalindrome("Abba"));

//? Sol-2
//  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
