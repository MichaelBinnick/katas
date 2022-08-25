const checkAir = function(samples, threshold) {
  // Code here!
  let dirtyNum = 0;
  let cleanNum = 0;

  for (let sample of samples) {
    if (sample === 'clean') {
      cleanNum++;
    } else if (sample === 'dirty') {
      dirtyNum++;
    }
  }
  
  let dirtyNumRatio = dirtyNum / cleanNum;
  if (dirtyNumRatio > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));