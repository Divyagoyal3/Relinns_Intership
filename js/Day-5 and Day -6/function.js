// function sum(a,b)
{
    console.log("sum of two numbers");
    return a+b;
}
let add = sum(2,3);
console.log(add);

const print = () =>{
    console.log("hello");
     return "thanks";
    
}
print();

// The function* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.
// The yield operator is used to pause and resume a generator function.
// You can also define generator functions using the function* expression
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20

// arrow function
// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions.

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]


// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};


// const func = () => { foo: 1 };
// // Calling func() returns undefined!

// const func2 = () => { foo: function () {} };
// // SyntaxError: function statement requires a name

// const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'


function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

console.log(foo(3)); // 3 + 3 = 6


// call function
// The call() method of Function instances calls this function with a given this value and arguments provided individually.
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    // this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // Expected output: "cheese"


//   The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.
const module = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // Expected output: 42


//   apply()
// The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2


// tostring()
// The toString() method of Function instances returns a string representing the source code of this function.
function sum(a, b) {
    return a + b;
  }
  
  console.log(sum.toString());
  // Expected output: "function sum(a, b) {
  //                     return a + b;
  //                   }"
  
  console.log(Math.abs.toString());
  // Expected output: "function abs() { [native code] }"