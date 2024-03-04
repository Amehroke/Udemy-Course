import Computer from "./Computer.js";

const laptop = new Computer(
    "Lenovo",
    "Intel i5",
    "8",
    "256",
    "Windows 10",
    true,
    "HD monitor",
    "300",
    "1500",
    "img/lenovo.jpg"
)

const content = `
    <figure class = "computer_image">
        <img src =${laptop.img} loading = "lazy" width = "250px" height = "auto">
    </figure>
    <h1 class = "computer_name">${laptop.name}</h1>
    <ul class = "computer_specs">
        <li class = "features processor">Processor: ${laptop.processor}</li>
        <li class = "features ram">RAM: ${laptop.ram} GB</li>
        <li class = "features storage">Storage: ${laptop.storage} GB</li>
        <li class = "features os">Operating System: ${laptop.os}</li>
        <li class = "features wifi">${laptop.wifi ? "Wifi is Avaliable" : "Wifi is not Avaliable"}</li>
        <li class = "features monitor">Monitor: ${laptop.monitor}</li>
        <li class = "features wifi_speed">2.4G Wifi: ${laptop.wifiSpeed.lowspeed}</li>
        <li class = "features wifi_speed">5G Wifi: ${laptop.wifiSpeed.highspeed} Mbps</li>
    </ul>
`;



const newArticle = document.createElement("article"); //Create article element
newArticle.classList.add("computer");               //Add class to the article
newArticle.setAttribute("id", "laptop");           //Add id to the article
newArticle.innerHTML = content;                    //Add content to the article

const main = document.querySelector("main");      //Select the main element
main.append(newArticle);                         //Append the article to the main element

console.log(content);



//Example of logical operators

if(laptop.ram > 16){ 
    console.log("This laptop is a beast");
}
else if(laptop.ram >= 8){
    console.log("This laptop is good");
}
else{
    console.log("This laptop is not good");
}


if (laptop.storage > 512){
    console.log("This laptop has a lot of storage");
}
else if (laptop.storage >= 256){
    console.log("This laptop has a low amount of storage");
}
