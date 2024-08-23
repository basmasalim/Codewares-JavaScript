function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverse("Hello World"));
console.log(reverse("Hi There."));
