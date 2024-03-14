// methods
// function inside object called method.

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
// this value can be recognized on the run time.
// this is object jo is function ko call kr rha hai
const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about(); // calling the methods
person2.about();
person3.about();

