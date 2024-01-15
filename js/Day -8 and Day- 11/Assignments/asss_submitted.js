// Function 1
// Create 3 functions that takes an argument

function createdFunction1 (first)
{
    let promise1 = new Promise((myResolve1,meReject1)=>
    {
        if(first === true)
        //promise will resolve with a message "resolved by 'function name'", if the passed argument is true
        {
            myResolve1("Resolved by createdFunction1");   
        }
        else{
            myReject1("Rejected by createdFunction1");
        }
    })
    // function returns a promise
    return promise1;  
}

// Function 2
function createdFunction2 (second)
{
    let promise2 = new Promise((myResolve2,myReject2)=>
    {
        if(second === true)
         //promise will resolve with a message "resolved by 'function name'", if the passed argument is true
        {
            myResolve2("Resolved by createdFunction2");
        }
        // The promise will reject with a message "rejected by 'function name'",if the passed argument is false
        else{
            myReject2("Rejected by createdFunction2");
        }
    })
    // functions returns a promise
    return promise2;
}

// Function 3
function createdFunction3 (third)
{
    let promise3 = new Promise((myResolve3,meReject3)=>
    {
        if(third === true)
         //promise will resolve with a message "resolved by 'function name'", if the passed argument is true
        {
            myResolve3("Resolved by createdFunction3");
        }
        // The promise will reject with a message "rejected by 'function name'",if the passed argument is false
        else{
            myReject3("Rejected by createdFunction3");
        }
    })
    // functions returns a promise
    return promise3;
}

// step 5
// Call all the functions parallelly and console the promise value.

//step 5.1
// 5.1 Case 1: Arguments passed to all functions are true
Promise.all([
createdFunction1(true),
createdFunction2(true),
createdFunction3(true)]).then((resultSet)=>{
    console.log(resultSet)
}).catch((errorFirst)=>{
    console.log(errorFirst);
})

//step 5.2
// 5.2 Case 2: Arguments passed to 2nd functions is false 
Promise.all([createdFunction1(true),
createdFunction2(false),
createdFunction3(true)]).then((resultAppeared)=>{
    console.log(resultAppeared)
}).catch((errorSecond)=>{
    console.log(errorSecond);
})


//promise chaining
// Call all the functions in sequence by promise chaining and console the promise value.
// step 6.1
// 6.1 Case 1: Arguments passed to all functions are true
createdFunction1(true)
.then(resultAppeared2 => createdFunction2(true))
.then(resultAppeared3 => createdFunction3(true))
.then(resultPrinted =>{
    console.log(resultPrinted);
})
.catch((errorThird)=>{
    console.log(errorThird)
})

 //step 6.2
//  6.2 Case 2: Arguments passed to 2nd functions is false 
createdFunction1(true)
.then(resultLogged2 => createdFunction2(false))
.then(resulLogged3 => createdFunction3(true))
.then(resultLogged =>{
    console.log(resultLogged);
})
.catch((errorFourth)=>{
    console.log(errorFourth)
})



// step 7
// Call all the functions in sequence by async await and console the promise value.
// step 7.1
// 7.1 Case 1: Arguments passed to all functions are true
async function asyncHandleFirst()
{
    try{
        let resultSet1 = await createdFunction1(true);
        let resultSet2 = await createdFunction2(true);
        let resultSet3 = await createdFunction3(true);
        console.log(resultSet3);
    }
    catch(error)
    {
        console.log(error);
    }
}
asyncHandleFirst();


// step 7.2
// 7.2 Case 2: Arguments passed to 2nd functions is false 

async function asyncHandleSecond()
{
    try{
        let resultSet1 = await createdFunction1(true);
        let resultSet2 = await createdFunction2(false);
        let resultSet3 = await createdFunction3(true);
        console.log(resultSet3);
    }
    catch(error)
    {
        console.log(error);
    }
}
asyncHandleSecond();
