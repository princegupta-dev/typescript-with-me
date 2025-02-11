Great question! Both interface and type can define object structures, but there are some key differences. Here’s why you might choose interfaces over types (or vice versa) in different scenarios.

## When to Use interface?

✅ Better for Extensibility (Merging & Inheritance)
Interfaces can be merged automatically and extended easily.

```ts
interface Person {
  name: string;
  age: number;
}

// Extending an interface
interface Employee extends Person {
  employeeId: string;
  position: string;
}

const emp: Employee = {
  name: "Prince",
  age: 21,
  employeeId: "E123",
  position: "Node.js Developer",
};
```

✅ Interface Declaration Merging
If you define the same interface multiple times, TypeScript will merge them.

```ts
interface User {
  name: string;
}

interface User {
  email: string;
}

// Merged into:
const user: User = {
  name: "Prince",
  email: "prince@example.com",
};
```

✅ More Performance-Friendly (Better for Compilation)
Interfaces are optimized internally in TypeScript, making them slightly faster at compile time.

## 🔹 When to Use type?

✅ Best for Complex Types (Unions, Intersections, Tuples, Functions)
type can handle union types, intersection types, and tuples, which interfaces cannot.

```ts
// Union Type
type Status = "active" | "inactive" | "pending";

// Intersection Type
type BackendDeveloper = { backendSkills: string[] };
type FrontendDeveloper = { frontendSkills: string[] };
type FullStackDeveloper = BackendDeveloper & FrontendDeveloper;

const dev: FullStackDeveloper = {
  backendSkills: ["Node.js", "MongoDB"],
  frontendSkills: ["React", "TypeScript"],
};
```

✅ Can Define Functions & Primitives
type works well for function signatures, while interface cannot define a standalone function.

```ts
// Type for function
type AddFn = (a: number, b: number) => number;

const add: AddFn = (x, y) => x + y;
```

✅ Tuple & Array Types
Unlike interface, type supports tuples directly.

```ts
type Coordinate = [number, number];

const point: Coordinate = [10, 20]; // ✅ Valid
```
