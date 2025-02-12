/* 1️⃣ Class Properties & Methods
A class in TypeScript can have properties (variables) and methods (functions).
*/

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Prince", 21);
console.log(person1.greet()); // Output: Hello, my name is Prince and I am 21 years old.

/*
2️⃣ Access Modifiers: public, private, protected
 🔹 public (Default)
 Accessible everywhere (inside and outside the class).
 No need to explicitly declare it.
*/

class Example {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

const obj = new Example("Hello");
console.log(obj.data); // ✅ Accessible

// 🔹 private
// Accessible only within the class.
// Cannot be accessed from outside the class.
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
// console.log(account.balance); // ❌ Error: Property 'balance' is private
console.log(account.getBalance()); // ✅ Correct way to access private property

// 🔹 protected
// Accessible within the class and in derived (child) classes, but not from outside the class.

class Vehicle {
  protected speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }
}

class Car extends Vehicle {
  constructor(speed: number) {
    super(speed);
  }

  showSpeed(): string {
    return `The car is moving at ${this.speed} km/h`;
  }
}

// const myCar = new Car(120);
// console.log(myCar.speed); // ❌ Error: Property 'speed' is protected
console.log(myCar.showSpeed()); // ✅ Works fine inside the subclass

// 3️⃣ Inheritance (extends)
// Child classes inherit properties and methods from a parent class using extends.

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Call parent class constructor
    this.breed = breed;
  }

  makeSound(): string {
    return "Woof! Woof!";
  }
}

const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.makeSound()); // Output: Woof! Woof!

// 4️⃣ Abstract Classes & Interfaces
// 🔹 Abstract Classes
// Cannot be instantiated directly.
// Used as blueprints for child classes.
// Can have abstract methods (methods without implementation).

abstract class Shape {
  abstract calculateArea(): number; // No implementation

  display(): void {
    console.log("This is a shape");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.calculateArea()); // Output: 78.53981633974483

// 🔹 Interfaces in Classes
// Defines a contract for a class without implementation.
// A class must implement all properties and methods from an interface.

interface Animal {
  name: string;
  makeSound(): string;
}

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Meow!";
  }
}

const myCat = new Cat("Whiskers");
console.log(myCat.makeSound()); // Output: Meow!
