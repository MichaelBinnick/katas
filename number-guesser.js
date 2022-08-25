let prompt = require("prompt-sync")();

let correctAnswer = Math.floor(Math.random() * 100);
let answered = false;
let attempts = 0;
let attemptHistory = [];
let attemptRepeat = false;

while (answered === false) {
  attemptRepeat = false;
  let answer = prompt("Guess a number: ");

  if (answer > correctAnswer) {
    console.log("Too high!");
    attemptHistory.push(answer);
    for (let i = 0; i < (attemptHistory.length - 1); i++) {
      if (answer === attemptHistory[i]) {
        attemptRepeat = true;
      }
    }
    if (attemptRepeat === false) {
      attempts++;
    }
  } else if (answer < correctAnswer) {
    console.log("Too low!");
    attemptHistory.push(answer);
    for (let i = 0; i < (attemptHistory.length - 1); i++) {
      if (answer === attemptHistory[i]) {
        attemptRepeat = true;
      }
    }
    if (attemptRepeat === false) {
      attempts++;
    }
  } else if (answer === correctAnswer) {
    attemptHistory.push(answer);
    attempts++;
    console.log("You got it! You took " + attempts + " attempts!");
    answered = true;
  } else {
    console.log("Error, you have entered a non-number.");
  }
}