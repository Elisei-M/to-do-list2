document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  initSortable();
});

const taskTitle = document.getElementById("taskTitle");
const taskDueDate = document.getElementById("taskDueDate");
const taskPriority = document.getElementById("taskPriority");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const searchTask = document.getElementById("searchTask");
const filterPriority = document.getElementById("filterPriority");
const themeToggle = document.getElementById("themeToggle");

addTaskBtn.addEventListener("click", addTask);
searchTask.addEventListener("input", filterTasks);
filterPriority.addEventListener("change", filterTasks);
themeToggle.addEventListener("click", toggleTheme);

function addTask() {
  const title = taskTitle.value.trim();
  const dueDate = taskDueDate.value;
  const priority = taskPriority.value;

  if (title === "") return;

  const task = {
    id: Date.now(),
    title,
    dueDate,
    priority,
    completed: false,
  };

  createTaskElement(task);
  saveTask(task);
  clearInputs();
}

function clearInputs() {
  taskTitle.value = "";
  taskDueDate.value = "";
  taskPriority.value = "low";
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.classList.add("animate__animated", "animate__fadeIn");
  li.setAttribute("data-id", task.id);
  li.setAttribute("data-priority", task.priority);

  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");

  const titleSpan = document.createElement("span");
  titleSpan.classList.add("title");
  titleSpan.textContent = task.title;

  const meta = document.createElement("div");
  meta.classList.add("task-meta");
  meta.textContent = `Due: ${task.dueDate || "N/A"} | Priority: ${task.priority}`;

  taskInfo.appendChild(titleSpan);
  taskInfo.appendChild(meta);
  li.appendChild(taskInfo);

  // Buton de editare
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Editează";
  li.appendChild(editBtn);

  // Buton de ștergere
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Șterge";
  li.appendChild(deleteBtn);

  // Toggle task complet la click (exceptând click-ul pe butoanele de ștergere/editare)
  li.addEventListener("click", (e) => {
    if (e.target === deleteBtn || e.target === editBtn) return;
    li.classList.toggle("completed");
    updateTaskStatus(task.id, li.classList.contains("completed"));
  });

  // Eveniment pentru butonul de editare
  editBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (editBtn.textContent === "Editează") {
      // Transformă titlul într-un input
      const input = document.createElement("input");
      input.type = "text";
      input.value = titleSpan.textContent;
      input.className = "edit-input";
      taskInfo.replaceChild(input, titleSpan);
      editBtn.textContent = "Salvează";
    } else {
      // Salvează modificările
      const inputField = taskInfo.querySelector("input.edit-input");
      if (inputField.value.trim() === "") {
        alert("Titlul nu poate fi gol!");
        return;
      }
      titleSpan.textContent = inputField.value;
      taskInfo.replaceChild(titleSpan, inputField);
      editBtn.textContent = "Editează";
      updateTaskTitle(task.id, titleSpan.textContent);
    }
  });

  // Eveniment pentru butonul de ștergere cu confirmare
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (confirm("Ești sigur că vrei să ștergi acest task?")) {
      li.classList.add("animate__animated", "animate__fadeOut");
      li.addEventListener("animationend", () => {
        li.remove();
        deleteTask(task.id);
      });
    }
  });

  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = getTasksFromStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskStatus(id, completed) {
  const tasks = getTasksFromStorage();
  const updatedTasks = tasks.map((task) => {
    if (task.id == id) {
      task.completed = completed;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function updateTaskTitle(id, newTitle) {
  const tasks = getTasksFromStorage();
  const updatedTasks = tasks.map((task) => {
    if (task.id == id) {
      task.title = newTitle;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function deleteTask(id) {
  const tasks = getTasksFromStorage();
  const updatedTasks = tasks.filter((task) => task.id != id);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function loadTasks() {
  const tasks = getTasksFromStorage();
  tasks.forEach((task) => {
    createTaskElement(task);
    // Dacă task-ul era complet, adaugă clasa
    if (task.completed) {
      const li = document.querySelector(`li[data-id='${task.id}']`);
      if (li) li.classList.add("completed");
    }
  });
}

function getTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function filterTasks() {
  const searchText = searchTask.value.toLowerCase();
  const selectedPriority = filterPriority.value;
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach((task) => {
    const title = task.querySelector("span.title").textContent.toLowerCase();
    const metaText = task.querySelector(".task-meta").textContent.toLowerCase();

    let matchesSearch = title.includes(searchText);
    let matchesPriority =
      selectedPriority === "all" || metaText.includes(`priority: ${selectedPriority}`);

    if (matchesSearch && matchesPriority) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
}

// Activează drag & drop pentru reordonare folosind SortableJS
function initSortable() {
  new Sortable(taskList, {
    animation: 150,
    onEnd: function () {
      // Actualizează ordinea în localStorage după reordonare
      const updatedTasks = [];
      document.querySelectorAll("#taskList li").forEach((li) => {
        const id = li.getAttribute("data-id");
        const tasks = getTasksFromStorage();
        const task = tasks.find((t) => t.id == id);
        if (task) updatedTasks.push(task);
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
  });
}
