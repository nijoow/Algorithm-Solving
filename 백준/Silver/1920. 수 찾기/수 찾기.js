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

const solution = (input) => {
  const A = new Set(input[1].split(" ").map((el) => +el));
  const num = input[3].split(" ").map((el) => +el);
  const result = num.map((element) => {
    return A.has(element) ? 1 : 0;
  });
  console.log(result.join("\n"));
};
