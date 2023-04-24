//CLOSURE

function outer() {
  let Num = 0;

  function inner() {
    Num++;
    console.log(Num);
  }
  inner();
}
outer;
// let innerFunc = outerfunction();
// innerFunc();
