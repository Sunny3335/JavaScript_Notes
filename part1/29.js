// how to clone array

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// for cloning 1st method is
// let array2 = ["item1", "item2"];
// here if we push in array 1 then it will only reflect in array 1.
// let array2 = ["item1", "item2"];
// 2nd method to clone array
// let array2=array1.slice(0);

// 3rd method to clone array
// let array2=[].concat(array1);

// 4th method
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way

// slice method of cloning is more faster than the others methods of cloning

// spread operator
let oneMoreArray = ["item3", "item4"]
// let array2=[...array1,"items2","items3"];

let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2); // true
console.log(array1)
console.log(array2)
