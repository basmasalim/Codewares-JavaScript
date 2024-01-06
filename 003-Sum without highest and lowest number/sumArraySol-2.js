function sumArray(array) {
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current,0);
}

console.log(sumArray([1, 1, 9, 5, 9, 3, 7]));
