function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");


cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city) {
let apiKey = "4c05132bc5ac2f372o09eet8a2bb888d";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}




function handlesearchsubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");

searchCity(searchInput.value);
}



let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit",handlesearchsubmit);