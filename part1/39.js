// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

const obj = {
    [key1] : value1,
    [key2] : value2 // it compute the key1 and key2 value to the object.
}

// this is another way to compute the key and value pair from the variable.
// const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

