const menuToggle = document.querySelector("#menu-toggle");
const menuOptions = document.querySelector("#menu-options");
const selectedText = document.querySelector("#selected-text");
const submitButton = document.querySelector("#submit-button");
const dateForm = document.querySelector("#date-form");
const message = document.querySelector("#message");
const options = document.querySelectorAll(".menu-option");

let selectedOption = null;

// باز و بسته کردن منو
menuToggle.addEventListener("click", function () {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuOptions.hidden = isOpen;
});

// مدیریت انتخاب گزینه‌ها
options.forEach(function (option) {
  option.addEventListener("click", function () {
    // گزینه‌ای که قبلاً قفل شده، قابل انتخاب نیست
    if (option.classList.contains("locked-option")) {
      return;
    }

    const value = option.dataset.value;

    // قفل کردن قهوه، چایی و شام
    if (value !== "fresh-air") {
      option.classList.add("locked-option");
      return;
    }

    // انتخاب هوای تازه
    options.forEach(function (item) {
      item.classList.remove("selected-option");
    });

    option.classList.add("selected-option");

    selectedOption = value;
    selectedText.textContent = "🌬️ هوای تازه!";

    submitButton.disabled = false;
    message.textContent = "";

    // بستن منو پس از انتخاب
    menuToggle.setAttribute("aria-expanded", "false");
    menuOptions.hidden = true;
  });
});

// ثبت نهایی
dateForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (selectedOption !== "fresh-air") {
    return;
  }

  submitButton.disabled = true;

  window.location.href = "./page4.html";
});
