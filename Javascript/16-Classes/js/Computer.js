// This is a class that will be used to create computer objects

class Computer {
    constructor(name, processor, ram, storage, os, wifi, monitor, wifiBand2g, wifiBand5g) {
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
    }

    toggleWifi(wifiStatus) {
        this.wifi = wifiStatus;
    }

    newWifiSpeed(upgrade2g, upgrade5g) {
        this.wifiBand2g = upgrade2g;
        this.wifiBand5g = upgrade5g;
    }
}

export default Computer;