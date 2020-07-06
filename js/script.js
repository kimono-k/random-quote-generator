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
// Why do objects in arrays only display one time when you loop through the array with a for loop?
const quotes = [
  { quote: `"Words aren't the only way to tell someone how you feel."`, source: `- Tifa Lockhart` },
  { quote: `"So what if it seems hopeless? If it were me. I still wouldn't give up. Embrace your dreams"`, source: `- Zack Fair` },
  { quote: `"I have a dream."`, source: `- Martin Luther King Jr.` },
  { quote: `"Life is not a problem to be solved, but a reality to be experienced."`, source: `- Soren Kierkegaard` },
  { quote: `"It's not a question of can or can't. There are some things in life you just do."`, source: `- Lightning Farron` }
];

// test to see if I can print the quotes variable.
// console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomNumber = Math.floor( Math.random() * quotes.length ) + 0;

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let randomIndex;
  
  for ( let i = 0; i < arr.length; i++ ) {
    randomIndex = arr[randomNumber]; // variable is set, overwritten the same value.
    // return all quotes
    // randomIndex += arr[i];
  }

  // 3. Return the variable storing the random quote object
  console.log(randomNumber); // logs index number.
  console.log(randomIndex); //  logs the object.
  return randomIndex; 
}

const randomQuote = getRandomQuote(quotes); 


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);