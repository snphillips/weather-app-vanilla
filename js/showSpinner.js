/* ===============================
Shows the loading spinner
=============================== */
export default function showSpinner() {
  try {
    document.getElementById("loader").style.display = "block";
  } catch (error) {
    console.log(error);
  }
}
