/* ===============================
Makes weather description display: none;
=============================== */
export default function hideWeatherDescription() {
  try {
    document.getElementById("weather-description-text").style.display = "none";
  } catch (error) {
    console.log(error);
  }
}
