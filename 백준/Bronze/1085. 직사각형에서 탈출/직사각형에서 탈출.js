const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = null;

readline
  .on("line", function (line) {
    input = line.split(" ").map((el) => +el);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const [x, y, w, h] = input;
  console.log(
    Math.min(Math.abs(x), Math.abs(y), Math.abs(w - x), Math.abs(y - h))
  );
};
