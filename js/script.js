/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  { quote: `Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.`,
        source: 'John Wooden'},
  { quote: `You grow up the day you have your first real laugh–at yourself.`,
        source: 'Ethel Barrymore'},
  { quote: `I honestly think it is better to be a failure at something you love than to be a success at something you hate.`,
        source: 'George Burns'},
  { quote: `Everyone who’s ever taken a shower has an idea. It’s the person who gets out of the shower, dries off and does something about it who makes a difference`,
        source: 'Nolan Bushnell'},
  { quote: `The ‘good life’ begins when you stop wanting a better one`,
          source: 'Nkosiphambili E. Molapis'},
  { quote: `I am not in this world to live up to other people’s expectations, nor do l feel that the world must live up to mine`,
          source: 'Fritz Perl'},
  { quote: `I will come again & conquer you because as a mountain you can’t grow, but as a human, I can`,
          source: 'Sir Edmund Hillary'},
  { quote: `Defeat is not the worst of failures. Not to have tried is the true failure`,
          source: 'George Edward Woodberry'},
  { quote: `A successful man is one who can lay a firm foundation with the bricks others have thrown at him`,
          source: 'David Brinkley'},
  { quote: `You never really understand a person until you consider things from his point of view … Until you climb inside of his skin and walk around in it.`,
          source: 'Harper Lee', citation: 'To Kill a Mockingbird', year: 1961 }   
  ];
console.log(quotes);



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
const getRandomQuote = () => ;



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND one 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the  Show another quote` button is clicked, the event listener 
  below will be triggered, and it will call, or `invoke`, the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// document.getElementById('loadQuote').addEventListener(`click`, printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.