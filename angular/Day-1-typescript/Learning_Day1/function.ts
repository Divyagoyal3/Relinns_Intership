// ffunction in ts is all same but it has great capablity to handle the return type which is shown as below:
// function Letsprint(print: number): void
function Letsprint(print :number)
{
    console.log(print);
}

// function Letsprintsecond(print: number): number
function Letsprintsecond(print :number) :number  //  <-return type tghis is optional if you donot specify the return type typescript will automatic detect
{
    return print;
}
let Numbertoprint : number = Letsprintsecond(2);
console.log(Numbertoprint);

// it is recommended to give return type specially when you are going to build an API


// error thrown  bad practice
// Type 'string' is not assignable to type 'number'
// function Letsprintsecondtwice(print :number) :number  //  <-return type tghis is optional if you donot specify the return type typescript will automatic detect
// {
//     return 'a';
// }
// Letsprintsecondtwice(3);



// error
// Function lacks ending return statement and return type does not include 'undefined'. and we specify return type number here.
// function calculateTax(income:number):number{
//     if(income>50000)
//     return income*1.5;
// }

function calculateTax(income:number,taxyear :number):any{
        if(income>50000)
        return income*1.5;
    return income*1.3;
    }

    // calculateTax(55000,2023,1); Expected 2 arguments, but got 3.
    calculateTax(55000,2023);

    function calculateTax2(income:number,taxyear =2022):any{
        if((taxyear  ||2022 )<2021)
        return income*1.5;
    return income*1.3;
    }
    
    calculateTax2(10_000);
    
    // we can check it by going to config file of setting option noimplicitreturn we have to exp;lict turn it on to not thrown an error


    //  nounuselocal setting when you donot use variable in the function
    function print (name:string)
    {
        // let x; 'x' is declared but its value is never read have any type
        console.log(name);
    }