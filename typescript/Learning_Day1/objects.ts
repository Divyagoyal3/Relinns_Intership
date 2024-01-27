// we can add or remove properties or change the content of properties as well in js but it is not allowed in typescrpit

//Property 'name' does not exist on type '{ id: number; }
// let employee ={id:1};
// employee.name ='Mosh';

let employee :{
    id:number;
    name :string;  // you can also give name to optional like this name? : string
}= {id :1 ,name :"Divya"};
employee.name ="goyal";
console.log(employee.name);

// readonly properties

let employee2 :{
    readonly id :number,
    name:string,
    retire:(date:Date)=> void
} = {
    id:1,
    name:"Great",
    retire:(date :Date) =>{
        console.log(date);
    }
}