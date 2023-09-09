const todo = document.getElementById("toDo");

const date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
});

todo.innerHTML = `
<h1 style="text-align: center;">Todo</h1>
`;

const time = document.createElement("date");

time.innerHTML = `<h2 style="text-align: center;" >${date}</h2>`;

todo.appendChild(time);

// Get references to the form, input, and list
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const clearAllButton = document.getElementById("clear-all");

// Function to create a new todo item
function createTodoItem(text) {
  const li = document.createElement("li");
  li.className = "todo-item";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.textContent = text;
  li.appendChild(checkbox);
  li.appendChild(label);
  todoList.appendChild(li);

  // Add event listener to checkbox
  checkbox.addEventListener("change", function () {
    label.classList.toggle("completed", checkbox.checked);
  });
}

// Function to add a new todo
function addTodo(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    createTodoItem(todoText);
    todoInput.value = "";
    todoInput.focus();
  }
}

// Event listeners
todoForm.addEventListener("submit", addTodo);
clearAllButton.addEventListener("click", function () {
  todoList.innerHTML = "";
});
