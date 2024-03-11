// fill method
// value , start , end

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
const myArray1 = myArray.fill(0, 2, 5);
// it also return the new array
// its upper bound  is exclusive
// it has three argument in which first one is value, start, end.
console.log(myArray1);