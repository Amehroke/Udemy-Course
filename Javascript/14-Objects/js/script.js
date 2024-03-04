const desktop = { 
    screen: {
        resultion: "1920x1080",
        displayType: "LED",
        touchEnabled: false,
    },
    pointingDevice: "Wireless Mouse",
    ram: "32 GB",
    storage: "1 TB",
    wifi: false,
};

const laptop = {
    screen: {
        resultion: "1920x1080",
        displayType: "LED",
        touchEnabled: false,
    },
    pointingDevice: "Touchpad",
    ram: "16 GB",
    storage: "512 GB",
    wifi: true,
};

const phone = {
    screen: {
        resultion: "1920x1080",
        displayType: "OMOLED",
        touchEnabled: true,
    },
    pointingDevice: "Touchscreen",
    ram: "8 GB",
    storage: "256 GB",
    wifi: true,
};

//How to print the specific mobjects to the console

console.log("Desktop: ", desktop);
console.log("Laptop: ", laptop);
console.log("Phone: ", phone);

console.log("Desktop storage: ", desktop.storage);
console.log("Laptop storage: ", laptop.storage);
console.log("Phone storage: ", phone.storage);

console.log("Desktop screen resolution: ", desktop.screen.resultion);
console.log("Laptop screen resolution: ", laptop.screen.resultion);
console.log("Phone screen resolution: ", phone.screen.resultion);

var query = "ram";
console.log(`Desktop ${query}: `, desktop[query]);