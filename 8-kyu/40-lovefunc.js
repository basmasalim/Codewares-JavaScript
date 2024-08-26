function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower2 % 2 === 0 && flower1 % 2 !== 0)
    ? true
    : false;
}

console.log(lovefunc(4, 1));

// flower1 % 2 !== flower2 % 2;
