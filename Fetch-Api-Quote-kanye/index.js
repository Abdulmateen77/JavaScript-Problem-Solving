function quoteKenye(quote) {
  let quoteofKenye = document.getElementById("quote");

  const newQuote = document.createElement("h4");

  newQuote.innerHTML = quote;

  quoteofKenye.appendChild(newQuote);
}

function fetchQuote() {
  const url = "https://api.kanye.rest/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { quote } = data;
      quoteKenye(quote);
    });
}

fetchQuote();
