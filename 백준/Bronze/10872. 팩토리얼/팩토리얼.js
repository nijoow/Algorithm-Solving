const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", (line) => {
    input = Number(line);
    readline.close();
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  let answer;
  if (input === 0) answer = 1;
  else {
    const factorial = (num) => {
      if (num === 1) return num;
      return num * factorial(num - 1);
    };
    answer = factorial(input);
  }
  console.log(answer);
};