# Random Quote Generator
Create an array of objects to store the data for your quotes

In your js/script.js file, start by creating a variable named quotes and setting it equal to an empty array.
Add a minimum of five empty objects to the quotes array.
JavaScript Reminders:

Add the following properties to each quote object:
quote - a string containing the text of a quote.
source - a string containing the origin or source of the quote. For example: "Mark Twain", "Traditional Irish proverb”, "Anonymous".
Add the following properties to at least one quote object:
citation - a string identifying the venue of the quote. For example, a speech, publication, movie.
year - a number identifying the year of the quote.
JavaScript Reminders:

An object’s key/value pairs are separated by a comma.
An object's key/value pairs are defined like so:
quote: ‘There's no place like home.’
Testing your array of quote objects

Below the array of quote objects, add console.log(quotes);.
Shortcut to open the Chrome console: Ctrl + Shift + J (on Windows) or Ctrl + Option + J (on Mac)
Check out your objects in the console by clicking on them in the console to open them up and inspect their properties.
Consider deleting your log statements as you no longer need them because they can quickly accumulate and clutter up your code, making it harder to manage.
Create the getRandomQuote function

Create a function named getRandomQuote.
In the function body:
Create a variable to store a random number between zero and the length of the quotes array. See the Project Resources section for a link to the related course video.
Use the quotes array, box notation and the random number variable to return a random quote.
Use console.log(getRandomQuote()); immediately after the getRandomQuote function definition to test and display the random quote in the console.
JavaScript Reminders:

Array indexes start at zero.
Box notation uses brackets to target an array index like so, array[0].
Create the printQuote function

Create a function named printQuote.
In the function body:
Create a variable and set it equal to getRandomQuote(). This variable will hold the random quote that you will print to the screen.
Create a variable and set it equal to an empty string, ’’. This variable will eventually hold the entire string of HTML and quote properties. Be sure to use single quotes for your strings to avoid quote mark confusion, since HTML always uses double quotes for element attributes like class names.
Using the random quote variable, and the example HTML template below, concatenate the following strings to the empty string variable.
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>

Start with a string that contains:
An opening p tag with a class equal to “quotes”.
The quote property of the quote object in the random quote variable.
A closing p tag.
Next, add a string that contains:
An opening p tag with a class equal to “source”.
The source property of the quote object in the random quote variable.
Do not add a closing p tag for this one yet.
Use an if statement to test if the quote object has a citation property, and if so, concatenate a string that contains:
An opening span tag with a class equal to “citation”.
The citation property of the quote object in the random quote variable.
A closing span tag.
Use an if statement to test if the quote object has a year property, and if so, concatenate a string that contains:
An opening span tag with a class equal to “year”.
The year property of the quote object in the random quote variable.
A closing span tag.
Now concatenate a closing p tag to the HTML string.
A console.log(); with the HTML string variable passed in can be used here to test and display the HTML string in the console. But the “Show Another Quote” button will need to be clicked to call this function.
Lastly, target the div with the id of quote-box, and set its innerHTML equal to the HTML string that’s been assembled.
Now when you click the “Show Another Quote” button, a new quote should be displayed on the page, thanks to the event listener that’s been provided for you at the end of the js/script.js file.
JavaScript Reminders:

Tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
Use the new properties to conditionally add to the HTML string that gets printed to the screen.
Random background color

When the quote changes, randomly change the background color of the page.
Auto-refresh the quote

After a set amount of time, like 20 to 30 seconds, print a new quote to the page. Timing methods like setInterval() and setTimeout() are helpful here. see the links in the “Additional Resources” section.
NOTE: Getting an "Exceed Expectations" grade.
