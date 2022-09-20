export function createBoard(boardSize, numberOfMInes) {
  const board = [];

  for (let x = 0; x < boardSize; x++) {
    const row = [];

    for (let y = 0; y < boardSize; y++) {
      const tile = {
        x,
        y,
      };
      row.push(tile);
    }
    board.push(row);
  }

  return board;
}
