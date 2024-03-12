
import computerObjectArray from "./data.js";

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
                    <li class="feature feature_wifi "><strong>Wi-Fi: </strong><span class="wifi_toggle">${computer.wifi ? "Avaliable" : "Not Avaliable"}</span></li>
                    <li class="feature feature_os "><strong>OS: </strong>${computer.os}</li>
                    <li class="feature feature_cpu "><strong>CPU: </strong>${computer.cpu}</li>
                </ul>
                <button class="wifi-button">Toggle Wifi</button>
            </div>
        </article>
    `; 

    // Event Listener

    //Variable stores the button element
    const button = computerArticle.querySelector(".wifi-button");
    //Variable stores the span element
    const status = computerArticle.querySelector(".wifi_toggle");

    //Event listener for the button on click
    button.addEventListener("click", (event) =>{
        console.log(event);
        //If the status is avaliable = true, then change the status inner text to not avaliable else change it to avaliable
        status.innerText === "Avaliable" ? status.innerText = "Not Avaliable" : status.innerText = "Avaliable";

    });

    return computerArticle;
}); 

const main = document.getElementById("content_row");

content.forEach((computer) => {
    main.append(computer);
}); 


