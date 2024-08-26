function rentalCarCost(d) {
  let carCost = d * 40;
  switch (true) {
    case d >= 7:
      return carCost - 50;
    case d >= 3:
      return carCost - 20;
    default:
      return carCost;
  }
}

console.log(rentalCarCost(3)); // output =100
