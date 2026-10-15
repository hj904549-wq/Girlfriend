const yesButton = document.querySelector(".yes-Button");
const noButton = document.querySelector(".no-Button");

let moving = false;

function moveButton() {
  if (moving) {
    return;
  }
  moving = true;

  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "fixed";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  moving = false;
}

noButton.addEventListener("mouseenter", (event) => {
  if (event.pointerType === "touch") return;
  moveButton();
});

noButton.addEventListener(
  "touchstart",
  (event) => {
    event.preventDefault();
    moveButton();
  },
  { passive: false },
);
