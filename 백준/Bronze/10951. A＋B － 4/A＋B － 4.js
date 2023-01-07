const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
readline
  .on("line", function (line) {
    inputs.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(inputs);
    process.exit();
  });

const solution = (inputs) => {
  inputs.forEach((input) => {
    const [A, B] = input;
    console.log(A + B);
  });
};
