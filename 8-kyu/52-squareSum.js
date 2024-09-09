function squareSum(numbers) {
  //   let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     let square = numbers[i] ** 2;
  //     sum += square;
  //   }
  //   return sum;

  //? Sol2
  return numbers.map((n) => n * n).reduce((acc, val) => acc + val, 0);
}

console.log(squareSum([0, 3, 4, 5]));
// console.log(3 ** 2);
