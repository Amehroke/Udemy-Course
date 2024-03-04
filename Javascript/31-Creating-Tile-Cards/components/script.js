
import computerObjectArray from "./data.js";

const content =  computerObjectArray.map( (computer) => {

    let computerArticle = document.createElement("article");
    computerArticle.classList.add("computer");

    computerArticle.setAttribute("id", computer.id);

    computerArticle.innerHTML = `
        <figure class = "computer_image">
            <img src =${computer.image} alt ="" loading = "lazy">
        </figure>
        <h3 class = "computer_name">${computer.name}</h3>
        <ul class = "computer_specs">
            <li class = "features processor">Processor: ${computer.cpu}</li>
            <li class = "features ram">RAM: ${computer.ram} GB</li>
            <li class = "features storage">Storage: ${computer.storage} GB</li>
            <li class = "features os">Operating System: ${computer.os}</li>
            <li class = "features wifi">${computer.wifi ? "Wifi is Avaliable" : "Wifi is not Avaliable"}</li>
            <li class = "features monitor">Monitor: ${computer.screen}</li>
        </ul>
    `; 

    return computerArticle;

}); 

const main = document.querySelector("main");

content.forEach((computer) => {
    main.append(computer);
}); 


