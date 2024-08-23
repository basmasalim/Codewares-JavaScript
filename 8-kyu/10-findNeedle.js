function findNeedle(haystack) {
  // your code here
  for (i = 0 ; i < haystack.length ; i++){
    if(haystack[i] ==="needle"){
      return "found the needle at position " + i
    }
  }
  return "Needle not found in the haystack";
}


let haystack = ["apple", "banana", "needle", "orange", "grape"];
console.log(findNeedle(haystack));


// sol2
function findNeedle2(arr){
  return "found the needle at position " + arr.indexOf('needle');
}

let arr = ["apple", "banana", "needle", "orange", "grape"];
console.log(findNeedle2(arr));