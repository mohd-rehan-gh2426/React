
````markdown
# JavaScript Math Object and Related Concepts

Hi everyone, in this video we will learn about the **Math Object**, which is built-in in JavaScript.

---

## Introduction

- **Object:** We will create our own objects in upcoming videos.
- **Math Object:** JavaScript has a built-in object for mathematical operations.
- **New Operators & Keywords:** Some new operators and keywords are introduced in JavaScript related to Math.

We have a very simple project:

- HTML file (empty)
- JavaScript file
- You can download starter code or create it yourself.

Open the HTML file with a live server.  

---

## Mathematical Operators

### Common Operators:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`

### New Operators:

1. **Remainder Operator (%)**

```javascript
13 % 2 // 1
15 % 4 // 3
````

* Gives the **remainder** of division.
* Also called **Modular Operator** in some languages.

2. **Exponentiation Operator (**)**

```javascript
5 ** 2 // 25
5 ** 3 // 125
2 ** 10 // 1024
```

* Raises a number to the power of another.
* Introduced in **ES7 (2016)**.
* Older code uses `Math.pow()` instead.

---

## Math Object

JavaScript provides a built-in object `Math`:

### Properties:

* `Math.E` → Euler's number (~2.718)
* `Math.LN2` → Natural log of 2
* `Math.PI` → π (3.141)
* `Math.SQRT1_2` → Square root of 1/2
* `Math.SQRT2` → Square root of 2 (~1.414)

Accessing values:

```javascript
Math.PI       // 3.141...
Math.SQRT2    // 1.414...
```

> **Note:** Property names are **case-sensitive**.

---

## Math Methods

### 1. `Math.sqrt()`

* Calculates the **square root** of a number.

```javascript
Math.sqrt(16) // 4
Math.sqrt(25) // 5
Math.sqrt(26) // 5.099019514...
```

### 2. `Math.pow()`

* Calculates **x^y** (x to the power y).

```javascript
Math.pow(2, 6) // 64
2 ** 6         // 64
```

> `**` operator is more modern and readable. `Math.pow` is used in older code.

### 3. `Math.floor()`

* Rounds **down** to the nearest integer.

```javascript
Math.floor(2.4)  // 2
Math.floor(2.99) // 2
Math.floor(-2.5) // -3
```

> Always rounds toward **smaller number**.

### 4. `Math.ceil()`

* Rounds **up** to the nearest integer.

```javascript
Math.ceil(2.1)  // 3
Math.ceil(-2.5) // -2
```

> Always rounds toward **larger number**.

### 5. `Math.round()`

* Rounds to the **nearest integer**.

```javascript
Math.round(2.6)   // 3
Math.round(2.45)  // 2
Math.round(-2.5)  // -2
Math.round(-2.9)  // -3
```

### 6. `Math.random()`

* Generates a **random number between 0 and 1** (1 excluded).

```javascript
Math.random() // 0.42, 0.19, etc.
```

* To get random number in range `[0, n)`:

```javascript
Math.floor(Math.random() * 20) // 0 to 19
```

* To get random number in range `[min, max)`:

```javascript
Math.floor(Math.random() * (max - min) + min)
```

---

## Infinity and NaN

### Infinity

```javascript
8 / 0       // Infinity
-8 / 0      // -Infinity
typeof Infinity // "number"
```

### NaN (Not a Number)

```javascript
0 / 0       // NaN
typeof NaN  // "number"
```

> NaN represents **invalid numbers**, but its type is still `number`.

---

## Example: Rectangle Area

* Get **user input** with `prompt()`
* Convert string to number with `Number()`
* Multiply width × height
* Show result with `console.log()` or `document.write()`

```javascript
let width = Number(prompt("Enter rectangle width:"));
let height = Number(prompt("Enter rectangle height:"));

let area = width * height;
console.log("Rectangle Area:", area);
document.write(`Rectangle Area: ${area}`);
```

> Use template literals for displaying values dynamically.

---

## Notes on `document.write()`

* Writes directly to the HTML page.
* Avoid using it with `defer` or asynchronous scripts.
* Best for learning, not production apps.

---

## JavaScript Practice Recommendations

* Use **FreeCodeCamp** for JS practice.
* Focus on:

  * Variable declaration
  * Assignment operators
  * Math operations
  * User input/output
  * Template literals
* Keep practicing regularly.

---

## Assignment

* Generate random number **between two numbers**, e.g., 10 and 20:

```javascript
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min) + min);
console.log(randomNum); // Random integer from 10 to 19
```

---

## Summary

* **Operators:** %, ** (remainder & exponentiation)
* **Math Properties:** PI, E, SQRT2, etc.
* **Math Methods:** sqrt, pow, floor, ceil, round, random
* **Keywords:** Infinity, NaN
* **Practice:** Use prompt, console.log, and document.write
* **Assignment:** Calculate random numbers in a range
* **Tip:** Always practice JS concepts to retain knowledge.

```


