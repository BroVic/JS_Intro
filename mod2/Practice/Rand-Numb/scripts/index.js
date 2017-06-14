// index.js

/**
 * This script is meant to:
 * 1. generte a random base number
 * 2. check whether the inputted number matches the base number
 * 3. display of the result
 */

// Variables
var numRand, startUpMessage, yourNumber, displayDiv;

// Generates a random number between 0 and 10
function init() {
   startUpMessage = document.querySelector("#startMsg");
   startUpMessage.innerHTML = "Random number generated";
}

// Compares the input and internally generated number
function checkEquiv(numIn, numBase) {
    numIn = document.querySelector("#numEntry");
    var displayDiv = document.querySelector("#displayResult")
    
    if (numIn.value != numBase) {
        displayDiv.innerHTML = "You have a match!"
    } else {
        displayDiv.innerHTML = "Your guess was wrong. Try again."
    }
}

checkEquiv(yourNumber, numRand);