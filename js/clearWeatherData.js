/* ===============================
  Clears the weather data, in case there was a previous query.
  =============================== */
export default function clearWeatherData() {
  console.log("clearning data");
  document.getElementById("location").innerHTML = ` `;
  document.getElementById("weather").innerHTML = ` `;
  document.getElementById("current-temp").innerHTML = ` `;
  document.getElementById("min-temp").innerHTML = ` `;
  document.getElementById("max-temp").innerHTML = ` `;
  document.getElementById("humidity").innerHTML = ` `;
}
