// primitive vs reference data types

// primitive data type
// this is store in stack
// and in stack each variable has got a new memory location to store the data.
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);


// reference types
// array
// array stored in heap but its pointer is stored in stack.
// here array is store in heap and its address is stored in stack as a pointer and each variable has new pointer then if we define new array is equal to the previous array then the new array is assigned to the same array address

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);
// this is because array is reference variable and array is mutable but reference of array is immutable.header