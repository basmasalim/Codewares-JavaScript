function bonusTime(salary, bonus) {
  if (bonus) {
    return "£" + salary * salary;
  } else {
    return "£" + salary;
  }
}

// return bonus ? `£${10 * salary}` : `£${salary}`;

console.log(bonusTime(5, true));
