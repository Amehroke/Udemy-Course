// The Laptop Object 
const lenovoLaptop = { 
    name: "Lenovo Thinkpad",
    color: "Black",
    ram: "8",
    storage: "256",
}

// Create a new Html element with Function
const addlaptop = function(currentLaptop){
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h2>${currentLaptop.name}</h2>
        <p>Details are as below:</p>
        <ul>
            <li>Color: ${currentLaptop.color}</li>
            <li>RAM: ${currentLaptop.ram} GB</li>
            <li>Storage: ${currentLaptop.storage} GB</li>
        </ul>
    `;

    return newArticle;
}; 

// Call the function and pass the object as an argument
const theArticle = addlaptop(lenovoLaptop);
console.log(theArticle);

// Append the new element to the main element
const main = document.querySelector("main");
main.append(theArticle);