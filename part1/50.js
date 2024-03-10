// block scope vs function scope


// let and const are block scope

// {
//     var firstName = "sunnu"
//     console.log(firstName);
// }
// both the block scope is different in case of let and const.
// but in the case of var we can access any variable from the any block.
// {
//     let firstName = "sunklnjnnu"
//     console.log(firstName);
// }


// var is function scope

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp(){
    if(true){
        let firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();



// const myVar = "value1";

// function myApp(){


//     function myFunc(){
        // const myVar = "value59";
//         const myFunc2 = () =>{
//             console.log("inside myFunc", myVar);
//         }
//         myFunc2();
//     }


//     console.log(myVar);
//     myFunc();
// }

// myApp();

// console.log(nc);
// var nc = "dj"; // undefined not a dj will be printed.