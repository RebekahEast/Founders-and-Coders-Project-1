const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();

const currentMonth = currentDate.getMonth(); 

const currentYear = currentDate.getFullYear();

const dateString = currentDayOfMonth + " - " + (currentMonth + 1) + " - " + currentYear;
// + 1 because Jan is not 0

document.getElementById("date").innerHTML = dateString;