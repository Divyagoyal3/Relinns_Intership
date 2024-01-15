
// Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. It simplifies the process of working with complex data structures.

// Array Destructuring:
// 

// Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4
// You can also use the rest operator with array destructuring:


// Using the rest operator in array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, ...secondaryColors] = colors;

console.log(primary);         // Output: 'red'
console.log(secondaryColors); // Output: ['green', 'blue']
// Object Destructuring:

// Basic object destructuring
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
const { firstName, lastName, age } = person;

console.log(firstName); // Output: 'John'
console.log(lastName);  // Output: 'Doe'
console.log(age);       // Output: 30
// You can also assign new variable names when destructuring:


// Assigning new variable names in object destructuring
const { firstName: fName, lastName: lName, age: personAge } = person;

console.log(fName);      // Output: 'John'
console.log(lName);      // Output: 'Doe'
console.log(personAge);  // Output: 30
// Destructuring can be especially useful when working with function parameters, allowing you to extract specific values directly:

// Destructuring in function parameters
function printPerson({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

printPerson(person); // Output: 'John Doe'
// Destructuring is a powerful feature that enhances the readability and flexibility of your code, especially when dealing with complex data structures.




