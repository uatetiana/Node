function game() {
  let board = [[], [], []];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      board[row][col] = getCell();
    }
  }
  let cell = "";

  while (cell != "0" && cell != "1" && cell != "2") {
    cell = prompt("Enter the cell data");
  }

  let player1 = checkVictory(board, 1),
    player2 = checkVictory(board, 2);
  switch (true) {
    case player1: {
      return 1;
      break;
    }
    case player2: {
      return 2;
      break;
    }
    case !(player1 || player2) && checkZeroes(board): {
      return -1;
      break;
    }
    default: {
      return 0;
      break;
    }
  }
}

function checkRows(board, player) {
  return (
    board[0].every((elem) => elem == player) ||
    board[1].every((elem) => elem == player) ||
    board[2].every((elem) => elem == player)
  );
}

function checkColumns(board, player) {
  let col1 = board.map((elem) => elem[0]),
    col2 = board.map((elem) => elem[1]),
    col3 = board.map((elem) => elem[2]);
  return (
    col1.every((elem) => elem == player) ||
    col2.every((elem) => elem == player) ||
    col3.every((elem) => elem == player)
  );
}

function checkDiagonals(board, player) {
  let diag1 = board.map((elem, index) => elem[index]),
    diag2 = board.map((elem, index) => elem[2 - index]);
  return (
    diag1.every((elem) => elem == player) ||
    diag2.every((elem) => elem == player)
  );
}

function checkVictory(board, player) {
  return (
    checkRows(board, player) ||
    checkColumns(board, player) ||
    checkDiagonals(board, player)
  );
}

function checkZeroes(board) {
  return (
    board[0].some((element) => element == 0) ||
    board[1].some((element) => element == 0) ||
    board[2].some((element) => element == 0)
  );
}

game();
