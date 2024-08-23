function invert(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * -1);
  }
  return newArray;
}

// !----------------------- Sol2 ---------------------
function invert2(array) {
  return array.map((x) => -x )
}

console.log(invert2([-1,-2,-3,8,7]));