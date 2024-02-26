// new keyword
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    return this // no need to write here return this because it return this keyword
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18;
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
user1.about();
// here new keyword creates
// empty object this = {}
// return this
// createuser.prototype khud bnakr dega
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){ // for only user1 s property it does not print about because it is not own it is prototypes.
        console.log(key);
    }

}
