
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        // console.log(this);
        console.log(this.firstName, this.age);
    }
}

// here about is the method that is function defined in the user1 object.

// don't do this mistake

// user1.about();
// const myf=user1.about; // in this line we only store the reference of the  function not the whole object so when we call it.
// myf();
// just above and below code is equal in the because i am not calling the about method.

// const myf=function(){
//     console.log(this.firstName, this.age);
// }

// in the just above code this will return the window.

// so finally we do one thing
// in the above we are binding the refermce to the user1 then call it.
// const myFunc = user1.about.bind(user1);
// myFunc();