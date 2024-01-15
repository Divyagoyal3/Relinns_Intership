// A closure in JavaScript is a combination of a function and the lexical environment within which that function was declared. This lexical environment consists of the variables that were in scope at the time the closure was created. The closure "closes over" these variables, meaning it retains access to them even after the outer function has finished executing.

// Here's an example to illustrate the concept of closures:


function outerFunction() {
  // Variable declared in the outer function
  let outerVariable = 'I am from the outer function';

  // Inner function (closure) has access to the outer variable
  function innerFunction() {
    console.log(outerVariable);
  }

  // Return the inner function
  return innerFunction;
}

// Create a closure by calling the outer function
const closure = outerFunction();

// Invoke the closure
closure(); // Output: 'I am from the outer function'
// In this example, innerFunction is a closure because it is defined inside outerFunction and has access to the outerVariable. When outerFunction is called, it returns innerFunction, which is assigned to the variable closure. When closure() is invoked later, it still has access to outerVariable, even though outerFunction has already completed its execution. This ability of a function to retain access to variables from its containing scope is what makes it a closure.

// Closures are commonly used in JavaScript for a variety of purposes, including data encapsulation, private variables, and the creation of factory functions. They provide a way to create encapsulated and modular code by controlling the scope and access to variables.