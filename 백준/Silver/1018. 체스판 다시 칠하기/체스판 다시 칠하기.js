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

const whiteFirstRow = ["W", "B", "W", "B", "W", "B", "W", "B"];
const blackFirstRow = ["B", "W", "B", "W", "B", "W", "B", "W"];
const solution = (input) => {
  const [M, N] = input[0].split(" ").map((el) => +el);
  const board = [];
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < input.length; i++) {
    board.push(input[i].split(""));
  }

  const whiteFirstBoard = [];
  const blackFirstBoard = [];

  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
      whiteFirstBoard.push(whiteFirstRow);
      blackFirstBoard.push(blackFirstRow);
    } else {
      whiteFirstBoard.push(blackFirstRow);
      blackFirstBoard.push(whiteFirstRow);
    }
  }

  for (let i = 0; i < M - 7; i++) {
    for (let j = 0; j < N - 7; j++) {
      let whiteCount = 0;
      let blackCount = 0;
      for (let x = i; x < i + 8; x++) {
        for (let y = j; y < j + 8; y++) {
          if (board[x][y] !== whiteFirstBoard[x - i][y - j]) whiteCount += 1;
          if (board[x][y] !== blackFirstBoard[x - i][y - j]) blackCount += 1;
        }
      }
      min = Math.min(min, whiteCount, blackCount);
    }
  }
  console.log(min);
};
