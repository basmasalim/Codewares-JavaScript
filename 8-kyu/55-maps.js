function maps(x) {
  //   let newArr = [];
  //   for (let i = 0; i < x.length; i++) {
  //     newArr.push(x[i] + x[i]);
  //   }

  //   return newArr;

  return x.map((n) => n + n);
}

console.log(maps([1, 2, 3]));
