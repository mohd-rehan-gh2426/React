# JavaScript Call Stack & Recursion (Complete Notes)

## 1. Quick Recap: Execution Context

Before understanding the **Call Stack**, recall what we already know:

* JavaScript runs code using **Execution Contexts**
* Every execution context has **two phases**:

  1. **Memory Creation Phase**

     * Variables → `undefined`
     * Functions → stored completely
  2. **Code Execution Phase**

     * Code runs line by line

### Types of Execution Contexts

* **Global Execution Context (GEC)** – created first
* **Function Execution Context (FEC)** – created for every function call

---

## 2. What is the Call Stack?

👉 **Call Stack is a mechanism used by the JavaScript engine to track:**

* Which function is currently running
* Which function called which
* Where the execution currently is (line number)

### Simple Definition

> **Call Stack = Stack data structure that stores execution contexts**

---

## 3. Call Stack = Stack Data Structure (LIFO)

Call Stack follows **LIFO**:

* **Last In → First Out**

Think of it like:

* A **glass** open from the top
* You can only:

  * **Push** items from the top
  * **Pop** items from the top

---

## 4. First Entry in Call Stack

When the program starts:

* **Global Execution Context** is created
* It is pushed into the call stack

In browser devtools, it appears as:

* `Global`
* or `anonymous`

```
Call Stack:
┌───────────────┐
│ Global (anon) │  ← bottom (first)
└───────────────┘
```

---

## 5. Function Call & Call Stack

Consider this code:

```js
sayHi();

function sayHi() {
  add();
}

function add() {
  console.log("Hello");
}
```

### Step-by-step Call Stack Flow

1. **Global Execution Context** pushed
2. `sayHi()` is called →

   * New execution context created
   * Pushed onto stack
3. Inside `sayHi()`, `add()` is called →

   * `add()` execution context pushed

```
Call Stack (top → bottom):
┌────────┐
│ add()  │  ← currently executing
│ sayHi │
│ Global│
└────────┘
```

---

## 6. Arrow in Call Stack (Debugger)

In browser DevTools:

* An **arrow (→)** appears next to the top function

👉 This means:

* JavaScript engine is **currently inside this function**
* Engine also knows **exact line number**

---

## 7. Removing Execution Contexts (Pop)

When a function finishes:

* Its execution context is **removed from the stack**
* All its **local variables are destroyed**

### Order of Removal

1. `add()` finishes → popped
2. `sayHi()` finishes → popped
3. Global finishes → popped

When stack becomes empty:

> ✅ **Program execution ends**

---

## 8. Call Stack Becomes Empty

When execution reaches the last line:

* Call stack becomes empty
* Browser shows: `not paused`

```
Call Stack:
(empty)
```

---

## 9. Important Rule

> ❗ **Only function calls enter the call stack**

* Function definition → memory phase
* Function call → execution phase + call stack

---

## 10. New Example: Simple Function

```js
function introduceMe() {
  console.log("Hi, my name is Anurag");
}
```

* Function is stored in memory
* Nothing runs until we **call it**

```js
introduceMe();
```

### Call Stack Flow

1. Global pushed
2. `introduceMe()` pushed
3. `console.log` executes
4. `introduceMe()` popped
5. Global popped

---

## 11. Calling a Function Inside Itself

```js
function introduceMe() {
  console.log("Hi, my name is Anurag");
  introduceMe();
}

introduceMe();
```

### What happens?

* Function calls itself
* Each call creates **new execution context**
* Each context is pushed into call stack

```
Call Stack:
introduceMe()
introduceMe()
introduceMe()
introduceMe()
...
```

---

## 12. This Concept is Called Recursion

### Definition

> **Recursion = when a function calls itself**

* Each recursive call:

  * Creates a new execution context
  * Consumes stack memory

---

## 13. Stack Overflow Error

If recursion **never stops**:

* Call stack keeps growing
* Eventually exceeds its limit

### Browser Error

```
Maximum call stack size exceeded
```

This is called:

> ❌ **Stack Overflow**

---

## 14. Why Stack Overflow Happens

* No base condition in recursion
* Infinite function calls
* Call stack has a **finite size** (~10k–100k calls)

---

## 15. Real-Life Analogy

* Call stack = glass
* Function calls = water
* Too many calls = glass overflows 💧

---

## 16. How JavaScript Uses Call Stack

JavaScript engine uses call stack to:

* Track current function
* Track parent functions
* Know exact execution location
* Handle nested function calls

---

## 17. Key Takeaways (Very Important)

* Call stack stores **execution contexts**, not functions
* Global context is pushed first
* Function calls push new contexts
* Functions are removed after execution
* Stack follows **LIFO**
* Infinite recursion causes **stack overflow**

---

## 18. What This Knowledge Unlocks Next

After understanding call stack, you can easily learn:

* Hoisting (deep clarity)
* Scope & Lexical Environment
* Closures
* Async JavaScript
* Event Loop

---

📌 **This is one of the most important JavaScript fundamentals.**
Master this and JavaScript internals become easy.
