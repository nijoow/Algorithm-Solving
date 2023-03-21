const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let T = null;
const input = [];

readline
  .on("line", function (line) {
    if (!T) T = +line;
    else input.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(T, input);
    process.exit();
  });
const solution = (T, input) => {
  for (let k = 0; k < T; k++) {
    const leng = input[k * 3][0];
    const rowA = input[k * 3 + 1];
    const rowB = input[k * 3 + 2];
    const dp = Array.from(Array(leng), () => Array(3).fill(null));
    dp[0] = [0, rowA[0], rowB[0]];

    for (let i = 1; i < leng; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
      dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + rowA[i];
      dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1]) + rowB[i];
    }
    console.log(Math.max(...dp[leng - 1]));
  }
};
