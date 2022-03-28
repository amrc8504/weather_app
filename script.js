const apiKey = "3994f11f32c02c599745fc6507dbde8e"
const search = document.getElementsByClassName('.search-bar');

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
   function displayWeather(data){
    const {name} = data;
    const {icon} = data.weather[0];
    const {description} = data.weather[0];
    const {temp} = data.main
    const {temp_min} = data.main
    const {temp_max} = data.main
    const {humidity} = data.main
    console.log(name,icon,description,temp,humidity)
    document.querySelector(".city").innerText = `Weather in ${name}`
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    document.querySelector(".description").innerText = `Forecast: ${description}`
    document.querySelector(".temp").innerText = `${temp}°F`
    document.querySelector(".high").innerText = `High of ${temp_max}°F`
    document.querySelector(".low").innerText = `Low of ${temp_min}°F`
    document.querySelector(".humidity").innerText= `Humidity: ${humidity}%`
   }
};

const toSearch = function search(){
    fetchWeather(document.querySelector(".search-bar").value);
}