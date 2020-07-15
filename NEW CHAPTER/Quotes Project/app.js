const quotes = [
  {
    name: "Author 1",
    quote: "Quote 1",
  },
  {
    name: "Author 2",
    quote: "Quote 2",
  },
  {
    name: "Author 3",
    quote: "Quote 3",
  },
  {
    name: "Author 4",
    quote: "Quote 4",
  },
  {
    name: "Author 5",
    quote: "Quote 5",
  },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
