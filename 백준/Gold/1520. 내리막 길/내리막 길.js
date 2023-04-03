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
  const [M, N] = input[0].split(" ").map((el) => +el);
  const map = input.splice(1).map((line) => line.split(" ").map((el) => +el));
  const dp = Array.from(Array(M), () => Array(N).fill(-1));
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  dp[M - 1][N - 1] = 1;
  const dfs = (py, px, height) => {
    if (dp[py][px] !== -1) return dp[py][px];
    let count = 0;

    for (let i = 0; i < 4; i++) {
      const ny = py + dy[i];
      const nx = px + dx[i];

      if (ny < 0 || nx < 0 || ny >= M || nx >= N) continue;

      if (map[ny][nx] < height) {
        count += dfs(ny, nx, map[ny][nx]);
      }
    }
    dp[py][px] = count;
    return count;
  };
  console.log(dfs(0, 0, map[0][0]));
};
