// know the extends keyword in class
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

// Dog is a sub-class, derive-class  & Animal is a parent-class, base-class
class Dog extends Animal{
} 

const tommy = new Dog("tommy", 3, 45);
console.log(tommy);
console.log(tommy.isCute());