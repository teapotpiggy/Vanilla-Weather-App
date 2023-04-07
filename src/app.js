function displayTemperature(response) {

    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = response.data.main.wind.speed;
}

let apiKey = "517be2430t72605eaa2f77c918a3o96d";
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Lagos&key=517be2430t72605eaa2f77c918a3o96d&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);