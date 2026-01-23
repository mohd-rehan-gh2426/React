# JavaScript While Loop – Complete Notes

## 1. Why Do We Need Loops?

Loops allow us to **run the same block of code multiple times automatically**.

### Real-world use cases:

* Print numbers from **1 to 1000**
* Traverse an array of **100 students**
* Search for a value (e.g., "Rahul") inside a list
* Update every element in an array

👉 Without loops, this would require **writing the same code again and again**, which is inefficient.

---

## 2. Types of Loops in JavaScript

JavaScript has **three main loops**:

1. `while` loop ✅ (covered here)
2. `for` loop
3. `do...while` loop

---

## 3. What is a While Loop?

A `while` loop **runs as long as a condition is true**.

### Syntax:

```js
while (condition) {
  // code to run
}
```

* The condition **must return true or false**
* If the condition never becomes false → ❌ **infinite loop**

---

## 4. Infinite Loop (Danger ⚠️)

```js
while (5 > 2) {
  console.log("Hi");
}
```

❌ This condition is **always true**, so the loop never stops
❌ Browser hangs / tab crashes

👉 Always make sure the condition **eventually becomes false**

---

## 5. Controlling a While Loop Using a Variable

To stop a loop, we:

1. Create a variable
2. Change its value inside the loop

### Example: Print numbers from 0 to 9

```js
let num = 0;

while (num < 10) {
  console.log(num);
  num += 1; // increment
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
Program Ended
```

---

## 6. How While Loop Works (Step-by-Step)

1. `num = 0`
2. Condition checked → `0 < 10` ✅
3. Code runs
4. `num` increases by 1
5. Condition checked again
6. Loop stops when condition becomes false (`num === 10`)

---

## 7. Printing Numbers from 1 to 100

### Method 1: Start from 1

```js
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}
```

### Method 2: Start from 0 and add 1

```js
let i = 0;

while (i < 100) {
  console.log(i + 1);
  i++;
}
```

✔ Both are valid
✔ First method is cleaner

---

## 8. Naming Convention in Loops

Instead of names like `num` or `count`, we usually use:

```js
let i = 0;
```

👉 `i` stands for **index / iterator** (industry convention)

---

## 9. Increment Operator in Loops

```js
i++;  // same as i = i + 1
```

* Works only on variables
* Cannot be used directly on numbers (`5++ ❌`)

---

## 10. Looping Through an Array Using While Loop

### Example Array:

```js
let friends = ["Akash", "Rahul", "Adarsh", "Rohit", "Rakesh"];
```

### Accessing elements manually:

```js
friends[0]; // Akash
friends[1]; // Rahul
```

---

## 11. Printing All Elements Using While Loop

```js
let i = 0;

while (i < friends.length) {
  console.log(friends[i]);
  i++;
}
```

✔ Automatically adapts if array size changes
✔ No hardcoded numbers

---

## 12. Printing Index + Name (Numbered List)

### Using Template Literals

```js
let i = 0;

while (i < friends.length) {
  console.log(`${i + 1}. ${friends[i]}`);
  i++;
}
```

### Output:

```
1. Akash
2. Rahul
3. Adarsh
4. Rohit
5. Rakesh
```

---

## 13. Updating Array Elements Using While Loop

### Adding a last name to everyone

```js
let i = 0;

while (i < friends.length) {
  friends[i] = friends[i] + " Singh";
  i++;
}
```

### Result:

```js
["Akash Singh", "Rahul Singh", "Adarsh Singh", "Rohit Singh", "Rakesh Singh"]
```

👉 Loop + assignment = powerful automation

---

## 14. Important Notes

* `console.log()` **does NOT update values**, it only prints
* To update array values → use assignment (`=`)
* Loops reduce **hundreds of lines into a few lines**

---

## 15. Common Mistakes

❌ Forgetting to increment the variable
❌ Writing a condition that never becomes false
❌ Using hardcoded array lengths

---

## 16. Practice Tasks

✅ Print numbers from 50 to 1
✅ Find a name inside an array
✅ Convert all names to uppercase
✅ Add prefix or suffix to array elements

---

## 17. Practice Resources

* **FreeCodeCamp.org** (Highly Recommended)
* FrontendPractice.com
* Clone real websites & make them responsive
* Practice > Watching videos

> 📌 Rule of thumb:
>
> * 1 hour lecture → 2–4 hours practice

---

## 18. Key Takeaway

> Loops are the backbone of programming.
> If you master loops, **real JavaScript begins** 🚀

---

Happy Practicing 💻🔥
