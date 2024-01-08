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
//The lastIndexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). NaN values are never compared as equal, so lastIndexOf() always returns -1 when searchElement is NaN.


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

//The Array.prototype.slice() method in JavaScript is used to extract a portion of an array and returns a new array containing the selected elements. It doesn't modify the original array; instead, it creates a shallow copy of the specified portion.
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

let isAtLeastOneGreaterThan5 = numbers8.some(function(element) {
  return element > 5;
});

console.log(isAtLeastOneGreaterThan5); // Output: true (because 7 and 9 are greater than 5)

let isAtLeastOneGreaterThan52 = numbers.some(element => element > 5);
// The some() method stops iterating through the array as soon as it finds an element for which the callback returns true. If no such element is found, it returns false.


const arr9 = [5,10,4,40];
let sorted = arr9.sort();
console.log(sorted);