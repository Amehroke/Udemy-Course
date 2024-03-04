//Types of Computers 
const computers = ["Desktop", "Laptop", "Server", "Mainframe", "Supercomputer"];


//Create Elements
const mainTag = document.querySelector("main"); //Select the main element
let undorderedlist = document.createElement("ul"); //Create an unordered list element

//Map Mehtod this recreates the array and returns a new array that is modified to show more info
const computersType = computers.map((item) => {
    let listItem = document.createElement("li") //Create a list item element
    listItem.innerText = item; //Add the computer name to the list item
    return listItem;
}); 

console.log(computers);
console.log(computersType);


computersType.forEach( (item) => {
    undorderedlist.append(item);    //Append the list item to the unordered list
});

//Append the unordered list to the main element
mainTag.append(undorderedlist);

