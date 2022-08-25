const urlEncode = function(text) {
  let convertedText = text.split(''); /* copying the string into an array
  so that changing an index element to one with more characters won't
  increase the total index items, and to not destruct the original
  string */

  for (let i = 0; i < convertedText.length; i++) {
    
    //remove initial spaces
    if (convertedText[i] === " ") {
      convertedText.shift();
      i--;
    } else if (convertedText[i] !== " ") { //triggers the replacement loop
      
      //replacement loop
      for (let j = i; j < convertedText.length; j++) {
        if (convertedText[j] === " ") {
          convertedText[j] = "%20";
        }
      }
      
      //remove whitespace(characters) at end
      for (let b = convertedText.length - 1; b >= 0; b--) {
        if (convertedText[b] === "%20") {
          convertedText.pop();
        } else if (convertedText[b] !== "%20") {
          //trigger final stage
          
          //convert back to string
          let backToString = convertedText.join('');
          return backToString;
        }
      }


    }
  }

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));