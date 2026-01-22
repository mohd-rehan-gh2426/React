# JavaScript Dialog Boxes

Dialog boxes are **pop-ups** that appear on the screen to interact with the user. There are **three main types**:

1. **Alert**
2. **Confirm**
3. **Prompt**

---

## 1. `alert()`

* **Purpose:** Show a simple message to the user.
* **Behavior:**

  * Pauses the page until the user clicks **OK**.
  * The rest of the HTML or JavaScript will **not run** until the alert is dismissed.
* **Syntax:**

```javascript
alert("This is an alert message!");
```

* **Notes:**

  * Returns `undefined` because it does not produce any value.
  * Different browsers display the alert differently (Chrome vs Firefox).

**Example:**

```javascript
alert("Are you sure?");
```

* Shows a pop-up with a single **OK** button.

**Key points:**

* You cannot get any input from the user.
* Useful to show warnings or notifications.

---

## 2. `confirm()`

* **Purpose:** Ask the user a **Yes/No** (OK/Cancel) question.
* **Behavior:**

  * Returns a **Boolean** value:

    * `true` → user clicks **OK**
    * `false` → user clicks **Cancel**
* **Syntax:**

```javascript
let isConfirmed = confirm("Do you want to proceed?");
```

* **Notes:**

  * Can store the result in a variable.
  * Often used for actions like “Do you really want to leave this page?”

**Example:**

```javascript
const isConfirmed = confirm("Are you sure you want to delete this file?");
if (isConfirmed) {
    console.log("File will be deleted.");
} else {
    console.log("File deletion canceled.");
}
```

---

## 3. `prompt()`

* **Purpose:** Get input from the user.
* **Behavior:**

  * Shows a dialog with a **text input field**.
  * Returns the value entered by the user.
  * If the user clicks **Cancel**, it returns `null`.
* **Syntax:**

```javascript
let userName = prompt("Please enter your name:");
```

* **Notes:**

  * Can save the user input in a variable for further use.
  * Only works in the current tab; each tab/browser environment is separate.

**Example:**

```javascript
const userInput = prompt("Enter your first name:");
console.log("User entered:", userInput);
```

**Possible return values:**

| Action               | Returned Value |
| -------------------- | -------------- |
| User types name + OK | `"Anurag"`     |
| User clicks Cancel   | `null`         |

---

## 4. Important Observations from Dialog Boxes

1. **Execution halts**:

   * When an alert, confirm, or prompt appears, **JavaScript stops executing** until the user responds.
   * HTML rendering may also be paused if `<script>` is above content without `defer`.

2. **Different browsers**:

   * Chrome, Firefox, and others display dialog boxes differently.
   * Functionality is the same but styles vary.

3. **Return values**:

   * `alert()` → `undefined`
   * `confirm()` → `true` or `false`
   * `prompt()` → user input string or `null` if canceled

4. **Variables & scope**:

   * You can store dialog box results in **variables**.
   * Each browser tab has its own environment. Variables in one tab **do not affect** another tab.

---

## 5. Practical Use Cases

* `alert()` → Show notifications (e.g., "Form submitted successfully!")
* `confirm()` → Ask confirmation (e.g., "Are you sure you want to delete?")
* `prompt()` → Take simple input (e.g., "Enter your username")

---

## 6. Example Project

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Dialog Boxes Example</title>
</head>
<body>
  <h1>Dialog Boxes in JavaScript</h1>
  <h2>Alert, Confirm, Prompt</h2>

  <script src="script.js"></script>
</body>
</html>
```

**JavaScript (`script.js`):**

```javascript
// Alert
alert("Welcome to the site!");

// Confirm
const proceed = confirm("Do you want to continue?");
console.log("User decision:", proceed); // true or false

// Prompt
const userName = prompt("Enter your name:");
console.log("User name:", userName); // string or null
```

---

## ✅ Key Takeaways

* Dialog boxes are **synchronous**: they pause code execution.
* Always handle their return values appropriately.
* Use them sparingly for better user experience (too many pop-ups are annoying).
* Each type has its specific purpose:

  * **Alert:** Info only
  * **Confirm:** Yes/No
  * **Prompt:** Input from user
