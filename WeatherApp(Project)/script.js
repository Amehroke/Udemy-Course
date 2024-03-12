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

