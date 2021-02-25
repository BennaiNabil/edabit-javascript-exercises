function ticTacToe(board) {
  let grid = board.toString().replace(/,/g, "");
  const retrieve = (x, a, b, c) => x[a] + x[b] + x[c];

  let winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < winningCases.length; index++) {
    const element = winningCases[index];
    let test = retrieve(grid, ...element);
    if (test == "OOO") {
      return "O";
    } else if (test == "XXX") {
      return "X";
    }
  }
  return "Draw";
}
