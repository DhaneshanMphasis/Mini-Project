$(document).ready(function () {
  $(".login-info-box").fadeOut();
  $(".login-show").addClass("show-log-panel");
});
$('.login-reg-panel input[type="radio"]').on("change", function () {
  if ($("#log-login-show").is(":checked")) {
    $(".register-info-box").fadeOut();
    $(".login-info-box").fadeIn();

    $(".white-panel").addClass("right-log");
    $(".register-show").addClass("show-log-panel");
    $(".login-show").removeClass("show-log-panel");
  } else if ($("#log-reg-show").is(":checked")) {
    $(".register-info-box").fadeIn();
    $(".login-info-box").fadeOut();

    $(".white-panel").removeClass("right-log");

    $(".login-show").addClass("show-log-panel");
    $(".register-show").removeClass("show-log-panel");
  }
});
let tokenCheck;
let loginUsername;
function login() {
  loginUsername = document.getElementById("Username").value;
  localStorage.setItem("Username", loginUsername);
  let loginPassword = document.getElementById("UserPassword").value;
  if (emailValid == true && passwordValid == true) {
    let signIn = new XMLHttpRequest();
    signIn.open("POST", "http://localhost:8080/login");
    signIn.setRequestHeader("Content-Type", "application/json");
    signIn.send(
      JSON.stringify({
        Users: loginUsername,
        Pass1: loginPassword,
      })
    );
    signIn.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          tokenCheck = JSON.parse(this.responseText);
          localStorage.setItem("logintoken", tokenCheck);
          loginCheck();
        } else {
          Swal.fire({
            title:
              "User is not register please click on Register button and login Again.",
            icon: "warning",
            confirmButtonText: "OK",
          });
        }
      }
    };
  } else {
    Swal.fire({ title: "Please fill all the field", timer: 2000 });
  }
}
function loginCheck() {
  let loginValid = new XMLHttpRequest();
  loginValid.open("Get", "http://localhost:8080/logincheck");
  loginValid.setRequestHeader("Authorization", `${tokenCheck}`);
  loginValid.send();
  loginValid.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        window.location.replace("./userdasboard.html");
      } else {
        Swal.fire({
          title: "Username or Password is Invalid.",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    }
  };
}

function newLogin() {
  const newUser = document.getElementById("NewUsername").value;
  const newPass1 = document.getElementById("NewPassword1").value;
  const newPass2 = document.getElementById("NewPassword2").value;
  const newEmail = document.getElementById("NewEmail").value;

  if (
    newPass1 === newPass2 &&
    passwordChecker == true &&
    emailChecker == true &&
    userChecker == true
  ) {
    let newSignin = new XMLHttpRequest();
    newSignin.open("POST", "http://localhost:8080/newlogin");
    newSignin.setRequestHeader("Content-Type", "application/json");
    newSignin.send(
      JSON.stringify({
        userNew: newUser,
        passNew: newPass1,
        emailId: newEmail,
      })
    );
    newSignin.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          on_load();
          Swal.fire({
            title: "Registeration is Successfull",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          // window.location.replace("./index.html");
        }
      }
    };
  } else if (newPass1 != newPass2) {
    document.getElementById("message").innerHTML =
      "** Please enter the correct password **";
  } else {
    document.getElementById("message").innerHTML =
      "** Please fill all the field **";
  }
}
let emailChecker;
let userChecker;
function on_load() {
  let allLogin = new XMLHttpRequest();
  allLogin.open("Get", "http://localhost:8080/alllogin");
  allLogin.send();
  allLogin.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let allloginData = this.responseText;
        localStorage.setItem("LoginData", allloginData);
      }
    }
  };
}
let passwordChecker;
function passwordCheck() {
  const password = document.getElementById("NewPassword1").value;
  const passwordError = document.getElementById("message");
  passwordError.textContent = "";
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  passwordChecker = true;
  // Check if the password meets the criteria
  if (password.length < minLength) {
    passwordError.textContent = `Password must be at least ${minLength} characters long.`;
    passwordChecker = false;
  } else if (!hasUppercase) {
    passwordError.textContent =
      "Password must contain at least one uppercase letter.";
    passwordChecker = false;
  } else if (!hasLowercase) {
    passwordError.textContent =
      "Password must contain at least one lowercase letter.";
    passwordChecker = false;
  } else if (!hasNumber) {
    passwordError.textContent = "Password must contain at least one number.";
    passwordChecker = false;
  } else if (!hasSpecialChar) {
    passwordError.textContent =
      "Password must contain at least one special character.";
    passwordChecker = false;
  }
}

let emailValid;
let passwordValid;
function loginValidate() {
  emailValid = true;
  passwordValid = true;
  let usernameCheck = document.getElementById("Username").value;
  let loginPassword = document.getElementById("UserPassword").value;
  let messagelogin = document.getElementById("errorMessage");
  messagelogin.textContent = "";
  let regex1 = /^.+$/;
  if (!regex1.test(usernameCheck) || !regex1.test(loginPassword)) {
    messagelogin.textContent = "Please fill the all the field";
    emailValid = false;
    passwordValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(usernameCheck)) {
    messagelogin.textContent = "Enter a valid email address.";
    emailValid = false;
  }
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(loginPassword);
  const hasLowercase = /[a-z]/.test(loginPassword);
  const hasNumber = /\d/.test(loginPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(loginPassword);
  // Check if the password meets the criteria
  if (loginPassword.length < minLength) {
    messagelogin.textContent = `Password must be at least ${minLength} characters long.`;
    passwordValid = false;
  } else if (!hasUppercase) {
    messagelogin.textContent =
      "Password must contain at least one uppercase letter.";
    passwordValid = false;
  } else if (!hasLowercase) {
    messagelogin.textContent =
      "Password must contain at least one lowercase letter.";
    passwordValid = false;
  } else if (!hasNumber) {
    messagelogin.textContent = "Password must contain at least one number.";
    passwordValid = false;
  } else if (!hasSpecialChar) {
    messagelogin.textContent =
      "Password must contain at least one special character.";
    passwordValid = false;
  }
}
function usernameCheck() {
  userChecker = true;
  let usernameCheck = document.getElementById("NewUsername").value;
  const userError = document.getElementById("message");
  Usererror.textContent = "";
  let regex = /^.+$/;
  if (!regex.test(usernameCheck)) {
    userErrorsererror.textContent = "Please fill the Username";
    userChecker = false;
  }
  let UserLodinAll = JSON.parse(localStorage.getItem("LoginData"));
  for (let i = 0; i < UserLodinAll.length; i++) {
    if (usernameCheck === UserLodinAll[i].User_name) {
      userError.textContent = "Enter Username is already Available";
      userChecker = false;
    }
  }
}
function validateEmail() {
  emailChecker = true;
  const email = document.getElementById("NewEmail").value;
  const emailError = document.getElementById("message");
  emailError.textContent = "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    emailChecker = false;
  }
  let loginDetails = JSON.parse(localStorage.getItem("LoginData"));
  for (let i = 0; i < loginDetails.length; i++) {
    if (email === loginDetails[i].emailId) {
      emailError.textContent = "Enter Email is already Available";
      emailChecker = false;
    }
  }
}
window.onload = on_load;
