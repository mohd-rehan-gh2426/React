# JavaScript Do-While Loop – Complete Notes

## 1️⃣ Recap: Loops in JavaScript

In the previous videos, we learned two commonly used loops:

* **while loop** → condition checked first
* **for loop** → most commonly used, concise syntax

In this video, we learn the **do-while loop**, which is used **rarely**, but is important to understand.

---

## 2️⃣ While Loop (Quick Revision)

### Syntax

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Key Behavior

* Condition is checked **before** entering the loop
* If condition is **false initially**, loop never runs

```js
let i = 10;
while (i < 5) {
  console.log(i);
}
// Nothing prints
```

---

## 3️⃣ For Loop (Quick Revision)

### Syntax

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Key Behavior

* Initialization, condition, increment in **one line**
* Most **clean and readable** loop
* Variable `i` exists only inside the loop (block scope)

```js
console.log(i); // ❌ ReferenceError
```

---

## 4️⃣ Do-While Loop (Main Topic)

### Syntax

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### 🔑 Key Difference

> **Do-while loop runs at least once, even if the condition is false**

---

## 5️⃣ Do-While vs While (Critical Difference)

### While Loop

```js
let i = 10;
while (i < 5) {
  console.log(i);
}
// ❌ Never runs
```

### Do-While Loop

```js
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### Output

```
10
```

✔️ Runs **once**, then condition is checked

---

## 6️⃣ Execution Flow of Do-While Loop

Step-by-step:

1. Code inside `do {}` runs first
2. Variable is updated (`i++`)
3. Condition is checked
4. If `true` → loop repeats
5. If `false` → loop exits

---

## 7️⃣ Debugger Insight (Important Concept)

Using `debugger` shows:

* Code **enters the loop before condition check**
* Condition is evaluated **after first execution**

This guarantees **at least one execution**.

---

## 8️⃣ Scope Difference (Very Important)

### While / Do-While

```js
let i = 0;
while (i < 5) {
  i++;
}
console.log(i); // ✅ 5
```

* Variable declared **outside**
* Accessible after loop ends

---

### For Loop

```js
for (let i = 0; i < 5; i++) {}
console.log(i); // ❌ i is not defined
```

* `let` is **block-scoped**
* Variable removed from memory after loop
* ✔️ Cleaner and safer

---

## 9️⃣ Why `let` Instead of `var`

| Keyword | Scope             | Recommended                      |
| ------- | ----------------- | -------------------------------- |
| `var`   | Function / Global | ❌ No                             |
| `let`   | Block             | ✅ Yes                            |
| `const` | Block             | ✅ Best when value doesn’t change |

Always prefer **`let` and `const`**.

---

## 🔟 When to Use Do-While Loop

Use **do-while** when:

* Code must run **at least once**
* Condition depends on first execution

### Real Example

* Menu-driven programs
* User input validation
* Retry logic

---

## 1️⃣1️⃣ Loop Comparison Summary

| Loop       | Condition Check | Runs At Least Once | Usage                  |
| ---------- | --------------- | ------------------ | ---------------------- |
| `for`      | Before          | ❌                  | ⭐ Most common          |
| `while`    | Before          | ❌                  | Conditional repetition |
| `do-while` | After           | ✅                  | Rare but useful        |

---

## 1️⃣2️⃣ Final Takeaways

* `for` loop → **best & most used**
* `while` loop → condition-based repetition
* `do-while` loop → **guaranteed one execution**
* Always use **`let` / `const`**, avoid `var`

---

## 🔜 What’s Next?

➡️ **Functions** – the heart of JavaScript 🚀

Get ready 😄
