const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline
  .on("line", function (line) {
    input.push(+line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const arr = new Array(10).fill(0);
  let result = input.reduce((value, element) => {
    return value * element;
  }, 1);
  while (result > 0) {
    arr[result % 10] += 1;
    result = Math.floor(result / 10);
  }
  console.log(arr.join("\n"));
};
