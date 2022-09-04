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
  const number = Number(input[0]);
  let max = Number.MIN_SAFE_INTEGER;
  let prevScores = input[1].split(" ").map((score) => {
    score = Number(score);
    if (max < score) {
      max = score;
    }
    return score;
  });

  let nextScores = prevScores.map((score) => (score / max) * 100);
  let average =
    nextScores.reduce((sum, score) => {
      return (sum = sum + score);
    }, 0) / number;
  console.log(average);
};
