const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null,
  input = [];

readline
  .on("line", function (line) {
    if (!T) T = +line;
    else input.push(+line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const result = [];
  const arr = Array.from(Array(12), () => 0);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 4;
  for (let i = 4; i < 12; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  input.forEach((n) => {
    result.push(arr[n]);
  });

  console.log(result.join("\n"));
};
