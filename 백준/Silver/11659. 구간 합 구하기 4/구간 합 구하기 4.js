const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  M = null,
  input = [];

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
  const result = [];
  const array = input[0];
  const sumArr = Array.from(Array(N + 1), () => 0);

  array.reduce((sum, val, index) => {
    sumArr[index + 1] = sum + val;
    return sum + val;
  }, 0);
  for (let k = 1; k <= M; k++) {
    const [i, j] = input[k];
    result.push(sumArr[j] - sumArr[i - 1]);
  }
  console.log(result.join("\n"));
};
