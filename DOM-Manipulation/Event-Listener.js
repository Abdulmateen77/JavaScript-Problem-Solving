const button = document.createElement("button")

button.innerHTML = ` Show Table`
document.body.append(button)

const showButton = document.querySelector("button")

showButton.onclick = function(){
    loadTableFromJson();
};

const inputText = document.createElement("inputText")

inputText.innerHTML = `
<input type="text" name="name" id="name" placeholder="Enter your name">

<div id="name-display"></div>
`

document.body.append(inputText);


let nameInput = document.querySelector("input");


nameInput.addEventListener("input", function (event) {

  let inputText = event.target.value;


  let nameDisplayDiv = document.querySelector("#name-display");

  nameDisplayDiv.innerText = inputText;

});
