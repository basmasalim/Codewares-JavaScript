function fakeBin(x){
  let arr = x.split(""); //convert string to array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }

  return arr.join("");
}



console.log(fakeBin('555254931479'));
// fakeBin('4564665465')
