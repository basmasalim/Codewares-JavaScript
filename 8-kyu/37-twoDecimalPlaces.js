function twoDecimalPlaces(n) {
  return +parseFloat(n).toFixed(2);
}

/*
 *    Number(n.toFixed(2))
 *    Math.round(n * 100) / 100
 */
