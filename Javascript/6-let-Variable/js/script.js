
/**
 * let is block-scoped, meaning that when a variable 
 * is declared using let within a block (for example, 
 * within an if statement or a for loop), 
 * it can only be accessed within that block.
*/



let x = 'red';

console.log(x);

function change_to_blue() {
    if (true) {
        let inside_x = 'blue';
        console.log("Inside the if function: " + inside_x);
    }

    console.log("Outside the if function: " + inside_x); // error here
}

change_to_blue();

console.log(x);