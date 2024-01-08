1. 

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
let fruits_updated = fruits.splice(1,2);

console.log(fruits_updated); // [ "Orange" , Apple" ]

console.log(fruits);  //[ "Banana", "Kiwi"]

2.

function removeFruit(arr, fruitToRemove) 

{ 

 const indexToRemove = arr.indexOf(fruitToRemove); 

 if (indexToRemove !== -1) 

{ // The fruit exists in the array, remove it 

 arr.splice(indexToRemove, 1);

 } 

return  arr;

}


const fruitToRemove = "Kiwi"; 

const updatedFruits = removeFruit(fruits, fruitToRemove);

