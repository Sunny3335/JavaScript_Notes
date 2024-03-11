// filter method
// only return the true or false value according to the callback function returning.

const numbers = [1,3,2,6,4,8];

const myFun = function (number) {
    return number % 2 === 0;
}


// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });

const ans = numbers.filter(myFun);
console.log(ans);

// console.log(evenNumbers);