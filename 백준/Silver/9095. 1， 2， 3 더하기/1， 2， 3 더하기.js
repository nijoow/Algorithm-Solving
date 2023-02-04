const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null,
  input = [];

readline
  .on("line", function (line) {
    if (!T) T = +line;
    else input.push(+line);
  })
  .on("close", function () {
    solution(T, input);
    process.exit();
  });

const solution = (T, input) => {
  const dp = Array.from(Array(11), () => 0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  const result = input.map((value) => dp[value]);
  console.log(result.join("\n"));
};
