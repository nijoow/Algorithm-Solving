const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => +el);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  let result =
    input.reduce((sum, element) => {
      return sum + element * element;
    }, 0) % 10;
  console.log(result);
};
