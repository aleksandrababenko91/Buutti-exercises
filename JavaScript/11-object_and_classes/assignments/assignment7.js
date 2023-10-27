class Animal {
    constructor(weight, cuteness) {
        this.weight = weight,
        this.cuteness = cuteness
    }
    makeSound() {
        console.log("silence");
    }
}
console.log("A: ");
const animal = new Animal(6.5, 4.0);
animal.makeSound();  // prints "silence"
console.log(animal); // prints "Animal { weight: 6.5, cuteness: 4 }"

class Cat extends Animal {
    constructor(weight, cuteness) {
        super(weight, cuteness);
    }
    makeSound() {
        console.log("meow");
    }
}
console.log("B: ");
const cat = new Cat(4.5, 3.0);
cat.makeSound();  // prints "meow"
console.log(cat); // prints "Cat { weight: 4.5, cuteness: 3 }"

class Dog extends Animal {
    constructor(weight, cuteness, beerd) {
        super(weight, cuteness);
        this.beerd = beerd;
    }
    makeSound() {
        if(this.cuteness >= 4) {
            console.log("awoo");
        } else {
            console.log("bark");
        }
    }
}
console.log("C: ");
const dog1 = new Dog(7.0, 4.5, "kleinspitz");
const dog2 = new Dog(30.0, 3.75, "labrador");
dog1.makeSound(); // prints "awoo"
dog2.makeSound(); // prints "bark"
