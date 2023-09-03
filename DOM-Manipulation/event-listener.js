// Creating a "Show Table" Button
// Create a button element and set its inner HTML
const button = document.createElement("button");
button.innerHTML = `Show Table`;

// Append the button to the document body
document.body.append(button);

// Select the button element
const showButton = document.querySelector("button");

// Add a click event listener to the button
showButton.onclick = function () {
  // Call the loadTableFromJson function when the button is clicked
  loadTableFromJson();
};

// Create an inputText element
const inputText = document.createElement("inputText");

// Set the inner HTML of the inputText element, including an input field and a display div
inputText.innerHTML = `
<input type="text" name="name" id="name" placeholder="Enter your name">
<div id="name-display"></div>
`;

// Append the inputText element to the document body
document.body.append(inputText);

// Select the input element
let nameInput = document.querySelector("input");

// Add an input event listener to the input element
nameInput.addEventListener("input", function (event) {
  // Get the input text from the event
  let inputText = event.target.value;

  // Select the name-display div
  let nameDisplayDiv = document.querySelector("#name-display");

  // Set the text content of the name-display div to the input text
  nameDisplayDiv.innerText = inputText;
});
