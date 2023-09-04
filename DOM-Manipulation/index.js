let heading = document.getElementsByTagName("h1");

let Firsth1Element = heading[0];

Firsth1Element.innerText = "Practicing DOM Manipulation!";


console.log(Firsth1Element.innerText)

const para = document.createElement("p");

para.innerText = "innerText property refers to the text inside an element";

document.body.appendChild(para);


function addNewFact(factText){
    const ParaElement = document.createElement("p");

    ParaElement.innerText = factText;

    const divElement = document.getElementById("facts-list");

    divElement.appendChild(ParaElement);
}


Execute the function with the 1st fact

addNewFact("innerText property refers to the text inside an element");

Execute the function with the 2nd fact

addNewFact("append() or appendChild() methods can add a new child element");

const divElement = document.getElementById("facts-list")

divElement.innerHTML = "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>"


//const tableID = document.getElementById("table-div")

//tableID.innerHTML = `

//<table border="1" width="400px"> 

  //  <thead> 

    //    <tr>

      //      <td>Id</td>

        //    <td>Name</td>

        //</tr>

    //</thead>

    //<tbody>

      //  <tr>

        //    <td>1</td>

       // <td>Ramesh</td>

       // </tr>

    //</tbody>

//</table>
//`;



//function loadTable() {

    // Create <table> element with styles
  
  //  let table = document.createElement("table");
  
  
    //table.setAttribute("border", "solid");
  
    //table.setAttribute("width", "400px");
  
  
    // Create header row and append it to the <table> element
  
    //let thead = document.createElement("thead");
  
    //thead.innerHTML = `
  
      //<tr>
  
        //  <th>Id</th>
  
          //<th>Name</th>
  
      //</tr>
  
    //`;
  
    //table.append(thead);
  
  
    // Create body element
  
    //let tbody = document.createElement("tbody");
  
  
    // Create a table row and append it to the body
  
    //let tRow = document.createElement("tr");
  
  
   // tRow.innerHTML = `
  
     // <td>1</td>
  
      //<td>Rajesh</td>
  
    //`;
  
  
    // Append <tr> element to <tbody>
  
    /*tbody.appendChild(tRow);
  
  
    // Append <tbody> element to <table>
  
    table.appendChild(tbody);
  
  
    // Set newly created <table> element inside the div container
  
    document.getElementById("table-div").append(table);
  
  }
  
  
  loadTable() */

/*function getStyledTable() {
    
    let table = document.createElement("table");
    table.setAttribute("border", "solid");
    table.setAttribute("width", "400px");
    
    return table
}*/

/*function getTableHeader(){
    let thead = createElement("thead");

    thead.innerHTML =  `

    <tr>

        <th>Id</th>

        <th>Name</th>

    </tr>

  `;

  return thead;
}

  
function loadtablerefactored(){

    const table = getStyledTable();

    const thead = getTableHeader();

    table.append(thead)

     // Create body element

    let tbody = document.createElement("tbody");


    // Create a table row and append it to the body

    let tRow = getStudentTableRow("1", "Ramesh");


    // Append <tr> element to <tbody>

    tbody.appendChild(tRow);


    // Append <tbody> element to <table>

    table.appendChild(tbody);

    document.getElementById("table-div").append(table);
}

loadtablerefactored() */


//console.log(students[0].name)

function getStudentTableRow(id, name) {

    let tRow = document.createElement("tr");
  
  
    tRow.innerHTML = `
  
      <td>${id}</td>
  
      <td>${name}</td>
  
    `;
  
  
    return tRow;
  
  }
  
function loadTableFromJson(){
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
    
    // Set newly created <table> element inside the div container
    
    document.getElementById("table-div").append(table);

    
    for (let i = 0; i < students.length; i++) {

        let currentStudent = students[i];
    
    
        // Create a table row and append it to the body
    
        let tRow = getStudentTableRow(currentStudent.id, currentStudent.name);
    
    
        // Append <tr> element to <tbody>
    
        tbody.appendChild(tRow);
    
    }

    table.appendChild(tbody)
  
}

loadTableFromJson()
