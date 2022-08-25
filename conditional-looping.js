const conditionalSum = function(array, condition) {
  let sum = 0;
  let zeroChecker = 0;
  if (condition === "even") {
    for (let num of array) {
      if (num % 2 === 0) {
        sum += num;
      } else {
        zeroChecker++;
        if (zeroChecker === array.length) {
          return 0;
        }
      }
    }
  } else if (condition === "odd") {
    for (let num of array) {
      if (num % 2 !== 0) {
        sum += num;
      } else {
        zeroChecker++;
        if (zeroChecker === array.length) {
          return 0;
        }
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));