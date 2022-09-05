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
  const num = Number(input[0]);
  const testCase = [];
  for (let i = 1; i < input.length; i++) {
    testCase.push(input[i]);
  }
  let result = testCase.map((value) => {
    const arr = value.split("");
    let totalScore = 0;
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "O") {
        score += 1;
      } else {
        score = 0;
      }
      totalScore += score;
    }
    console.log(totalScore);
    return totalScore;
  });
};
