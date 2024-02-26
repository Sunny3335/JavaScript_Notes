// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "harshit";

// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
//  string is immutable means (actual string can not be changed) firstName.trim() will gives the new string. so in this case we can make new variable or we can  update the existing varibale.
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index
// end index

let newString = firstName.slice(1); // arshit
// right sided index is excluded.
console.log(newString);