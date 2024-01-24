const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
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
  "December",
];

// Get HTML elements
const dateElement = document.querySelector("#date");
const addTaskElement = document.querySelector("#addTask");
const taskListElement = document.querySelector("#taskList");

// Get date
const currentDate = new Date();
const month = months[currentDate.getMonth()];
const dayName = days[currentDate.getDay()];
const day = currentDate.getUTCDate();

// Display date
dateElement.innerHTML = `${dayName}, ${month} ${day}`;

let taskCount = 0;

addTaskElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let value = addTaskElement.querySelector("input").value;
  if (value) {
    addTask(value);
  }
});

// TODO: Use localStorage
function addTask(task) {
  let taskItem = `
  <li id="${taskCount}" class="w-full shadow-lg my-1 bg-slate-200 hover:bg-slate-100 transition-colors text-black/90 p-3 rounded-md"><button class="-mb-2" onclick="deleteTask(${taskCount})"><ion-icon name="ellipse-outline"></ion-icon></button> ${task}</li>
  `;
  taskListElement.innerHTML += taskItem;
  taskCount++;
}

function deleteTask(taskId) {
  let taskItem = document.getElementById(taskId);
  taskItem.remove();
}
