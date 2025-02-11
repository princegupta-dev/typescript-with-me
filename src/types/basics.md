## Step 1: Install TypeScript & Compile (tsc)

### What to Do?

1. Install TypeScript globally:

```sh
npm install -g typescript
```

2. Verify installation

```sh
tsc --version
```

3. Create a simple .ts file (e.g., index.ts) and compile it:

```ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

4. Compile and run:

```sh
tsc index.ts
node index.js
```

## Step 2: tsconfig.json Configuration Basics

### What to Do?

1. Generate a **tsconfig.json** file:

```sh
tsc --init
```

2. Open the file and understand these key properties:

- **"target": "es6"** → Compiles TS to ES6 JavaScript.
- **"outDir": "./dist"** → Outputs compiled JS files into a dist folder.
- **"rootDir": "./src"** → Treat src as the source directory.
- "**strict": true** → Enables strict type checking.

3.  Modify the tsconfig.json:

```ts
{
  "compilerOptions": {
    "target": "es6",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

4. Move your **index.ts** into **src/** and compile:

```sh
tsc
```
