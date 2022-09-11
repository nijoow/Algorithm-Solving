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
  let N = Number(input[0]);
  const prices = [];
  const dp = Array.from(Array(N), () => Array(3).fill(0));
  for (let i = 1; i < input.length; i++) {
    prices.push(input[i].split(" ").map((val) => Number(val)));
  }
  dp[0] = prices[0];
  for (let i = 1; i < N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + prices[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + prices[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + prices[i][2];
  }
  console.log(Math.min(...dp[N - 1]));
};
