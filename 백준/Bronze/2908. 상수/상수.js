const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
readline
  .on("line", function (line) {
    input = line.split(" ");
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const [A, B] = input.map((el) => +el.split("").reverse().join(""));
  console.log(Math.max(A, B));
};
