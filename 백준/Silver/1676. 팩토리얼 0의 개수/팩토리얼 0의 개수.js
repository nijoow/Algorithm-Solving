const { count } = require("console");

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
  let num = Number(input);
  let five = 0;
  let two = 0;
  const count5 = (num) => {
    if (num % 5 === 0) {
      five += 1;
      count5(num / 5);
    }
  };
  const count2 = (num) => {
    if (num % 2 === 0) {
      two += 1;
      count2(num / 2);
    }
  };
  for (let i = 1; i <= num; i++) {
    count5(i);
    count2(i);
  }

  console.log(Math.min(two, five));
};
