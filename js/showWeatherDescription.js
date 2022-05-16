/* ===============================
Removes "display: none;" from weather description
This is invoked after GIFs load
=============================== */
export default function showWeatherDescription() {
  try {
    console.log("weather description text set to display:block");
    document.getElementById("weather-description-text").style.display = "block";
  } catch (error) {
    console.log("showWeatherDescription:", error);
  }
}
