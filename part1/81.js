function hello(){
    console.log("hello world");
}

// const hello = {   // it does not return the prototype.
//     key: "value1"
// }

// const hello=["hii","ram"]; // it does not return the prototype.

// javascript function ===> function  + object

// console.log(hello.name); // this will return the name of function.

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);
// we can treat it as object.

// name property ---> tells function name;

// function provides more usefull properties.

// function gives us a free space {}.

// prototype is empty object.


// console.log(hello.prototype); // it will return the constructor {}

// only functions provide prototype property

//proof
// if(hello.prototype){
//     console.log("prototype is present");
// }
// else{
//     console.log("prototype is not present");
// }

// object and array does not have any prototype it will return the prototype is not present.

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype); // this wil give a free space like object when we creating a function
 // this will gives the all keys and value pair that i have added above.

// console.log(hello.prototype.sing()); // this will call the sign functon.