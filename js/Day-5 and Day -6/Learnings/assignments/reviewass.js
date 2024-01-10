const str4 =  "   hello a"; 
const trimed1 = str4.trim();
const arr = trimed1.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
console.log(str2);



// Hello A