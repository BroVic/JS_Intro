// index.js

/**
 * This script is meant to:
 * 1. generte a random base number
 * 2. check whether the inputted number matches the base number
 * 3. display of the result
 */

// Variable for a random number
var numRand;

// Generates a random number between 0 and 10
function init() {
    var startUpMessage = document.querySelector("#startMsg");
    
    numRand = 10 * Math.random();
    numRand = Math.floor(numRand);
}

// Compares the input and internally generated number
function checkEquiv() {
    var yourNumber = document.querySelector("#numEntry");
    var displayDiv = document.querySelector("#displayResult")
    if (yourNumber.value != numRand) {
        displayDiv.innerHTML = "You have a match!"
    } else {
        displayDiv.innerHTML = "Your guess was wrong. Try again."
    }
}
