const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = null;
let arr;

readline
  .on("line", function (line) {
    if (!N) N = +line;
    else arr = line.split(" ").map((el) => +el);
  })
  .on("close", function () {
    solution(N, arr);
    process.exit();
  });
const solution = (N, arr) => {
  if (N === 1) return console.log("A");
  if (N === 2) {
    if (arr[0] === arr[1]) return console.log(arr[1]);
    else return console.log("A");
  }
  let a, b;
  if (arr[0] === arr[1]) {
    a = 1;
    b = 0;
  } else {
    a = (arr[2] - arr[1]) / (arr[1] - arr[0]);
    b = arr[1] - arr[0] * a;
  }
  if (a % 1 !== 0 || b % 1 !== 0) return console.log("B");
  let isTrue = true;
  for (let i = 1; i < N; i++) {
    if (arr[i - 1] * a + b !== arr[i]) {
      isTrue = false;
      break;
    }
  }
  return console.log(isTrue ? arr[N - 1] * a + b : "B");
};
