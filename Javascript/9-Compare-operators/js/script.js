
/**
 * == (equality operator),
 * converting values of different types to a common type 
 * before comparison
 * 
 * a = 5
 * b = "5"
 * a == b // true
*/

/**
 * === (strict equality operator) does not perform type conversion 
 * and compares both the value and type of operands. 
 * 
 * a = 5
 * b = "5"
 * a === b // false
 */


let a = 5; 
let b = "5"; 
let c =  7; 

console.log("let a: ", a, typeof(a));
console.log("let b: ", b, typeof(b));

if(a === b){
    console.log("Match: a and b are equal");
}else{
    console.error("No Match: a and b are not equal"); 
}

if(a > c){
    console.log("a is greater than b");
}else{
    console.error("a is not greater than b");
}

if(a != b){
    console.log("a is not equal to b");
}