// Turn the string into array
// Loop through the Array
// Repeat Each Element once
// Return the array into string again!
function doubleChar(str) {
  return str
    .split("")
    .map((s) => s.repeat(2))
    .join("");
}


// sol2
function doubleChar2(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};


//sol3
function doubleChar3(str) {
  return str.replace(/(.)/g, "$1$1")
}