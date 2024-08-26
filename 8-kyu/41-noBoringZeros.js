function noBoringZeros(n) {
  let check = String(n);
  while (check.endsWith(0)) {
    check = check.slice(0, check.length - 1);
  }
  return Number(check);
}

console.log(noBoringZeros(500));
