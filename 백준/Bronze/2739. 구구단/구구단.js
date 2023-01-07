const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs;
readline
  .on("line", function (line) {
    inputs = +line;
  })
  .on("close", function () {
    solution(inputs);
    process.exit();
  });

const solution = (inputs) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${inputs} * ${i} = ${inputs * i}`);
  }
};
