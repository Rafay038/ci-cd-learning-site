const button = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Button clicked successfully";
});