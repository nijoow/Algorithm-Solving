const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const chessWhite = [];
  const chessBlack = [];
  for (let i = 0; i < 9; i++) {
    if (i % 2 === 0) {
      chessWhite.push(["W", "B", "W", "B", "W", "B", "W", "B"]);
      chessBlack.push(["B", "W", "B", "W", "B", "W", "B", "W"]);
    } else {
      chessWhite.push(["B", "W", "B", "W", "B", "W", "B", "W"]);
      chessBlack.push(["W", "B", "W", "B", "W", "B", "W", "B"]);
    }
  }
  const MN = input[0].split(" ");
  let M = Number(MN[0]),
    N = Number(MN[1]);
  const board = [];
  for (let i = 1; i < input.length; i++) {
    board.push(input[i].split(""));
  }
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < M - 7; i++) {
    for (let j = 0; j < N - 7; j++) {
      let white = 0;
      let black = 0;
      for (let x = i; x < i + 8; x++) {
        for (let y = j; y < j + 8; y++) {
          if (board[x][y] !== chessWhite[x - i][y - j]) white += 1;
          if (board[x][y] !== chessBlack[x - i][y - j]) black += 1;
        }
      }
      min = Math.min(min, white, black);
    }
  }
  console.log(min);
};
