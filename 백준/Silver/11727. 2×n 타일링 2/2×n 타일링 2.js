const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;

readline
  .on("line", function (line) {
    n = +line;
  })
  .on("close", function () {
    solution(n);
    process.exit();
  });

const solution = (n) => {
  const dp = Array.from(Array(n + 1), () => 0);
  dp[1] = 1;
  dp[2] = 3;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
  }
  console.log(dp[n]);
};
