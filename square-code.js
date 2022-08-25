//removes spaces from a string
const removeSpaces = text => {
  return text.replace(/\s+/g, '');
};

//finds the square root of a number, rounded to the next largest integer
const findSquare = number => {
  return Math.ceil(Math.sqrt(number));
};

//converts a string into square code
const squareCode = message => {
  let messageMinusSpaces = removeSpaces(message);
  let square = findSquare(messageMinusSpaces.length);
  
  //convert string into an array with mutations
  let outputArray = [];
  for (let j = 0; j < square; j++) {
    //concatenate characters every square away from eachother
    for (let i = j; i < messageMinusSpaces.length; i += square) {
      outputArray.push(messageMinusSpaces[i]);
    }
    outputArray.push(' ');
  }
  outputArray.pop();
  return outputArray.join('');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));