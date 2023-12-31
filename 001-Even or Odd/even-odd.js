//The first solution
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(even_or_odd(-7));

// The second solution
function evenOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

console.log(evenOdd(8));
