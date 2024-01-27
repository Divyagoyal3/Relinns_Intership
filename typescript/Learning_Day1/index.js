// typescript is programming language which is built on top of js 
// it is used to handle the code at compile tym not in runtime
var age = 10;
if (age < 50)
    age += 50;
// variables in typescript
var sales = 123456789;
var course = 'Typescript';
var is_published = true;
//  in typescript you donot need to worry about the type 
var course1 = 'fdjofi';
var level; //any type variable



console.log(course1);
// function parameter passing
// Parameter 'documnet' implicitly has an 'any' type. Error
// function randerService (documnet)
// {
//     console.log(documnet)
// }
//explicit type parameter
function randerService(documnet) {
    console.log(documnet);
}
