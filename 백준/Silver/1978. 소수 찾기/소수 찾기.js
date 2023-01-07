const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const solution = (input) => {
  const list = input[1].split(" ").map((el) => +el);
  const result = list.reduce((count, element) => {
    return isPrime(element) ? count + 1 : count;
  }, 0);
  console.log(result);
};
