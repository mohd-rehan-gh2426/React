# JavaScript Functions – Complete Beginner Notes

## 1. Why Functions Exist

In real programs, we often repeat the same code again and again. Writing the same code multiple times:

* Makes code long and messy
* Is hard to maintain
* Increases chances of bugs

**Functions solve this problem.**

👉 A function is a **reusable block of code** that performs a specific task.

---

## 2. What is a Function?

A function:

* Groups multiple lines of code
* Gives that group a **name**
* Allows us to run the whole code by calling that name

Instead of writing 10 lines again and again, we just call the function.

---

## 3. Creating (Defining) a Function

### Syntax

```js
function introduceMe() {
  console.log("Hi");
  console.log("My name is Anurag");
  console.log("I am a web developer");
}
```

### Important Parts

* `function` → keyword
* `introduceMe` → function name (should be a **verb / action**)
* `()` → parameters (empty for now)
* `{}` → function body (actual code)

⚠️ Just defining a function **does not run it**.

---

## 4. Calling a Function

To run a function, we **call** it using parentheses:

```js
introduceMe();
```

### Function Definition vs Function Call

* **Function definition** → creating the function
* **Function call** → executing the function

---

## 5. Print vs Return

### Printing (console.log)

* Shows output on the console
* Does NOT give back a value

### Return

* Sends a value back from the function

```js
function demo() {
  console.log("Hello");
}

let result = demo();
// result is undefined
```

If a function does not return anything, its return value is **undefined**.

---

## 6. Using `return`

```js
function giveValue() {
  return 10;
}

let value = giveValue(); // 10
```

* `return` stops function execution
* Whatever is written after `return` becomes the function result

A function can return:

* Number
* String
* Boolean
* Object
* Array

---

## 7. Reusability with Functions

```js
introduceMe();
console.log("********");
introduceMe();
```

Same function → reused multiple times → clean code

---

## 8. Arguments & Parameters

### Parameter

* Variable defined in function definition

### Argument

* Actual value passed while calling function

```js
function introduceMe(userName) {
  console.log(userName);
}

introduceMe("Anurag"); // argument
```

* `userName` → parameter
* `"Anurag"` → argument

---

## 9. Using Parameters in Output (Template Literals)

```js
function introduceMe(userName) {
  console.log(`Hi, my name is ${userName}`);
}
```

* `${}` injects variable values inside strings

---

## 10. What If Argument Is Not Passed?

```js
introduceMe();
```

Output:

```
Hi, my name is undefined
```

Because no value was passed → parameter is `undefined`

---

## 11. Default Parameters (ES6 – 2015)

```js
function introduceMe(userName = "Procoder") {
  console.log(`Hi, my name is ${userName}`);
}
```

* Used when no argument is passed
* Cleaner than old `if` checks

---

## 12. Old Way (Before ES6)

```js
if (!userName) {
  userName = "Procoder";
}
```

⚠️ You may still see this in old codebases

---

## 13. OR (`||`) Trick for Default Values

```js
console.log(`Hi, my name is ${userName || "Procoder"}`);
```

* If `userName` is false → uses second value

---

## 14. Multiple Parameters

```js
function introduceMe(userName, profession) {
  console.log(`Hi, my name is ${userName}`);
  console.log(`I am a ${profession}`);
}
```

Calling:

```js
introduceMe("Anurag", "Software Engineer");
```

---

## 15. Adding More Parameters (Age)

```js
function introduceMe(userName, profession, age) {
  console.log(`Hi, my name is ${userName}`);
  console.log(`I am a ${profession}`);
  console.log(`I am ${age} years old`);
}
```

---

## 16. Data Types of Parameters

* Parameter type depends on argument passed

```js
typeof userName; // string
typeof profession; // string
typeof age; // number
```

Functions accept **any data type**.

---

## 17. Common Mistake: Missing Commas

❌ Wrong:

```js
introduceMe("Golu" "Student" 18);
```

✅ Correct:

```js
introduceMe("Golu", "Student", 18);
```

---

## 18. Function Naming Convention

✔ Use **verbs** (actions):

* `introduceMe`
* `calculateSum`
* `getUserData`

❌ Avoid nouns:

* `introduction`
* `data`

---

## 19. What We Learned So Far

* Functions reduce repetition
* Functions are reusable
* Parameters customize behavior
* Arguments change output
* Default values prevent `undefined`
* Functions make code clean & scalable

---

## 20. What’s Next?

➡️ **Return values in depth**
➡️ Using functions to calculate results
➡️ Saving returned values in variables

Functions are the **heart of JavaScript** ❤️
