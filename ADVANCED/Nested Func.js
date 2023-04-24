//NESTED FUNCTION SCOPE
let a = 6;
function outer() {
  let b = 33;
  function inner() {
    let c = 40;
    console.log(a, b, c);
  }
  inner();
}
outer();

//NESTED FUNCTION SCOPE END
