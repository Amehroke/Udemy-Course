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

    const apiKey = 'effef69b2b1f9a7cd98cb5b96b7adff7' //Enter your API key here
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);

    const data = await response.json();

    return data;
}   

function getBackgroundColor(temperature){
    if(temperature <= 40){ 
        return 'blue';
    }
    else if(temperature <= 70){
        return 'lightblue';
    }
    else if(temperature <= 80){
        return 'lightgreen';
    }
    else{
        return 'lightred';
    }
}


const displayWeatherData = (data) => {
    const weatherDataElement = document.getElementById("weather-data");

    if (!data || data.error) { // Check if data is undefined or if an error occurred
        weatherDataElement.innerHTML = "Please Enter a Location";
        return;
    }
    else{ 
        const temp = Math.floor(((data.main.temp - 273.15) * 1.8 + 32 )); 
        const backgroundColor = getBackgroundColor(temp);

        weatherDataElement.style.backgroundColor = backgroundColor;

        weatherDataElement.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${temp}°F</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed}m/s</p>
        `;  
    }
}

window.onload = async () => {
    weatherData = await getWeatherData(); 
    displayWeatherData(weatherData);
}