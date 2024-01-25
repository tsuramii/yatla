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

const dateElement = document.querySelector("#date");
const addTaskElement = document.querySelector("#addTask");
const taskListElement = document.querySelector("#taskList");

const currentDate = new Date();
const [month, dayName, day] = [
  months[currentDate.getMonth()],
  days[currentDate.getDay()],
  currentDate.getUTCDate(),
];

dateElement.innerHTML = `${dayName}, ${month} ${day}`;

addTaskElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = addTaskElement.querySelector("input").value;
  value && addTask(value);
});

const tasks = { ...localStorage };
let taskCount = localStorage.length;

for (const [taskId, taskValue] of Object.entries(tasks)) {
  taskListElement.innerHTML += `<li id="${taskId}" class="w-full shadow-lg my-1 bg-slate-200 hover:bg-slate-100 transition-colors text-black/90 p-3 rounded-md"><button class="-mb-2" onclick="deleteTask(${taskId})"><ion-icon name="ellipse-outline"></ion-icon></button> ${taskValue}</li>`;
}

function addTask(task) {
  taskListElement.innerHTML += `<li id="${taskCount}" class="w-full shadow-lg my-1 bg-slate-200 hover:bg-slate-100 transition-colors text-black/90 p-3 rounded-md"><button class="-mb-2" onclick="deleteTask(${taskCount})"><ion-icon name="ellipse-outline"></ion-icon></button> ${task}</li>`;
  localStorage.setItem(taskCount, task);
  taskCount++;
}

function deleteTask(taskId) {
  const taskItem = document.getElementById(taskId);
  localStorage.removeItem(taskId);
  taskItem.remove();
}
