# Assignment-09
## 1.Explain the scope in Javascript.
### The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
### JavaScript has the following kinds of scopes:
### Global scope: The default scope for all code running in script mode.
### Module scope: The scope for code running in module mode.
### Function scope: The scope created with a function.

## 2.What is a callback?
### A callback function is a function that is passed as an argument to another function and is executed after the completion of some operations.
### This mechanism allows JavaScript to perform tasks like reading files, making HTTP requests, or waiting for user input without blocking the execution of the program. This helps ensure a smooth user experience.

## 3.Explain context in JavaScript
### In technical terms, context refers to the object to which a function belongs or is bound. It determines how the function is executed and how it can access variables, properties, and methods within its scope. The confusing part, however, is that context changes dynamically depending on when and how it is used.
### There are two main types of context in JavaScript: Global and Function context. The global context is the default context in JavaScript. It represents the context of the entire program. This is definitely the most simplified state of context: When you define a function, object, or variable in the global context, it can be accessed anywhere in the program.
### Functional context on the other hand, refers to the context within a specific function. Every function created in a program has its own internal context, with direct access to the global context. Where this can get really confusing, is when you have functions nested inside of other functions, or used as methods on objects.

## 4.What is hoisting in JavaScript?
### In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.
### There are generally two types of hoistings in JavaScript ::

#### 1.Variable Hoisting : In JavaScript, the behavior of hoisting varies depending on whether a variable is declared using var, let, or const.When we declare a variable using var, it is hoisted to the top of its current scope. When we declare a variable using let or const, it is hoisted to the top of its current scope. However, the variable does not have a default value when it is hoisted (unlike when declared using var).
#### 2.Function Hoisting : In JavaScript, function hoisting allows us to call the function before its declaration.JavaScript moves the declaration of variables to the top of its scope before the code runs.

## 5.Explain lexical scope
### Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function. The diagram below outlines the supposed hierarchy that the lexical scope maintains in JavaScript.

## 6.What is scope chaining?
### The scope chain in JavaScript is formed when functions are nested within other functions. Each function in JavaScript has access to its own variables, as well as variables from its parent functions. This forms a chain of scopes that allows inner functions to access variables from outer functions.

## 7.Explain closure ?
### A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

## 8.What is the difference between undefined and not defined in javascript
### An undefined error is when we declare a variable in the code but do not assign a value to it before printing the variable.
### A not defined error is when we did not declare the variable and tried to call that variable.

## 9.Explain spread and rest operator
### Spread operator: The spread operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions. In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.
``` js 
    let array1 = [10, 20, 30, 40, 50];
    let array2 = [60, 70, 80, 90, 100];
    let array3 = [...array1, ...array2];
   console.log(array3);
```
### Rest parameter: The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest parameter compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier.
``` js
function sum(...rest) {
  let total = 0;
  for (const num of rest) {
    total += num;
  }
  return total;
}

const result =console.log (sum(1, 2, 3, 4)); 
// This returns 10 (1 + 2 + 3 + 4)
```

### The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.

## 10.Explain ‘this’ keyword in Javascript.
### The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.
``` js
const person = {
  name: "Hello world",
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet());
```