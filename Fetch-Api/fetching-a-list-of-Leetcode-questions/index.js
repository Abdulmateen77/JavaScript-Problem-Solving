// Function to fetch data from an API endpoint
async function getApiData() {
    //Send a GET request to the API endpoint
    let res = await fetch(
        "https://run.mocky.io/v3/511fa794-6bfb-4c9f-9adb-9e18d62d7003"
    );

    //Parse the response as JSON
    let data = await res.json();

    //Return the JSON data
    return data;
}

//Call the getApiData function to fetch API data
let apiData = await getApiData();

//Function to create a table row element for a question
function getTableRow(title, acRate, difficulty) {
    let tRow = document.createElement("tr");

    //Populate the table row with data
    tRow.innerHTML = `
        <td>${title}</td>
        <td>${acRate}</td>
        <td>${difficulty}</td>
    `;

    return tRow;
}

//Extract the list of questions from the API data
const questionList = apiData.problemsetQuestionList.questions;

//Function to populate the table with question data
function populateTable() {
    let data = document.getElementById("table-body");
    data.innerHTML = "";

    //Loop through each question and create a table row
    questionList.forEach(element => {
        let { title, acRate, difficulty } = element;
        acRate = acRate.toFixed();
        let tRowElement = getTableRow(title, acRate, difficulty);

        //Append the table row to the table body
        data.append(tRowElement);
    });
}

//Populate the table with initial data
populateTable(questionList);

// Function to sort questions by acceptance rate
function sortQuestionsByAcceptanceRate() {
    //Sort the question list by ascending acceptance rate
    let sortedList = questionList.sort((a, b) => a.acRate - b.acRate);

    return sortedList;
}

// Event listener for sorting questions by acceptance rate when header is clicked
let acceptanceHeaderElement = document.querySelector("#questions-table > thead > tr > th:nth-child(2)");

acceptanceHeaderElement.addEventListener('click', function () {
    //Sort the question list by acceptance rate
    let sortedArray = sortQuestionsByAcceptanceRate(questionList);

    //Repopulate the table with sorted data
    populateTable(sortedArray);
});
