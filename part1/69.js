// clone using Object.assign

// memory
// store adress in head memory

const obj = {
    key1: "value1",
    key2: "value2"
}

// cloning object using the spread operator.
const obj1={...obj};
// obj1=obj;
// obj.key3="value3"  
console.log(obj);
console.log(obj1);

// obj.key3="value3"
// ager obj me kuch change krenge to obj1 me v update ho jayega q ki memory me dono ek he address ko piont kr rha hai

// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

