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

// user1.about.call(user2);
about.call(user1,"cricket","hindi"); //here we are passing the extra argument in the call function

// here it is necessary to write the this or object name inside the call function otherwisw it will return the undefined value.




// apply
// in the apply we pass the estra argument in list

// about.apply(user1, ["guitar", "bach"]);

// bind
// bind return the function.
// const func = about.bind(user2, "guitar", "bach");
// func();


// function hello(){
//     console.log("hii sunny");
// }

// hello.call(); // i can also use the .call to call the function.