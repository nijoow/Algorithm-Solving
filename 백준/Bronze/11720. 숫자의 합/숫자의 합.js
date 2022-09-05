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
  let total = input[1].split("").reduce((sum, value) => {
    value = Number(value);
    return (sum += value);
  }, 0);
  console.log(total);
};
