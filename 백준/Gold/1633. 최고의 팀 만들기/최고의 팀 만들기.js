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
  const arr = input.map((el) => el.split(" ").map((el) => +el));
  const dp = Array.from(Array(1001), () =>
    Array.from(Array(16), () => Array(16).fill(0))
  );

  const dfs = (i, W, B) => {
    if (W === 15 && B === 15) return 0;
    if (i === arr.length) return 0;

    if (dp[i][W][B] !== 0) return dp[i][W][B];

    let answer = dfs(i + 1, W, B);
    if (W < 15) answer = Math.max(answer, dfs(i + 1, W + 1, B) + arr[i][0]);
    if (B < 15) answer = Math.max(answer, dfs(i + 1, W, B + 1) + arr[i][1]);

    dp[i][W][B] = answer;
    return dp[i][W][B];
  };

  console.log(dfs(0, 0, 0));
};
