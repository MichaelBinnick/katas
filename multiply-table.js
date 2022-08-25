const multiplicationTable = function(maxValue) {
  let table = 0;

  //row iterator
  for (let i = 1; i <= maxValue; i++) {
    table += i;
    
    //column iterator
    for (let j = 2; j <= maxValue; j++) {
      table = table + " " + (j * i);
    }

    table = table + "\n";
  }

  return table;
};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));