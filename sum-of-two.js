const sumLargestNumbers = function(array) {
  let topTwo = [0, 0];
  for (let num of array) {
    if (num > topTwo[0]) {
      topTwo[1] = topTwo[0];
      topTwo[0] = num;
    } else if (num > topTwo[1]) {
      topTwo[1] = num;
    }
  }
  return (topTwo[0] + topTwo[1]);
};

console.log(sumLargestNumbers([1, 2, 3, 4, 5]));