//1. #approach 1:

let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

function checkArray(arr)

{

     for(let i = 0 ; i<arr.length ; i++)

     {

         if(arr[i] == 14)

         {

             return true;

         }

         else

         {

             return false;

         }

     }

}

//1 . #approach 2:

console.log(array.includes(14));

2.

//#approach 1:

const resultSet  = array.every((x) => x > 80);
console.log(resultSet);

//#approach 2:
//let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

   
function checkArray(arr)
    {
        for(i of arr)
        {
            if(i<80) return false;
        }
        return true;
    }
    console.log(checkArray(array));

