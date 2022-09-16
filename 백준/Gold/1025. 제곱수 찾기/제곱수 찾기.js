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
  input = input.map((line) => line.split("").map((val) => Number(val)));
  const N = input[0][0];
  const M = input[0][2];
  const table = input.filter((_, index) => index !== 0);
  let max = -1;
  for (let i = -N; i <= N; i++) {
    for (let j = -M; j <= M; j++) {
      if (i === 0 && j === 0) continue;
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
          makeInteger("", x, y, i, j);
        }
      }
    }
  }
  function makeInteger(num, x, y, i, j) {
    if (x >= 0 && x < M && y >= 0 && y < N) {
      num += table[y][x];
      if (Math.sqrt(Number(num)) % 1 === 0 && Number(num) > max)
        max = Number(num);
      makeInteger(num, x + j, y + i, i, j);
    } else {
      return;
    }
  }
  console.log(max);
};