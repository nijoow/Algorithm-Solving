const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let input = [];
readline
  .on("line", function (line) {
    if (!N) N = +line;
    else input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const set = new Set(
    input.sort((a, b) => {
      if (a.length === b.length) return a >= b ? 1 : -1;
      else return a.length - b.length;
    })
  );
  console.log([...set].join("\n"));
};
