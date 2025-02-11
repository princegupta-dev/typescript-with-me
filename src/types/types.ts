// String
let username: string = "Prince";

// Number
let age: number = 21;

// Boolean
let isDeveloper: boolean = true;

// Array
let skills: string[] = ["Node.js", "React", "TypeScript"];
let scores: Array<number> = [90, 85, 88];

// Tuple
let user: [string, number] = ["Prince", 21];

// Enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
let myRole: Role = Role.Admin;

// Any (Avoid using this)
let randomValue: any = "Could be anything";

// Unknown (Stricter than any)
let input: unknown = 42;

// Void (For functions that don't return anything)
function logMessage(message: string): void {
  console.log(message);
}
// Never (For functions that never return)
function throwError(msg: string): never {
  throw new Error(msg);
}

// Compile and check for errors:
// tsc types.ts
