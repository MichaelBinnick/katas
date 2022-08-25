const generateBoard = function(piece1, piece2) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  board[piece1[0]][piece1[1]] = 1;
  board[piece2[0]][piece2[1]] = 1;
  return board;
};

const queenThreat = function(board) {
  
  //locate positions of queens on board
  let queenPositions = [];
  let rowIterator = 0;
  for (let row of board) {
    let columnIterator = 0;
    for (let column of row) {
      if (column === 1) {
        queenPositions.push([rowIterator, columnIterator]);
      }
      columnIterator++;
    }
    rowIterator++;
  }

  //check diagonals
  let maxRowsToCheck = 0;
  let largerRowPiece = "";
  if (queenPositions[0][0] > queenPositions[1][0]) {
    maxRowsToCheck = (queenPositions[0][0] - queenPositions[1][0]);
    largerRowPiece = "first piece";
  } else if (queenPositions[0][0] < queenPositions[1][0]) {
    maxRowsToCheck = (queenPositions[1][0] - queenPositions[0][0]);
    largerRowPiece = "second piece";
  } else {
    maxRowsToCheck = 0;
    largerRowPiece = "same row";
  }

  if (largerRowPiece === 'first piece') {
    for (let i = 1; i <= maxRowsToCheck; i++) {
      if (queenPositions[1][1] === (queenPositions[0][1] + i) || queenPositions[1][1] === (queenPositions[0][1] - i)) {
        if (queenPositions[0][0] === (queenPositions[1][0] + i)) {
          return true;
        }
      }
    }
  } else if (largerRowPiece === 'second piece') {
    for (let i = 1; i <= maxRowsToCheck; i++) {
      if (queenPositions[0][1] === (queenPositions[1][1] + i) || queenPositions[0][1] === (queenPositions[1][1] - i)) {
        if (queenPositions[1][0] === (queenPositions[0][0] + i)) {
          return true;
        }
      }
    }
  } else {
    return true;
  }

  //check horizontals and verticals
  if (queenPositions[0][1] === queenPositions[1][1]) {
    return true;
  } else if (queenPositions[0][0] === queenPositions[1][0]) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

let whiteQueen2 = [0, 0];
let blackQueen2 = [5, 7];
let generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);
console.log(generatedBoard2);
console.log(queenThreat(generatedBoard2));