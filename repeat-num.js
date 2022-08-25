const repeatNumbers = function(data) {
  let dataFinal = [];
  for (let array of data) {
    let string = "";
    for (let i = 0; i < array[1]; i++) {
      string += array[0];
    }
    dataFinal.push(string);
  }
  return dataFinal.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));