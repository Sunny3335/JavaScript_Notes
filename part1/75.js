// arrow functions
// arrow function does not have this keyword it take the value of this around surrounding.
const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        // console.log(this);
        // here this is refer to the windows.
        console.log(this.firstName, this.age);
    }
}

user1.about(user1);

// NOTE:
// 1. Arrow function does not have its own 'this' keyword. It inherits the value of 'this' from the enclosing execution context.
// 2. arrow function take this reference one level above the nearest object so it return the undefined undefined in the case of user1.about(user1).