const whereCanIPark = function(spots, vehicle) {
  //code vehicle size
  let size = "";
  switch (vehicle) {
  case "regular" :
    size = 'R';
    break;
  case "small" :
    size = 'S';
    break;
  case "motorcycle" :
    size = 'M';
    break;
  }

  //iterate over rows
  let rowNum = 0;
  let columnNum = 0;
  for (let row of spots) {
    columnNum = 0;
    //iterate over columns
    for (let column of row) {
      //open regular spot takes any vehicle
      if (column === "R") {
        return "[" + columnNum + " ," + rowNum + "]";
      } else if (column === "S") {
        //open small spot takes smalls and motorcycles
        if (size === "S" || size === "M") {
          return "[" + columnNum + " ," + rowNum + "]";
        }
      } else if (column === "M") {
        //open motor spot takes cycles only
        if (size === "M") {
          return "[" + columnNum + " ," + rowNum + "]";
        }
      }
      columnNum++;
    }
    rowNum++;
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));