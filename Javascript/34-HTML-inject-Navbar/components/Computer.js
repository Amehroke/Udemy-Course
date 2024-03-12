class computer {
    constructor(
        id,
        name,
        screen,
        ram,
        storage,
        wifi,
        os,
        cpu, 
        image
    ){
        this.id = id;
        this.name = name;
        this.screen = screen;
        this.ram = ram;
        this.storage = storage;
        this.os = os;
        this.wifi = wifi;
        this.cpu = cpu;
        this.image = image;
    }
}

export default computer;