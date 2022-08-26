/*let key = "#"; */
let n = document.querySelector(".pad");
let g = document.querySelector(".notepad");

let now = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let timeString = `${months[
  now.getMonth()
]} ${now.getDate()}`;

g.innerHTML = `Summary of ${timeString} Quiz. (Delete this whole text and Type here and then take screenshot of the page)`;

n.addEventListener("input", e => {
  localStorage.setItem(key, n.value);
});