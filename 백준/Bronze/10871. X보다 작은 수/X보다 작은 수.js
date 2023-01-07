const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let X = null;
let A = null;
readline
  .on("line", function (line) {
    if (!N) [N, X] = line.split(" ").map((el) => +el);
    else A = line.split(" ").map((el) => +el);
  })
  .on("close", function () {
    solution(N, X, A);
    process.exit();
  });

const solution = (N, X, A) => {
  const result = [];
  A.forEach((element) => {
    if (element < X) result.push(element);
  });
  console.log(result.join(" "));
};
