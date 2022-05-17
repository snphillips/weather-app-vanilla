/* ===============================
Hides the loading spinner
Invoked at the image.onload
=============================== */
export default function hideSpinner() {
  try {
    document.getElementById("loader").style.display = "none";
  } catch (error) {
    console.log(error);
  }
}
