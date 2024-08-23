// ! Sol-1
function repeatStr1(n, s) {
  return s.repeat(n);
}

// ! Sol-2
function repeatStr2(n, s) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += s;
  }
  return newString;
}
