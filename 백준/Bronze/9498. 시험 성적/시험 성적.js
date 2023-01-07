const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let score;
readline
  .on("line", function (line) {
    score = line;
  })
  .on("close", function () {
    solution(score);
    process.exit();
  });

const solution = (score) => {
  let result = "F";
  if (score >= 60) result = "D";
  if (score >= 70) result = "C";
  if (score >= 80) result = "B";
  if (score >= 90) result = "A";

  console.log(result);
};
