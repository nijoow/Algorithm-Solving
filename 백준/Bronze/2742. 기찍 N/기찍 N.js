const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
readline
  .on("line", function (line) {
    N = +line;
  })
  .on("close", function () {
    solution(N);
    process.exit();
  });

const solution = (N) => {
  const result = [];
  for (let i = N; i >= 1; i--) {
    result.push(i);
  }
  console.log(result.join("\n"));
};
