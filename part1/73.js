function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,
    /* about: function(){
        console.log(`my name is ${this.firstName} ans age is ${this.age}`);
    } */
}
const user2 = {
    firstName : "mohit",
    age: 9,

}

// call methods is used to access method of other class property which is not defined in the current object.

// user1.about.call(); // gives undefined because here this keyword is not referring to any one else.
// user1.about.call(user2); // in this code we see that about function will be called by user1 because user1 has about but when this keyword is calling then this is referring to the user2.
// about.call(user1,"cricket","hindi"); //here we are passing the extra argument in the call function

// here it is necessary to write the this or object name inside the call function otherwise it will return the undefined value.




// apply
// in the apply we pass the extra argument in list (Array)

// about.apply(user1, ["guitar", "bach"]);


// bind
// bind return the function.
// const func = about.bind(user2, "guitar", "bach");
// func();


function hello(){
    console.log("hii sunny");
}

// hello.call(); // i can also use the .call to call the function.

const ans = hello.bind(); // .bind return the function and it can be stored to any varibale and then call in future use.
ans();