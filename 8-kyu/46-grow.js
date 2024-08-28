function grow(x) {
  //? Sol-1
  //   let multiply = 1;
  //   for (let i = 0; i < x.length; i++) {
  //     multiply *= x[i];
  //   }
  //   return multiply;

  //! Sol-2
  return eval(x.join("*"));
}

console.log(grow([1, 2, 3, 2]));
