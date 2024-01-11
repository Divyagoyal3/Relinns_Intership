console.log('Chaliye shuru karte hai ');

//object create
let rectangle1 = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};

//factory function 

function createRectangle(len, bre) {

    const rectangle2 = {
        length: len,
        breadth:bre ,

        draw() {
            console.log('drawing rectangle');
        }
    };
    return rectangle2;
}

let rectangleObj1 = createRectangle(5, 4);
let rectangle21 = createRectangle(2,3);
let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw= function() {
        console.log('drawing');
    }
}

// Rectangle.

// //object creation using constrcutor function
let rectangleObject = new Rectangle(4,6);


// Dynamic binding of object
rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

let Rectangle1 = new Function(
    'length', 'breadth',
`this.length = length;
this.breadth = breadth;
this.draw= function() {
    console.log('drawing');
}`);

// //object creation using Rectangle1
let rect = new Rectangle1(2,3);

rect.length;

console.log(rect);


rectangle.length;
rectangle.breadth;

rectangle.draw();

let rectangle11 = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};


let rectangle22 = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};

//   call by value 
let a = 10;
let b = a;

a++;
console.log(a);
console.log(b);

// call by reference
let c= { value: 10};
let d = c;

a.value++;

console.log(a.value);
console.log(b.value);

let e = 10;

function inc(e) {
    e++;
}

inc(e);

console.log(e);

let f = {value:10 };

function inc(f) {
    f.value++;
}

inc(f);

console.log(f.value);

let rectangle = {
    length:2,
    breadth:4
};

//for-in loop 
for(let key in rectangle ) {
    //keys are reflected through key variable 
    //values are reflected through rectangle[key]
    console.log(key,rectangle[key]);
}

//for-of loop
for(let key of Object.entries(rectangle)) {
    console.log(key);
}
// check particular property exist or not

if('length' in rectangle) {
    console.log('Present');
}
else {
    console.log('Absent');
}


//object - colone #1
let src = {
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in src) {
    dest[key] = src[key];
}

console.log(dest);

src.a++;
console.log(dest);

//Object Cloning #2
let src23 = {
    a2:10,
    b2:20,
    c2:30
};

let src2 = { value: 25};

let dest1 = Object.assign({}, src23, src2);

console.log(dest1);

src23.a++;

console.log(dest1);

//Object Cloning #3
let src3 = {
    a: 10,
    b:20,
    c:30
};

let dest3 = {...src3};

console.log(dest3);

src3.a++;

console.log(dest3);
