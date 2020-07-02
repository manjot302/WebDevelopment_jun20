console.log("Hello All :)");       // for print any thing we use this.

// variable declare by let 
let varName;
// dynamically typed language
varName = 10;
console.log(varName);
// to run the file => node fileName/intro.js

// syntax => java, for while, if, cases

let number = 21;
for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) {
        console.log("Number is not prime");
        return;
    }
}
console.log("Number is prime");