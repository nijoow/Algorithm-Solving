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
  const [A, B] = input[0].split(" ").map((el) => +el);

  const queue = [[A, 0]];
  while (queue.length) {
    const [prev, count] = queue.shift();
    if (prev === B) {
      return console.log(count + 1);
    }
    if (prev * 2 <= B) queue.push([prev * 2, count + 1]);
    if (prev * 10 + 1 <= B) queue.push([prev * 10 + 1, count + 1]);
  }
  console.log(-1);
};
