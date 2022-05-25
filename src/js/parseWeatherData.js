import updateWeatherGIF from "./updateWeatherGIF.js";

/* ===============================
Parsing the weather data from the returned JSON
=============================== */
export default function parseWeatherData(res, zip) {
  try {
    var location = res.name;
    var currentTemp = Math.round(res.main.temp);
    var tempMin = Math.round(res.main.temp_min);
    var tempMax = Math.round(res.main.temp_max);
    var humidity = res.main.humidity;
    var weather = res.weather[0].description;

    console.log(res);

    console.log(
      "zip:",
      zip,
      "location:",
      location,
      "currentTemp:",
      currentTemp,
      "tempMin:",
      tempMin,
      "tempMax:",
      tempMax,
      "humidity:",
      humidity,
      "weather:",
      weather
    );
    // update Weather Description
    document.getElementById("weather").innerHTML = weather;
    document.getElementById("location").innerHTML = location + ", " + zip;
    document.getElementById(
      "current-temp"
    ).innerHTML = `Temperature: ${currentTemp} °F`;
    document.getElementById("min-temp").innerHTML = `Low: ${tempMin} °F`;
    document.getElementById("max-temp").innerHTML = `High: ${tempMax} °F`;
    document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
    // Update Weather GIF
    updateWeatherGIF(weather, currentTemp, humidity);
  } catch (error) {
    console.log("parseWeatherData error:", error);
  }
}
