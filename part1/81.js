function hello(){
    console.log("hello world");
}
// const hello = {
//     key: "value1"
// }

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

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
//console.log(hello.prototype); // this will gives the all keys and value pair .
// console.log(hello.prototype.sing()); // this will call the sign functon.