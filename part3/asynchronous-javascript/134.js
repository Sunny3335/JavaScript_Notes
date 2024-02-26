// Promise
// promise represent the future value

console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];


// here promise is the constructor function or we can say it is new keyword.
// in promise we pass a executor function which takes resolve or reject.
// produce promise here
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

// the above code return the object



// consume
// how to consume

friedRicePromise.then(
    // jab promise resolve hoga
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })

    // promise is object and works as asynchronous function
    // here catch keyword is do the second part and promise is not the javascript feature it is the features of browser.
    // promises added to microtask queue so then keyword is also added to microtask queue
    // then global event check is there any existing code is still running or not
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
setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")