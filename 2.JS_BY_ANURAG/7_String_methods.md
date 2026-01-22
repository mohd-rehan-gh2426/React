# JavaScript Strings Tutorial

## Introduction

Hi everyone, we saw in the data types video what strings are and how we can create strings. In this video, we will discuss more about strings, string template literals, and string properties and methods.

## Project Setup

I have created a small project with only HTML. The HTML includes notes on string methods and properties. The `script.js` file is empty, and we will write our code there.

## Strings and Indexing

Strings are indexed, meaning each character has a number assigned to it starting from 0.

```javascript
const message = 'hello';
console.log(message[0]); // h
console.log(message[4]); // o
console.log(message[5]); // undefined
```

### Example with Name

```javascript
const name = 'My name is Anurag';
console.log(name[0]); // M
```

## String Properties

### Length Property

The `length` property tells how many characters are in the string.

```javascript
const message = 'hello world';
console.log(message.length); // 11
```

## String Methods

### toUpperCase and toLowerCase

These methods do not modify the original string; they return a new string.

```javascript
const message = 'hello world';
const capitalMessage = message.toUpperCase();
const lowerMessage = message.toLowerCase();
console.log(capitalMessage); // HELLO WORLD
console.log(lowerMessage); // hello world
```

### trim

Removes extra spaces from the beginning and end of a string.

```javascript
const uselessMessage = '   Hi, I am Anurag   ';
const finalMessage = uselessMessage.trim();
console.log(finalMessage); // 'Hi, I am Anurag'
```

### trimStart and trimEnd

`trimStart` removes spaces from the beginning; `trimEnd` removes spaces from the end.

```javascript
console.log(uselessMessage.trimStart()); // 'Hi, I am Anurag   '
console.log(uselessMessage.trimEnd());   // '   Hi, I am Anurag'
```

### includes

Checks if a substring exists in a string and returns `true` or `false`.

```javascript
console.log(finalMessage.includes('Anurag')); // true
console.log(finalMessage.includes('akash'));  // false
```

### indexOf

Returns the index of the first occurrence of a character or substring.

```javascript
console.log(finalMessage.indexOf('I')); // 0
console.log(finalMessage.indexOf('Anurag')); // 7
console.log(finalMessage.indexOf('z')); // -1
```

### replace and replaceAll

Replaces a substring with another substring.

```javascript
const replacedMessage = finalMessage.replace('Hi', 'Hello');
console.log(replacedMessage); // 'Hello, I am Anurag'
const replaceAllMessage = finalMessage.replaceAll('a', 'A');
console.log(replaceAllMessage); // 'Hi, I Am AnurAg'
```

### concat

Combines two strings.

```javascript
const message1 = 'hello world';
const message2 = 'Hi, I am Anurag';
const combinedMessage = message1.concat(' ', message2);
console.log(combinedMessage); // 'hello world Hi, I am Anurag'
```

### padStart and padEnd

Pads a string with characters to reach a desired length.

```javascript
const last4Digits = '7896';
const maskedAccountNumber = last4Digits.padStart(16, '*');
console.log(maskedAccountNumber); // '************7896'
```

`padEnd` works similarly but pads at the end.

### charAt and charCodeAt

`charAt` returns the character at a specific index.
`charCodeAt` returns the ASCII code of the character at a specific index.

```javascript
console.log(finalMessage.charAt(3)); // l
console.log(finalMessage.charCodeAt(0)); // 72 (H)
```

### split

Splits a string into an array based on a separator.

```javascript
console.log(finalMessage.split(' ')); // ['Hi,', 'I', 'am', 'Anurag']
```

## String Template Literals

Template literals allow embedding variables and expressions inside strings using backticks `` ` `` and `${}`.

```javascript
const last4Digits = '7896';
const maskedAccountNumber = last4Digits.padStart(16, '*');
const accountMessage = `My account number is ${maskedAccountNumber}`;
console.log(accountMessage); // 'My account number is ************7896'
```

Template literals are cleaner than using `+` or `concat` and allow dynamic values inside strings.

## Conclusion

* Strings are indexed.
* `length` is a property; other methods return new strings.
* Methods include `toUpperCase`, `toLowerCase`, `trim`, `includes`, `indexOf`, `replace`, `replaceAll`, `concat`, `padStart`, `padEnd`, `charAt`, `charCodeAt`, and `split`.
* Template literals make string concatenation clean and dynamic.
* Always remember: you can search methods online instead of memorizing them.

---

**Tip:** Use Google to find how to capitalize strings, remove spaces, add stars, etc. You don't need to memorize all methods.
