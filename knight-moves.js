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

    return validMoves;
  }

  #findShortestPath(start, end) {
    const movesQueue = [[start]];
    const visitedPos = new Set();

    while (movesQueue.length) {
      const currentPath = movesQueue.shift();
      const currentPos = String(currentPath[currentPath.length - 1]);

      if (currentPos === String(end)) return currentPath;

      this.#generateMoves(currentPos).forEach((move) => {
        if (!visitedPos.has(String(move))) {
          movesQueue.push(currentPath.concat([move]));
          visitedPos.add(String(move));
        }
      });
    }
  }

  knightMoves(start, end) {
    const moves = this.#findShortestPath(start, end);

    return `You made it in ${
      moves.length - 1
    } moves! Here's your path: \n${moves.map((pos) => `[${pos}]`).join('\n')}`;
  }
}

const chessboard = new Chessboard();

console.log(chessboard.knightMoves([3, 3], [4, 3]));
