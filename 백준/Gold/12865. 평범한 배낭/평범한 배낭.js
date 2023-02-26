const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null,
  k = null;
let input = [];

readline
  .on("line", function (line) {
    if (!n) [n, k] = line.split(" ").map((el) => +el);
    else input.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(n, k, input);
    process.exit();
  });

const solution = (n, k, input) => {
  const dy = Array(k + 1).fill(0);
  dy[0] = 0;

  for (let i = 0; i < n; i++) {
    const [wegiht, value] = input[i];
    for (let j = k; j >= wegiht; j--) {
      dy[j] = Math.max(dy[j], dy[j - wegiht] + value);
    }
  }
  console.log(dy[k]);
};
