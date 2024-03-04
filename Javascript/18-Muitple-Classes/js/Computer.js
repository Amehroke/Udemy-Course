// This is a class that will be used to create computer objects

class Computer {
    constructor(
        //Parameters
        name, 
        processor, 
        ram, 
        storage, 
        os, 
        wifi, 
        monitor,
        wifiBand2g, 
        wifiBand5g, 
        datePurchased,  
    ) {
        //Properties
        this.name = name;
        this.cpu = processor;
        this.ram = ram;
        this.storage = storage;
        this.os = os;
        this.wifi = wifi;
        this.monitor = monitor;
        this.wifiSpeed = { 
            lowspeed: wifiBand2g,
            highspeed: wifiBand5g
        }
        this.datePurchased = datePurchased;
    }

    toggleWifi(wifiStatus) {
        this.wifi = wifiStatus;
    }

    newWifiSpeed(upgrade2g, upgrade5g) {
        this.wifiBand2g = upgrade2g;
        this.wifiBand5g = upgrade5g;
    }

    computerAge(){
        let now = new Date(); // this is a built-in date object
        let aquired = new Date(this.datePurchased);
        let elapsed = now - aquired;
        let age = Math.floor(elapsed / (1000 * 60 * 60 * 24)); // Math is a built-in object
        return age; 
    }
}

export default Computer;