// In TypeScript, you can define object structures using interfaces or type aliases.

// Using Type Alias
type Circle = {
  radius: number;
  color?: string; // Optional Property
};

// Using Interface
interface Rectangle {
  width: number;
  height: number;
  color?: string; // Optional Property
}

// Example Object
const myCircle: Circle = { radius: 10, color: "red" };
const myRectangle: Rectangle = { width: 20, height: 15 };

//  interface vs type
/*
Can be extended 
Can describe functions
Can be used for unions/intersections
Performance (Compilation)
*/

// Example of Extending with Interface vs. Type:
// Extending an Interface
interface Shape {
  name: string;
}

interface Square extends Shape {
  side: number;
}

const mySquare: Square = { name: "Square", side: 5 };

// Extending a Type Alias
type ShapeType = { name: string };
type SquareType = ShapeType & { side: number };

const mySquareType: SquareType = { name: "Square", side: 5 };

// Readonly & Optional Properties
// readonly prevents modification after initialization.
// ? makes a property optional.

interface Car {
  readonly brand: string;
  model: string;
  year?: number; // Optional
}

const myCar: Car = { brand: "Tesla", model: "Model 3" };
myCar.model = "Model X"; // ✅ Allowed
// myCar.brand = "BMW"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property

//  Extending Interfaces
// We can create hierarchical interfaces by extending existing ones.

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = { name: "Buddy", age: 3, breed: "Labrador" };
