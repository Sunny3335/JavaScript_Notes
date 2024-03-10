// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = () => {
//     console.log("happy birthday to you ......");
// }

const happyBirthday = () => {
    console.log("happy birthday");
}

happyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans);

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;
// ek line me return krne ke liye.
// in the  case of 1 parameter we can sort(remove() and the curley braces with return keyword also) the function otherwise we can use () in zero parameter


console.log(isEven(4));

const firstChar = anyString => anyString[0];

console.log(firstChar("harshit"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}