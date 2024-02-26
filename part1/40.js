// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// const newArray = [..."abcdefgh"]; // it gives the array which contains the a,b,c,d... as a element  because string is iterable if we put any number then it will not iterable. so not follow the destructuring
// console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
  // key1: "value1",  // smae properties can not be came in the same object it will be effective that was came at the last.
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// here if we spread obj2 after obj1 then it will only consider the common key value pair in the last obj2.
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" }; // in object spread it will gives the key value pair.
// console.log(newObject);
