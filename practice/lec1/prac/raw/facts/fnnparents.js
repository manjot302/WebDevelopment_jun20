// function are variable
// pass a variable as a parameter to a function
function myfun(param){
    // console.log(param);
    console.log(param());
}
// myfun(10);
// myfun("bfcnfknffjv");
// myfun(true);
// myfun([1,2,3,4,5,6,7]);
// smaller function is call back function => a function that is passed to another function and could be called by it
myfun(function smallerfn(){
    let a=10;
    a++;
    console.log("I am function passes to myfun");
    return a;
})