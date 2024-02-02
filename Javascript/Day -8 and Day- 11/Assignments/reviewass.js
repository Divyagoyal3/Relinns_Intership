// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
   for(let i of library)
   
   {
       console.log(i.author);
       console.log(i.title);
       console.log(i.readingStatuts);
    }
  
  
 function shoppingSpree(arr) {
     const total = arr.reduce(function(accumulator, currentValue) {
     return accumulator + currentValue.price;
   }, 0);
   return total;
   }
  var print = [
       { title: "Tesla Model S", price: 900 },
       { title: "4 carat diamond ring", price: 100 },
       
   ];
   console.log(shoppingSpree(print));