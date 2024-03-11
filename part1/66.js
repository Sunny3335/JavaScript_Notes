// iterables
// jispe hum for of loop laga sakein
// string , array are iterable

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// object is not iterable
// doesnt apply for of loop but we can apply for in loop on the obj so it is not iterable.
const obj = {
    key1: 'value',
    age: 23,
    address: "bihar",
}

for (let key of obj) {
    console.log(key)
}

// array like object
// jinke pas length property hoti hai
// aur jisko hum index se access kar sakte hai
// example :- string

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);