// array destructuring
// const myArray = ["value1", "value2", "value3","value4"];
const myArray = ["value1"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

let [myvar1, myvar2, ...myNewArray] = myArray;
// let myNewArray=myArray.slice(2); // we can also do by destructuring in the above code using the  ...operator.
// myvar1="sunny"; // in destructuring we should use let in place of const because  it is mutable.
// here we use let not const because if we use const then we can not able to change the value of variable.
// if there is less element in the array than the variable defined then it will defined the undefined value.
// to avoid undefined we use comma to separate or escape the variable.
// let[myvar1, ,myvar2]=myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2); // it gives undefined in case of shortage of array element relative to new defined variable.
console.log(myNewArray);


