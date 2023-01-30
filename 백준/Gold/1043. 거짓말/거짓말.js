const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  M = null,
  input = [];

readline
  .on("line", function (line) {
    if (!N) [N, M] = line.split(" ").map((el) => +el);
    else input.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(N, M, input);
    process.exit();
  });

const solution = (N, M, input) => {
  let truth = new Set(input[0].slice(1));
  const result = Array(M).fill(true);
  let count = 0;
  while (count < M) {
    for (let i = 1; i <= M; i++) {
      const party = input[i].slice(1);
      let lie = true;

      party.forEach((member) => {
        if (truth.has(member)) {
          lie = false;
        }
      });
      if (!lie) {
        truth = new Set([...truth, ...party]);
        result[i - 1] = false;
      }
    }
    count++;
  }
  console.log(result.reduce((count, item) => (item ? count + 1 : count), 0));
};
