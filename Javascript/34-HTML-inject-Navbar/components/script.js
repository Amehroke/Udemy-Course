
import computerObjectArray from "./data.js";
//Creating the content for the navbar
const navbar = `
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="products.html">Products</a></li>
`;

//Creating a variable for nav tag
const mainNav = document.createElement("nav"); // <nav></nav>
//Adding main-menu class to the nav tag
mainNav.classList.add("main-menu"); // <nav class="main-menu"></nav>

//Creating a variable for ul tag
const navList = document.createElement("ul"); // <ul></ul> 
//Injecting the navbar into the (navList) <ul></ul> 
navList.innerHTML = navbar; 
//Appending navList to mainNav
mainNav.append(navList);
//after Injecting 

// <nav class="main-menu">
//     <ul>
//         <li><a href="index.html">Home</a></li>
//         <li><a href="about.html">About</a></li>
//         <li><a href="contact.html">Contact</a></li>
//         <li><a href="services.html">Services</a></li>
//         <li><a href="products.html">Products</a></li>
//     </ul>
// </nav>

//Injecting the mainNav into the container
document.querySelector(".container").prepend(mainNav);

const content =  computerObjectArray.map( (computer) => {

    let computerArticle = document.createElement("div");
    computerArticle.classList.add("col-md-4"); //

    computerArticle.setAttribute("id", computer.id);

    computerArticle.innerHTML = `
        <article class="card">
            <img src= ${computer.image} alt="" class="card-img-top" width="100%" height="auto">
            <div class="card-body">
                <h5 class="card-title">${computer.name}</h5>
                <p class="card-text">Features</p>
                <ul>
                    <li class="feature feature_screen "><strong>Screen: </strong>${computer.screen}</li>
                    <li class="feature feature_ram "><strong>Memory: </strong>${computer.ram}</li>
                    <li class="feature feature_storage"><strong>Storage: </strong>${computer.storage}</li>
                    <li class="feature feature_wifi "><strong>Wi-Fi: </strong>${computer.wifi}</li>
                    <li class="feature feature_os "><strong>OS: </strong>${computer.os}</li>
                    <li class="feature feature_cpu "><strong>CPU: </strong>${computer.cpu}</li>
                </ul>
            </div>
        </article>
    `; 

    return computerArticle;

}); 

const main = document.getElementById("content_row");

content.forEach((computer) => {
    main.append(computer);
}); 


