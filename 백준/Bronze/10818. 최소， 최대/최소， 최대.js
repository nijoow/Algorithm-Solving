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
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  input[1].split(" ").forEach((value) => {
    value = Number(value);
    if (max < value) max = value;
    if (min > value) min = value;
  });
  console.log(min, max);
};
