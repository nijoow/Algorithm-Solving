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
  let arr = input.map((value) => {
    value = Number(value);
    if (max < value) max = value;
    return value;
  });
  console.log(max);
  arr.forEach((value, index) => {
    if (value === max) console.log(index + 1);
  });
};
