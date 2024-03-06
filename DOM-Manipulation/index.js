//Select the first <h1> element on the page
let heading = document.getElementsByTagName("h1");
let Firsth1Element = heading[0];

//Change the text content of the first <h1> element
Firsth1Element.innerText = "Practicing DOM Manipulation!";

//Log the updated text content of the first <h1> element
console.log(Firsth1Element.innerText);

//Create a new <p> element and set its text content
const para = document.createElement("p");
para.innerText = "innerText property refers to the text inside an element";

//Append the new <p> element to the <body>
document.body.appendChild(para);

//Function to add a new fact to the "facts-list" div
function addNewFact(factText) {
  const ParaElement = document.createElement("p");
  ParaElement.innerText = factText;

  // Get the "facts-list" div and append the new <p> element to it
  const divElement = document.getElementById("facts-list");
  divElement.appendChild(ParaElement);
}

// Execute the function with the 1st fact
addNewFact("innerText property refers to the text inside an element");

// Execute the function with the 2nd fact
addNewFact("append() or appendChild() methods can add a new child element");

// Get the "facts-list" div and set its innerHTML with multiple <p> elements
const divElement = document.getElementById("facts-list");
divElement.innerHTML =
  "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>";

// Get the "table-div" div and set its innerHTML with a table structure
const tableID = document.getElementById("table-div");
tableID.innerHTML = `
  <table border="1" width="400px">
    <thead>
      <tr>
        <td>Id</td>
        <td>Name</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Ramesh</td>
      </tr>
    </tbody>
  </table>
`;

// Function to create and return a table row with student ID and name
function getStudentTableRow(id, name) {
  let tRow = document.createElement("tr");
  tRow.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
  `;
  return tRow;
}

// Function to load a table from JSON data (assuming 'students' array is defined elsewhere)
function loadTableFromJson() {
  // Create <table> element with styles
  let table = document.createElement("table");
  table.setAttribute("border", "solid");
  table.setAttribute("width", "400px");

  // Create header row and append it to the <table> element
  let thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
  `;
  table.append(thead);

  // Create body element
  let tbody = document.createElement("tbody");

  // Loop through the 'students' array and create table rows
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];

    // Create a table row and append it to the body
    let tRow = getStudentTableRow(currentStudent.id, currentStudent.name);

    // Append <tr> element to <tbody>
    tbody.appendChild(tRow);
  }

  // Append the <tbody> element to the <table>
  table.appendChild(tbody);

  // Set the newly created <table> element inside the "table-div" container
  document.getElementById("table-div").append(table);
}

// Call the loadTableFromJson function to populate the table
loadTableFromJson();
