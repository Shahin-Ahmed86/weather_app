const apiKey = "8c6d72c6bf0eead6653519b7a0842a67";
const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");


let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
        var data = await response.json();
        console.log(data);

        cityName.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "clouds") {
          weatherIcon.src = "./images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
          weatherIcon.src = "./images/clear.png";
        } else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "./images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
          weatherIcon.src = "./images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
          weatherIcon.src = "./images/mist.png.png";
        }

        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
    
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
 