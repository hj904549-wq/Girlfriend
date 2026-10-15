const dateForm = document.querySelector(".date-form");
const options = document.querySelectorAll(".option");

options.forEach(function (option) {
  const input = option.querySelector('input[type="radio"]');

  if (!input) return;

  if (input.value !== "walk") {
    option.addEventListener("click", function (event) {
      event.preventDefault();
      input.checked = false;
      option.classList.add("disabled-option");
    });
  }
});

dateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "./page3.html";
});
