
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
var wrapperEl = document.getElementById("quotesWrapper");
var clickBtnEl = document.getElementById("clickBtn");
var tweetBtnEl = document.getElementById("tweet-btn");

// Instantiate currentQuotes
var currentQuotes = [];


function getRandomNum() {
  var randomNum = Math.floor(Math.random() * (quotes.length - 1));
  return randomNum;
}

function refreshRepeated() {
  if (repeatedIndex.length == quotes.length) {
    repeatedIndex = [];
  }
}

function getRandomQuote() {
  // generate a random num
  var randomIndex = getRandomNum();
  console.log("first random index", randomIndex)
  repeatedIndex.push(randomIndex);
  // pluck quote
  var randomQuotes;
  randomQuotes = quotes[randomIndex];
  wrapperEl.innerHTML = quotesToString(randomQuotes);
  // check if next random number is repeated
  randomIndex = getRandomNum();
  console.log("second random index", randomIndex)
  if (repeatedIndex.indexOf(randomIndex) === -1) {
    randomQuotes = quotes[randomIndex];
    wrapperEl.innerHTML = quotesToString(randomQuotes);
  } else {
    console.log("hi");
  }
  refreshRepeated();
}

function quotesToString(quotes) {
  var msg = "<blockquote>";
  msg += "&#8220; " + quotes.quote + " &#8221;";
  msg += "</blockquote>";
  msg += "<br/> &mdash; " + quotes.author;
  return msg;
}

function homePageOnLoad() {
  return wrapperEl.innerHTML = quotesToString(quotes[0]);
}

clickBtnEl.addEventListener('click', getRandomQuote);
window.addEventListener("load", homePageOnLoad);
