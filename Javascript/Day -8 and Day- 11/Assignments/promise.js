let promiseCall11 = new Promise((myresolve,myreject)=>{
         
    setTimeout(()=>{
        console.log("Printed accordingly");
    },4000);
    myresolve("Success");

})



let promiseCall21 = new Promise((myresolve,myreject)=>{

    setTimeout(()=>{
        console.log("Printed accordingly ff");
    },4000);
    myresolve("Success ff" );


})

promiseCall11.then((result) =>{
console.log("Print the statements");

})
.catch((error) =>{
console.log("Error");
})
.finally((result)=>{
console.log("Promise compeleted");
})

// Print the statements
// Promise compeleted
// Printed accordingly
// Printed accordingly ff


let promiseCall = new Promise((myresolve,myreject)=>{
         
    setTimeout(()=>{
        console.log("Printed accordingly");
        myresolve("Success");
    },4000);
    

})



let promiseCall2 = new Promise((myresolve,myreject)=>{

    setTimeout(()=>{
        console.log("Printed accordingly ff");
           myresolve("Success ff" );
    },4000);
 


})

promiseCall.then((result) =>{
console.log("Print the statements");

})
.catch((error) =>{
console.log("Error");
})
.finally((result)=>{
console.log("Promise compeleted");
})

// Printed accordingly
// Print the statements
// Promise compeleted
// Printed accordingly ff