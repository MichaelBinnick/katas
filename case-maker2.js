const makeCase = function(input, method) {
  let output = input;
  let char = '';

  //convert single string to array with one item
  let newMethod = [];
  if (typeof(method) === 'string') {
    newMethod = method.split(" ");
  } else {
    newMethod = method;
  }

  //convert array of strings into array of objects
  let i = 0;
  let finalMethod = [];
  for (let each of newMethod) {
    finalMethod[i] = {'name': each};
    i++;
  }

  //give each case a priority value
  for (let each of finalMethod) {
    switch (each.name) {
    case 'camel':
      each.priority = 1;
      break;
    case 'pascal':
      each.priority = 2;
      break;
    case 'snake':
      each.priority = 3;
      break;
    case 'kebab':
      each.priority = 4;
      break;
    case 'title':
      each.priority = 5;
      break;
    case 'vowel':
      each.priority = 6;
      break;
    case 'consonant':
      each.priority = 7;
      break;
    case 'upper':
      each.priority = 8;
      break;
    case 'lower':
      each.priority = 9;
      break;
    }
  }

  //sort cases by priority
  finalMethod.sort((a, b) => a.priority - b.priority);

  //execute each case in order of priority
  for (let type of finalMethod) {
    switch (type.name) {
      
    case 'camel':
      for (let i = 0; i < output.length; i++) {
        char = output[i];
        if (output[i - 1] === " ") {
          char = char.toUpperCase();
          output = output.substring(0, i) + char + output.substring(i + 1);
        }
      }
      //delete space characters
      output = output.replace(/\s+/g, '');
      break;

    case 'pascal':
      for (let i = 0; i < output.length; i++) {
        char = output[i];
        if (output[i - 1] === " ") {
          char = char.toUpperCase();
          output = output.substring(0, i) + char + output.substring(i + 1);
        }
      }
      //delete space characters
      output = output.replace(/\s+/g, '');

      //make the first character uppercase
      output = output[0].toUpperCase() + output.substring(1);
      break;

    case 'snake':
      output = output.replace(/\s+/g, '_');
      break;

    case 'kebab':
      output = output.replace(/\s+/g, '-');
      break;

    case 'title':
      for (let i = 0; i < output.length; i++) {
        char = output[i];
        if (output[i - 1] === " ") {
          char = char.toUpperCase();
          output = output.substring(0, i) + char + output.substring(i + 1);
        }
      }

      //make the first character uppercase
      output = output[0].toUpperCase() + output.substring(1);
      break;

    case 'vowel':
      for (let i = 0; i < output.length; i++) {
        char = output[i];
        if (output[i] === "a" || output[i] === "e" || output[i] === "i" || output[i] === "o" || output[i] === "u") {
          char = char.toUpperCase();
          output = output.substring(0, i) + char + output.substring(i + 1);
        }
      }
      break;

    case 'consonant':
      for (let i = 0; i < output.length; i++) {
        char = output[i];
        if (output[i] !== "a" && output[i] !== "e" && output[i] !== "i" && output[i] !== "o" && output[i] !== "u") {
          char = char.toUpperCase();
          output = output.substring(0, i) + char + output.substring(i + 1);
        }
      }
      break;

    case 'upper':
      for (let i = 0; i < output.length; i++) {
        char = output[i];
        char = char.toUpperCase();
        output = output.substring(0, i) + char + output.substring(i + 1);
      }
      break;

    case 'lower':
      for (let i = 0; i < output.length; i++) {
        char = output[i];
        char = char.toLowerCase();
        output = output.substring(0, i) + char + output.substring(i + 1);
      }
      break;

    }
  }

  return output;
};




console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));