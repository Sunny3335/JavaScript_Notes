// console.log(this);
// console.log(window);
// console.log(firstname);
// var firstname="sunny";
// console.log(firstname);

// console.log(this);
// console.log(window);
//console.log(myFunction); // this will print because of hoisting means memory me execute hone se phle ye save hota hai.
// console.log(fullName);
// here var se variable bnane pe we get undefine if we print them before variable declaration.
// and in case of let or coonst we get the error message in the console.
// function myFunction(){
//     console.log("this is my class");
// }
// var firstName = "sunny";
// var lastName = "kumar";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log(myFunction); // this will create undefiined
// var myFunction = function(){
//     console.log("this is my class");
// }
//console.log(myFunction); // this will create the whole function.

//console.log(firstName); // this is first uninitialized in code compilation phase
// Uncaught ReferenceError:
//Cannot access 'firstName' before initialization
// let firstName = "suntn";

// in case of this
// console.log(firstName);
//Uncaught ReferenceError: firstName is not defined

// let first;
// console.log(first); // this will give undefine but we cant do with the const .

//const first;
//console.log(first);
//Uncaught SyntaxError: Missing initializer in const declaration


//console.log(typeof(first));
//let first ="sunnt";
// Uncaught ReferenceError: Cannot access 'first' before initialization

//but
//console.log(typeof(first)); // this will give the undefine

// closures
// function return function with the lexical environment  variable means function return hote smay apne sath function leke return hota hai
// function cn return function
// function myFun(){
    // return {a:"ram"} // we can also return the object
//}
// const ans=myFun();
// console.log(ans);

// function outerfun(){
//     function innerfun(){
//         console.log("sunny");
//     }
//     return innerfun;
// }
// const ans = outerfun(); // it return function here ans as a function
// console.log(ans);
// ans(); // it returns sunny because this is function

// function fullfunct(first,last){
//     function shortfun(){
//         console.log(first,last);
//     }
//     return shortfun;
// }
// const fullname =fullfunct('sunny','kumar');
// fullname();
// console.log(fullname);

// function myFunc(power){
//     return function(num){
//         return num** power;
//     }
// }
// const square = myFunc(2) ; // it return the anonymous function. and it return the function with lexical environment variable like power.
//const ans  = square(3); // here 3 as a argument named num.
//console.log(ans);

// make a function to call them one times and if you call them greater than one times it will return i am already called

// function func(){
//     let count =0 ;
//     return function(){
//         if(count<1){
//             console.log("Hii, you called me");
//             count++;
//         }
//         else{
//             console.log("mai already ek bar call ho chuka hu");
//         }
//     }
// }
// const ans = func();
// ans();
// ans();
// ans();
// const anss = func();
// anss();
// anss();

// ********************DOM*************************

// console.log(window.document);


// console.dir(window.document);
// console.dir(window); // both the above is same

// select element using get element by ID

// console.log(document.getElementById("main-heading")); // it return the object as adocument
// console.log(typeof document.getElementById("main-heading")) ;// it return the object.

// select element using query selector

// const header = document.querySelector(".header");
// query selector me id ko # se or class ko . se likhna bhut jruri hai in the double quatation.
// const header = document.querySelector(".nav-item");
//const header = document.querySelectorAll(".nav-item"); // it gives the node list array but not array.
// console.log(header)

// change the text
// const main=document.getElementById("main-heading");
// console.log(main.textContent);
// main.textContent="this is kjncd";
// console.log(main.textContent);
// here textcontent gives the hidden  text also. but innertext only gives the actual text.

// const main =document.querySelector("div.headline h2");
//console.log(main.style); // it gives the all style properties.
//main.style.color="blue"; // to change style
// main.style.backgroundColor="green";
// main.style.backgroun-color="green"; we cannt use the das in between the properties because it is error in javascropt. we always use the camelcase.

// get and set attributes

// const link=document.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1)); / to get only home without #.
// to change the attribute name
// link.setAttribute("href","https://cricbuzz.com")
// console.log(link.getAttribute("href"));


// const input=document.querySelector(".form-todo input");
// console.log(input.getAttribute("type"));

// get multiple elements using getelements by class name

// const navItems=document.getElementsByClassName("nav-item");
//console.log(navItems); // this will gives the html collection
// console.log(navItems[1]);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems)); // this is not array this is only array type object which is used to traverse the indexing.
//

//const navItems=document.querySelectorAll(".nav-item");
//console.log(navItems[2]); // this will return the  nodelist

//loop
// const navItems=document.getElementsByClassName("nav-item");
// console.log(navItems);
// let navItems=document.getElementsByTagName("a");
// console.log(navItems);

//simple for loop

// for(let i=0;i<navItems.length;i++){
    // console.log(navItems[i]);
//     const it = navItems[i];
//     it.style.backgroundColor="black";
//     it.style.Color="white";
//     it.style.fontWeight="bold";
// }

//for of loop
// for(let ans of navItems){
//     ans.style.backgroundColor="black";
//     ans.style.Color="white";
//     ans.style.fontWeight="bold";
// }
// forEach // cant not use in html collection

// we can perform forEach by changing the html collection to array

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
//now this is array so we use the all methods of array
// navItems.forEach((ans)=>{
//     ans.style.backgroundColor="black";
//     ans.style.Color="white";
//     ans.style.fontWeight="bold";
    /* js_practice_part2.js:194 Uncaught TypeError: navItems.forEach is not a function  we can not do this with html collection */
// })

// innerElement
const innerelement =document.querySelector(".headline");
//console.log(innerelement.innerHTML);
//console.log(innerelement); // this gives the headlines

innerelement.innerHTML="<h2>I am the good boy </h2>";
innerelement.innerHTML +="<button>Completed</button>";
console.log(innerelement.innerHTML);




