
// In JavaScript, the spread syntax (...) is used for several purposes to work with arrays and objects. It provides a concise and convenient way to spread the elements of an iterable (like an array or object) into another array or object.

// Spread in Arrays:
// 1. Copying Arrays:

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]
// 2. Concatenating Arrays:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];

console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
// 3. Adding Elements to Arrays:

const originalArray1 = [1, 2, 3];
const newArray = [...originalArray1, 4, 5];

console.log(newArray); // Output: [1, 2, 3, 4, 5]
// Spread in Objects:
// 1. Copying Objects:

const originalObject = { key1: 'value1', key2: 'value2' };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { key1: 'value1', key2: 'value2' }
// 2. Merging Objects:

const object1 = { key1: 'value1' };
const object2 = { key2: 'value2' };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject); // Output: { key1: 'value1', key2: 'value2' }
// 3. Adding or Overriding Object Properties:

const originalObject2 = { key1: 'value1' };
const newObject = { ...originalObject, key2: 'value2' };

console.log(newObject); // Output: { key1: 'value1', key2: 'value2' }
// Spread with Function Arguments:
// Spread is often used to pass elements of an array as individual arguments to a function:


function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); // Output: 6
// In this example, the spread syntax is used to pass the elements of the numbers array as individual arguments to the sum function.

// Spread syntax is a powerful and versatile feature in JavaScript, making code more concise and readable in various situations.





