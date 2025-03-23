const select = document.getElementById("day");

  for (let day = 1; day <= 31; day++) {
    let option = document.createElement("option");
    option.value = day;
    option.textContent = day;
    select.appendChild(option);
  }

const select2 = document.getElementById("month");

for (let month = 1; month <= 12; month++) {
    let option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    select2.appendChild(option);
}

const select3 = document.getElementById("year");
let curYear = new Date().getFullYear()

for (let year = 1900; year <= curYear; year++) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    select3.appendChild(option);
}

const submit = document.getElementById("submit-btn");
const forename = document.getElementById("Forename");
const surname = document.getElementById("Surname");
const email = document.getElementById("email");
const pass = document.getElementById("Password");

submit.onclick = function() {
  // Check if any input field is empty
  if (!forename.value || !surname.value || !email.value || !pass.value) {
    alert("Please fill in all fields before submitting!");
  } else {
    // If all fields are filled, clear the page
    document.getElementById("signin-form").innerHTML = "";
  }
};