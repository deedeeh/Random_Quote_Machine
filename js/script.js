
var quotes = [
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
  }
];

function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  var randomQuotes = quotes[randomNum];
  var wrapper = document.getElementById("quotesWrapper");
  return wrapper.innerHTML = quotesToString(randomQuotes);
}

function quotesToString(quotes) {
  var msg = '<blockquote>&ldquo; ' + quotes.quote + ' &rdquo;</blockquote>';
  msg += '<br/> &mdash; ' + quotes.author;
  return msg;
}

var el = document.getElementById("quotesWrapper");
el.addEventListener('click', getRandomQuote);

// var wrapper = "<div id='quotesWrapper'></div>";
// var quotesSection = document.getElementsByClassName("random-quotes");
// var quotesEl = quotesSection.appendChild(wrapper);
