class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
// this line of code tells the same properties that have the animals.
// dog is called the subclass and animal is called the parent class.
}
// new keyword use krke he constructor call kr skte hai otherwise it will not create constructor.
const tommy = new Dog("tommy", 3);
console.log(tommy); // here constructor will be called and print the property of constructor.
console.log(tommy.isCute());
