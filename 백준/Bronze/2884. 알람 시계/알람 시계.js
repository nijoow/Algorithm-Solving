const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
readline
  .on("line", function (line) {
    input = line;
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const [H, M] = input.split(" ").map((el) => +el);
  if (M >= 45) console.log(H, M - 45);
  else if (H === 0) console.log(23, M + 15);
  else console.log(H - 1, M + 15);
};
