class Chessboard {
  constructor() {
    this.board = new Map();
    this.#initBoard();
    this.#generateMoves('2,2');
  }

  #initBoard() {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        this.board.set(`${x},${y}`, []);
      }
    }
  }

  #generateMoves(pos) {
    const [x, y] = pos.split(',').map(Number);
    const moveOffsets = [
      [1, 2],
      [2, 1],
      [1, -2],
      [2, -1],
      [-2, 1],
      [-1, 2],
      [-1, -2],
      [-2, -1],
    ];
    const validMoves = [];
    moveOffsets.forEach((offset) => {
      const nextX = offset[0] + x;
      const nextY = offset[1] + y;

      if (nextX < 0 || nextX > 7 || nextY < 0 || nextY > 7) return;
      validMoves.push([nextX, nextY]);
    });

    console.log(validMoves);
    return validMoves;
  }
}

const chessboard = new Chessboard();

console.log(chessboard.board);

const knightMoves = (start, end) => {};
