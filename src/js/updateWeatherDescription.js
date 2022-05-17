import updateWeatherGIF from "./updateWeatherGIF";

export default function updateWeatherDescription(
  location,
  weather,
  currentTemp,
  tempMin,
  tempMax,
  humidity
) {
  document.getElementById("weather").innerHTML = weather;
  document.getElementById("location").innerHTML = location;
  document.getElementById(
    "current-temp"
  ).innerHTML = `Temperature: ${currentTemp} °F`;
  document.getElementById("min-temp").innerHTML = `Low: ${tempMin} °F`;
  document.getElementById("max-temp").innerHTML = `High: ${tempMax} °F`;
  document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
  updateWeatherGIF(weather, currentTemp, humidity);
}
