const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", (line) => {
    input = line;
    readline.close();
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const [A, B] = input.split(" ").map((value) => Number(value));
  console.log(A / B);
};
