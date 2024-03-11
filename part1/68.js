// object is not iterable so we can not use for of loop on obj but we use for in loop on the obj.

// Maps
// map is an iterable

// store data in ordered fashion means guaranteed.

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }

// console.log(person.firstName);
// console.log(person["firstName"]); // because the key is always in the string.
// console.log(person["1"]); // it return the string only

// using the "for in" loop
// for(let key in person){
//     console.log(typeof key);
// }


// key value pair
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
//person.set(1,'one'); // in map key is of any data type. // this is beggest difference btn map and object.
// person.set([1,2,3],'onetwothree'); // key also be array.
// person.set({1: 'one'},'onetwothree'); // key me kuch  v add kr skte ho.

// console.log(person);



// console.log(person.get('age')); // here we pass string as string and number as number.

// console.log(person.keys()); // for printing keys

// apply for of loop on the person.

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// directly apply for of loop on maps.
// for(let [key, value] of person){
    // console.log(Array.isArray(key));
//     console.log(key, value)
// }

// for(let key of person){
//     console.log(key);
// }

// the above loop returns the object

// -------------------

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}


const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
// extraInfo.set(person2, {age: 9, gender: "female"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);


//const my=new Map([["name","sunny"],["age",22],["home","aurangabad"]]); // i can also use the set of array  like method to add elements in map.
// console.log(my);
