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

    bands: {
        speed_wb_2_5g: 300,
        speed_wb_5g: 1000,
    }, 

    toggleWifi: function(wifi_status){  // method
        this.wifi = wifi_status; 
    }, 

    wifiBands: function(wb_2_5g, wb_5g){ // method
        this.bands.speed_wb_2_5g = wb_2_5g;
        this.bands.speed_wb_5g = wb_5g;
    }
};

console.log("Phone wifi Bands: ", phone.bands);
console.log("Phone wifi status: ", phone.wifi);

phone.wifiBands(500, 2000);
console.log("Phone wifi Bands after method: ", phone.bands);

phone.toggleWifi(false);
console.log("Phone wifi after method: ", phone.wifi);

