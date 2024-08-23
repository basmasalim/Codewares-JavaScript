function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}


// sol2
function basicOp2(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp2('*',5,8));