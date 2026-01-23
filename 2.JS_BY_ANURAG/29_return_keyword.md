# JavaScript Functions – The `return` Keyword (Complete Notes)

## 1. Recap from Previous Video

* Functions help us **reuse code**
* We can pass **arguments** while calling a function
* Functions receive values using **parameters**
* `console.log()` is **NOT** the result of a function
* The **real result** of a function is what it **returns**

---

## 2. Console Output vs Return Value (VERY IMPORTANT)

```js
console.log("Hello")
```

* This only **prints** something
* It does NOT give a usable value

```js
return "Hello"
```

* This **returns** a value
* The value can be **stored, reused, passed, calculated**

> 🔑 Printing ≠ Returning

---

## 3. What Happens If a Function Returns Nothing?

```js
function test() {
  console.log(5 + 6)
}
```

```js
const result = test()
```

* Output in console: `11`
* Value of `result`: `undefined`

✅ **Every JavaScript function returns something**
❌ If you don’t specify `return`, it returns `undefined`

---

## 4. Using the `return` Keyword

```js
function addNumbers() {
  return 5 + 6
}

const result = addNumbers()
```

* `5 + 6` is calculated
* Value `11` is returned
* `result` stores `11`

Nothing prints unless you use:

```js
console.log(result)
```

---

## 5. How Function Call Gets Replaced by Return Value

```js
const result = addNumbers()
```

Internally becomes:

```js
const result = 11
```

> 🔁 Function call is **replaced** by its return value

---

## 6. Passing Arguments Instead of Hardcoding Values

❌ Bad (always same output):

```js
return 5 + 6
```

✅ Good (dynamic):

```js
function addNumbers(a, b) {
  return a + b
}

const result = addNumbers(5, 6)
```

* `a` → parameter
* `5` → argument
* Same for `b`

---

## 7. Parameters Are Variables

```js
function addNumbers(a, b) {
  return a + b
}
```

* `a` and `b` behave like normal variables
* Their values come from arguments

Hovering shows: **parameter**

---

## 8. Changing Arguments Changes Output

```js
addNumbers(56, 6) // 62
addNumbers(10, 20) // 30
```

✅ Same function
✅ Different result

---

## 9. Expressions Are Evaluated Before Passing

```js
addNumbers(50 + 10, 6 + 4)
```

Before passing:

* `50 + 10 → 60`
* `6 + 4 → 10`

Function receives:

```js
a = 60
b = 10
```

Result: `70`

---

## 10. Functions Inside Function Calls (Nested Calls)

```js
addNumbers(
  addNumbers(4, 6),
  addNumbers(8, 12)
)
```

Step-by-step:

1. `addNumbers(4, 6) → 10`
2. `addNumbers(8, 12) → 20`
3. `addNumbers(10, 20) → 30`

Final result: **30**

> 🧠 Inner functions run first, outer runs later

---

## 11. `return` Stops Function Execution

```js
function demo() {
  return 10
  console.log("This will NEVER run")
}
```

* Code after `return` is ignored

---

## 12. `return` With No Value

```js
function demo() {
  return
}
```

* Still returns `undefined`

---

## 13. What Can a Function Return?

✅ Numbers
✅ Strings
✅ Booleans
✅ Arrays
✅ Objects
✅ Functions (Higher Order Functions)

> Returning a function → **Higher Order Function** (next topic)

---

## 14. Real-World Meaning of `return`

* Function **calculates something**
* Sends result back
* Caller decides how to use it

```js
const total = calculatePrice()
const tax = calculateTax(total)
```

---

## 15. Key Takeaways

* `console.log()` is only for display
* `return` gives actual output
* Function calls are replaced by return values
* Returned value can be:

  * Stored
  * Passed
  * Calculated
  * Chained
* `return` is one of the **most important concepts** in JavaScript

---

## 16. What’s Next?

➡️ Function Scope
➡️ Call Stack
➡️ Higher Order Functions
➡️ Callbacks

---

✅ You now fully understand the `return` keyword
