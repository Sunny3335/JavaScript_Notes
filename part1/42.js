// objects inside array
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
for(let user of users){

    console.log(user); // it will print the all object
    console.log(user.firstName); // it will return only the firstName values.
}
