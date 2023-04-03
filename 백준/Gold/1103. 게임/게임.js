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
  const [N, M] = input[0].split(" ").map((el) => +el);
  const board = input.splice(1).map((line) => line.split(""));
  const dp = Array.from(Array(N), () => Array(M).fill(-1));
  const visited = Array.from(Array(N), () => Array(M).fill(false));
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  visited[0][0] = true;
  dp[0][0] = 1;

  const dfs = (y, x, visited) => {
    const value = Number(board[y][x]);

    for (let i = 0; i < 4; i++) {
      const nx = x + value * dx[i];
      const ny = y + value * dy[i];

      if (nx >= 0 && ny >= 0 && ny < N && nx < M && board[ny][nx] !== "H") {
        if (visited[ny][nx]) {
          process.exit(console.log(-1));
        }
        if (dp[ny][nx] >= dp[y][x] + 1) continue;
        else {
          dp[ny][nx] = dp[y][x] + 1;
          visited[ny][nx] = true;
          dfs(ny, nx, visited);
          visited[ny][nx] = false;
        }
      }
    }
  };

  dfs(0, 0, visited);

  console.log(Math.max(...dp.reduce((arr, row) => [...arr, ...row], [])));
};
