// Select the elements
const input = document.querySelector("#task");
const btn = document.querySelector(".btn");
const taskList = document.querySelector("ul");
const deleteAllBtn = document.querySelector(".deleteAll");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
deleteAllBtn.addEventListener("click", () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

function addTask() {
  const task = input.value.trim();
  if (task) {
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = task;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    input.value = "";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });
  }
}
