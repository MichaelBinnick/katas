const blocksAway = function(directions) {
  let destination = {'east': 0, 'north' : 0};
  let currentDirection = '';
  
  if (directions[0] === 'right') {
    currentDirection = 'east';
    destination.east += directions[1];
  } else if (directions[0] === 'left') {
    currentDirection = 'north';
    destination.north += directions[1];
  }

  for (let i = 2; i < directions.length; i += 2) {
    if (directions[i] === 'right' && currentDirection === 'north') {
      currentDirection = 'east';
      destination.east += directions[i + 1];
    } else if (directions[i] === 'right' && currentDirection === 'east') {
      currentDirection = 'south';
      destination.north -= directions[i + 1];
    } else if (directions[i] === 'right' && currentDirection === 'south') {
      currentDirection = 'west';
      destination.east -= directions[i + 1];
    } else if (directions[i] === 'right' && currentDirection === 'west') {
      currentDirection = 'north';
      destination.north += directions[i + 1];
    } else if (directions[i] === 'left' && currentDirection === 'north') {
      currentDirection = 'west';
      destination.east -= directions[i + 1];
    } else if (directions[i] === 'left' && currentDirection === 'west') {
      currentDirection = 'south';
      destination.north -= directions[i + 1];
    } else if (directions[i] === 'left' && currentDirection === 'south') {
      currentDirection = 'west';
      destination.east -= directions[i + 1];
    } else if (directions[i] === 'left' && currentDirection === 'east') {
      currentDirection = 'north';
      destination.north += directions[i + 1];
    }
  }
  return destination;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));