# JavaScript Variables – Complete Notes

## 1. Why Variables Matter

Before building real-world JavaScript projects (websites, games, animations), we must understand **fundamentals**. Variables are the **first and most important building block** of JavaScript logic.

---

## 2. What Is a Variable?

A **variable** is a **name given to a value**.

Example without variable:

```js
"Anurag"
```

This value:

* Cannot be reused easily
* Cannot be updated
* Has no meaning

Using a variable:

```js
let username = "Anurag";
```

Now:

* The value is stored
* The name `username` refers to it

---

## 3. Variables & Memory (Very Important)

When a variable is created:

* JavaScript allocates **memory (RAM)**
* Stores the value
* Assigns a **label (variable name)**

Conceptual view:

```
Memory (RAM)

[ "Anurag" ]  ← username
```

Whenever `username` is used, JavaScript fetches the value from memory.

---

## 4. Creating Variables Using `let`

```js
let username = "Anurag";
```

* `let` → declares variable
* `=` → assigns value
* Value is stored in memory

Accessing:

```js
username // "Anurag"
```

---

## 5. Storing Long or Meaningful Data

```js
let userIntro = "My name is Anurag Singh";
```

Use meaningful names instead of:

```js
let x = "My name is Anurag Singh"; // ❌ bad practice
```

---

## 6. Variable Naming Convention (camelCase)

JavaScript commonly uses **camelCase**:

```js
firstName
lastName
userIntro
isLoggedIn
```

Rules:

* First word → lowercase
* Each new word → capital letter

---

## 7. JavaScript Is Dynamically Typed

The **type depends on the value**, not the variable.

```js
let name = "Anurag";   // string
let age = 25;          // number
let isHappy = true;    // boolean
```

Check type:

```js
typeof name     // "string"
typeof age      // "number"
typeof isHappy  // "boolean"
```

---

## 8. Using Variables Together

```js
let firstName = "Anurag";
let lastName = "Singh";

let intro = "Hi I am " + firstName + " " + lastName;
```

Output:

```
Hi I am Anurag Singh
```

⚠ JavaScript does **not** add spaces automatically.

---

## 9. Mixing Strings and Numbers

```js
let age = 25;
let message = "I am " + age + " years old";
```

Output:

```
I am 25 years old
```

JavaScript converts numbers to strings automatically during concatenation.

---

## 10. Power of Variables (Update Once)

```js
let name = "Anurag";
let age = 25;

name = "Adarsh";
age = 15;
```

Updating the value updates all usages.

---

## 11. `undefined`

If a variable is declared but not assigned:

```js
let a;
```

JavaScript assigns:

```js
a = undefined;
```

* `undefined` means **value not assigned yet**

```js
typeof a // "undefined"
```

---

## 12. `undefined` vs `not defined`

### Undefined (Exists)

```js
let a;
a; // undefined
```

### Not Defined (Error)

```js
b; // ReferenceError
```

---

## 13. Updating Variables

```js
let city = "Delhi";
city = "Mumbai"; // ✅ allowed
```

---

## 14. `const` (Constant Variables)

Rules:

1. Must assign value immediately
2. Cannot be reassigned

```js
const hoursInDay = 24;
```

❌ Invalid:

```js
const x;
```

### Best Practice

* Use `const` by default
* Use `let` only if value changes

---

## 15. `var` (Avoid in Modern JavaScript)

* Old JavaScript keyword
* Function scoped
* Causes bugs

### Comparison

| Feature    | var      | let / const          |
| ---------- | -------- | -------------------- |
| Scope      | Function | Block                |
| Reassign   | Yes      | let: Yes / const: No |
| Modern Use | ❌        | ✅                    |

---

## 16. Block Scope vs Function Scope

```js
{
  let x = 10;
}
x; // ❌ Error
```

```js
{
  var y = 20;
}
y; // ✅ Works
```

---

## 17. Hoisting Difference

### var

```js
console.log(a);
var a = 10; // undefined
```

### let / const

```js
console.log(b);
let b = 10; // ❌ Error
```

---

## 18. Variable Naming Rules

✅ Allowed:

* Letters
* Numbers (not at start)
* `_` and `$`

❌ Not Allowed:

* Spaces
* Hyphens
* Special characters
* Starting with number

Examples:

```js
let firstName ✔
let $price ✔
let 1name ❌
let first-name ❌
```

---

## 19. Language in Variable Names

JavaScript allows Unicode names, but:

✔ Always use **English**
✔ Follow **camelCase**

---

## 20. Naming Conventions

| Convention | Example       |
| ---------- | ------------- |
| camelCase  | firstName     |
| PascalCase | UserProfile   |
| snake_case | first_name    |
| kebab-case | ❌ not allowed |

---

## 21. Key Takeaways ⭐

* Variables are **named memory locations**
* Type depends on value
* Prefer `const`
* Use `let` when change is required
* Avoid `var`
* Understand `undefined` clearly

---

## Next Topic

👉 JavaScript Execution Context & Hoisting
👉 How JavaScript runs code line by line
