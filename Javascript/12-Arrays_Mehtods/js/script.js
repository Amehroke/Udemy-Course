let computers = ["Desk", "Laptop", "Tablet"];
// console.log(computers.join()); // .join() method will join the array elements into a string

// console.log(computers.join(" - ")); // .join(" - ") method will join the array elements into a string separated by " - "
// console.log(computers.join(" | ")); // .join(" | ") method will join the array elements into a string separated by " | "

// computers.push("Smartphone", "iphone", "5"); // .push() method will add a new item to the end of the array
// console.log(".push(): ", computers);

// computers.unshift("Smartwatch", "Samsung"); // .unshift() method will add a new item to the beginning of the array
// console.log(".unshift(): ", computers);

// computers.shift(); // .shift() method will remove the first item from the array
// console.log(".shift(): ", computers);

// computers.pop(); // .pop() method will remove the last item from the array
// console.log(".pop(): ", computers);

// computers.forEach(function(item) {  // .forEach() method will loop through the array
//     item = `<li>${item}</li>`; 
//     console.log(item);
// }); 

let longlist = computers.find(function(item) { // .find() method will find the first item that matches the condition
    if(item.length >= 5) {
        return item;
    }
});

console.log("long-list: ", longlist);
console.log(computers);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// This is the link to the MDN documentation for the Array methods.