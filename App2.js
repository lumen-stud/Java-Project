// JavaScript Beginner's Course.

// VARIABLES (Used for storing information/data)

// let age = 25;
// console.log(age);

// const password1 = 1234;
// console.log(password1);

// let password = 1234; //The "let" keyword allows you to re-assign a new value to the variable whiles "const" keyword does not.
// password = 4321;
// console.log(password);

//VARIABLE END.

// DATA TYPES
// Strings (A sequence of characters that represents a value...surrounded by (""))
// const name = "JavaSCript"; //string example
// console.log(name);

// let FirstName2 = "Node Modules";
// console.log(FirstName2);

//String End.

//Number/Integer/Floating points
// const age = 45;
// const age2 = 3.12;

// console.log(age / age2);

//Number End.

//Booleans
// const isNewUser = true;
// const isOddNumber = false;

// console.log(isNewUser && isOddNumber); //This uses a condition to return either "true or "false".

//Boolean End.

// Undefined (This represents value that is not assigned)
// let key;
// console.log(key);

// const key2 = undefined;
// console.log(key2);

//Undefined End.

//Null -(used to assign an unknown value)
// const age3 = null;
// console.log(null);

//Null End.

// OBJECTS (non-primitive data/ also known as object Literals)
//Objects are used to store a collection of data.
// const user1 = {
//   FirstName: "Lumen",
//   MiddleName: "Creative",
//   LastName: "Studios",
//   age: "30",
// };

// console.log(user1.FirstName);
// console.log(user1.MiddleName);
// console.log(user1.LastName);

// const Inputs = [2, 4, 6, 8, 10]; //Array Type: This is where multiple values are stored in one collection variable, and can be accessed using their position
// console.log(Inputs[1]);
// console.log(Inputs[3]);

//DATA TYPES END.

// // OPERATORS
//Assignment Operators
let a = 24;
let b = 30;

//"=" in used in this case to assign values to 'a' and 'b'

//Arithmetic Operators

// console.log(a + b);
// console.log(++b);
// console.log(--a);

//Comparison Operators: This compares two values and retrun a bolean value either "true" or false"

// console.log(a % b);
// console.log(a === b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a >= b);

//Logical Operators: This compares two values and retrun a bolean value either "true" or false"

// const IsValid = a > b || b < a;
// console.log(IsValid);
// console.log(!IsValid);

//String Operators
// console.log("Java " + "Script");

// TYPE CONVERSIONS(Implicit Conversions);
// console.log(true + "4");
// console.log("6" + "3");
// console.log(true - "3");
// console.log(false - null);
// console.log(5 - undefined);

//Explicit Conversions: Using the 'Number glob metthod'
// console.log(Number("8"));
// console.log(parseInt("3.14"));

//String glo method
console.log(String(700));
console.log(String(undefined));
console.log(String(null));

console.log((500).toString());
console.log(Boolean(599));
