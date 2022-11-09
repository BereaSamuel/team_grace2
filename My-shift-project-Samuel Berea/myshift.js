const container = document.querySelector(".container");
const showhidepass = document.querySelectorAll(".showhidepw");
const passfields = document.querySelectorAll(".password");
const signup = document.querySelector(".signup_text");
const login = document.querySelector(".login_link");
const redirect = document.querySelector(".redicrect_login");

// hide/show password

showhidepass.forEach((eye) => {
  eye.addEventListener("click", () => {
    passfields.forEach((passfield) => {
      if (passfield.type === "password") {
        passfield.type = "text";
        showhidepass.forEach((icon) => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        passfield.type = "password";
        showhidepass.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

// sign up an log in form

signup.addEventListener("click", () => {
  container.classList.add("active");
});

login.addEventListener("click", () => {
  container.classList.remove("active");
});

// Full name validation

const nameerror = document.getElementById("errorname");
function validateFullName() {
  const displayname = document.getElementById("fullname");
  if (displayname.value === "" || displayname.value == null) {
    nameerror.innerHTML = "Name is requierd";
    return false;
  } else {
    nameerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

// Email validation

const emailError = document.getElementById("email_error");
function validateEmail() {
  const displayemail = document.getElementById("emailadress").value;
  if (displayemail.length == 0) {
    emailError.innerHTML = "Email adress is needed";

    return false;
  }
  if (!displayemail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email is not corect writed";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// Age Validation

const ageerror = document.getElementById("age_error");

function validateAge() {
  const displayage = document.getElementById("age").value;
  const regex = /[0-9]|\./;
  if (!regex.test(displayage)) {
    ageerror.innerHTML = "Must write your age, in number format";
    return false;
  }

  if (displayage <= 17 || displayage >= 66) {
    ageerror.innerHTML = "The age dosen't match the requirments";
    return false;
  } else {
    ageerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

// user validation

const usererror = document.getElementById("user_error");

function validateUser() {
  const displayuser = document.getElementById("username").value;
  const regexuser =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  if (displayuser == 0) {
    usererror.innerHTML = "Please write your username";
    return false;
  }

  if (displayuser.length < 6 || displayuser.length > 15) {
    usererror.innerHTML = "Need minimum 6 letters!";
    return false;
  }

  if (!regexuser.test(displayuser)) {
    usererror.innerHTML =
      "User must contain a capital letter, five letters,numbers and character!";
    return false;
  } else {
    usererror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

// validate password
const passerrors = document.getElementById("passerror");
const passerrorrepeat = document.getElementById("passerrorrepeat");

function validate_firstpassword() {
  const passfirst = document.getElementById("password").value;
  if (passfirst == 0) {
    passerrors.innerHTML = "Please write a password";
    return false;
  }
  if (passfirst.length < 6 || passfirst.length > 15) {
    passerrors.innerHTML = "Password must contain minimum 6 letters";
    return false;
  } else {
    passerrors.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}
function validate_password() {
  const pass = document.getElementById("password").value;
  const confirm_pass = document.getElementById("repeatpassword").value;

  if (confirm_pass != pass) {
    passerrorrepeat.innerHTML = "Password don't mach";
    return false;
  } else {
    passerrorrepeat.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    passerrors.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

// Validation of registration

const submitError = document.getElementById("submit_error");
const submitbtn = document.querySelector(".submitbtn");
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  if (
    !validateFullName() ||
    !validateAge() ||
    !validateEmail() ||
    !validateUser() ||
    !validate_firstpassword() ||
    !validate_password() ||
    !registredLocalStorage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 4000);
    return false;
  } else {
    let resetinput = document.getElementById("formregistration");
    resetinput.reset();
    return false;
  }
}

// Local storage

const usererrorlocalst = document.getElementById("user_error");
const fulname = document.querySelector(".fullname");
const emailadress = document.querySelector(".emailadress");
const ageinsert = document.querySelector(".age");
const passwordfirst = document.querySelector(".passwordd");
const username = document.querySelector(".usernamee");

function registredLocalStorage() {
  let storage = [];
  let curentstorage = localStorage.getItem("My-shift");
  if (curentstorage) {
    storage = JSON.parse(curentstorage);
  }

  for (let user of storage) {
    if (user.username == username.value) {
      usererror.innerHTML = "Username allready exist";
      return false;
    }
  }

  let user = {
    shifts: [],
    fullname: "",
    age: "",
    email: "",
    username: "",
    password: "",
  };
  user.fullname = fulname.value;
  user.age = ageinsert.value;
  user.email = emailadress.value;
  user.username = username.value;
  user.password = passwordfirst.value;
  storage.push(user);
  localStorage.setItem("My-shift", JSON.stringify(storage));

  container.classList.remove("active");
}

// Login to home page

let loginbtn = document.getElementById("login");

loginbtn.addEventListener("click", () => {
  let userlog = document.querySelector("#username_login").value;
  let passlogin = document.querySelector("#password_login").value;

  let user_records = JSON.parse(localStorage.getItem("My-shift"));
  for (let i of user_records) {
    console.log(i.username + userlog);
    if (i.username === userlog) {
      let userlogged = {
        username: "",
        password: "",
      };
      userlogged.username = i.username;
      userlogged.password = i.password;
      localStorage.setItem("LoggedUser", JSON.stringify(userlogged));
      if (i.password === passlogin) {
        console.log("password");
        window.location.href = "home.html";
        return;
      }
    }
    alert("No user found");
  }
});

// Delete user from local storage

let forgotpsw = document.querySelector(".forgotpsw");
forgotpsw.addEventListener("click", () => {
  document.getElementById("delete").style.display = "block";
});

const passerrordelete = document.getElementById("passerrordelete");
const passerrorrepeatdelete = document.getElementById("passerrorrepeatdelete");

function validate_firstpassworddelete() {
  const passfirst = document.getElementById("passworddelete").value;
  if (passfirst == 0) {
    passerrordelete.innerHTML = "Please write a password";
    return false;
  }
  if (passfirst.length < 6 || passfirst.length > 15) {
    passerrordelete.innerHTML = "Password must contain minimum 6 letters";
    return false;
  } else {
    passerrordelete.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validate_passworddelete() {
  const pass = document.getElementById("passworddelete").value;
  const confirm_pass = document.getElementById("repeatpassworddelete").value;

  if (confirm_pass != pass) {
    passerrorrepeatdelete.innerHTML = "Password don't mach";
    return false;
  } else {
    passerrorrepeatdelete.innerHTML =
      '<i class="fa-solid fa-circle-check"></i>';
    passerrordelete.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

let hidedelete = document.getElementById("delete");
let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  hidedelete.style.display = "none";
};
window.onclick = function (e) {
  if (e.target == hidedelete) {
    hidedelete.style.display = "none";
  }
};

const deleteuserbtn = document.getElementById("deletestorage");

deleteuserbtn.addEventListener("click", () => {
  let enteruser = document.getElementById("username_logindelete").value;
  let dataStorage = JSON.parse(localStorage.getItem("My-shift"));

  for (let user of dataStorage) {
    if (enteruser == user.username) {
      Object.getOwnPropertyNames(user).forEach(function (prop) {
        delete user[prop];
      });
      localStorage.setItem("My-shift", JSON.stringify(dataStorage));
      alert("Username has been deleted");
      window.location.href = "myshift.html";
    }
  }
});
