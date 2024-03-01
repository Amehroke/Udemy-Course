
/**
 *The const is similar to let. However const 
 *is immutable and cannot be reassigned
*/



const x = 'red';
x = 'light blue'; //error 

function change_to_blue() {

    let inside_x = 'blue';
    console.log("Inside the if function: " + inside_x);
}

change_to_blue();

console.log(x);