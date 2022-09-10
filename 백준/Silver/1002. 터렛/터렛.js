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
  const testNumber = Number(input[0]);
  const testCases = [];
  for (let i = 1; i < input.length; i++) {
    testCases.push(input[i].split(" ").map((val) => Number(val)));
  }
  testCases.forEach((testCase) => {
    let count;
    let x1 = testCase[0],
      y1 = testCase[1],
      r1 = testCase[2],
      x2 = testCase[3],
      y2 = testCase[4],
      r2 = testCase[5];
    const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    if (d < r1 + r2 || d > Math.abs(r1 - r2)) count = 2;
    if (d === r1 + r2 || d === Math.abs(r1 - r2)) count = 1;
    if (d > r1 + r2 || d < Math.abs(r1 - r2)) count = 0;
    if (x1 === x2 && y1 === y2) {
      if (r1 === r2) count = -1;
      else count = 0;
    }
    console.log(count);
  });
};
