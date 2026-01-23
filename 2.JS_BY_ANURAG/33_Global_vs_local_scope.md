# JavaScript Scope – Complete Notes (Interview + Debugger Level)

> This note covers **everything taught in the video**: scope, global vs local, window object, script scope, function scope, debugger view, call stack relation, and variable resolution.

---

## 1️⃣ What is Scope?

**Scope** decides **where a variable or function can be accessed** in your code.

Why scope matters:

* Prevents bugs
* Helps you debug errors easily
* Extremely important for interviews
* Helps write clean, predictable code

If you understand scope, you’ll instantly know:

> “This variable was declared here, so I cannot use it there.”

---

## 2️⃣ Example Setup (from the video)

```js
const userName = "Anurag";
const userAge = 25;

function add() {
  let x = 5;
  let y = 8;
  console.log(x + y);     // 13
  console.log(userName); // accessible
}

add();
console.log("Program ended");
```

---

## 3️⃣ Global Scope

Anything declared **outside all functions** is in the **global scope**.

### Global scope has TWO parts:

### 🔹 1. Window Object

* Created by the browser
* Contains:

  * `var` variables
  * function declarations
  * browser APIs

### 🔹 2. Script Scope

* Created when using `let` and `const`
* Still global, but **not attached to `window`**

> Both together form the **Global Scope**

---

## 4️⃣ `var` vs `let / const` in Global Scope

```js
var a = 50;
let userName = "Anurag";
const userAge = 25;
```

### Where do they go?

| Declaration   | Location     |
| ------------- | ------------ |
| `var a`       | `window.a`   |
| `let / const` | Script Scope |

### Access behavior

```js
window.a        // 50 ✅
window.userName // undefined ❌
userName        // "Anurag" ✅
```

📌 Accessing a property that does not exist on an object returns `undefined`.

---

## 5️⃣ Functions in Global Scope

```js
function add() {
  console.log("Hello");
}
```

* Function declaration goes into **window object**
* Stored fully during **memory creation phase**

```js
window.add(); // works
```

---

## 6️⃣ Local Scope (Function Scope)

When a function is **called**, it creates:

* A new **Execution Context**
* A new **Local Scope**

```js
function add() {
  let x = 5;
  let y = 8;
}
```

### Local scope contains:

* Function parameters
* Variables declared inside the function
* `this` keyword (varies by context)

📌 Variables in local scope:

* ✅ Accessible only inside that function
* ❌ Not accessible outside

---

## 7️⃣ Why `x` and `y` Give Error Outside

```js
function add() {
  let x = 5;
  let y = 8;
}

console.log(x); // ❌ ReferenceError
```

Reason:

* `x` and `y` exist only inside the **local scope of `add`**
* After function finishes, local scope is **destroyed**

---

## 8️⃣ Program Stops on Error

```js
console.log(x);
console.log("End");
```

* Once an error occurs → execution stops
* Lines below the error do NOT run

Order matters.

---

## 9️⃣ Scope Creation + Call Stack (Debugger View)

### When `add()` is called:

* `add` pushed to call stack
* Local scope created
* `x`, `y`, `this` added

### When `add()` ends:

* Execution context removed
* Local scope destroyed
* Variables erased from memory

📌 Scope lifetime = execution context lifetime

---

## 🔟 Accessing Global Variables Inside Function

```js
const userName = "Anurag";

function add() {
  console.log(userName); // works
}
```

Reason:

* Functions can access **outer scopes**
* This is called **scope chain**

---

## 1️⃣1️⃣ Shadowing (Same Variable Name)

```js
const userName = "Anurag";

function add() {
  const userName = "Akash";
  console.log(userName);
}

add(); // Akash
```

### How JS resolves variables:

1. Check local scope
2. If not found → check parent scope
3. Continue until global

📌 Nearest variable wins.

---

## 1️⃣2️⃣ Multiple Functions = Separate Local Scopes

```js
function add() {
  let x = 5;
}

function subtract() {
  let x = 15;
}
```

* `x` in `add` ❌ not related to `x` in `subtract`
* Each function has its **own local scope**

---

## 1️⃣3️⃣ Scope Destruction

When a function finishes:

* Its execution context is removed
* Its local scope disappears
* Variables cannot be accessed again

This is why:

```js
add();
console.log(x); // ❌ error
```

---

## 1️⃣4️⃣ What This Video Covered

✅ Global Scope
✅ Window Object
✅ Script Scope
✅ Local / Function Scope
✅ `var` vs `let / const`
✅ Debugger scope view
✅ Call stack relation
✅ Variable resolution order

---

## 1️⃣5️⃣ What’s Coming Next

* Block Scope
* Module Scope
* Lexical Environment
* Closures (VERY IMPORTANT)
* `this` keyword deep dive

---

## 🔥 Interview One-Liner

> Scope is the area of a program where a variable or function is accessible. JavaScript has global, local, block, and module scopes, and variables are resolved using the scope chain.

---

✅ These notes are **100% aligned with the video**
✅ Ready for **revision, interviews, and debugging**

Next video will make scope even clearer 🚀
