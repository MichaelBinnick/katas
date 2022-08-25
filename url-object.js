const urlDecode = function(text) {
  
  //our final object
  let output = {};

  //a string separator variable
  let word = '';

  //a memory variable
  let key = '';

  //iterate through each character of the string
  for (let i = 0; i < text.length; i++) {
    

    //what to do if we encounter a space character
    if (text[i] === "%") {
      
      word += " ";
      i += 2;
    } else if (text[i] === "&") {
      //what to do if we reach the end of a key-value pair
      
      //match the value to the key
      output[key] = word;
      word = '';

      //skip the '&' character
      i++;

      word += text[i];
    } else if (text[i] === "=") {
      //what to do if we reach the value of a key
      
      //encode the key to the object
      key = word;
      output[key] = '';
      word = '';

      //skip the '=' character
      i++;
      word += text[i];
    } else {
      //map the current character to our variable
      word += text[i];
    }

  }
  output[key] = word;
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);