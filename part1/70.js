// optional chaining

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}

}



// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);

// to compansate the error we can use the ?.
// in this method if the value is undefined then it can not proceed furthur and finall gives the undefined value.

console.log(user.address.houseNumber);