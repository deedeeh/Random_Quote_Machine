
var sourceQuotes = [
  {
    quote: "Whatever I know how to do, I've already done. Therefore I must always do what I do not know how to do.",
    author: "Eduardo Chillida"
  },
  {
    quote: "The least of things with a meaning is worth more in life than the greatest things without it.",
    author: "Carl Jung"
  },
  {
    quote: "The only thing worse than being talked about is not being talked about.",
    author: "Oscar Wilde"
  },
  {
    quote: "We can control our lives by controlling our perceptions.",
    author: "Bruce Lipton"
  },
  {
    quote: "It is always the simple that produces the marvelous.",
    author: "Amelia Barr"
  },
  {
    quote: "Doubt is not a pleasant condition, but certainty is absurd.",
    author: "Voltaire"
  },
  {
    quote: "Your time is limited; so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other poeple's thinking. Don't let the noise of others' opinions drown out your own inner voice.",
    author: "Steve Jobs"
  },
  {
    quote: "If you have knowledge, let others light their candles in it.",
    author: "Margaret Fuller"
  },
  {
    quote: "The essence of being human is that one does not seek perfection.",
    author: "George Orwell"
  },
  {
    quote: "Real generosity towards the future lies in giving all to the present.",
    author: "Albert Camus"
  },
  {
    quote: "A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan"
  },
  {
    quote: "Man often becomes what he believes himself to be.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The world needs dreamers and the world needs doers. But above all, the world needs dreamers who do.",
    author: "Sarah Ban Breathnach"
  },
  {
    quote: "All misfortune is but a stepping stone to fortune.",
    author: "Henry David Thoreau"
  },
  {
    quote: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    author: "John F. Kennedy"
  },
  {
    quote: "One secret of success in life is for a man to be ready for his opportunity when it comes.",
    author: "Benjamin Disraeli"
  }
];

// Cache DOM references
var wrapperEl = document.getElementById("quotes-wrapper");
var clickBtnEl = document.getElementById("click-btn");
var tweetBtnEl = document.getElementById("tweet-btn");

// Instantiate currentQuotes
var currentQuotes = [];

// This is called the Fisher–Yates Shuffle algorithm
// This *great* article explains it: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// The object `q` is the current quote
// Here we're "destructuring" it to get the values we need
// We use a template literal to simplify the construction of the HTML
function formatQuote(q) {
  const {quote, author} = q;

  return `
    <blockquote class="quote">&#8220; ${quote} &#8221;</blockquote>
    &mdash; ${author}
  `;
}


// Call Array.shift to remove the first value from currentQuotes
// When currentQuotes is empty, clone from sourceQuotes and randomise
function getQuote() {
  if(currentQuotes.length === 0) {
    currentQuotes = shuffle(sourceQuotes.slice());
  }

  const quote = currentQuotes.shift();
  const status = `${quote.quote} - ${quote.author}`;

  tweetBtnEl.href = `https://twitter.com/home?status=${status}`;
  wrapperEl.innerHTML = formatQuote(quote);
}


clickBtnEl.addEventListener("click", getQuote);
window.addEventListener("load", getQuote);
