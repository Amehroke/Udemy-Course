//Function Declaration (Global Scope)
function doAddition (a, b) {
    let c = a + b; 
    return c;
}

//Function Expression (Local Scope)
const doMultiplication = function(a, b) {
    let c = a * b;
    return c;
}

console.log("Data from Function declaration: ", doAddition(25, 35));
console.log("Data from Function Expression: ", doMultiplication(5, 5));

//Immediately Invoked Function Expression (IIFE) 
// is called automatically, but functions inside need to be called manually before hand
(function(){
    let a = 5;
    let b = 5;
    let result = doAddition(a, b);
    console.log(`Data from IIFE: ${result}`);
})();

