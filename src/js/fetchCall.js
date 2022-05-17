import parseWeatherData from "./parseWeatherData.js";

/* ===============================
The API call to Open Weather
This fetch call is made to the Open Weather Map API,
using the user's inputted zip.
=============================== */

export default function fetchCAll(zipCode) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=fb1d469d46d8692c83f7c5a6183ad373`
  )
    .then((response) => {
      if (response.ok) {
        return response.json().then((response) => {
          parseWeatherData(response);
        });
      } else if (response.status === 404) {
        return Promise.reject("error 404");
      } else {
        return Promise.reject("some other error: " + response.status);
      }
    })
    // .then((data) => console.log("data is", data))
    .catch((error) => {
      console.log("fetchCAll error:", error);
      document.getElementById(
        "bad-zip-error-message"
      ).innerHTML = `I can't find that zip. Try a different one.`;
    });
}
