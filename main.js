//   Fetch the input, error and button elements
const emailInputEl = document.querySelector("[data-email-input-js]"),
  submitBtnEl = document.querySelector("[data-submit-btn-js]"),
  errorText = document.querySelector("[data-error-text-js]");

//  Error Function
const error = (errorMessage) => {
  emailInputEl.classList.add("error");
  errorText.textContent = errorMessage;
};

//  Success Function
const success = (errorMessage) => {
  emailInputEl.classList.add("success");
  errorText.textContent = errorMessage;
};

//   Validate the email value
const emailValidate = () => {
  const email = emailInputEl.value.trim();
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email === "") {
    error("Email can't be empty");
  } else if (!email.match(validEmail)) {
    error("Enter a valid email");
  } else {
    success();
  }
};

// Validate Emall on click
submitBtnEl.addEventListener("click", (e) => {
  e.preventDefault();

  emailValidate();
});
