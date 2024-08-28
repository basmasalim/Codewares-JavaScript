function solution(str) {
  //! Sol-1 =====>   return str.split("").reverse().join("");
  //! Sol-2
  let reverseOfStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseOfStr += str[i];
  }
  return reverseOfStr;
}

console.log(solution("hello"));
