Alright, this video was **dense but super important**, especially for interviews. I’ve broken **everything** down cleanly and put **complete, structured notes** in the canvas on the side 👈
You can scroll there and treat it like **exam + interview notes**.

Here’s how I want you to mentally lock this topic in 👇

---

## Big Picture (what this video REALLY taught)

This video connects **three core JS concepts**:

1. **Hoisting**
2. **How JS actually runs code (memory vs execution)**
3. **Why function declaration ≠ function expression**

If you understand these three together, **90% of hoisting questions are free marks**.

---

## 1️⃣ Hoisting is NOT magic (and NOT code moving)

Interview myth ❌

> “JavaScript moves variables and functions to the top”

Reality ✅
JavaScript:

* First creates **memory**
* Then executes code line by line

So it only **looks like** things moved up.

That’s why MDN says:

> “Hoisting *appears* to move declarations”

Keyword: **appears**.

---

## 2️⃣ Why `var` gives `undefined`

```js
console.log(a);
var a = 10;
```

What actually happens:

### Memory Creation Phase

```js
a = undefined
```

### Execution Phase

```js
console.log(a); // undefined
a = 10;
```

So:

* No error
* Because `a` already exists in memory

📌 **Undefined is a value**, not an error.

---

## 3️⃣ `undefined` vs `not defined` (VERY IMPORTANT)

| Case          | Meaning                        |
| ------------- | ------------------------------ |
| `undefined`   | Variable exists but no value   |
| `not defined` | Variable does not exist at all |

```js
console.log(a); // ❌ not defined
```

vs

```js
var a;
console.log(a); // undefined
```

---

## 4️⃣ Why `let` and `const` throw errors

```js
console.log(a);
let a = 10;
```

Even though `let` **IS hoisted**, it lives in:

### 🧠 Temporal Dead Zone (TDZ)

* Variable exists
* But **cannot be accessed**
* Until initialization line is executed

That’s why:

```
Cannot access 'a' before initialization
```

📌 TDZ exists only for `let` and `const`.

---

## 5️⃣ Function Hoisting (this is interview gold)

### Function Declaration ✅

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

✔ Works
✔ Fully hoisted
✔ Entire function stored in memory

Why?
Because during memory phase:

```js
sayHi → function body
```

---

## 6️⃣ Function Expression ❌ (common trap)

```js
sayHi();

const sayHi = function () {
  console.log("Hi");
};
```

❌ Error

Why?

* `sayHi` is treated like a **variable**
* `const` → TDZ
* Function body is NOT available yet

---

## 7️⃣ `var` + function expression = different error

```js
sayHi();

var sayHi = function () {
  console.log("Hi");
};
```

Error:

```
sayHi is not a function
```

Why?

* `sayHi` exists
* But its value is `undefined`
* Calling `undefined()` → crash

---

## 8️⃣ Function Declaration vs Function Expression (must memorize)

| Feature          | Declaration   | Expression       |
| ---------------- | ------------- | ---------------- |
| Hoisted          | ✅ Fully       | ❌ Variable rules |
| Callable before  | ✅ Yes         | ❌ No             |
| Stored in memory | Full function | undefined / TDZ  |

---

## 9️⃣ Anonymous Function

```js
const greet = function () {
  console.log("Hello");
};
```

* Function has **no name**
* Variable name becomes reference
* Very common in callbacks, IIFE, React, Node

📌 This exact concept leads to **IIFE** (next topic).

---

## 10️⃣ Interview-safe definition of Hoisting

If an interviewer asks:

> “What is hoisting?”

Say this 👇

> Hoisting is JavaScript’s behavior where variables and function declarations are allocated memory before code execution. Because of this, variables declared with `var` return `undefined`, and function declarations can be called before their definition.

🔥 This answer is **100% correct** and spec-safe.

---

## What you should do next (important)

1. Re-read the canvas notes once
2. Write **your own examples** for:

   * `var`
   * `let`
   * function declaration
   * function expression
3. Next topics you MUST learn after this:

   * Scope & lexical environment
   * Closures
   * IIFE
   * Block vs function scope

If you want, next we can:

* 🔥 Do **interview hoisting questions**
* 🧠 Visualize hoisting with call stack
* ⚡ Combine hoisting + closures (advanced)

Just tell me 👊
