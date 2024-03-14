// difference between dot and bracket notaion
const key = "email";

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}

// console.log(person["person hobbies"]);
// person.key="sunnykumar@gmail.com"; // in this case we can not access the email in the object we only access the key value in the object and reflect the result in the object.
person[key] = "sunnykumar@gmail.com"; // but in this case we access the key value email in the object.

console.log(person);

// object arrange the key in the ascending order of alphabates.
