// Promise
// promise represent the future value

console.log("script start");
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// here promise is the constructor function that create promise or we can say it is new keyword.
// in promise we pass a executor function which takes resolve or reject.

// produce promise here
const friedRicePromise = new Promise((resolve, reject) => {
    if (
        bucket.includes("vegetables") &&
        bucket.includes("salt") &&
        bucket.includes("rice")
    ) {
        resolve({ value: "friedrice" });
    } else {
        reject("could not do it");
    }
});

// here resolve is the method that i can call it later.
// the above code return the object

// consume
// how to consume
friedRicePromise
    .then(
        // jab promise resolve hoga
        (myfriedRice) => {
            console.log("lets eat ", myfriedRice);
        }
    )
    .catch((error) => {
        console.log(error);
    });

for(let i=0;i<100;i++){
    console.log(i);
}

setTimeout(()=>{
    console.log("i am setTimeOut");
})
// this show microtask queue has the more priority than the call back queue.

console.log("script end");

// promise is object and works as asynchronous function
// here catch keyword is do the second part and promise consumption is not the javascript feature it is the features of browser.
// promise is js function.
// promises added to microtask queue so then keyword is also added to microtask queue
// then event loop check is there any existing code is still running or not in the GEC
// promise task comes to microtask queue
// if some function is in callback queue and some is microtask queue the microtask queue has more priority

// settimeout takes as a callback function

// friedRicePromise.then(
//     (myfriedrice)=>{
//         console.log("lets eat",myfriedrice);
//     },
//     null
// we can use null in place of error function
// )
