
import computerObjectArray from "./data.js";

//Enter these in the console log of the live server to see the output

// Manipulating Classes
//------------------------

// //Legacy methods for selecting elements
// document.getElementById("title");
// document.getElementsByClassName("navbar-brand");

// //Modern methods for selecting elements by class and changing the text to "Computer Store"
// document.querySelector("title").className = "Computer Store";

// //Selecting the element by class and adding a class Home to it
// document.querySelector("#config ul li:first-child").classList.add("Home");

// //Selecting the element by class and removing the class Home from it
// document.querySelector("#config ul li:first-child").classList.remove("Home");

// //Selecting the element by class and replacing the class Home with Home2
// document.querySelector("#config ul li:first-child").classList.replace("Home", "Home2");
// //classList is the best way to manipulate classes in the DOM 


// Manipulating Attributes 
//------------------------
// // This shows all the attributes of the first image in the document
// document.querySelector("img").attributes

// // This checks if the first image in the document has the src attribute
// document.querySelector("img").hasAttribute("src")

// // This gets the value of the src attribute 
// document.querySelector("img").getAttribute("src")
// // output: 'img/lenovo.jpg'

// // This sets the value of the src attribute to "Image"
// document.querySelector("img").setAttribute("src", "Image");

// // This sets first h5 background color to red. Way of edidting styles in js 
// document.querySelector("h5").style.backgroundColor = "red"



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


