// Step 1: Function with Type Safety
// We will create a function calculateArea that takes a radius of type number and returns the area of a circle.

function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}

console.log(calculateArea(5)); // Output: 78.53981633974483

/*
Step 2: Function Overloading
We will create an overloaded function that behaves differently based on the argument type. If given a string, it returns a formatted string. If given a number, it returns the numerical area.*/
// Function Overloads
function getArea(radius: number): number;
function getArea(radius: string): string;

// Function Implementation
function getArea(radius: number | string): number | string {
  if (typeof radius === "number") {
    return Math.PI * radius * radius;
  } else if (typeof radius === "string") {
    let numRadius = parseFloat(radius);
    if (isNaN(numRadius)) {
      return "Invalid radius";
    }
    return `The area is ${Math.PI * numRadius * numRadius}`;
  }
  return "Invalid input";
}

// Testing
console.log(getArea(5)); // Output: 78.53981633974483
console.log(getArea("5")); // Output: The area is 78.53981633974483
console.log(getArea("hello")); // Output: Invalid radius
