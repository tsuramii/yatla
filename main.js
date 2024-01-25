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

const getElement = (id) =>
  typeof id === "number"
    ? document.getElementById(id)
    : document.querySelector(`#${id}`);

const currentDate = new Date();
const [month, dayName, day] = [
  months[currentDate.getMonth()],
  days[currentDate.getDay()],
  currentDate.getUTCDate(),
];

getElement("date").innerHTML = `${dayName}, ${month} ${day}`;

getElement("addTask").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = getElement("addTask").querySelector("input").value;
  value && addTask(value);
});

const tasks = { ...localStorage };
let taskCount = localStorage.length;

const taskListItem = (taskId, taskValue) =>
  `<li id="${taskId}" class="w-full shadow-lg my-1 bg-slate-200 hover:bg-slate-100 transition-colors text-black/90 p-3 rounded-md"><button class="-mb-2" onclick="deleteTask(${taskId})"><ion-icon name="ellipse-outline"></ion-icon></button> ${taskValue}</li>`;

Object.entries(tasks).forEach(
  ([taskId, taskValue]) =>
    (getElement("taskList").innerHTML += taskListItem(taskId, taskValue))
);

function addTask(task) {
  getElement("taskList").innerHTML += taskListItem(taskCount, task);
  localStorage.setItem(taskCount++, task);
}

function deleteTask(taskId) {
  const taskItem = getElement(taskId);
  localStorage.removeItem(taskId);
  taskItem.remove();
}
