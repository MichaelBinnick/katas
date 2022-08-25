const camelCase = function(input) {
  let modified = input;
  let char = "";
  for (let i = 0; i < input.length; i++) {
    char = input[i];
    if (input[i - 1] === " ") {
      char = char.toUpperCase();
      modified = modified.substring(0, i) + char + modified.substring(i + 1);
      //console.log(modified);
    }
  }
  modified = modified.replace(/\s+/g, '');
  return modified;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));