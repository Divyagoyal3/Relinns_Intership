//console.log("Day_1_2");

//Array Methods

//1. concat() return type string
const a1 = [1,2,3];
const a2 = [3,4,5];
const a3 = a1.concat(a2);
console.log(a3);

//2.every(). 
//Return type boolean
//This function uses the callback fuction to check whether particular elemnt is present or not.
const present = (current) => current  < 30 ;
const array1 = [1,23,14,16];
console.log(array1.every(present));

//3.filter()
//return type array if value doesnot match
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);

//4.The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//return type:A new array with the sub-array elements concatenated into it.
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(3));
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

//5. flatMap() : The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
// Return type:A new array with each element being the result of the callback function and flattened by a depth of 1.
const arr3 = [1,2,1];
const result_2 = arr3.flatMap((num) => num == 2 ? [2,2] :1);
console.log(result_2);// output : [1,2,2,1]

//6.foEach() : it is a callback function of array instances executes a provided function once fo  each array element.
//return type: undefined
const arr4 = ['a','b','c'];
arr4.forEach((ele) => console.log(ele));

//7.indexOf() :return index of particular element if present in the array or return -1 otherwise
const arr5 = [1,8,9,8,9];
console.log(arr5.indexOf(1));
console.log(arr5.indexOf(9,3));
console.log(arr5.indexOf(10));

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1




//8. lastIndexOf() Method
//The lastIndexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). NaN values are never compared as equal, 
//so lastIndexOf() always returns -1 when searchElement is NaN.


const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1

const array = [NaN];
array.lastIndexOf(NaN); // -1

//You cannot use lastIndexOf() to search for empty slots in sparse arrays.
console.log([1, , 3].lastIndexOf(undefined)); // -1

const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 2,
    3: 5, // ignored by lastIndexOf() since length is 3
  };
  console.log(Array.prototype.lastIndexOf.call(arrayLike, 2));
  // 2
  console.log(Array.prototype.lastIndexOf.call(arrayLike, 5));
  // -1

console.log("search");
const number = [2, 5, 9, 2];
// numbers.lastIndexOf(2); // 3
// numbers.lastIndexOf(7); // -1
// numbers.lastIndexOf(2, 3); // 3
// numbers.lastIndexOf(2, 2); // 0
console.log(number.lastIndexOf(2, -2)); // 0
// numbers.lastIndexOf(2, -1); // 3

//9. map() method
//The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results. Read the iterative methods section for more information about how these methods work in general.
//return a new array with each elemnet being the result of callback function
//when undefined or nohing s returned ,the resulting array contains undefined.

const array5 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]

  /* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN

//Calling map() on non-array objects
const arrayLke = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // ignored by map() since length is 3
  };
  console.log(Array.prototype.map.call(arrayLke, (x) => x ** 2));
  // [ 4, 9, 16 ]


  //10. reduce()method 
//The reverse() method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.
const array7 = ['one', 'two', 'three'];
console.log('array1:', array7);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array7);
// Expected output: "array1:" Array ["three", "two", "one"]


console.log("hgdiueh");

// 11 The Array.prototype.slice() method in JavaScript is used to extract a portion of an array and returns a new array containing the selected elements. It doesn't modify the original array; instead, it creates a shallow copy of the specified portion.
let originalArray = [1, 2, 3, 4, 5];

// Extract elements from index 1 to index 3 (not including 3)
let slicedArray = originalArray.slice(1, 3);

console.log(slicedArray); // Output: [2, 3]
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

//In this example, slice(1, 3) extracts elements from index 1 to index 2 (not including 3) from the originalArray, creating a new array (slicedArray) with the extracted elements.

//If no parameters are provided, slice() creates a shallow copy of the entire array:
let originalArray1 = [1, 2, 3, 4, 5];

let shallowCopy = originalArray1.slice();

console.log(shallowCopy); // Output: [1, 2, 3, 4, 5]
console.log(originalArray1); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)



// The Array.prototype.some() method in JavaScript is used to test whether at least one element in the array passes the provided function. It returns a Boolean value indicating whether the callback function returns true for at least one element in the array. The method does not modify the original array.

// The syntax for some() is as follows

// array.some(callback(element[, index[, array]])[, thisArg]);
// callback: A function to test each element of the array. It takes three parameters: element (the current element being processed), index (the index of the current element), and array (the array some() was called upon).

// thisArg (optional): Object to use as this when executing the callback function.

// Here's an example of using some() to check if at least one element in an array is greater than 5:


let numbers8 = [1, 3, 5, 7, 9];

let isAtLeastOneGreaterThan52 = numbers8.some(function(element) {
  return element > 5;
});

console.log(isAtLeastOneGreaterThan5); // Output: true (because 7 and 9 are greater than 5)

let isAtLeastOneGreaterThan5 = numbers.some(element => element > 5);
// The some() method stops iterating through the array as soon as it finds an element for which the callback returns true. If no such element is found, it returns false.


const arry9 = [5,10,4,40];
let sorted = arry9.sort();
console.log(sorted);

//The sort() method in JavaScript is used to sort the elements of an array in place. By default, the sort() method sorts the elements as strings, which may lead to unexpected results when sorting numbers. Therefore, a comparison function can be provided as an argument to define the sort order.
//
//The basic syntax for the sort() method is as follows:

array.sort([compareFunction]);
// compareFunction (optional): A function that defines the sort order. If omitted, the array elements are converted to strings, and the default sorting order is based on their Unicode code points.
// Here's an example of using sort() without a compareFunction:

// javascript
// Copy code
let fruits123 = ['banana', 'apple', 'orange', 'grape'];
fruits123.sort();

console.log(fruits123); // Output: ['apple', 'banana', 'grape', 'orange']

// In this example, the array is sorted alphabetically because the default comparison is based on string values.

// To sort numbers correctly, you can provide a compareFunction:

// javascript
// Copy code
let numbers234 = [10, 5, 8, 2, 1];
numbers234.sort(function(a, b) {
  return a - b;
});

console.log(numbers234); // Output: [1, 2, 5, 8, 10]
// The compareFunction should return a negative, zero, or positive value, depending on the desired sorting order. If compareFunction(a, b) returns a negative value, a comes before b; if it returns a positive value, a comes after b; and if it returns 0, no change in order.

// It's important to note that the sort() method sorts the array in place and modifies the original array. If you want to preserve the original array, you can create a copy before sorting:

// javascript
// Copy code
let originalArray23 = [10, 5, 8, 2, 1];
let sortedArray = [...originalArray23].sort();
console.log(sortedArray); // Output: [1, 2, 5, 8, 10]
console.log(originalArray); // Output: [10, 5, 8, 2, 1] (original array remains unchanged)


ChatGPT
// The compare function, often referred to as the "compareFunction" parameter, is an optional argument that you can pass to the sort() method in JavaScript. This function is used to determine the sorting order of the elements in an array.

// The compareFunction takes two parameters, typically referred to as a and b, representing two elements from the array that are being compared. The function should return a negative, zero, or positive value, indicating the desired order of the two elements:

// If compareFunction(a, b) returns a negative value, a will be placed before b in the sorted array.
// If it returns a positive value, a will be placed after b.
// If it returns 0, the order of a and b remains unchanged.
// Here's a simple example sorting numbers in ascending order:


let numbers456 = [5, 2, 8, 1, 10];
numbers456.sort(function(a, b) {
  return a - b;
});

console.log(number456s); // Output: [1, 2, 5, 8, 10]
//In this case, the compareFunction subtracts b from a, and the result determines the sorting order. If the result is negative, it means a is less than b, so a comes before b in the sorted array.

//For descending order, you can reverse the subtraction:


let numbers6 = [5, 2, 8, 1, 10];
numbers6.sort(function(a, b) {
  return b - a;
});

console.log(numbers6); // Output: [10, 8, 5, 2, 1]
// This time, if the result is positive, it means b is less than a, so b comes before a in the sorted array.




// The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. The basic syntax of the splice() method is as follows:


// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);
// start: The index at which to start changing the array. If greater than the length of the array, start will be set to the length of the array. If negative, it will begin that many elements from the end of the array.

// deleteCount (optional): The number of elements to remove. If omitted or if greater than the number of elements from start to the end of the array, all elements from start to the end will be removed.

// item1, item2, ... (optional): The elements to add to the array, beginning from the start index. If you don't specify any elements to add, only the removal of elements will happen.

// Here are some examples to illustrate how splice() works:

// Example 1: Removing Elements

let fruitsupdate = ['apple', 'banana', 'cherry', 'date'];

// Remove 'banana' starting from index 1
let removedElements1 = fruitsupdate.splice(1, 1);

console.log(fruits);          // Output: ['apple', 'cherry', 'date']
console.log(removedElements1); // Output: ['banana']

// Example 2: Removing and Adding Elements

let numbersUpdated = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1 and add 'a' and 'b'
let removedElements2 = numbers.splice(1, 2, 'a', 'b');

console.log(numbersUpdated);          // Output: [1, 'a', 'b', 4, 5]
console.log(removedElements2); // Output: [2, 3]

// Example 3: Removing Elements at the End

let colors = ['red', 'green', 'blue'];

// Remove 1 element starting from the end of the array
let removedElements = colors.splice(-1, 1);

console.log(colors);          // Output: ['red', 'green']
console.log(removedElements); // Output: ['blue']
// The splice() method is versatile and allows you to modify an array by removing, replacing, or adding elements based on the specified parameters.

// The Array.prototype.entries() method in JavaScript returns a new Array Iterator object that contains key/value pairs for each index in the array. The iterator provides pairs as arrays where the first element is the index and the second element is the corresponding value.

// Here's the basic syntax:
// array.entries();
// The entries() method does not modify the original array, and it allows you to iterate over the key/value pairs of an array using a for...of loop or the Array.from() method.

// Here's an example:


let fruitslog = ['apple', 'banana', 'cherry'];

// Using for...of loop with entries()
for (let entry of fruitslog.entries()) {
  console.log(entry);
}
// Output:


// [0, 'apple']
// [1, 'banana']
// [2, 'cherry']
// In this example, fruits.entries() returns an iterator, and the for...of loop is used to iterate over the key/value pairs. Each entry is an array where the first element is the index, and the second element is the corresponding value.

// You can also use Array.from() to convert the iterator to an array:


let fruits = ['apple', 'banana', 'cherry'];
let iteratorts = fruits.entries();
let entriesArray = Array.from(iteratorts);

console.log(entriesArray);
// Output:
// [ [0, 'apple'], [1, 'banana'], [2, 'cherry'] ]
// The entries() method is particularly useful when you need both the index and the value while iterating over an array.

// Array.prototype.fill() is a method in JavaScript that is used to fill all the elements of an array with a static value. It changes the elements of an array from a start index to an end index with a specified value.

// Here's the basic syntax:

// array.fill(value[, start[, end]])
// value: The value to fill the array elements with.
// start (optional): The index to start filling the array. If not specified, it starts from index 0.
// end (optional): The index to stop filling the array (not inclusive). If not specified, it fills the array until the end.
// Here's an example:

let array2 = [1, 2, 3, 4, 5];

// Fill the entire array with the value 0
array.fill(0);
console.log(array2); // Output: [0, 0, 0, 0, 0]

// Fill a portion of the array with the value 10, starting from index 2 (inclusive) to index 4 (exclusive)
array.fill(10, 2, 4);
console.log(array2); // Output: [0, 0, 10, 10, 0]
// Keep in mind that fill() modifies the original array in place and returns a reference to the modified array.








// Array.prototype.find() is a method in JavaScript that is used to retrieve the first element in an array that satisfies a provided testing function. It returns the value of the first element in the array that satisfies the provided testing function, or undefined if no element satisfies the function.

// Here's the basic syntax:

// array.find(callback(element[, index[, array]])[, thisArg])
// callback: Function is called for each element in the array until it returns true, indicating that the desired element has been found.

// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array find was called upon.
// thisArg (optional): Object to use as this when executing the callback.

// // Here's an example:


let numbers12 = [1, 2, 3, 4, 5];

// Find the first element greater than 2
let result22 = numbers12.find(function(element) {
    return element > 2;
});

console.log(result22); // Output: 3
// In this example, the find method is used to locate the first element in the numbers array that is greater than 2.

// Keep in mind that find() stops iterating once it finds an element that satisfies the condition. If no element is found, it returns undefined.






// Array.prototype.findIndex() is a method in JavaScript that is similar to Array.prototype.find(), but instead of returning the value of the first element that satisfies a provided testing function, it returns the index of that element. If no element satisfies the condition, it returns -1.

// Here's the basic syntax:

// javascript
// Copy code
// array.findIndex(callback(element[, index[, array]])[, thisArg])
// callback: A function that is called for each element in the array until it returns true, indicating that the desired element has been found.

// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array findIndex was called upon.
// thisArg (optional): Object to use as this when executing the callback.

// Here's an example:


let numbers2 = [1, 2, 3, 4, 5];

// Find the index of the first element greater than 2
let index = numbers2.findIndex(function(element) {
    return element > 2;
});

console.log(index); // Output: 2 (index of the element 3)
// In this example, the findIndex method is used to locate the index of the first element in the numbers array that is greater than 2.

// Similar to find(), findIndex() stops iterating once it finds an element that satisfies the condition. If no element is found, it returns -1.





// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
const array0 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130




// Array.prototype.findLastIndex()
// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// See also the findLast() method, which returns the value of last element that satisfies the testing function (rather than its index).

const array18 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130






// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array16 = [1, 2, 3];

console.log(array16.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


// Using includes()
// JS
// Copy to Clipboard
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
// fromIndex is greater than or equal to the array length
// If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

// JS
// Copy to Clipboard
const arr6 = ["a", "b", "c"];

arr6.includes("c", 3); // false
arr6.includes("c", 100); // false
// Computed index is less than 0
// If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. If the computed index is less than or equal to 0, the entire array will be searched.

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
// 
const arr9 = ["a", "b", "c"];

arr9.includes("a", -100); // true
arr9.includes("b", -100); // true
arr9.includes("c", -100); // true
arr9.includes("a", -2); // false



// Using includes() on sparse arrays
// You can search for undefined in a sparse array and get true.


console.log([1, , 3].includes(undefined)); // true
// Calling includes() on non-array objects
// The includes() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.

const arrayLike2 = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 1, // ignored by includes() since length is 3
};
console.log(Array.prototype.includes.call(arrayLike2, 2));
// true
console.log(Array.prototype.includes.call(arrayLike2, 1));
// false



// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
const arru = [];
arr.push(1, [3, arru, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2
const arrayLike5 = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by join() since length is 3
};
console.log(Array.prototype.join.call(arrayLike5));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike5, "."));
// 2.3.4





// Array.prototype.keys()
// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.



const array12 = ['a', 'b', 'c'];
const iterator3 = array12.keys();

for (const key of iterator3) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
// Return value
// A new iterable iterator object.



// Examples
// Iteration using for...of loop
// Because values() returns an iterable iterator, you can use a for...of loop to iterate it.


const arrj = ["a", "b", "c", "d", "e"];
const iteratorion= arrj.values();

for (const letter of iteratorion) {
  console.log(letter);
} // "a" "b" "c" "d" "e"


// Iteration using next()
// Because the return value is also an iterator, you can directly call its next() method.


const arrk  = ["a", "b", "c", "d", "e"];
const iteratork = arr.values();
iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }
console.log(iterator.next().value); // undefined
// Reusing the iterable
// Warning: The array iterator object should be a one-time use object. Do not reuse it.
// The iterable returned from values() is not reusable. When next().done = true or currentIndex > length, the for...of loop ends, and further iterating it has no effect.
const arrm = ["a", "b", "c", "d", "e"];
const values7 = arr.values();
for (const letter of values7) {
  console.log(letter);
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter);
}
// undefined
// If you use a break statement to end the iteration early, the iterator can resume from the current position when continuing to iterate it.


const arrl = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}
// "a" "b"

for (const letter of values) {
  console.log(letter);
}
// "c" "d" "e"
//Mutations during iteration
// There are no values stored in the array iterator object returned from values(); instead, it stores the address of the array used in its creation, and reads the currently visited index on each iteration. Therefore, its iteration output depends on the value stored in that index at the time of stepping. If the values in the array changed, the array iterator object's values change too.

// JS
// Copy to Clipboard
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"


//Iterating sparse arrays
//values() will visit empty slots as if they are undefined.

for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
//Calling values() on non-array objects
//The values() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.


const arrayLiker = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignored by values() since length is 3
};
for (const entry of Array.prototype.values.call(arrayLiker)) {
  console.log(entry);
}
// a
// b
// c