// interfaces are used to define the data type of properties we cannnot define the data type to class or object

interface userType {
    name:string,
    age:number,
    getName:()=>string;
}
let usersprint : userType ={
    name : "Divya",
    age :23,
    getName : function() {
        return "Divya Goyal";
    }
}

console.warn(usersprint.name);
console.log(usersprint.getName());