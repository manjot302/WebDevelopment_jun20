function getFirstName(fullName){
    return fullName.split(" ")[0];
}
function getLastName(fullName){
    return fullName.split(" ")[1];
}

// hof => that accept a function and calls it internally
function greeter(data, cb){
    let message = cb(data);                    // here data is fullName
    console.log("Hi " + message);
}

// let rVal = getFirstName("Manjot Singh");
// rVal = getLastName("Manjot Singh")
// console.log(rVal)
greeter("Manjot Singh",getFirstName);

greeter("Manjot Singh",getLastName);