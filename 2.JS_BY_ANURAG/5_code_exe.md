JavaScript Memory & Execution – In-Depth Notes
1. Setup Overview

We have two files:

HTML file (index.html)

JavaScript file (script.js) linked to HTML

HTML contains a simple <h1> tag.

JS file contains variable declarations:

var firstName = "Akash";
let lastName = "Singh";
let age = 15;
const yearOfBirth = 1999;
let userIntro;
let introMessage = `Hi, my name is ${firstName} ${lastName}`;

2. JavaScript Execution Phases
2.1 Memory Creation Phase

What happens first: JS engine scans the code from top to bottom without executing operations.

Key tasks:

Look for declarations: var, let, const

Create memory space for each variable.

Initially assign undefined to every variable (actual value is not yet stored).

Example (memory after creation phase):

Variable	Value	Type
firstName	undefined	undefined
lastName	undefined	undefined
age	undefined	undefined
yearOfBirth	undefined	undefined
userIntro	undefined	undefined

Notes:

Variables exist in memory but do not yet hold their actual values.

For var: memory is created in global scope.

For let/const: memory is created in script scope (also called block scope when inside a block).

2.2 Code Execution Phase

What happens next:

JS engine executes the code line by line.

Assigns actual values to memory created in the first phase.

Updates the type of the variable automatically based on the value.

Example (memory during execution):

Variable	Value	Type
firstName	"Akash"	string
lastName	"Singh"	string
age	15	number
yearOfBirth	1999	number
userIntro	Hi, my name is Akash Singh	string

Console behavior:

console.log(firstName) prints the actual value after execution phase.

typeof firstName prints "string" once value is assigned.

3. Differences Between var, let, and const
Feature	var	let / const
Scope	Function/global	Block
Hoisting	Yes (initialized as undefined)	Yes (but in Temporal Dead Zone)
Initial value before assignment	undefined	Cannot access (TDZ)
Redeclaration	Allowed	Not allowed
4. Temporal Dead Zone (TDZ)

Definition: Period between memory creation and actual value assignment for let and const.

Behavior:

Variables cannot be accessed before their actual assignment.

Accessing them throws ReferenceError.

Why it exists:

Prevents using variables before they are initialized.

Ensures safer and predictable code.

5. Using DevTools to Visualize
5.1 Breakpoints / debugger keyword

Pause JavaScript execution at a specific line:

debugger;


Execution stops, allowing you to:

Inspect variables in memory

Hover over variables to see values

Step through code line by line (F9 or Next button)

Helps visualize:

Memory creation phase (undefined values)

Code execution phase (actual values being assigned)

5.2 Scope Tab

Var variables: visible in global scope

Let / Const variables: visible in script or block scope

Hovering shows current value (undefined initially, actual value after execution line)

6. HTML Parsing & JS Execution

Browser behavior:

Sends request for index.html.

HTML parser reads HTML line by line.

Encounters <script src="script.js"></script>:

Without defer: stops parsing HTML, executes JS immediately.

With defer: delays JS execution until HTML is fully parsed.

Benefits of defer:

Prevents HTML from being blocked by slow JS.

Ensures DOM is ready before JS manipulates it.

7. Visual Example on Blackboard (from video)

Memory creation phase:

firstName -> undefined
lastName  -> undefined
age       -> undefined
yearOfBirth -> undefined


Code execution phase:

firstName -> "Akash" (string)
lastName  -> "Singh" (string)
age       -> 15 (number)
yearOfBirth -> 1999 (number)

8. Practical Tips

Use DevTools to explore variables:

Sources tab → set breakpoints → hover variables → see live updates

Test behavior of var, let, and const.

Observe temporal dead zone in action:

Try accessing let/const before assignment → ReferenceError.

Experiment with defer attribute in HTML:

<script src="script.js" defer></script>

9. Key Takeaways

JS executes in two phases:

Memory Creation Phase → variables exist, value = undefined.

Code Execution Phase → values assigned, types determined.

var → function/global scoped, hoisted, undefined before assignment.

let / const → block scoped, hoisted but in TDZ, cannot access before assignment.

Debugger / breakpoints allow step-by-step observation of JS execution.

Defer in scripts prevents JS from blocking HTML parsing.