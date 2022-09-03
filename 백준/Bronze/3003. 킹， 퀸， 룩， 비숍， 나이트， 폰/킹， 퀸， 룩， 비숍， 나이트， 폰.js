const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", (line) => {
    input = line;
    readline.close();
  })
  .on("close", () => {
    input = input.split(" ").map((item) => Number(item));
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const chessPiece = [1, 1, 2, 2, 2, 8];
  let answer;
  answer = input.map((item, index) => chessPiece[index] - item).join(" ");

  console.log(answer);
};