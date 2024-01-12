// callback function It is a function which is passed as an argument to another function.
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

// setTimeout

setTimeout(function() { myFunction1("  This is JS!!!"); }, 9000)

function myFunction1(value) {
  document.getElementById("demo2").innerHTML = value;
}



