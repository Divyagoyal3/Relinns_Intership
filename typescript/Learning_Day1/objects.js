// we can add or remove properties or change the content of properties as well in js but it is not allowed in typescrpit
//Property 'name' does not exist on type '{ id: number; }
// let employee ={id:1};
// employee.name ='Mosh';
var employee = { id: 1, name: "Divya" };
employee.name = "goyal";
console.log(employee.name);
// readonly properties
var employee2 = {
    id: 1,
    name: "Great",
    retire: function (date) {
        console.log(date);
    }
};
