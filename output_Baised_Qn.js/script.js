// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
//   console.log("first"); // var is globally defined so it print three times 3. because it fixed the value of var for 3.
// }
// console.log("hii");
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
//   console.log("sec");
// }
// console.log("end");

// --------------------------------------

// function sayHi() {
//   console.log(name); // it return the undefined value
//   console.log(age); // let keyword variable can not be accessed before declaration.
//   var name = 'Lydia';
//   let age = 21;
// }

// sayHi();

// ---------------------------------
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius, //here this .radius should be undefined because this keyword defined to the surrounding of this scope.
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());
// console.log(Math.PI); // 3.14

// -----------------------------------------------------------

// console.log(+true); // returns +1 The unary plus tries to convert an operand to a number.
// console.log(-true); // returns -1
// console.log(!""); // "" empty string gives the false value.
// console.log(!" "); // " " this is not empty string this is containg space between them.
// console.log(!'vhhh'); // return false.

// ----------------------------------------------------------------
// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };
// mouse.bird.size // mouseo object does not have bird key
// mouse[bird["size"]] // true
// mouse[bird.size] // true

// ----------------------------------------------------------------
// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting); // hello because d object makes a clone that have the same location.

// ----------------------------------------------------------------
// let a = 3;
// let b = new Number(3);// returns the number
// let c = 3; // typeof c = Number

// console.log(typeof (a)); // Number
// console.log(typeof (b)); // object
// console.log(a == b); // true
// console.log(a === b); // false
// console.log(b === c); // false

// ----------------------------------------------------------------
// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// ----------------------------------------------------------------
// "use strict"; // when we does not use restrict key word then it will creates the error in the code.
// let greeting;
// greetign = {}; // Typo! // ye variable window object ke key ke roop me store ho jayega.
// console.log(greetign); // return the {} empty object
// console.log(greeting);

// ----------------------------------------------------------------
// function bark() {
//   console.log('Woof!');
// }
// console.log(bark.age); // returns the undefined value because age is not a key for the bark object
// here bark is used as object because function used as object
// bark.animal = 'dog';
// console.log(bark.animal); // gives the dog.
// bark();

// ----------------------------------------------------------------
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
// console.log(typeof (member)); // return the object
console.log(member); // object
Person.getFullName = function() { // this is the addition of the object property as key.
  return `${this.firstName} ${this.lastName}`; // return function
};
console.log(typeof Person.getFullName);
console.log(Person.getFullName()); // getFullName is not a function.