# JavaScript `for` Loop – Complete Notes

## 1. Quick Recap: While Loop

From the previous video, you learned that:

* A **loop** is used to repeat code
* A `while` loop runs **until a condition becomes false**
* Example: printing numbers from 1 to 100

Now we move to the **`for` loop**.

---

## 2. What is a `for` Loop?

A `for` loop does **the same work as a `while` loop**:

* Repeats code
* Checks a condition
* Stops when the condition becomes false

💡 **Difference:**

* The **syntax is cleaner and shorter**
* All loop logic is written **in one line**
* That’s why `for` loop is used **most commonly** in real projects

---

## 3. `for` Loop Syntax

```js
for (initialization; condition; increment/decrement) {
  // code to repeat
}
```

### Three parts explained:

1. **Initialization** → runs only once

```js
let i = 0;
```

2. **Condition** → checked before every iteration

```js
i < 10;
```

3. **Increment / Decrement** → runs after each iteration

```js
i++;
```

---

## 4. First Example: Print 0 to 9

```js
console.log("Program Started");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("Program Ended");
```

### Output:

```
0
1
2
3
4
5
6
7
8
9
```

---

## 5. Print Numbers from 1 to 10

### Method 1: Change starting value

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### Method 2: Add 1 while printing

```js
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
```

✔ Both work
✔ First method is cleaner

---

## 6. How `for` Loop Works Internally (Very Important)

Execution order:

1. `let i = 0` → runs **once only**
2. Condition checked (`i < 10`)
3. If true → code inside `{}` runs
4. `i++` executes
5. Condition checked again
6. Repeat until condition becomes false

👉 Initialization never runs again

---

## 7. Understanding Using Debugger

When you use `debugger` in DevTools:

* You can **see how control moves**
* Variable `i` updates step-by-step

### Key observations:

* `i` starts as `undefined`
* After initialization → `i = 0`
* After each iteration → `i` increases
* When condition becomes false → loop stops

---

## 8. Block Scope in `for` Loop (`let`)

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // ❌ Error
```

### Why?

* `let` is **block scoped**
* `i` exists **only inside the loop block**

📌 Difference from `while` loop:

* In `while`, variable is often created **outside**
* In `for`, variable is created **inside parentheses**

---

## 9. Loop Flow (Visual Explanation)

```
initialize → condition → code → increment
                 ↑               ↓
                 ← ← ← ← ← ← ← ←
```

If condition is:

* ✅ true → loop continues
* ❌ false → loop exits

---

## 10. Using `for` Loop with Arrays (Homework Reminder)

```js
let friends = ["Akash", "Rahul", "Adarsh", "Rohit"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
```

### Updating values:

```js
for (let i = 0; i < friends.length; i++) {
  friends[i] = friends[i] + " Programmer";
}
```

---

## 11. Printing Even Numbers (0 to 100)

### What is an Even Number?

* Completely divisible by 2
* Remainder = 0

### Remainder Operator (`%`)

```js
10 % 2 // 0
11 % 2 // 1
```

---

### Code: Even Numbers

```js
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

✔ Includes 0 and 100
✔ No odd numbers printed

---

## 12. Printing Odd Numbers

```js
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
```

---

## 13. Performance & Limits of Loops

| Range       | Time             |
| ----------- | ---------------- |
| 0–100       | Instant          |
| 0–1,000     | Instant          |
| 0–10,000    | Fast             |
| 0–1,00,000  | Slight delay     |
| 0–10,00,000 | Noticeable delay |

🚫 Printing **crores of numbers** will freeze the browser

---

## 14. Key Takeaways

* `for` loop is the **most used loop** in JavaScript
* Cleaner and shorter than `while`
* Perfect for arrays, counters, conditions
* Always ensure the condition becomes false

---

## 15. Practice Tasks (Must Do)

✅ Print numbers from 50 to 150
✅ Print table of 5
✅ Print all even numbers till 1000
✅ Update array values using `for`

---

## 16. Final Advice

> If you master `for` loop,
> arrays, DOM, and logic become **very easy** 🚀

Practice it daily 💻🔥
