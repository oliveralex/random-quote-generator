// -----> Treehouse FSJS Techdegree: project 1 - A Random Quote Generator <-----

// Global variables
var storage;
var theQuote;
var html;

// Array of quote tags
const quoteTags = [ 'self growth', 'success', 'business', 'humor', 'politics'];

/* Quotes contains an array of objects that have a Quote, Source, and Tags key referencing the author of the quote.
Some objects may contain a Citation and Year keys with values. 
*/

let quotes = [
    {
        quote: `Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.`,
        source: 'John Wooden',
        tags: quoteTags[0]
    },
    {
        quote: `Success is not final; failure is not fatal: It is the courage to continue that counts.`,
        source: 'Winston S. Churchill',
        tags: `${quoteTags[2]}, ${quoteTags[1]}`
    },
    {
        quote: `Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!`,
        source: 'Billy Connolly',
        tags: quoteTags[3]
    },
    {
        quote: `I am not in this world to live up to other people’s expectations, nor do l feel that the world must live up to mine.`,
        source: 'Fritz Perl',
        tags: quoteTags[0]
    },
    {
        quote: `Better to remain silent and be thought a fool than to speak out and remove all doubt.`,
        source: 'Abraham Lincoln',
        tags: quoteTags[3]
    },
    {
        quote: `Defeat is not the worst of failures. Not to have tried is the true failure.`,
        source: 'George Edward Woodberry',
        tags: `${quoteTags[0]}, ${quoteTags[1]}`
    },
    {
        quote: 'Truth is generally the best vindication against slander.',
        source: 'Abraham Lincoln',
        citation: 'Letter to Edwin Stanton',
        year: '1864',
        tags: `${quoteTags[0]}, ${quoteTags[4]}`
     }
];  


/* getRandomQuote function returns a random quote from the "Quotes" array.*/
const getRandomQuote = () => {
        let randomNumber = Math.floor(Math.random() * quotes.length);
        storage += randomNumber;
        return `${quotes[randomNumber].quote}`;
};

/* Random Color Generator */
const random_color = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
 };

 /* When 'Show Another Quote' is clicked, this function will print a random quote onto the index.html file. */
 const printQuote = () => {
    storage = 0;
    theQuote = getRandomQuote();
    html = '';
  html += `<p class="quote"> ${theQuote} </p>`;
    if (quotes[storage].source)  html += `<p class="source"> ${quotes[storage].source}`;
    if (quotes[storage].citation) html += `<span class="citation"> ${quotes[storage].citation}</span>`;
    if (quotes[storage].year) html += `<span class="year"> ${quotes[storage].year} </span>`;
    if (quotes[storage].tags) html += `<br> <span class="tags"> ${quotes[storage].tags}</span>`;
  html += `</p>`;
  document.getElementById("quote-box").innerHTML = html;
  random_color();
}; 

/*
When the  Show another quote` button is clicked, the event listener 
below will be triggered, and it will call, or `invoke`, the `printQuote` 
function.
In case there is no ' button click ' the Quote will be refreshed every 25 seconds.
*/

if (!document.getElementById('loadQuote').addEventListener(`click`, printQuote, false)){
    setInterval(printQuote, 25000);
}