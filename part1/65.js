// splice method
// array ke bich me kuch delete or insert krna ho to we use splice.
// start , delete , insert

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// it allso return the deleted items.
// console.log("delted item", deletedItem);
// insert
// change the original array.
// myArray.splice(1, 0,'inserted item');


// insert and delete both together.
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// here 2 is the number  of elements that will be deleted from index given to the argument.
console.log("deleted item", deletedItem);
console.log(myArray);