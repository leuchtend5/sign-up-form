const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const inputPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const phoneNumber = document.getElementById("phone-number");
const errorPwc = document.getElementById("error-pwc");
const errorTel = document.getElementById("error-tel");
const errorPw = document.getElementById("error-pw");
const firstReq = document.querySelector("#error-pw > ul > li:nth-child(1)");
const secondReq = document.querySelector("#error-pw > ul > li:nth-child(2)");
const thirdReq = document.querySelector("#error-pw > ul > li:nth-child(3)");
const fourthReq = document.querySelector("#error-pw > ul > li:nth-child(4)");

function passwordValidate() {
  inputPassword.value.length >= 8
    ? (firstReq.style.color = "green")
    : (firstReq.style.color = "");

  /[0-9]/.test(inputPassword.value) == true
    ? (secondReq.style.color = "green")
    : (secondReq.style.color = "");

  /[A-Z]/.test(inputPassword.value) == true
    ? (thirdReq.style.color = "green")
    : (thirdReq.style.color = "");

  /[a-z]/.test(inputPassword.value) == true
    ? (fourthReq.style.color = "green")
    : (fourthReq.style.color = "");
}

function confirmPassValidate() {
  if (confirmPassword.value !== inputPassword.value) {
    errorPwc.textContent = "Password do not match";
  } else {
    errorPwc.textContent = "";
  }
}

function telephoneValidate() {
  /[0-9]{12,}/.test(phoneNumber.value) == true
    ? (errorTel.style.color = "green")
    : (errorTel.style.color = "");
}

confirmPassword.addEventListener("input", confirmPassValidate);
inputPassword.addEventListener("input", passwordValidate);
phoneNumber.addEventListener("input", telephoneValidate);
window.addEventListener("load", function () {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  phoneNumber.value = "";
});
