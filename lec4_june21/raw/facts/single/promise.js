let fs=require("fs");
console.log("Before");
// you don't need to pass any cb
let fileWillReadPromise = fs.promises.readFile("f1.txt");
// start => pending
confirm.log(fileWillReadPromise);
// when promise resolvesto a value
fileWillReadPromise.then(function(data){
    console.log("Inside then");
    console.log(data);
})
fileWillReadPromise.catch(function(err){
    console.log("Inside each block")
})