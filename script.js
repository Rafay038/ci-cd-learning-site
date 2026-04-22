const heroBtn = document.getElementById("heroBtn");
const heroMessage = document.getElementById("heroMessage");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

heroBtn.addEventListener("click", function () {
  heroMessage.textContent = "Interaction works. This change came from JavaScript.";
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  formStatus.textContent = "Thank you " + name + ". Your form was received for demo purposes using " + email + ".";
  contactForm.reset();
});