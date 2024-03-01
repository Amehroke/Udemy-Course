/**
 * var is function-scoped, meaning that when a 
 * variable is declared using var inside a function, 
 * it is only accessible within that function.
 */


var x = 'red';

console.log(x);

function change_to_blue() {
    if (true) {
        var x = 'blue';
        console.log("Inside the if function: " + x);
    }

    console.log("Outside the if function: " + x);
}

change_to_blue();

console.log(x);