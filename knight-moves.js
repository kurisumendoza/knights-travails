class Chessboard {
  constructor() {
    this.board = new Map();
    this.#initBoard();
  }

  #initBoard() {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        this.board.set(`${x},${y}`, []);
      }
    }
  }
}

const chessboard = new Chessboard();

console.log(chessboard.board);

const knightMoves = (x, y) => {};
