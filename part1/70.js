// optional chaining

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}

}


// console.log(user.firstName);
// console.log(user.address);
// console.log(user.address.houseNumber);

console.log(user?.firstName);
console.log(user?.address?.houseNumber);

// to compansate the error we can use the ?.
// in this method if the value is undefined then it can not proceed furthur and finall gives the undefined value.

// it check the object is null or not if yes then return undefined otherwise go on and execute next line of code.