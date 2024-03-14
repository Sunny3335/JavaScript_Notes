// how to iterate object
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
};

// for in loop
// Object.keys

for (let key in person) {
    console.log(key) // returns the key only.
    console.log(person.key); // gives undefined value.
    console.log(person[key]); // it return the key value to "name".
    console.log(`${key} : ${person[key]}`);
    console.log(key, " : " ,person[key]);
}

console.log(person.keys()); // returns all keys of an object as array.

console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

object.keys() //gives the array  of keys and we can access using index.

for(let key of Object.keys(person)){
    console.log(person[key]);
}