// For best practice use: 
// "For each" loop for arrays 
//          and 
// "For in" loop for objects





//Types of Computers 
const computers = ["Desktop", "Laptop", "Server", "Mainframe", "Supercomputer"];

//List of Objects 
const objectList = {
    item01: { 
        type: "Desktop"
    }, 
    item02: { 
        type: "Laptop"
    },
    item03: { 
        type: "Server" 
    },
    item04: { 
        type: "Mainframe" 
    },
    item05: { 
        type: "Supercomputer"
    }
}
//Create Elements
const mainTag = document.querySelector("main"); //Select the main element
let undorderedlist = document.createElement("ul"); //Create an unordered list element

// // "For" loop to create list items
// for( let i = 0; i < computers.length; i++){ //Loop through the computers array
//     let listItem = document.createElement("li") //Create a list item element
//     listItem.innerText = computers[i]; //Add the computer name to the list item
//     undorderedlist.append(listItem);    //Append the list item to the unordered list
// }


//"For of" loop to create list items BEST PRACTICE
// for (const item of computers) {
//     let listItem = document.createElement("li") //Create a list item element
//     listItem.innerText = item; //Add the computer name to the list item
//     undorderedlist.append(listItem);    //Append the list item to the unordered list
// }

// //"For each" loop to create list items same as "For of" loop just wrapping function is changed
// computers.forEach(item => {
//     let listItem = document.createElement("li") //Create a list item element
//     listItem.innerText = item; //Add the computer name to the list item
//     undorderedlist.append(listItem);    //Append the list item to the unordered list
// });


// "For in" loop for objects
for (const singleObject in objectList) {
    let listItem = document.createElement("li") //Create a list item element
    listItem.innerHTML = `Name: ${objectList[singleObject].type}`; // We grab objectList/ singleObject/ .type
    undorderedlist.append(listItem);    //Append the list item to the unordered list
}


//Append the unordered list to the main element
mainTag.append(undorderedlist);

