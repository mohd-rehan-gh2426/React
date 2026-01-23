Got it! ✅ I’ve gone through the video you shared and I can now teach everything it covers in a **structured, clear way**. Here’s a detailed breakdown of all the concepts from that video:

---

# **JavaScript Scope – Lexical, Block, Module & Strict Mode**

This video builds on the previous one about **global and local scope**, and explains **lexical scope, block scope, strict mode, and module scope**.

---

## **1. Recap: Global and Local Scope**

* **Global Scope:**

  * Made by combining **script scope** and **window object**:

    * `var` and **normal function declarations** → **window object**
    * `let` and `const` → **script scope** (still global, but not on `window`)
  * Accessible **anywhere** in the program.

* **Local Scope:**

  * Every function creates its **own local scope**.
  * Variables declared inside a function are **not accessible outside** the function.
  * Example:

    ```javascript
    function subtract() {
        let x = 5;
        const y = 8;
    }
    console.log(x); // Error: x is not defined
    ```

---

## **2. Lexical Scope**

* **Definition:** Scope determined **by the position of functions in the code**, i.e., where the function is **written**, not where it is called.
* **Scope chain:**

  * Each function has access to its **own scope** + **all outer scopes** up to the global scope.
* **Example:**

  ```javascript
  function subtract(x, y) {
      const z = 28;

      function child() {
          const childName = "Golu";
          console.log(x, y, z, childName); // child has access to subtract's variables (x, y, z)
      }

      child();
  }

  subtract(5, 8);
  ```
* **Explanation:**

  * `child` can access:

    * Its own variables: `childName`
    * Parent function variables: `x`, `y`, `z`
    * Global variables
  * This chain is called **lexical scope**.

---

## **3. Nested Lexical Scopes (Scope Chain)**

* If a function is nested multiple levels:

  ```javascript
  function subtract(x, y) {
      const z = 28;

      function child() {
          const childName = "Golu";

          function grandchild() {
              const grandchildName = "Molu";
              console.log(grandchildName, childName, z, x, y);
          }

          grandchild();
      }

      child();
  }
  ```
* `grandchild` can access:

  1. Its own scope: `grandchildName`
  2. Parent scope (`child`): `childName`
  3. Grandparent scope (`subtract`): `z`, `x`, `y`
  4. Global scope
* **Inner functions → have access to outer functions’ variables. Outer functions → do NOT have access to inner functions’ variables.**

---

## **4. Block Scope**

* **Definition:** Variables declared inside `{}` using `let` or `const` exist **only inside that block**.
* **Example:**

  ```javascript
  {
      let num1 = 100;
      const num2 = 200;
      var num3 = 300;
  }

  console.log(num1); // Error
  console.log(num2); // Error
  console.log(num3); // Works! (var ignores block scope)
  ```
* **Key points:**

  * `let` and `const` → block-scoped
  * `var` → function-scoped (or global if outside function)
  * If declared with no keyword (`x = 5`), it becomes global (on `window`) **unless strict mode is used**

---

## **5. Strict Mode (`use strict`)**

* **Purpose:** Prevents accidental global variables and other unsafe JS practices.
* **How to enable:**

  ```javascript
  "use strict";
  ```
* **Effect:**

  * Variables must be declared using `let`, `const`, or `var`.
  * Example:

    ```javascript
    "use strict";
    num2 = 50; // Error: num2 is not defined
    ```
* Prevents creating global variables **accidentally**.

---

## **6. Module Scope**

* If your JS file is loaded as a **module**:

  ```html
  <script type="module" src="script.js"></script>
  ```
* **Behavior changes:**

  * Variables declared using `let` and `const` are **module-scoped**, not script-scoped.
  * **Script scope disappears** in module mode.
* **Benefit:** Helps prevent pollution of global namespace in modular code (ES6 feature).

---

## **7. Key Takeaways**

1. **Global Scope:** Variables accessible everywhere. Two types:

   * `var` → window object
   * `let`/`const` → script scope
2. **Local Scope:** Variables inside a function, only accessible inside that function.
3. **Lexical Scope:** Inner functions can access outer functions’ variables → **scope chain**
4. **Block Scope:** `{}` creates a block. `let` and `const` are confined to the block; `var` ignores block scope.
5. **Strict Mode:** Prevents accidental globals, enforces safer JS.
6. **Module Scope:** Variables in modules don’t pollute the global namespace.

---

### **Visual Representation of Scopes**

```
Global Scope
├─ var → window object
├─ let/const → script scope
└─ Functions (local scopes)
     ├─ subtract
     │    ├─ child
     │    │    └─ grandchild
```

* **Arrow of access:** Grandchild → Child → Subtract → Global
* **Reverse access:** Outer function cannot access inner function variables

---

If you want, I can make a **diagram with all scopes, lexical chains, and block/module scopes together** — like a full cheat sheet — which will make it **super easy to visualize for interviews**.

Do you want me to make that diagram?
