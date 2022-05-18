import clearWeatherData from "./js/clearWeatherData.js";
import clearErrorMessage from "./js/clearErrorMessage.js";
import showSpinner from "./js/showSpinner";
import hideSpinner from "./js/hideSpinner";
import hideWeatherDescription from "./js/hideWeatherDescription";
import showWeatherDescription from "./js/showWeatherDescription";
import fetchCall from "./js/fetchCall";
import "./style.css";

// console.log("hello world");

document.getElementById("button").addEventListener("click", lookupWeather);

// The big function that does it all when
// user clicks the submit button
function lookupWeather() {
  // Whatever value the user types into the zip field
  var zip = document.getElementById("zip").value;

  showSpinner();

  // Clears the weather data, in case there was a previous query.
  clearWeatherData();

  // Clears error message, in case there is an error message.
  clearErrorMessage();

  // Makes weather description display: none;
  hideWeatherDescription();

  // The API call to Open Weather
  fetchCall(zip);

  /* ===============================
    This ensures that the weather description
    isn't displayed until the GIF has loaded
    It also hides the spinner
    =============================== */
  document.querySelector("img").onload = function () {
    // console.log("GIF loaded");
    showWeatherDescription();
    hideSpinner();
  };
}
