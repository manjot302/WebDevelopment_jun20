function sayHi(message) {
    console.log("I want to say " + message);
    return 10;
}
let rVal = sayHi("Something interesting");
console.log(rVal);
// function name
console.log(sayHi);

// functions are first class citizens
// finctions are variables

let greeter = function stat(){
    console.log("functions are variables");
}
greeter();