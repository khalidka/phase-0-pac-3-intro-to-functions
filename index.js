// Follow along with the examples here
// Functions are ways of giving instructions to the JavaScript interpreter that can be reused over and over again by calling the function.

function sayHello() {
  console.log("Hello!");
}
sayHello();

// function greeting(firsName) {
//   console.log(`Hello ${firsName}`);
// }
// greeting("Khalid");

// function say(greeting, firsName) {
//   console.log(`${greeting} ${firsName}`);
// // }
// say("Goodbye", "Khalid");
// say("Khalid", "Goodbye");

// function say(greeting, firsName) {
//   console.log("firstName: ", firsName);
//   console.log("greeting: ", greeting);
//   console.log(`${greeting} ${firsName}!`);
// }

function add(x, y) {
  return x + y;
}
console.log(add(1, 2));

// function say(greeting, firstName) {
//   return `${greeting}, ${firstName}!`;
// }
// console.log(say("hello", "Khalid"));

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
say("Hello", "Khalid");

// const sum = add =>(num1, num2){}
// const message = `The sum of your numbers is: ${sum}.`;
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
//When you run that code, the return value is logged, but the console.log() inside the function body does not execute!

console.log(say("ASC", "Khalid"));

//To both log and return like we want to, we can switch the order around:
function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}
