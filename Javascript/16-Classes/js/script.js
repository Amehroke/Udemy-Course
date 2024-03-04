import Computer from "./Computer.js";
// This is a class that will be used to create computer objects

const laptop = new Computer("Macbook Pro", "Intel i7", "16GB", "512GB", "MacOS", true, "Retina", "100mbps", "500mbps");

console.log("The Macbook Laptop: ", laptop);
console.log("The Macbook OS: ", laptop.os);