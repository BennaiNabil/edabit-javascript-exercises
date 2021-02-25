/*

Sudoku Validation
Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.

Examples

sudokuValidator([
  [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
]) ➞ true

sudokuValidator([
  [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
]) ➞ false


*/

function sudokuValidator(arraySolution) {
  for (var y = 0; y < 9; ++y) {
    for (var x = 0; x < 9; ++x) {
      var value = arraySolution[y][x];

      if (value) {
        for (var x2 = 0; x2 < 9; ++x2) {
          if (x2 != x && arraySolution[y][x2] == value) {
            return false;
          }
        }
        for (var y2 = 0; y2 < 9; ++y2) {
          if (y2 != y && arraySolution[y2][x] == value) {
            return false;
          }
        }

        var startY = Math.floor(y / 3) * 3;
        for (var y2 = startY; y2 < startY + 3; ++y2) {
          var startX = Math.floor(x / 3) * 3;
          for (x2 = startX; x2 < startX + 3; ++x2) {
            if ((x2 != x || y2 != y) && arraySolution[y2][x2] == value) {
              return false;
            }
          }
        }
      }
    }
  }

  return true;
}
