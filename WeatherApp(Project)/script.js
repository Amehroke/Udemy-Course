//Event Listener to get the location input

document.getElementById("location-input").addEventListener('change', async () => {
    //Get the user enetered location 
    const location = document.getElementById("location-input").value;

    //Fetch the weather data from the API
    const weatherData = await getWeatherData(location);

    //Display the weather data
    displayWeatherData(weatherData);
    

}); 