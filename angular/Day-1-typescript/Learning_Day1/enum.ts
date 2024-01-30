//  enum is used to define your own data type
// like you can create your own variable one by one but it becomes very tedious to do so if have the power of enum
// sizes
const small =12;
const medium = 30;
const large =35;

enum size {small =12, medium=30,large=35};
let mySize :size =size.medium;
console.log(mySize);