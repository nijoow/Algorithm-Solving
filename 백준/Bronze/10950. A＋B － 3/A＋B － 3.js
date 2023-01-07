const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
let N = null;
readline
  .on("line", function (line) {
    if (!N) N = +line;
    else inputs.push(line.split(" ").map((el) => +el));
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
