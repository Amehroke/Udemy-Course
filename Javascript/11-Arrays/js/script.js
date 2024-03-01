let item = "Laptop";

const my_collection = ["Desktop", item, 5, true];

console.log(my_collection);
console.log("Length: ", my_collection.length);
console.log("Item[1]: ", my_collection[1]); // access the second item

my_collection[1] = "Tablet"; // change the value of the second item
console.log("Item[1]: ", my_collection[1]); 

my_collection[4] = "Smartphone"; // add a new item
console.log(my_collection);

my_collection[my_collection.length] = "Smartwatch"; // add a new item
console.log(my_collection);

my_collection[9] = "Smart TV"; // This will add 4 empty items then add the new item
console.log(my_collection);
console.log("Length: ", my_collection.length); // 10
