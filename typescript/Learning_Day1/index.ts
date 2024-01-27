// typescript is programming language which is built on top of js 
// it is used to handle the code at compile tym not in runtime

let age1: number =10;
if(age1 <50)
age1 += 50;


// variables in typescript

let sale11s :number = 123_456_789;
let course12:string = 'Typescript';
let is_published11 : boolean = true;

//  in typescript you donot need to worry about the type 
let course11 ='fdjofi';
let level1; //any type variable

// function parameter passing

// Parameter 'documnet' implicitly has an 'any' type. Error
// function randerService (documnet)
// {
//     console.log(documnet)
// }


//explicit type parameter
function randerService1 (documnet:any)
{
    console.log(documnet)
}
//  day 1 with dhanur

//  arrays 

let arrayLearning : number[] = [1,2,3];

//  if you do like this it will throw an error to you

// Type 'number' is not assignable to type 'string'
// let printArray :string[] =['1','g',8];