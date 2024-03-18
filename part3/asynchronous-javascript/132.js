// understand callback

function myFunc(callback) {
  console.log("Function is doing task 1 ");
  callback();
}

function myFunc2() {
  console.log("Function is doing task 2 ");
}
// myFunc(myFunc);
// we can also do the above

// myFunc(() => {
//   console.log("function is doing task 2");
// });

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

function onFail() {
  console.log("Wrong data type");
  console.log("please pass numbers only");
}
getTwoNumbersAndAdd("4", 4, addTwoNumbers, onFail);

getTwoNumbersAndAdd(4, 4,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("wrong datatype");
    console.log("please pass numbers only");
  }
);
