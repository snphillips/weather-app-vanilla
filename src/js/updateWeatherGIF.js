import weatherArray from "./weatherArray.js";

/* ===============================
updates the GIF
 =============================== */
//  TODO - refactor to ternary and use weather-objects
export default function updateWeatherGIF(weather, currentTemp, humidity) {
  // Get data from parseWeatherData
  console.log(
    "weather: ",
    weather,
    "temperature: ",
    currentTemp,
    "humidity:",
    humidity
  );

  let imageGIF = document.querySelector("img");
  let arrOfWeatherObjects = weatherArray.weatherArray;

  console.log("hihi", arrOfWeatherObjects);

  arrOfWeatherObjects.map((item) => {
    console.log(item.weather, item.src);
    if (item.weather === weather) {
      console.log("A MATCH!!!");
      imageGIF.setAttribute("src", item.src);
      return;
    }
  });
}
