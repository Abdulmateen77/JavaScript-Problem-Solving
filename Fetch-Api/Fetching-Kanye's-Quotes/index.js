//Function to add a Kanye West quote to the HTML file
function quoteKenye(quote) {
  //Get the element with the id "quote" from the HTML
  let quoteofKenye = document.getElementById("quote");

  //Create a new <h5>  element to hold the quote
  const newQuote = document.createElement("h5");

  //Set the inner HTML of the new <h4> element to the received quote
  newQuote.innerHTML = quote;

  //Append the new <h4> element with the quote to the "quote" element in the HTML
  quoteofKenye.appendChild(newQuote);
}

//Function to fetch a quote from the Kanye West API
function fetchQuote() {
  //URL for the Kanye West API
  const url = "https://api.kanye.rest/";

  //Fetch data from the API using fetch()
  fetch(url)
    //When the data is received, parse it as JSON
    .then((res) => res.json())
    // When JSON data is parsed, access the "quote" property and pass it to quoteKenye()
    .then((data) => {
      const { quote } = data;
      quoteKenye(quote);
    });
}

// Call the fetchQuote() function to initiate the fetching and displaying of a quote
fetchQuote();
