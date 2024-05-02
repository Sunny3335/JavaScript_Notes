let a = 3;
let b = new Number(3); // returns the number
// new Number() is built in function constructor that return an object.
let c = 3; // typeof c = Number

console.log(typeof (a)); // Number
console.log(typeof (b)); // object
console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false