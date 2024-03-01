//How to create an array
const my_desktop = [
    "apple",
    "Desk", 
    "Laptop", 
    "Tablet",
    "Smartphone",
    "Smartwatch",
    "Smart TV",
    "USB"
];
console.log("Original_array: ", my_desktop);

// Remove last item and return to console
console.log("This item will be removed: ", my_desktop.pop());
console.log("New_array: ", my_desktop);

// Move the last item to the beginning of the array
let last_item = my_desktop.pop();
console.log("Last_item moved to front: ", last_item);
my_desktop.unshift(last_item);
console.log("New_array: ", my_desktop);

//Sort item Alphabetically
console.log("Sorted_array Alphabetically: ", my_desktop.sort()); 
// capital letters come first in sorting
// That is why apple is in the end 

// Find a specific item in the array
let item_to_find = "Phone";
const item_found = my_desktop.find((something) =>  something === item_to_find) || "Item not found";
console.log("Item_found: ", item_found);

// Rempve a specific item from the array
let item_to_remove = "apple";
my_desktop.splice(my_desktop.indexOf(item_to_remove), 1);
console.log(`Item: ${item_to_remove} has been removed `, my_desktop);
