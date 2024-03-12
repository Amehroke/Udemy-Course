//Event Listener to get the location input

document.getElementById("location-input").addEventListener('change', async () => {
    //Get the user enetered location 
    const location = document.getElementById("location-input").value;

    //Fetch the weather data from the API
    const weatherData = await getWeatherData(location);

    //Display the weather data
    displayWeatherData(weatherData);
    

}); 

const getWeatherData = async (location) => {
    if(!location){
        return; 
    }

    const apiKey = 'ApiKey' //Enter your API key here
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);

    const data = await response.json();

    return data;
}   

function getBackgroundColor(temperature){
    if(temperature < 0){ 
        return 'lightblue';
    }
    else if(temperature < 10){
        return 'lightgreen';
    }
    else if(temperature < 20){
        return 'lightyellow';
    }
    else if(temperature < 30){
        return 'lightorange';
    }
    else{
        return 'lightred';
    }
}


const displayWeatherData = (data) => {
    const weatherDataElement = document.getElementById("weather-data");

    if(Object.keys(data).length === 0){
        weatherDataElement.innerHTML = "Please enter a valid location";
        return;
    }
    else{ 
        const backgroundColor = getBackgroundColor(Math.floor(data.main.temp - 273.15));
        weatherDataElement.style.backgroundColor = backgroundColor;

        weatherDataElement.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${Math.floor(data.main.temp - 273.15)}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed}m/s</p>
        `;  
    }
}

window.onload = async () => {
    weatherData = await getWeatherData(); 
    displayWeatherData(weatherData);
}