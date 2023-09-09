// Get the reference to the HTML element with the id "toDo"
const todo = document.getElementById("toDo");

// Get the current date in a specific format
const date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
});

// Set the innerHTML of the "toDo" element to include a centered heading with "Todo"
todo.innerHTML = `
<h1 style="text-align: center;">Todo</h1>
`;

// Create a new HTML element for displaying the current date
const time = document.createElement("date");

// Set the innerHTML of the "date" element to display the formatted date
time.innerHTML = `<h2 style="text-align: center;" >${date}</h2>`;

// Append the "date" element to the "toDo" element
todo.appendChild(time);

// Get references to the form, input, and list
const todoForm = document.getElementById("todo-form"); // Form element
const todoInput = document.getElementById("todo-input"); // Input element
const todoList = document.getElementById("todo-list"); // List element
const clearAllButton = document.getElementById("clear-all"); // Clear All button

// Function to create a new todo item
function createTodoItem(text) {
  const li = document.createElement("li"); // Create a list item
  li.className = "todo-item"; // Add a CSS class to the list item
  const checkbox = document.createElement("input"); // Create a checkbox input element
  checkbox.type = "checkbox"; // Set the type of the checkbox
  const label = document.createElement("label"); // Create a label element
  label.textContent = text; // Set the text content of the label to the todo text
  li.appendChild(checkbox); // Append the checkbox to the list item
  li.appendChild(label); // Append the label to the list item
  todoList.appendChild(li); // Append the list item to the todo list

  // Add event listener to the checkbox to toggle the "completed" class on the label
  checkbox.addEventListener("change", function () {
    label.classList.toggle("completed", checkbox.checked);
  });
}

// Function to add a new todo when the form is submitted
function addTodo(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const todoText = todoInput.value.trim(); // Get the trimmed value from the input
  if (todoText !== "") { // Check if the todo text is not empty
    createTodoItem(todoText); // Create a new todo item
    todoInput.value = ""; // Clear the input field
    todoInput.focus(); // Set focus back to the input field
  }
}

// Event listeners
todoForm.addEventListener("submit", addTodo); // Listen for form submission
clearAllButton.addEventListener("click", function () {
  todoList.innerHTML = ""; // Clear all todo items when the "Clear All" button is clicked
});
