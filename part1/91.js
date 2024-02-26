// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        // here fullname ko split krke ek list bna lega
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
// console.log(person1.eat());
// console.log(person1.fullName); //return all function.
// console.log(person1.fullName()); // it calls a property and print the firstName lastName.
// person1.setName("mohit","vasisth");
// person1.firstName="mohit";
// person1.lastName="vashistha";
// the above two line equivalent to the above 3rd line
// const info = Person.classInfo();
// console.log(person1.desc);
// console.log(info);
// function can called but prperties can be console directly.
// person1.classInfo(); // it return error because this return this is not function so in place of person1 we use object person and no need to make object this should be accessed by class.
// person.classInfo();