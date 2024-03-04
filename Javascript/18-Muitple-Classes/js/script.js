import Computer from "./Computer.js";

const desktop = new Computer(
    "Dell", 
    "Intel i5", 
    "8GB", 
    "1TB", 
    "Windows", 
    true, 
    "LED", 
    "100mbps", 
    "500mbps",
    "Sun Dec 01 2023 08:53:13 GMT-0800 (Pacific Standard Time)"
);

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

console.log("Desktop PC: ", desktop);
console.log("Desktop Purchase Date: ", desktop.datePurchased);

console.log("Laptop: ", laptop);
console.log("Laptop Purchase Date: ", laptop.datePurchased);
