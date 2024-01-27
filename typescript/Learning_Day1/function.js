// ffunction in ts is all same but it has great capablity to handle the return type which is shown as below:
// function Letsprint(print: number): void
function Letsprint(print) {
    console.log(print);
}
// function Letsprintsecond(print: number): number
function Letsprintsecond(print) {
    return print;
}
var Numbertoprint = Letsprintsecond(2);
console.log(Numbertoprint);
// it is recommended to give return type specially when you are going to build an API
