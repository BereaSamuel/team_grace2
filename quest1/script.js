const firstError = document.getElementById("firstname_error");
const lastError = document.getElementById("lastname_error");
const emailError = document.getElementById("email_error");
const phoneError = document.getElementById("phone_error");
const submitError = document.getElementById("submit_error");
// First name
function validateFirstName() {
  let displayfirstName = document.getElementById("firstname").value;
  if (displayfirstName.length == 0) {
    firstError.innerHTML = "First name is needed";
    return false;
  }
  if (!displayfirstName.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/)) {
    firstError.innerHTML = "Write your first name corectly";
    return false;
  }
  firstError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// last name
function validateLastName() {
  let displaylastname = document.getElementById("lastname").value;
  if (displaylastname.length == 0) {
    lastError.innerHTML = "Last name is needed";
    return false;
  }
  if (!displaylastname.match(/^[A-Za-z]*\s{0}[A-Za-z]*$/)) {
    lastError.innerHTML = "Write your last name corectly";
    return false;
  }
  lastError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// phone
function validatePhone() {
  let displayphone = document.getElementById("phonenumber").value;

  if (displayphone.length == 0) {
    phoneError.innerHTML = "Phone number is needed";
    return false;
  }
  if (displayphone.length !== 10) {
    phoneError.innerHTML = "Phone mumber should be 10 digits";
    return false;
  }
  if (!displayphone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

//email
function validateEmail() {
  let displayemail = document.getElementById("emailadress").value;
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

// validation form
function validateForm() {
  if (
    validateFirstName() ||
    validateLastName() ||
    validateEmail() ||
    validatePhone()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 2000);
    return false;
  } else {
    alert("Thank You");
  }
}
