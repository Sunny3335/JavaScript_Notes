// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",
    "age": 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects
// using . operator
// let ans =person.name;
// console.log(person["name"]); // javascript me key by default string me hoti hai
// in bracket notation we always uses the string.
// console.log(person["age"]);
// console.log(person.hobbies); // to print array

// how to add key value pair to objects
// using dot operator
// person.gender="male";
person["person"] = "male";
console.log(person);