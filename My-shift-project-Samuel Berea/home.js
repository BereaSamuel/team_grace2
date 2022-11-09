// Username show after log in on home page

document.getElementById("userlogin").innerHTML = JSON.parse(
  localStorage.getItem("LoggedUser")
).username;

// Show hide password

const showhidepass = document.querySelectorAll(".showhidepw");
const passfields = document.querySelectorAll(".password");
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

// Name Validation

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

// Uniq id generator

let x;
document.querySelector(".adduniqnr").onclick = function () {
  x = new Date().getTime();
  document.getElementById("displayuniqid").textContent = x;
};

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

// User validation

const usererror = document.getElementById("user_error");

function validateUser() {
  const displayuser = document.getElementById("username").value;
  const regexuser =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  if (displayuser == 0) {
    usererror.innerHTML = "Please write a username";
    return false;
  }
  if (displayuser.length < 6 || displayuser.length > 15) {
    usererror.innerHTML = "Need minimum 6 letters!";
    return false;
  }
  if (!regexuser.test(displayuser)) {
    usererror.innerHTML = "User must contain letters,numbers and character!";
    return false;
  } else {
    usererror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

// Validate password

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

// Edit profil hide show

const hideeditprofil = document.querySelector(".editprofil");
hideeditprofil.addEventListener("click", () => {
  const showeditprofil = document.querySelector(".edit_container");
  if (showeditprofil.style.display === "none") {
    showeditprofil.style.display = "block";
  } else {
    showeditprofil.style.display = "none";
  }
});

// Edit profil and validate

let loggedUser = JSON.parse(localStorage.getItem("LoggedUser")).username;
let aplicationstor = JSON.parse(localStorage.getItem("My-shift"));
window.addEventListener("load", () => {
  for (let useredit of aplicationstor)
    if (useredit.username == loggedUser) {
      document.getElementById("emailadress").value = useredit.email;
      document.getElementById("age").value = useredit.age;
      document.getElementById("fullname").value = useredit.fullname;
      document.getElementById("username").value = useredit.username;
      document.getElementById("password").value = useredit.password;
    }
});
let updateBtn = document.querySelector(".updatebtn");
updateBtn.addEventListener("click", () => {
  for (let useredit of aplicationstor)
    if (useredit.username == loggedUser) {
      useredit.email = document.getElementById("emailadress").value;
      useredit.age = document.getElementById("age").value;
      useredit.fullname = document.getElementById("fullname").value;
      useredit.username = document.getElementById("username").value;
      useredit.password = document.getElementById("password").value;
    }
  localStorage.setItem("My-shift", JSON.stringify(aplicationstor));
});

// Myshift hide show

function myShiftFunction() {
  let hideaddshift = document.querySelector(".myshift_container");
  if (hideaddshift.style.display === "none") {
    hideaddshift.style.display = "flex";
  } else {
    hideaddshift.style.display = "none";
  }
}
// Curent shift hide show

const curentshiftshow = document.querySelector(".curentshift");
curentshiftshow.addEventListener("click", () => {
  const tableshow = document.getElementById("container_table_bestmonth");
  if (tableshow.style.display === "none") {
    tableshow.style.display = "flex";
  } else {
    tableshow.style.display = "none";
  }
});

// Adding shift

let addshift = document.querySelector(".addbutton");
addshift.addEventListener("click", displaytable);
let row = 1;
function displaytable() {
  const date = document.getElementById("mydate").value;
  const starttime = document.getElementById("starttime").value;
  const endtime = document.getElementById("endtime").value;
  const uniqid = document.getElementById("displayuniqid");
  const hourswage = document.getElementById("hourswage").value;
  const placeshift = document.getElementById("shiftplace").value;
  let profit = document.getElementById("profit").value;
  const comment = document.getElementById("comment").value;
  const generatebtn = document.querySelector(".adduniqnr");

  generatebtn.click();
  if (starttime > endtime) {
    alert("End time cannot be befor start time");
    return;
  } else if (
    !date ||
    !starttime ||
    !endtime ||
    !uniqid ||
    !hourswage ||
    !placeshift ||
    !comment
  ) {
    alert("Please fill");
    return;
  }

  let data = JSON.parse(localStorage.getItem("My-shift"));
  let loguser = JSON.parse(localStorage.getItem("LoggedUser"));

  let startwork = starttime.split(":");
  let startminute = parseInt(startwork[0] * 60 + parseInt(startwork[1]));
  let endwork = endtime.split(":");
  let endminute = parseInt(endwork[0] * 60 + parseInt(endwork[1]));
  let totalminute = endminute - startminute;
  let totalTime = Math.floor((100 * totalminute) / 60) / 10;
  profit = hourswage * totalTime;

  for (let user of data) {
    if (user.username === loguser.username) {
      let shiftss = [];
      shiftss = user.shifts;
      let shifts = {
        data: "",
        startime: "",
        endtime: "",
        uniqidd: "",
        hourswage: "",
        placeshift: "",
        profit: "",
        comment: "",
      };
      shifts.data = date;
      shifts.startime = starttime;
      shifts.endtime = endtime;
      shifts.uniqidd = uniqid.textContent;
      shifts.hourswage = hourswage;
      shifts.placeshift = placeshift;
      shifts.profit = "$" + profit;
      shifts.comment = comment;
      user.shifts = shiftss;
      shiftss.push(shifts);
      localStorage.setItem("My-shift", JSON.stringify(data));
    }
  }

  display = document.getElementById("displaytabel");

  let newRow = display.insertRow(row);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  let cell6 = newRow.insertCell(5);
  let cell7 = newRow.insertCell(6);
  let cell8 = newRow.insertCell(7);
  let cell9 = newRow.insertCell(8);
  let cell10 = newRow.insertCell(9);

  cell1.innerHTML = date;
  cell2.innerHTML = starttime;
  cell3.innerHTML = endtime;
  cell4.innerHTML = uniqid.textContent;
  cell5.innerHTML = hourswage;
  cell6.innerHTML = placeshift;
  cell7.innerHTML = "$" + profit;
  cell8.innerHTML = comment;
  cell9.innerHTML = '<i class="fa-solid fa-pen-to-square editbtn" "></i>';
  cell10.innerHTML =
    ' <i class="fa-sharp fa-solid fa-trash deletebtn" onclick = "deleteRow(this)" > </i>';

  row++;
  displayBestMonth();
}

//Update modal in local storage

let updatemodalBtn = document.querySelector(".updatebutton");

updatemodalBtn.addEventListener("click", () => {
  console.log(updatemodalBtn);
  let data = JSON.parse(localStorage.getItem("My-shift"));
  let loguser = JSON.parse(localStorage.getItem("LoggedUser")).username;
  for (let modaledit of data)
    if (modaledit.username == loguser) {
      let datamodal = document.getElementById("mydatemodal").value;
      let startmodal = document.getElementById("starttimemodal").value;
      let endmodal = document.getElementById("endtimemodal").value;
      let hoursmodal = document.getElementById("hourswagemodal").value;
      let shiftmodal = document.getElementById("shiftplacemodal").value;
      let profitmodal = document.getElementById("profitmodal").value;
      let commentmodal = document.getElementById("commentmodal").value;
      let uniqid = document.getElementById("modaldisplayuniqid").textContent;
      console.log(uniqid);
      for (let element of modaledit.shifts) {
        if (element.uniqidd === uniqid) {
          element.data = datamodal;
          element.startime = startmodal;
          element.endtime = endmodal;
          element.hourswage = hoursmodal;
          element.placeshift = shiftmodal;
          element.profit = profitmodal;
          element.comment = commentmodal;
          localStorage.setItem("My-shift", JSON.stringify(data));
        }
      }
    }
});

// Load details from Local storage

let dataload = JSON.parse(localStorage.getItem("My-shift"));
let loggedUserLoad = JSON.parse(localStorage.getItem("LoggedUser")).username;
window.addEventListener("load", () => {
  loadTable(dataload, loggedUserLoad);
  displayBestMonth();
});

function loadTable(dataload, loggedUserLoad) {
  for (let user of dataload) {
    if (user.username == loggedUserLoad) {
      for (let shift of user.shifts) {
        if (shift.placeshift) {
          display = document.getElementById("displaytabel");
          let newRow = display.insertRow(row);

          let cell1 = newRow.insertCell(0);
          let cell2 = newRow.insertCell(1);
          let cell3 = newRow.insertCell(2);
          let cell4 = newRow.insertCell(3);
          let cell5 = newRow.insertCell(4);
          let cell6 = newRow.insertCell(5);
          let cell7 = newRow.insertCell(6);
          let cell8 = newRow.insertCell(7);
          let cell9 = newRow.insertCell(8);
          let cell10 = newRow.insertCell(9);

          cell1.innerHTML = shift.data;
          cell2.innerHTML = shift.startime;
          cell3.innerHTML = shift.endtime;
          cell4.innerHTML = shift.uniqidd;
          cell5.innerHTML = shift.hourswage;
          cell6.innerHTML = shift.placeshift;
          cell7.innerHTML = shift.profit;
          cell8.innerHTML = shift.comment;
          cell9.innerHTML =
            '<i class="fa-solid fa-pen-to-square editbtn" "></i>';
          cell10.innerHTML =
            ' <i class="fa-sharp fa-solid fa-trash deletebtn" onclick = "deleteRow(this)" > </i>';
          (' <i class="fa-sharp fa-solid fa-trash deletebtn" onclick = "deleteRow(this)" > </i>');
        }
      }
    }
  }
}

// delete row

function deleteRow(btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//Edit button

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
const tableedit = document.getElementById("displaytabel");

tableedit.addEventListener("click", (e) => {
  if (e.target.classList.contains("editbtn")) {
    let row = e.target.parentElement.parentElement;
    let dateshiftedit = Array.prototype.map.call(
      row.querySelectorAll("td"),
      function (td) {
        return td.innerHTML;
      }
    );
    const data = dateshiftedit[0];
    const startime = dateshiftedit[1];
    const endtime = dateshiftedit[2];
    const uniqid = dateshiftedit[3];
    const haours = dateshiftedit[4];
    const shiftplace = dateshiftedit[5];
    const profit = dateshiftedit[6];
    const comment = dateshiftedit[7];

    const modaldate = document.getElementById("mydatemodal");
    modaldate.value = data;
    const modalstart = document.getElementById("starttimemodal");
    modalstart.value = startime;
    const modalendtime = document.getElementById("endtimemodal");
    modalendtime.value = endtime;
    const modaluniqidd = document.getElementById("modaldisplayuniqid");
    modaluniqidd.textContent = uniqid;
    const modalhours = document.getElementById("hourswagemodal");
    modalhours.value = haours;
    const modalshift = document.getElementById("shiftplacemodal");
    modalshift.value = shiftplace;
    const modalprofit = document.getElementById("profitmodal");
    modalprofit.value = profit;
    const modalcomment = document.getElementById("commentmodal");
    modalcomment.value = comment;

    modal.style.display = "block";
    document
      .querySelector(".modal-content")
      .setAttribute("style", "display: block");
  }
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//logou btn

let logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("click", () => {
  window.location.href = "myshift.html";
});

// Delete data from local storage

window.addEventListener("load", () => {
  setInterval(function () {
    var hours = 1;
    var now = new Date().getTime();
    var setupTime = localStorage.getItem("setupTime");
    if (setupTime == null) {
      localStorage.setItem("setupTime", now);
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.removeItem("LoggedUser");
        localStorage.clear();
        localStorage.setItem("setupTime", now);
        window.location.href = "myshift.html";
      }
    }
  }, 1000);
});

// Clear table // searched data will be display only

function clearTbl() {
  let cleartabel = document.getElementById("displaytabel");
  let rows = cleartabel.rows;

  for (let i = 0; i < rows.length; i++)
    if (i > 0) {
      rows[i].innerHTML = "";
    }
}

// Search

let searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("click", () => {
  clearTbl();
  console.log(searchbtn);
  let data = JSON.parse(localStorage.getItem("My-shift"));
  let loguser = JSON.parse(localStorage.getItem("LoggedUser"));
  let search = document.getElementById("search").value;

  for (let user of data) {
    if (user.username === loguser.username) {
      for (let shift of user.shifts) {
        if (
          shift.placeshift.toLowerCase().includes(search.toLowerCase()) ||
          shift.data.includes(search)
        ) {
        } else {
          Object.getOwnPropertyNames(shift).forEach(function (prop) {
            delete shift[prop];
          });
        }
      }
    }
    loadTable(data, loguser.username);
    console.log(data);
  }
});

// Best month

function displayBestMonth() {
  let data = JSON.parse(localStorage.getItem("My-shift"));
  let loggedUser = JSON.parse(localStorage.getItem("LoggedUser"));

  const firstmonth = document.getElementById("displaymonthprofit");

  let montharray = [];
  let totalmonthprofit = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
  };
  for (let user of data) {
    if (user.username === loggedUser.username) {
      for (let shift of user.shifts) {
        let monthobj = {
          month: "",
          profit: "",
        };
        let startwork = shift.startime.split(":");
        let startminute = parseInt(startwork[0] * 60 + parseInt(startwork[1]));
        let endwork = shift.endtime.split(":");
        let endminute = parseInt(endwork[0] * 60 + parseInt(endwork[1]));
        let totalminute = endminute - startminute;
        let totalTime = Math.floor((100 * totalminute) / 60) / 10;
        let profit = shift.hourswage * totalTime * 1;

        let [year, month, day] = shift.data.split("-");
        let finalMonth = [day, month, year];
        console.log(finalMonth);
        let month1 = finalMonth[1];

        if (finalMonth[1].charAt(0) == "0") {
          finalMonth[1] = finalMonth[1].charAt(1);
        }
        monthobj.month = month1;
        monthobj.profit = profit;
        montharray.push(monthobj);
        console.log(montharray);
      }
    }
  }
  for (let elements of montharray) {
    totalmonthprofit[elements.month] += elements.profit;
  }
  let values = Object.values(totalmonthprofit);
  values.sort((a, b) => {
    return a - b;
  });

  let bestMonth = values[values.length - 1];
  Object.prototype.getKey = function (value) {
    let object = this;
    for (let key in object) {
      if (object[key] == value) return key;
    }
  };
  let x = toMonthName(totalmonthprofit.getKey(bestMonth));

  function toMonthName(monthNumber) {
    const data = new Date();
    data.setMonth(monthNumber - 1);
    return data.toLocaleString("en-US", { month: "long" });
  }
  firstmonth.value = x + "" + "$" + bestMonth;
  console.log(firstmonth);
}
