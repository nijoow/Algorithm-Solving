const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
readline
  .on("line", function (line) {
    input = +line;
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const star = "*";
  const blank = " ";
  for (let i = 1; i <= input; i++) {
    console.log(`${blank.repeat(input - i)}${star.repeat(i)}`);
  }
};
