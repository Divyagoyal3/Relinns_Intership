// The rest operator in JavaScript is represented by three dots (...). It allows you to represent an indefinite number of arguments as an array. The rest parameter syntax is used when defining a function and allows you to capture the remaining parameters into a single array parameter.





// Using the rest operator in a function
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// In this example, the ...numbers syntax in the function parameter captures all the arguments passed to the sum function into an array called numbers. The function then uses reduce to sum up all the values in the array.

// You can also use the rest operator in destructuring assignments to capture the remaining elements of an array:


const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
// In this example, ...rest captures the remaining elements of the array into a new array called rest.

// The rest operator provides a convenient way to work with variable numbers of arguments in functions or capture remaining elements in arrays.