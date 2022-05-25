import weatherArray from "./weatherArray.js";

/* ===============================
updates the GIF
 =============================== */

export default function updateWeatherGIF(weather) {
  // console.log(
  //   "weather: ",
  //   weather,
  //   "temperature: ",
  //   currentTemp,
  //   "humidity:",
  //   humidity
  // );

  let imageGIF = document.querySelector("img");
  let arrOfWeatherObjects = weatherArray.weatherArray;

  // console.log("hihi", arrOfWeatherObjects);

  /* The find() method returns the first element in the provided
  array that satisfies the provided testing function.
  If no values satisfy the testing function, undefined
  is returned.
  We're comparing the API's returned weather
  to the values in the weatherArray.  */
  const found = arrOfWeatherObjects.find(
    (element) => element.weather === weather
  );
  // console.log("A MATCH!!!", found);

  /* Once we find the weather object that matches the 
  current weather description, we set the image attribute
  to the gif's url */
  imageGIF.setAttribute("src", found.src);
}
