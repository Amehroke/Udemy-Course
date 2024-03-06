import Computer from "./Computer.js";

const desktop = new Computer(
    "config01", 
    "Desktop",
    "hd",
    "16GB",
    "1TB",
    true,
    "Windows 10",
    "Intel i7",
    "img/lenovo.jpg"
); 

const laptop = new Computer(
    "config02",
    "Laptop",
    "1080p",
    "32GB",
    "2TB",
    true,
    "Windows 10",
    "Intel i9",
    "img/lenovo.jpg"
); 

const computerObjectArray = [desktop, laptop];

export default computerObjectArray;

