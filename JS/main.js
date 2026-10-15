const yesButton = document.querySelector(".yes-Button");
const noButton = document.querySelector(".no-Button");

function moveButton() {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  noButton.style.position = "fixed";
  noButton.style.left = `${Math.random() * maxX}px`;
  noButton.style.top = `${Math.random() * maxY}px`;
}

// کامپیوتر: فرار از موس
noButton.addEventListener("mouseenter", () => {
  moveButton();
});

// موبایل و تبلت: فرار مداوم
if (window.matchMedia("(hover: none)").matches) {
  noButton.style.position = "fixed";

  moveButton();

  setInterval(moveButton, 150);
}
