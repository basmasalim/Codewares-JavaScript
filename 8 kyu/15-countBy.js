// Create new empty array
// Loop through n
// Multiply x * n
// Add the number to the new Array
// Return the new array

function countBy(x, n) {
  let z = [];
  for(let i=1; i<=n; i++){
    z.push(x*i)
  }
  return z;
}

console.log(countBy(2,5));