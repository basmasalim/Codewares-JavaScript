function shortcut(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    string = string.replaceAll(vowels[i], "");
  }
  return string;
}

// Example usage:
console.log(shortcut("hello")); // Output: "hll"
console.log(shortcut("goodbye")); // Output: "gdby"
console.log(shortcut("Alaa Hassan")); // Output: "l Hssn"

//? Sol-2
//  return string.replace(/[aeiou]/g, '');
