const select = document.getElementById("birthday");

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