const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let input = null;

readline
  .on("line", function (line) {
    if (!N) N = +line;
    else input = line.split(" ").map((el) => +el);
  })
  .on("close", function () {
    solution(N, input);
    process.exit();
  });

const solution = (N, input) => {
  console.log(
    input
      .sort((a, b) => a - b)
      .reduce((total, time, index) => {
        return total + time * (N - index);
      }, 0)
  );
};
