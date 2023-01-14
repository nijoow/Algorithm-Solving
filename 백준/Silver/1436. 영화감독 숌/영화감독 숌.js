const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let input = [];

readline
  .on("line", function (line) {
    if (!N) N = line;
  })
  .on("close", function () {
    solution(N);
    process.exit();
  });

const solution = (N) => {
  const arr = [];
  let count = 666;
  while (arr.length < 10000) {
    if (count.toString().includes("666")) arr.push(count);
    count++;
  }
  console.log(arr[N - 1]);
};
