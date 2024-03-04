window.wifiSpeed = 200; 

const myLaptop = {
    name: "Lenovo Thinkpad",
    color: "Black",
    wifiSpeed: 1000,

    newWifiSpeed: function(wifiSpeed){
        console.log("this.wifiSpeed in method: ", this.wifiSpeed);
        this.wifiSpeed = wifiSpeed;
        console.log("this.wifiSpeed after update: ", this.wifiSpeed);

        //Arrow Function is localy scoped and it will not have access to the global object
        // So this will not work here
        // (function() {  
        //     console.log("this.wifiSpeed is nested function: ", this.wifiSpeed);
        // })();


        //This is the correct way 
        (() => {
            console.log("this.wifiSpeed is nested function: ", this.wifiSpeed);
        })(); 
    }
}; 

console.log(myLaptop.newWifiSpeed(1500));
