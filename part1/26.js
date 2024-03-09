// intro to arrays
// reference type so all reference type array is called object
// how to create arrays

// ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits);

let fruits = ["apple", "mango", "grapes"];
let obj = {}; // creation of object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits); // array is mutable that can change the original array, but reference of array is immutable it does not change the reference of array.
console.log(typeof fruits); // object
console.log(typeof obj); // object
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(obj)); // false


// array indexing