const inputPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorPwc = document.getElementById("error-pwc");
const errorTel = document.getElementById("error-tel");
const errorPw = document.getElementById("error-pw");
const span = document.getElementsByTagName("span");

function passwordValidate() {
  if (confirmPassword.value !== inputPassword.value) {
    errorPwc.textContent = "Password do not match";
  } else {
    errorPwc.textContent = "";
  }
}

confirmPassword.addEventListener("input", passwordValidate);

function requirementValidate() {}
