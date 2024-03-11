// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)


// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set([1,2,3]);
//const numbers = new Set("sunny");  // only return the sin
// console.log(numbers);

// empty set
// we can set different type of data type in the set.
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(items);
//numbers.add(items); // but these can not be  added again as it's a set and they are already there because it store the single memory for storing them.

//numbers.add(['item1', 'item2', 'item3']);
//numbers.add(['item1', 'item2', 'item3']); // both these above can be added because it takes the two different memory address.

// when we make an array using the  square bracket notation and add it to a set then all elements will be added as separate item into set.

// console.log(numbers);
// numbers.add(items);
// numbers.has(1), // return the boolean value.
//  it is the property to check the availibility  of an item in a set;

// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }


// for(let number of numbers){
//     console.log(number);
// }

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
// length property can be used on the set  object to get the count of elements in the set.
//console.log(uniqueElements.length); // gives the undefined value.
console.log(uniqueElements.length) // return the undefined because the set is not iterable
// console.log(Array.isArray(myArray));

// fo finding length of the set using the "for of" loop.

let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);
console.log(myArray.length); // we can apply length property on the array but not on the set.


