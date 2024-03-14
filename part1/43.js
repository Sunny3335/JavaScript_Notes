// nested destructuring
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [{ firstName }, , { gender }] = users;
console.log(firstName);
const [user1,user2,user3]=users; // here user1 store the value of object_1 from the user array.
console.log(user1); // it will return the object 1.

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users; // here firstName variable changed to user1firstName and we can access that by the user1firstName.
console.log(user1firstName); // harshit
console.log(userId); // 1
console.log(user3gender);