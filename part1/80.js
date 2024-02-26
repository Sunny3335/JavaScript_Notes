const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]](by official ecma script)



// prototype // this is difference, this is in function not same like [[prototype]].

const obj2 = Object.create(obj1); // it will make proto and create {} khali object

// js first obj2 me key ko search krega jb ni milega tb obj1 me jayega.

// ager obj2 me key mil jayega or o obj1 me v key rahega to preference obj2 vala ko dega

// there is one more way to create empty object
obj2.key3 = "value3";
obj2.key2 = "unique";
console.log(obj2);
console.log(obj2.key1);   // value1 it searched the key1 in the obj1.

// console.log(obj2.__proto__); // this is prototype

// obj2 ka proto obj1 hoga because of the object.create method.


