FUNCTIONS;

function talk() {
  console.log("Howdy? Do you code?");
}
talk();

function greet(username) {
  console.log("What do you care" + username);
}
greet("Eli");
greet("Shelby");
greet("Salvatore");

function add(a, b) {
  return a + b;
}
const sum1 = add(2, 10);
console.log(sum1);

const arrowSum = (a, b) => a + b;
const sum = arrowSum(23, 20);
console.log(sum);

// FUNCTIONS END
