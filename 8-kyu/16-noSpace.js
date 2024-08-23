function noSpace(x) {
  return x.replace(/\s+/g, "");
}

// !---------------------- Sol2 ----------------------
function noSpace2(x) {
  return x.replaceAll(" ", "");
}

// !---------------------- Sol3 ----------------------
function noSpace3(x) {
  return x.split(" ").join("");
}

console.log(noSpace3("8 j 8   mBliB8g  imjB8B8  jl  B"));
