// script.js
document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.querySelector("form");
  const taskList = document.querySelector("tbody");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskInput = document.getElementById("task");
    const prioritySelect = document.getElementById("priority");

    const taskName = taskInput.value;
    const taskPriority = prioritySelect.value;

    if (taskName && taskPriority) {
      const row = document.createElement("tr");
      const taskCell = document.createElement("td");
      const priorityCell = document.createElement("td");
      const favCell = document.createElement("td");

      taskCell.textContent = taskName;
      priorityCell.textContent = taskPriority;
      favCell.textContent = "Favourite";

      row.appendChild(taskCell);
      row.appendChild(priorityCell);
      row.appendChild(favCell);

      if (taskPriority === "High") {
        row.style.backgroundColor = "red";
      } else {
        row.style.backgroundColor = "green";
      }

      taskList.appendChild(row);

      taskInput.value = "";
      prioritySelect.value = "";
    }
  });
});
