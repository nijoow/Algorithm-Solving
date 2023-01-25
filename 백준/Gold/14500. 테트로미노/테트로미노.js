const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  M = null;
let input = [];

readline
  .on("line", function (line) {
    if (!N) [N, M] = line.split(" ").map((el) => +el);
    else input.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(N, M, input);
    process.exit();
  });

const solution = (N, M, input) => {
  const visited = Array.from(Array(N), () => Array(M).fill(false));
  let max = Number.MIN_SAFE_INTEGER;
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  const dfs = (y, x, depth, sum) => {
    if (depth === 4) {
      max = Math.max(max, sum);
      return;
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + x;
        const ny = dy[i] + y;
        if (nx >= 0 && ny >= 0 && nx < M && ny < N && !visited[ny][nx]) {
          visited[ny][nx] = true;
          dfs(ny, nx, depth + 1, sum + input[ny][nx]);
          if (depth === 2) {
            dfs(y, x, depth + 1, sum + input[ny][nx]);
          }
          visited[ny][nx] = false;
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = true;
      dfs(i, j, 1, input[i][j]);
      visited[i][j] = false;
    }
  }

  console.log(max);
};
