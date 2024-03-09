// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);

let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

// to push in front of the array.
const ans = ['a', 'b', 'c'];
for (let i = 0; i < fruits.length; i++) {
    ans.unshift(fruits[i].toUpperCase())

}

console.log(Array.isArray(ans));
console.log(ans.toUpperCase()); // we cant do this because  it is not a string method, its an array method. and here ans is array so array can not be convert to uppercase directly.