// trim()
// toUpperCase()
// toLowerCase()
// slice()

// let firstName = "    sunnuyuhu";

// console.log(firstName.length);
// ans = firstName.trim(); // "sunnuyuhu", it gives the new string. //

// console.log(firstName.length); // it also count the spaces.
// console.log(ans.length);

//  string is immutable means (actual string can not be changed) firstName.trim() will gives the new string. so in this case we can make new variable or we can  update the existing varibale.

// in case of immutable we make a copy of the variable we can not change the original variable.

// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index
// end index

const string="sunny"
// let newString = string.slice(1,4);
let newString = string.slice(1,4); // unny
// right sided index is excluded.
console.log(newString);