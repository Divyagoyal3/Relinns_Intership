// callback function It is a function which is passed as an argument to another function.
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

// setTimeout

setTimeout(function() { myFunction1("  This is JS!!!"); }, 9000)

function myFunction1(value) {
  document.getElementById("demo2").innerHTML = value;
}



// callback hell
// The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed. It reduces code readability and maintenance. The callback hell situation typically occurs when dealing with asynchronous request operations, such as making multiple API requests or handling events with complex dependencies.

// To better understand the callback hell in JavaScript.

// JavaScript considers everything as an object, such as strings, arrays, and functions. Hence, the callback concept allows us to pass the function as an argument to another function. The callback function will complete the execution first, and the parent function will be executed later.

// The callback functions are executed asynchronously and allow code to continue running without waiting to complete the asynchronous task.


const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., fetching data, reading a file)
  const success = true; // Set to false for simulating a rejection

  if (success) {
    resolve("Operation completed successfully");
  } else {
    reject("Operation failed");
  }
});

// Accessing the state and result of the promise
myPromise
  .then((result) => {
    // Fulfilled state
    console.log("Fulfilled:", result);
  })
  .catch((error) => {
    // Rejected state
    console.error("Rejected:", error);
  });

// Alternatively, you can use the `finally` block to execute code regardless of the promise's state
myPromise.finally(() => {
  console.log("Promise completed, regardless of fulfillment or rejection");
});



// In JavaScript, promises come with several methods to handle asynchronous operations. Here are some common methods associated with promises:

// Promise.then(onFulfilled, onRejected):

// Attaches callbacks for the resolution and rejection of a promise. The onFulfilled callback is called when the promise is fulfilled, and the onRejected callback is called when the promise is rejected. Both callbacks are optional.

myPromise.then(
  (result) => {
    console.log("Fulfilled:", result);
  },
  (error) => {
    console.error("Rejected:", error);
  }
);
// Promise.catch(onRejected) or Promise.then(null, onRejected):

// Attaches a callback for only the rejection of a promise. This is a shorthand for handling rejections without having to provide an onFulfilled callback in the then method.

myPromise.catch((error) => {
  console.error("Rejected:", error);
});
// Promise.finally(onFinally):

// Attaches a callback that is executed regardless of whether the promise is fulfilled or rejected. This is useful for cleanup operations that need to be performed regardless of the promise's outcome.

myPromise.finally(() => {
  console.log("Promise completed, regardless of fulfillment or rejection");
});
// Promise.all(iterable):

// Takes an iterable (e.g., an array) of promises and returns a new promise that is fulfilled with an array of the fulfillment values of the input promises, in the same order. If any of the input promises is rejected, the resulting promise is rejected with the reason of the first rejected promise.

const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");

Promise.all([promise1, promise2])
  .then((values) => {
    console.log("All promises fulfilled:", values);
  })
  .catch((error) => {
    console.error("One of the promises was rejected:", error);
  });
// Promise.race(iterable):

// Takes an iterable of promises and returns a new promise that is settled (fulfilled or rejected) as soon as any of the input promises are settled. The resulting promise is settled with the same outcome as the first settled promise.

const promise3 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
const promise4 = new Promise((resolve) => setTimeout(() => resolve("Second"), 500));

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("The first promise to settle:", value);
  })
  .catch((error) => {
    console.error("This should not be called in this example");
  });
// These are some of the key methods associated with promises in JavaScript. They provide a powerful and flexible way to handle asynchro
// nous operations and manage the flow of asynchronous code.

 



async function myData(){
  try{
let API_URL="https://api.github.com/users/Divyagoyal3";
let data=await fetch(API_URL);
let apiData=await data.json();
console.log(apiData);
  }
  catch(err)
  {
      console.log(err);
  }
}
myData();
