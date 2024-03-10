// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89, 69];
// const newArray = [...array1, array2]; // it will give the 4 element becuse array is spreaded but array2 is completely as a array.
// const newArray = [..."123456789"];
// const newArray=[...412343] // it will not spreaded becuase it is not iterable.
// const newArray = [..."abcdefgh"]; // it gives the array which contains the a,b,c,d... as a element  because string is iterable if we put any number then it will not iterable. so not follow the destructuring
// console.log(newArray);



// spread operator in objects
// const obj1 = {
  // key1: "value1",
  // key2: "value2",
  // key1: "value1",  // same properties can not be came in the same object it will be effective that was came at the last.
// };
// const obj2 = {
//   key1: "valueUnique",
//   key3: "value3",
//   key4: "value4",
// };

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// here if we spread obj2 after obj1 then it will only consider the common key value pair that is came in the last obj2.
const newObject = { ...["item1", "item2"] };
console.log(newObject); //{0: 'item1', 1: 'item2'}
// if we want to spread any array in the obj then it will assign the key value pair to the each element of the array.


// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" }; // in object spread it will gives the key value pair.
// console.log(newObject);
// like below.
// {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z'}