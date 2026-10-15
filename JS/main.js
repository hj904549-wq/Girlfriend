// const title = document.querySelector("#title");
// const message = document.querySelector("#message");
// const yesButton = document.querySelector("#yes");
// const noButton = document.querySelector("#no");
// const modal = document.querySelector("#modal");
// const nameInput = document.querySelector("#name");
// const phoneInput = document.querySelector("#phone");
// const submit = document.querySelector("#submit");
// const error = document.querySelector("#error");

// // کلیک آره

// yesButton.addEventListener("click", function(){
//     modal.style.display = "flex"
// });

// // ثبت اطلاعات

// submit.addEventListener("click", function(){

//     let name = nameInput.value.trim();
//     let phone = phoneInput.value.trim();
//     if(name === "" || phone === ""){
//         error.textContent =
//         "نه دیگه 😅 اسم و شماره رو بگو";

//         return;

//     }

//     modal.style.display = "none";
//     title.textContent =
//     "به به چه خوب😍😂";
//     message.textContent =
//     `خوش اومدی ${name} ❤️
//     قرارمون ثبت شد 👌`;
//     noButton.style.display = "none";
//     submit.textContent =
//     "ثبت شد ✅";

// });

// // فرار دکمه نه

// let moving = false;
// noButton.addEventListener("mouseenter", function(){
//     if(moving) return;
//     moving = true;
//     noButton.style.position = "fixed";
//     noButton.style.left =
//     Math.random()*80 + "%";

//     noButton.style.top =
//     Math.random()*80 + "%";

//     setTimeout(()=>{

//         moving=false;

//     },300);

// });

// // جلوگیری از کلیک نه

// noButton.addEventListener("click", function(e){

//     e.preventDefault();

// });

const yesButton = document.querySelector(".yes-Button");
const noButton = document.querySelector(".no-Button");

let moving = false;
noButton.addEventListener("mouseenter", function () {
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
});
