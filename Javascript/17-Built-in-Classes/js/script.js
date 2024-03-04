import Computer from "./Computer.js";
// This is a class that will be used to create computer objects

const laptop = new Computer(
    "Macbook Pro", 
    "Intel i7", 
    "16GB", 
    "512GB", 
    "MacOS", 
    true, 
    "Retina", 
    "100mbps", 
    "500mbps",
    "Sun Mar 01 2024 08:53:13 GMT-0800 (Pacific Standard Time)"

);

console.log("The Macbook Laptop: ", laptop);
console.log("The Macbook OS: ", laptop.os);
console.log("The Laptop Purchase Date: ", laptop.datePurchased);
console.log("The Laptop Age: ", laptop.computerAge(), "Days Old");