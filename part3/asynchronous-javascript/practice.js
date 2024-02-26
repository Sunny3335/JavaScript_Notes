// console.log("script start");
// // function ans(){
// //     console.log("Hii")
// // }

// const id= setTimeout(()=>{
//     console.log("Hii");
// },2000);

// for(let  i=1;i<=6;i++){
//     console.log(i);
// }

// console.log("setTimeout id is: ", id )
// clearTimeout(id);
// console.log("script end");

// const id=setInterval(()=>{
//     console.log(Math.random());
// },1000);

// console.log("hii");
// setTimeout(id);


// THESE are the below command to create a new empty files

// and also we can open the file by using the code key word

// New-Item setInterval.html -ItemType File
// New-Item setInterval.css -ItemType File


// 131

// const body=document.body;

// const button=document.querySelector("button");

// const id = setInterval(()=>{
//     const red=Math.floor(Math.random()*126);
//     const green=Math.floor(Math.random()*126);
//     const blue=Math.floor(Math.random()*126);
//     const rgb=`rgb(${red},${green},${blue})`;
//     body.style.background = rgb;
//     console.log(rgb);
// },1000);


// button.addEventListener("click", ()=>{
//     clearInterval(id);
//     button.textContent=body.style.backgroun d;
// });

// 132

// function one(callback){
//     console.log("hii");
//     callback();
// }

// one(()=>{
//     console.log("hii sunny");
// });

// function twoNUmber(number1,number2,onSuccess,onFailure){
//     if(typeof number1==="number" && typeof number2==="number"){
//     onSuccess(number1,number2);
//     }
//     else{
//         onFailure();
//     }
// }

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// function onFail(){
//     console.log("wrong Data type");
//     console.log("Please provide the correct data");
// }

// twoNUmber(58,54,addTwoNumbers,onFail);

// 133

// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");
// const heading7=document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color="red";
// },1000);

// setTimeout(()=>{
//     heading2.textContent="Heading 2";
//     heading2.style.color="green";
// },3000);
// setTimeout(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color="red";
//     setTimeout(()=>{
//         heading2.textContent="Heading 2";
//         heading2.style.color="green";
//         setTimeout(()=>{
//             heading3.textContent="Heading 3";
//             heading3.style.color="voilet";
//             setTimeout(()=>{
//                 heading4.textContent="Heading 4";
//                 heading4.style.color="red";
//                 setTimeout(()=>{
//                     heading5.textContent="Heading 5";
//                     heading5.style.color="green";
//                     setTimeout(()=>{
//                         heading5.textContent="Heading 5";
//                         heading5.style.color="green";
//                         setTimeout(()=>{
//                             heading6.textContent="Heading 6";
//                             heading6.style.color="voilet";
//                             setTimeout(()=>{
//                                 heading7.textContent="Heading 7";
//                                 heading7.style.color="yellow";
//                             },1000);
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// by using the callback function

// function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent=text;
//             element.style.color=color;
//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }
//         }else{
//             if(onFailureCallback){
//                 onFailureCallback();
//             }
//         }
//     },time);
// }

// changeText(heading1,"one","green",1000, ()=>{
//     changeText(heading2,"two","red",3000, ()=>{
//         changeText(heading3,"three","green",1000, ()=>{
//             changeText(heading4,"fourth","green",1000, ()=>{
//                 changeText(heading5,"fifth","green",1000, ()=>{
//                 }, ()=>{console.log("heading1 does not exist")})
//             }, ()=>{console.log("heading1 does not exist")})
//         }, ()=>{console.log("heading1 does not exist")})
//     }, ()=>{console.log("heading2 does not exist")})
// }, ()=>{console.log("heading1 does not exist")})


// 134 promise

// promise is also a browser function

// const bucket = ["coffee",'chips','vegetables','salt','rice'];

// const friedRicePromise=new Promise((resolve,reject)=>{
//     if(bucket.includes( 'coffee') && bucket.includes( 'chips') && bucket.includes('vegetables')){
//         resolve("chai")
//     }else{
//         reject("could not do it")
//     }

// })

// how to consume the promises
// friedRicePromise.then((cooked)=>{
//     console.log("let drink ",cooked);
// },(error)=>{console.log(error)});


// others
// friedRicePromise.then(
    // jb promise resolve hoga
    /* (cooked)=>{
    console.log("let drink ",cooked);
} */
// null, // here we are passing only the null in place of the resolve of the promise means we are only interested in the resolve cases not in the reject cases
// jb promise reject hoga
// (error)=>{console.log(error)});


// we can also use the catch in place of two callbacks

// friedRicePromise.then((resolved)=>{
//     console.log("let drink",resolved);
// }).catch((reject)=>{
//     console.log(reject)
// });

// setTimeout(()=>{
//     for(let i=0;i<10;i++){
//         console.log(Math.random(), i);
//     }
// },1000);

// NOTE: promise is also asynchronous function so it will also execute after the over all execution of all the codes.

// promises are waiting in the microtask queue but the setTimeout callback function waiting in the callback queue hence microtask queue is more priority so it will first execute then callback queue will be executed.

// for(let i=0;i<10;i++){
//     console.log(Math.random(), i);
// }

// 135 return promises


// function ricePromise(){
//     const bucket = ["coffee",'chips','vegetables','salt','rice'];
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes( 'coffee') && bucket.includes( 'chips') && bucket.includes('vegetables')){
//             resolve("chai")
//         }else{
//             reject("could not do it")
//         }

//     })
// }

// here () calling and returning the function
// ricePromise().then((resolved)=>{
//     console.log("let drink", resolved);
// }).catch((reject)=>{
//     console.log(reject);
// })


// 136 promise with setTimeout function
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value=true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000);
//     })
// }

// myPromise()
// .then(()=>{console.log("resolved")})
// .catch(()=>{console.log("rejected")})

// 137 Promise resolve and chaining

// const myPromise = Promise.resolve(5);

// myPromise.then((value)=>{
//     console.log(value);
// })

// then() ==> this method only return the promise

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("sunny ")
    })
}

myPromise().then((value)=>{
    console.log(value);
    value+="kumar";
    // return value; // here return n krne pe it will return the undefined.
    return Promise.resolve(value); // this is the only retuning the promise not the string we can also write this code in place of the return value .
}).then((value)=>{
    console.log(value);
})