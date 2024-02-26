// synchronous programming vs asynchronous programming
// synchronous programming means jb tk ek kam ni ho jata tb tk koi dusra kam ni hoga. mtlb ek ke bad ek program run hoga.
// Js is synchronous programming and single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout // this is not blocking code so this is example of asynchronous programming.
// settimeout functionality is of browser not javascript

// console.log("script start");

// const id = setTimeout(() => {
//   console.log("inside setTimeout");
// }, 3000);
// here 1000(always in ms) is minimum time delay
// and this setTimeout function is of browser (also called web API provided by browser)this will called after the execution of all existing code
// first JS gives this setTimeout function to browser and tell them to recall after the minimum given time.
// callback function goes inside the callback queue but event loop prevent them to go inside the global execution contest it will first check is there any function is running or not?
// settimeout function goes in callback queue(event loop prevent the settimeout function to go in callstack untill all exixting file run ni ho jata) and it will go to callstack after the execution of all exixting code in js file.

// for (let i = 1; i < 100; i++) {
//   console.log("....");
// }
// console.log("settimeout id is ", id);
// console.log("clearing time out");
// clearTimeout(id); // this will stop the execution of settimeout callback function.
// console.log("Script end");


// to create new file in vs code is -> touch setInterval.html
// to open that file we use -> code setInterval.html

// settimeout function

console.log("script start");
function hello(){
  console.log("hii");
}
setTimeout(hello,1000);
console.log("script end");

