# JavaScript Combined Assignment, Increment & Decrement Operators

## 1. What are Combined (Compound) Assignment Operators?

These operators **combine an arithmetic operator with the assignment operator (`=`)**.

Instead of writing:

```js
num = num + 5;
```

We can write:

```js
num += 5;
```

👉 Meaning: *Perform the operation and store the result back in the same variable.*

> You may hear different names:
>
> * Combined Assignment Operators
> * Compound Operators
> * Assignment Operators (MDN term)

All mean the **same thing**.

---

## 2. Types of Combined Assignment Operators

| Operator | Name                      | Example     | Meaning          |
| -------- | ------------------------- | ----------- | ---------------- |
| `+=`     | Addition Assignment       | `num += 2`  | `num = num + 2`  |
| `-=`     | Subtraction Assignment    | `num -= 2`  | `num = num - 2`  |
| `*=`     | Multiplication Assignment | `num *= 2`  | `num = num * 2`  |
| `/=`     | Division Assignment       | `num /= 2`  | `num = num / 2`  |
| `%=`     | Remainder Assignment      | `num %= 2`  | `num = num % 2`  |
| `**=`    | Exponentiation Assignment | `num **= 2` | `num = num ** 2` |

---

## 3. Why Use Combined Assignment Operators?

### ❌ Long Way

```js
let num = 5;
num = num + 5;
num = num + 5;
num = num + 5;
```

### ✅ Short & Clean Way

```js
let num = 5;
num += 5;
num += 5;
num += 5;
```

✔ Less code
✔ More readable
✔ Widely used in real projects

---

## 4. Example: Addition Assignment (`+=`)

```js
let num = 5;

num += 5; // 10
num += 5; // 15
num += 5; // 20
num += 5; // 25
```

Final value of `num` → **25**

---

## 5. Example: Multiplication Assignment (`*=`)

### Normal Way

```js
let num = 5;

num = num * 2; // 10
num = num * 2; // 20
num = num * 2; // 40
```

### Short Way

```js
let num = 5;

num *= 2;
num *= 2;
num *= 2;
```

✔ Same result
✔ Cleaner syntax

---

## 6. Increment (`++`) and Decrement (`--`) Operators

These operators **increase or decrease a value by 1**.

```js
num++; // increment by 1
num--; // decrement by 1
```

> No `=` symbol is written, but **the value still changes**.

---

## 7. Prefix vs Postfix Increment

### 1️⃣ Postfix (`num++`)

```js
let num = 5;
let result = num++;

console.log(result); // 5
console.log(num);    // 6
```

👉 First returns **old value**, then increments

---

### 2️⃣ Prefix (`++num`)

```js
let num = 5;
let result = ++num;

console.log(result); // 6
console.log(num);    // 6
```

👉 First increments, then returns **new value**

---

## 8. Decrement Operator (`--`)

Same rules apply as increment.

### Postfix Decrement

```js
let num = 5;
let result = num--;

console.log(result); // 5
console.log(num);    // 4
```

### Prefix Decrement

```js
let num = 5;
let result = --num;

console.log(result); // 4
console.log(num);    // 4
```

---

## 9. Key Rule to Remember

| Operator Position | Returned Value | Variable Value      |
| ----------------- | -------------- | ------------------- |
| `num++` / `num--` | Old value      | Changed later       |
| `++num` / `--num` | New value      | Changed immediately |

---

## 10. Can We Use `++` with `const`?

❌ **No**

```js
const num = 5;
num++; // ❌ Error
```

Reason:

* `++` changes the value
* `const` variables **cannot be reassigned**

Even though `=` is not visible, **assignment still happens behind the scenes**.

---

## 11. What Happens Behind the Scenes?

```js
num++;
```

Is internally similar to:

```js
num = num + 1;
```

✔ Memory address changes
✔ Value is reassigned
✔ That’s why `const` throws an error

---

## 12. Why Increment Operators Are Important?

They are heavily used in **loops**:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Without `++`, loops would be very verbose.

---

## 13. Summary

* Combined assignment operators are **shortcuts**
* `+=`, `-=`, `*=`, `/=`, `%=` , `**=`
* Increment & decrement change value by **1**
* Prefix and postfix behave **differently**
* `const` cannot be used with `++` or `--`
* These concepts are **critical for loops and logic**

---

## 14. Practice Suggestions

✅ Try each operator in console
✅ Observe values using `console.log`
✅ Practice prefix vs postfix
✅ Use them inside loops

---

Happy Coding 🚀
