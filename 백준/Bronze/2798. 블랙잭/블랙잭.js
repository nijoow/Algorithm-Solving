const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let M = null;
let input = null;
readline
  .on("line", function (line) {
    if (!N) [N, M] = line.split(" ").map((el) => +el);
    else input = line.split(" ").map((el) => +el);
  })
  .on("close", function () {
    solution(N, M, input);
    process.exit();
  });

const solution = (N, M, input) => {
  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = input[i] + input[j] + input[k];
        if (sum <= M) result = Math.max(sum, result);
      }
    }
  }
  console.log(result);
};
