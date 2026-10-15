const phoneForm = document.querySelector(".phone-form");
const phoneInput = document.querySelector("#phone");
const formMessage = document.querySelector(".form-message");

phoneForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const phone = phoneInput.value
    .replace(/[۰-۹]/g, function (digit) {
      return "۰۱۲۳۴۵۶۷۸۹".indexOf(digit);
    })
    .replace(/[٠-٩]/g, function (digit) {
      return "٠١٢٣٤٥٦٧٨٩".indexOf(digit);
    })
    .trim();

  if (!/^09\d{9}$/.test(phone)) {
    formMessage.textContent = "شماره موبایلت رو درست وارد کن ❤️";
    formMessage.className = "form-message error";
    return;
  }

  formMessage.textContent = "شماره‌ات ثبت شد! زنگ می‌زنم بهت، سریعاً ❤️";

  formMessage.className = "form-message success";
});
