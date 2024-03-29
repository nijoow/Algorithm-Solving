const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;

readline
  .on("line", function (line) {
    N = +line;
  })
  .on("close", function () {
    solution(N);
    process.exit();
  });

const solution = (N) => {
  let answer = 0;

  const dfs = (board, row) => {
    if (row === N) answer++;
    else {
      for (let i = 1; i <= N; i++) {
        board[row + 1] = i;
        if (isValid(board, row + 1)) dfs(board, row + 1);
      }
    }
  };

  const isValid = (board, row) => {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) return false;
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
    }
    return true;
  };

  for (let i = 1; i <= N; i++) {
    const board = new Array(N + 1).fill(0);
    board[1] = i;
    dfs(board, 1);
  }

  console.log(answer);
};
