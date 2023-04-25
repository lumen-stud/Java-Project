// Functin Currying
// This takes a function with multiple arguements and transforms them
// into a sequence, nesting functions

function Sum(a, b, c) {
  return a + b + c;
}
console.log(Sum(10, 20, 30));
