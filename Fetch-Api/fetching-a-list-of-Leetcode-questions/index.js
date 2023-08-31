async function getApiData(){
    let res = await fetch(
        "https://run.mocky.io/v3/511fa794-6bfb-4c9f-9adb-9e18d62d7003"
        
    );

    let data = await res.json();

    return data;

}

let apiData = await getApiData();

function getTableRow(title,acRate, difficulty){

    let tRow = document.createElement("tr");

    tRow.innerHTML = `
            <td>${title}</td>
    
            <td>${acRate}</td>
    
            <td>${difficulty}</td>
    
    `;

    return tRow;
}


const questionList = apiData.problemsetQuestionList.questions

//console.log(questionData[5].title)

function populateTable(){
    let data = document.getElementById("table-body");
    data.innerHTML = "";

    questionList.forEach(element => {
        
        let {title, acRate, difficulty} = element;
        acRate = acRate.toFixed();
        let tRowElement = getTableRow(title,acRate,difficulty);

        data.append(tRowElement);
    });
}

populateTable(questionList);


function sortQuestionsByAcceptanceRate(){

    let sortedList = questionList.sort((a,b) => a.acRate - b.acRate);

    return sortedList;

}

let acceptanceHeaderElement = document.querySelector("#questions-table > thead > tr > th:nth-child(2)");


acceptanceHeaderElement.addEventListener('click', function() {

    let sortedArray = sortQuestionsByAcceptanceRate(questionList);

    populateTable(sortedArray);

})
