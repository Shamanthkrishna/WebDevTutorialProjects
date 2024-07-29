// Your OpenWeatherMap API key
const apiKey = "a60bc55a54ff26be5770445a78c9adc5";

// Base URL for the OpenWeatherMap API
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Get references to the search input, search button, and weather icon elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check the weather for a given city
async function checkWeather(city) {
    // Make a request to the OpenWeatherMap API with the specified city and API key
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    // Parse the JSON response
    var data = await response.json();

    // If the city is not found (status 404), display an error message
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // Log the response data to the console
        console.log(data);

        // Update the DOM with the weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        // Update the weather icon based on the weather condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        // Display the weather information and hide any error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Add a click event listener to the search button
searchBtn.addEventListener("click", () => {
    // Call the checkWeather function with the value from the search input
    checkWeather(searchBox.value);
});
