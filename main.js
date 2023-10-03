//   Fetch the input, error and button elements

const emailInputEl = document.querySelector("[data-email-input-js]"),
  submitBtnEl = document.querySelector("[data-submit-btn-js]"),
  errorText = document.querySelector("[data-error-text-js]");

//   Validate the email value

const emailValidate = () => {
  const email = emailInputEl.value.trim();
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email === "") {
    emailInputEl.classList.add("error");
    errorText.classList.add("error-text");
    errorText.textContent = "Email can't be empty";
  } else if (!email.match(validRegex)) {
    emailInputEl.classList.add("error");
    errorText.classList.add("error-text");
    errorText.textContent = "Enter a valid email";
  } else {
    emailInputEl.classList.add("success");
    errorText.classList.add("success-text");
  }
};

//   Validating form on button click
submitBtnEl.addEventListener("click", (e) => {
  e.preventDefault();

  emailValidate();
});
