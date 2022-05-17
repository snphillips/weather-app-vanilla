/* ===============================
  Clears error message, in case there is an error message.
=============================== */
export default function clearErrorMessage() {
  // console.log("clearing the error message");
  document.getElementById("bad-zip-error-message").innerHTML = ``;
}
