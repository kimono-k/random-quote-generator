console.log('test');

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Objects inside the quotes array.
const quotes = [
  { quote: `Words aren't the only way to tell someone how you feel.`, source: `Tifa Lockhart`},
  { quote: `So what if it seems hopeless? If it were me. I still wouldn't give up. Embrace your dreams`, source: `Zack Fair` },
  { quote: `I have a dream.`, source: `Martin Luther King Jr.`, citation: `American Rhethoric`, year: `1963` },
  { quote: `Life is not a problem to be solved, but a reality to be experienced.`, source: `Soren Kierkegaard` },
  { quote: `It's not a question of can or can't. There are some things in life you just do.`, source: `Lightning Farron` }
];

// test to see if I can print the quotes variable.
// console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // Gets random number between 0 and quotes.length which is 4.
  const randomNumber = Math.floor( Math.random() * quotes.length ) + 0;

  // empty variable to use in the for loop.
  let randomIndex;
  
  // Gets all the objects in the array.
  for ( let i = 0; i < quotes.length; i++ ) { 
    // Random array index gets declarated in the randomIndex variable.
    randomIndex = quotes[randomNumber]; 
    // note to myself: variable is set, overwrites the same value.
  }
  // returns random index element.
  return randomIndex; 
}

/***
 * `printQuote` function
***/

function printQuote() {
  // Function call to the getRandomQuote function.
  let getTheRandomQuoteFunction = getRandomQuote();

  // Stores the random object from the getRandomQuote function into the html tags.
  let html = `
    <p class="quote">${getTheRandomQuoteFunction.quote}</p>
    <p class="source">${getTheRandomQuoteFunction.source}
  `;

  // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
  // If the citation property is inside the quotes array then put span tags and the citation property into the span tags.
  if ( "citation" in getTheRandomQuoteFunction ) {
    html += `<span class="citation">${getTheRandomQuoteFunction.citation}</span>`;
  }

  // If the year property is inside the quotes array then put span tags and the year property into the span tags.
  if ( "year" in getTheRandomQuoteFunction ) {
    html += `<span class="year">${getTheRandomQuoteFunction.year}</span>`;
  }

  // closing the second <p> tag.
  html += `
    </p>
  `;

  // Selects the id quote-box in the HTML file and stores the html strings with its modified child tags e.g. <span> in the div id.
  document.getElementById('quote-box').innerHTML = html;

  // prints a random quote the console.
  console.log(getTheRandomQuoteFunction); 
}

// call the printQuote function so that the default quote won't display.
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);