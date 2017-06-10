// index.js

/**
 * This script is meant to:
 * 1. control the appearance of input field
 * 2. generte a random base number
 * 3. check whether the inputted number matches the base number
 * 4. control the display of the result
 * 5. reset the program
 */

// Displays the main program area when Start button is clicked

// Generates a random number between 0 and 10
var x = -1, y;
function generateNum() {
    x = 10 * Math.random();
    x = Math.floor(x);
    // document.body.innerHTML("#startUp")."A Random number has been generated."
    return x;
}

// Collect input

