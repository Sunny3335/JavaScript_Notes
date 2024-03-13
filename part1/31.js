// use const for creating array

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");

// fruits=["cvrev","rvese"];// we can not do this because you are trying to make a new array at the same location.
// console.log(fruits);

const arr1 = ['banana', 'apple', 'peach', 'mango'];
// arr1 = ['apple', 'peach']; // can not do because we are not allow to make new array with same arrayName , instead of that we should create a new variable but we can update the array by using push pull operator.

const arr2 = ['banana', 'apple', 'peach', 'mango'];
arr2.unshift("jch"); // add in front.
console.log(arr1);
console.log(arr2);
console.log(&arr1);

