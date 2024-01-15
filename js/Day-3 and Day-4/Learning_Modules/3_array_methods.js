// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//1. concat()
const array1 = [2,3,4];
const array2 = [4,6,7];
const combinedArray = array1.concat(array2);
console.log(combinedArray);

// 2. every() return boolean value
const array3 = [2,4,5];
const result =  current => current<30;
console.log(array3.every(result));

//3. filter()
const words = ['spray','elite','destruction'];
const resultset = words.filter((word) =>words.length >6);
console.log(resultset);

// 4.flat() create new array with all the subarray concated to it.
//returns a new array with subarray
let array4 = [1,9,8,9,3];
console.log(array4.flat());
let array5 = [0,1,[2,[3]]];
console.log(array5.flat(3));

// 5. flatMap()/ Return type:A new array with each element being the result of the callback function and flattened by a depth of 1.
const array6 = [1,3,4];
const resultUpdated = array6.flatMap(num => num ==3 ?[3,4]:1);
console.log(resultUpdated);

// 6. foreach() return type is undefined
const array7 = [3,5,6];
array7.forEach(ele =>console.log(ele));

//7.indexOf() return index of array
const array8 = [1,3,8,6];
console.log(array8.indexOf(8));
console.log(array8.indexOf(6,2));
console.log(array8.indexOf(10));

//8.lastIndexOf()//The lastIndexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). NaN values are never compared as equal, 
//so lastIndexOf() always returns -1 when searchElement is NaN.

const  fruits =["apple","kiwi","mango"];
console.log(fruits.lastIndexOf("mango"));
const array9 = [NaN];
array9.lastIndexOf(NaN); // -1

//You cannot use lastIndexOf() to search for empty slots in sparse arrays.
console.log([1, , 3].lastIndexOf(undefined)); // -1

const numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2, 2)); // 0
console.log(numbers.lastIndexOf(2, -2)); // 0
console.log(numbers.lastIndexOf(2, -1)); // 3


// 9 . map() method
const arry = [1,2,3];
const num = arry.map(x =>x*2);
console.log(num); 
console.log(arry);

//10. reduce() method accumulate the element and give one value only
const array10 = [1,2,3,4,5];
const totalPrice = array10.reduce(function(accumulator,currentvalue)
  { return accumulator+currentvalue;
    },0);
    console.log(totalPrice);
    
    
//11. reveerse() method

const array11 = ['one', 'two', 'three'];
console.log('array1:', array11);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array11.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array11);
// Expected output: "array1:" Array ["three", "two", "one"]


// 12 push method
let email = [];
function allEmail(array11){
     
    array11.forEach((items)=>{
    // email.push(items.email) 
     console.log(items.email)
})
return email;
}


//array from()
function addOne() {
    return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3));


// 13 The Array.prototype.slice() method in JavaScript is used to extract a portion of an array and returns a new array containing the selected elements. It doesn't modify the original array; instead, it creates a shallow copy of the specified portion.
let originalArray = [1, 2, 3, 4, 5];

// Extract elements from index 1 to index 3 (not including 3)
 let slice1 = originalArray.slice(2);
  let slicedArray1 = originalArray.slice(-1, -3);
 let slicedArray2 = originalArray.slice(2,3);
console.log(slice1);
 console.log(slicedArray1); // Output: [2, 3]
console.log(slicedArray2);
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

//In this example, slice(1, 3) extracts elements from index 1 to index 2 (not including 3) from the originalArray, creating a new array (slicedArray) with the extracted elements.

//If no parameters are provided, slice() creates a shallow copy of the entire array:
let originalArray1 = [1, 2, 3, 4, 5];

let shallowCopy = originalArray1.slice();

console.log(shallowCopy); // Output: [1, 2, 3, 4, 5]
console.log(originalArray1); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)





//14.// The Array.prototype.some() method in JavaScript is used to test whether at least one element in the array passes the provided function. It returns a Boolean value indicating whether the callback function returns true for at least one element in the array. The method does not modify the original array.

// The syntax for some() is as follows

// array.some(callback(element[, index[, array]])[, thisArg]);
// callback: A function to test each element of the array. It takes three parameters: element (the current element being processed), index (the index of the current element), and array (the array some() was called upon).

// thisArg (optional): Object to use as this when executing the callback function.

// Here's an example of using some() to check if at least one element in an array is greater than 5:


let numbers8 = [1, 3, 5, 7, 9];

let isAtLeastOneGreaterThan52 = numbers8.some(function(element) {
  return element > 5;
});

console.log(isAtLeastOneGreaterThan52); // Output: true (because 7 and 9 are greater than 5)

let isAtLeastOneGreaterThan5 = numbers.some(element => element > 5);
// The some() method stops iterating through the array as soon as it finds an element for which the callback returns true. If no such element is found, it returns false.


let fruitsUpdates = ['banana', 'apple', 'orange', 'grape'];
fruitsUpdates.sort();

console.log(fruitsUpdates); // Output: ['apple', 'banana', 'grape', 'orange']

// In this example, the array is sorted alphabetically because the default comparison is based on string values.

// To sort numbers correctly, you can provide a compareFunction:
// The compareFunction should return a negative, zero, or positive value, depending on the desired sorting order. If compareFunction(a, b) returns a negative value, a comes before b; if it returns a positive value, a comes after b; and if it returns 0, no change in order.

// It's important to note that the sort() method sorts the array in place and modifies the original array. If you want to preserve the original array, you can create a copy before sorting:

let numbersone = [10, 5, 8, 2, 1];
numbersone.sort(function(a, b) {
  return a - b;
});

console.log(numbersone); // Output: [1, 2, 5, 8, 10]


//unchanged array
let originalArra = [10, 5, 8, 2, 1];
let sortedArray = [...originalArra].sort((a,b)=> a-b);
console.log(sortedArray); // Output: [1, 2, 5, 8, 10]
console.log(originalArra); // Output: [10, 5, 8, 2, 1] (original array remains unchanged)



//15./ The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. The basic syntax of the splice() method is as follows:


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
let removedElements2 = numbersUpdated.splice(1, 0, 'a', 'b');
let removedElements3 = numbersUpdated.splice(1, 2, 'a', 'b');

console.log(numbersUpdated);          // Output: [1, 'a', 'b', 4, 5]
console.log(removedElements2);// nothing i sbeing reomved
console.log(removedElements3); // Output: [2, 3]

// Example 3: Removing Elements at the End

let colors = ['red', 'green', 'blue'];

// Remove 1 element starting from the end of the array
let removedElements = colors.splice(-1, 1);

console.log(colors);          // Output: ['red', 'green']
console.log(removedElements); // Output: ['blue']
// The splice() method is versatile and allows you to modify an array by removing, replacing, or adding elements based on the specified parameters.

//16.// Here's the basic syntax:
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


let fruitsitems = ['apple', 'banana', 'cherry'];
let iterator = fruitsitems.entries();
let entriesArray = Array.from(iterator);

console.log(entriesArray);
// Output:
// [ [0, 'apple'], [1, 'banana'], [2, 'cherry'] ]


//17. fil() method
//  Array.prototype.fill() is a method in JavaScript that is used to fill all the elements of an array with a static value. It changes the elements of an array from a start index to an end index with a specified value.

// Here's the basic syntax:

// array.fill(value[, start[, end]])
// value: The value to fill the array elements with.
// start (optional): The index to start filling the array. If not specified, it starts from index 0.
// end (optional): The index to stop filling the array (not inclusive). If not specified, it fills the array until the end.
// Here's an example:

let array13 = [1, 2, 3, 4, 5];

// Fill the entire array with the value 0
array13.fill(0);
console.log(array13); // Output: [0, 0, 0, 0, 0]

// Fill a portion of the array with the value 10, starting from index 2 (inclusive) to index 4 (exclusive)
array13.fill(10, 2, 4);
console.log(array13); // Output: [0, 0, 10, 10, 0]
// Keep in mind that fill() modifies the original array in place and returns a reference to the modified array.


//18Array.prototype.find() is a method in JavaScript that is used to retrieve the first element in an array that satisfies a provided testing function. It returns the value of the first element in the array that satisfies the provided testing function, or undefined if no element satisfies the function.

// Here's the basic syntax:

// array.find(callback(element[, index[, array]])[, thisArg])
// callback: Function is called for each element in the array until it returns true, indicating that the desired element has been found.

// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array find was called upon.
// thisArg (optional): Object to use as this when executing the callback.

// // Here's an example:


let numbersitem = [1, 2, 3, 4, 5];

// Find the first element greater than 2
let resultsetUpdated = numbersitem.find(function(element) {
    return element > 2;
});

console.log(resultsetUpdated); // Output: 3
// In this example, the find method is used to locate the first element in the numbers array that is greater than 2.

// Keep in mind that find() stops iterating once it finds an element that satisfies the condition. If no element is found, it returns undefined.

// 19 .// Array.prototype.findIndex() is a method in JavaScript that is similar to Array.prototype.find(), but instead of returning the value of the first element that satisfies a provided testing function, it returns the index of that element. If no element satisfies the condition, it returns -1.

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


let numbersgreater = [1, 2, 3, 4, 5];

// Find the index of the first element greater than 2
let index = numbersgreater.findIndex(function(element) {
    return element > 2;
});

console.log(index); // Output: 2 (index of the element 3)
// In this example, the findIndex method is used to locate the index of the first element in the numbers array that is greater than 2.

// Similar to find(), findIndex() stops iterating once it finds an element that satisfies the condition. If no element is found, it returns -1.


//20.
// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
const array01 = [5, 12, 50, 130, 44];

const found = array01.findLast((element) => element > 45);

console.log(found);
// Expected output: 130

// 21.Array.prototype.findLastIndex()
// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// See also the findLast() method, which returns the value of last element that satisfies the testing function (rather than its index).

const array18 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array18.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130



//22. includes()


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


const arry6 = ["a", "b", "c"];

console.log(arry6.includes("c", 3)); // false
console.log(arry6.includes("c", 100)); // false

// Computed index is less than 0
// If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. If the computed index is less than or equal to 0, the entire array will be searched.

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
// 
const arry9 = ["a", "b", "c"];

console.log(arry9.includes("a", -100)); // true
console.log(arry9.includes("b", -100)); // true
console.log(arry9.includes("c", -100)); // true
console.log(arry9.includes("a", -2)); // false

let items =["1", "2", "3"]
 let resultofitems = items.includes(3);
console.log(resultofitems);


console.log([1, , 3].includes(undefined)); // true


//23. includes()
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

//24 . join() method 
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
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.join(";")); // 1;3,,4;2

//25 // Array.prototype.keys()
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



//26.. // Examples
// Iteration using for...of loop
// Because values() returns an iterable iterator, you can use a for...of loop to iterate it.


const arrj = ["a", "b", "c", "d", "e"];
const iteratorion= arrj.values();

for (const lette of iteratorion) {
  console.log(lette);
} // "a" "b" "c" "d" "e"


// Iteration using next()
// Because the return value is also an iterator, you can directly call its next() method.


const arrk  = ["a", "b", "c", "d", "e"];
const iteratork = arr.values();
iteratork.next(); // { value: "a", done: false }
iteratork.next(); // { value: "b", done: false }
iteratork.next(); // { value: "c", done: false }
iteratork.next(); // { value: "d", done: false }
iteratork.next(); // { value: "e", done: false }
iteratork.next(); // { value: undefined, done: true }
console.log(iteratork.next().value); // undefined


// Warning: The array iterator object should be a one-time use object. Do not reuse it.
// The iterable returned from values() is not reusable. When next().done = true or currentIndex > length, the for...of loop ends, and further iterating it has no effect.
const arrm = ["a", "b", "c", "d", "e"];
const values7 = arrm.values();
for (const letters of values7) {
  console.log(letters);
}
// "a" "b" "c" "d" "e"
for (const lettersr of values7) {
  console.log(lettersr);
}

//27. shift () method
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel


//28 pop() method
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]


//29. unshift() method
Array.prototype.unshift()
// The unshift() method of Array instances adds the specified elements to the
//  beginning of an array and returns the new length of the array.
const array00 = [1, 2, 3];

console.log(array00.unshift(4, 5));
// Expected output: 5

console.log(array00);
// Expected output: Array [4, 5, 1, 2, 3]

