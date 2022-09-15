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
  input = input.map((line) => line.split(" ").map((val) => Number(val)));
  const testCase = input.filter((_, index) => index !== 0);
  testCase.forEach((value) => {
    const num = value[1] - value[0];

    (Math.floor(Math.sqrt(num)) ** 2 + Math.ceil(Math.sqrt(num)) ** 2) / 2 <=
    num
      ? console.log(2 * Math.ceil(Math.sqrt(num)) - 1)
      : console.log(2 * Math.ceil(Math.sqrt(num)) - 2);
  });
};
