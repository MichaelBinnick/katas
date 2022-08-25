const numberOfVowels = function(string) {
  let vowelNum = 0;
  for (let i = 0; i <= string.length; i++) {
    switch (string[i]) {
    case "a" :
      vowelNum++;
      break;
    case "e" :
      vowelNum++;
      break;
    case "i" :
      vowelNum++;
      break;
    case "o" :
      vowelNum++;
      break;
    case "u" :
      vowelNum++;
      break;
    default:
      break;
    }
  }
  return vowelNum;
};

console.log(numberOfVowels("atrocious"));