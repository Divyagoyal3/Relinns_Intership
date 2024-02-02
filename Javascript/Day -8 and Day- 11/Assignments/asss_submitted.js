// Function 1

// Create 3 functions that takes an argument



function createdOrder(cart)

{

    let promiseCommit = new Promise((myResolveFirst,meRejectFirst)=>

    {

        if(cart === true)

        //promise will resolve with a message "resolved by 'function name'", if the passed argument is true

        {

            myResolveFirst("Resolved by createdOrder");   

        }

        else{

            myRejectFirst("Rejected by createdOrder");

        }

    })

    // function returns a promise

    return promiseCommit;  

}



// Function 2

function proceedToPay(cart)

{

    let promiseLogged = new Promise((myResolveSecond,myRejectSecond)=>

    {

        if(cart === true)

         //promise will resolve with a message "resolved by 'function name'", if the passed argument is true

        {

            myResolveSecond("Resolved by proceedToPay");

        }

        // The promise will reject with a message "rejected by 'function name'",if the passed argument is false

        else{

            myRejectSecond("Rejected by proceedToPay");

        }

    })

    // functions returns a promise

    return promiseLogged;

}



// Function 3

function showOrder(cart)

{

    let promised = new Promise((myResolveThird,meRejectThird)=>

    {

        if(cart === true)

         //promise will resolve with a message "resolved by 'function name'", if the passed argument is true

        {

            myResolveThird("Resolved by showOrder");

        }

        // The promise will reject with a message "rejected by 'function name'",if the passed argument is false

        else{

            myRejectThird("Rejected by showOrder");

        }

    })

    // functions returns a promise

    return promised;

}



// step 5

// Call all the functions parallelly and console the promise value.



//step 5.1

// 5.1 Case 1: Arguments passed to all functions are true

Promise.all([

createdOrder(true),

proceedToPay(true),

showOrder(true)]).then((resultSet)=>{

    console.log(resultSet)

}).catch((errorFirst)=>{

    console.log(errorFirst);

})



//step 5.2

// 5.2 Case 2: Arguments passed to 2nd functions is false 

Promise.all([createdOrder(true),

proceedToPay(false),

showOrder(true)]).then((resultAppeared)=>{

    console.log(resultAppeared)

}).catch((errorSecond)=>{

    console.log(errorSecond);

})





//promise chaining

// Call all the functions in sequence by promise chaining and console the promise value.

// step 6.1

// 6.1 Case 1: Arguments passed to all functions are true

createdOrder(true)

.then(resultAppearedSecond => proceedToPay(true))

.then(resultAppearedThird => showOrder(true))

.then(resultPrinted =>{

    console.log(resultPrinted);

})

.catch((errorThird)=>{

    console.log(errorThird)

})



 //step 6.2

//  6.2 Case 2: Arguments passed to 2nd functions is false 

createdOrder(true)

.then(resultLoggedFirst => proceedToPay(false))

.then(resulLoggedThird => showOrder(true))

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

        let resultSetFirst = await createdOrder(true);

        let resultSetSecond = await proceedToPay(true);

        let resultSetThird = await showOrder(true);

        console.log(resultSetThird);

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

        let resultSetFirst = await createdOrder(true);

        let resultSetSecond = await proceedToPay(false);

        let resultSetThird = await showOrder(true);

        console.log(resultSetThird);

    }

    catch(error)

    {

        console.log(error);

    }

}

asyncHandleSecond();