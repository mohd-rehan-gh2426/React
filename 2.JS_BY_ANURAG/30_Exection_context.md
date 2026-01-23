# JavaScript Execution Context – Complete Explained Notes

> These notes explain **everything taught in the video**, step by step, exactly how JavaScript runs code behind the scenes.

---

## Why Execution Context?

Before understanding **scope**, we must understand **how JavaScript executes code** internally.

JavaScript does **not** run code line-by-line directly.
It first prepares the environment, then executes.

This preparation + execution together is called an **Execution Context**.

---

## What is an Execution Context?

An **Execution Context** is an environment where JavaScript code is:

* Stored in memory
* Executed line by line

Every execution context has **two phases**:

1. **Memory Creation Phase**
2. **Code Execution Phase**

---

## Types of Execution Context

1. **Global Execution Context (GEC)**
2. **Function (Local) Execution Context**

---

## Global Execution Context (GEC)

* Created **automatically** when JS file starts running
* Only **one GEC** per program
* Appears as **anonymous** in Call Stack

### When is it created?

➡️ Immediately when JavaScript starts

---

## Phase 1: Memory Creation Phase (Hoisting Phase)

JavaScript scans the entire file and allocates memory.

### Rules:

#### Variables (`var`, `let`, `const`)

* Memory is allocated
* Initial value: `undefined`

```js
const userName = "Anurag";
const userAge = 25;
```

Memory Phase:

```text
userName → undefined
userAge  → undefined
```

#### Functions

* Entire function code is stored
* **NOT undefined**

```js
function sayHi() {
  console.log("Hi");
}
```

Memory Phase:

```text
sayHi → function code
```

✅ This is why **functions can be called before their definition**

---

## Phase 2: Code Execution Phase

Now JavaScript executes code **line by line**.

```js
const userName = "Anurag";
const userAge = 25;
```

Execution Phase:

```text
userName → "Anurag"
userAge  → 25
```

---

## Important: Defining vs Calling a Function

```js
function sayHi() {
  console.log("Hi");
}
```

❌ Function does NOT run when defined

```js
sayHi();
```

✅ Function runs only when **called**

---

## Function Execution Context (Local Execution Context)

Whenever a function is **called**:

* A **new execution context** is created
* It has its own:

  * Memory Creation Phase
  * Code Execution Phase

---

## Example: Function Execution Context

```js
function sayHi() {
  const a = 14;
  const b = 12;
  console.log(a, b);
}

sayHi();
```

### Memory Phase (sayHi)

```text
a → undefined
b → undefined
```

### Execution Phase (sayHi)

```text
a → 14
b → 12
```

After function ends ➜ **Local Execution Context is destroyed**

---

## Nested Execution Contexts (Function inside Function)

```js
function sayHi() {
  function add(x, y) {
    return x + y;
  }
  add(7, 9);
}

sayHi();
```

### Order of Execution Contexts:

1. Global Execution Context
2. sayHi() Execution Context
3. add() Execution Context

---

## Call Stack (Preview)

Execution Contexts are managed using **Call Stack**.

Example:

```text
add()
sayHi()
Global (anonymous)
```

* Last called function is on top
* First completed function is removed first (LIFO)

---

## What Happens on `return`?

```js
return x + y;
```

* Stops function execution
* Sends value back to where function was called
* Execution context is destroyed

---

## Scope Preview (Important Observation)

### `let` / `const`

* Stored in **Script scope**
* NOT attached to `window`

### `var`

* Stored in **Global (window) object**

This will be explained fully in **Scope video**.

---

## Key Takeaways 🔑

* JavaScript runs in **Execution Contexts**
* Every execution context has:

  * Memory Creation Phase
  * Code Execution Phase
* Functions create **their own world**
* Nested functions → Nested execution contexts
* Execution contexts are managed via **Call Stack**

---

## Mental Model (Very Important)

Think of execution context as **boxes inside boxes**:

```text
Global
 └─ sayHi
     └─ add
         └─ kuchbhi
```

---

## What’s Next?

➡️ **Call Stack (Deep Dive)**
➡️ **Scope (Global, Script, Local)**
➡️ **Lexical Environment**

You are now ready for **advanced JavaScript execution concepts** 🚀
