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

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const solution = (input) => {
  const [N, R1, C1, R2, C2] = input[0].split(" ").map((el) => +el);
  const graph = Array.from(Array(R2 - R1 + 1), () =>
    Array(C2 - C1 + 1).fill(0)
  );
  for (let i = R1; i <= R2; i++) {
    for (let j = C1; j <= C2; j++) {
      let num =
        Math.abs((i % (N * 2 - 1)) - N + 1) +
        Math.abs((j % (N * 2 - 1)) - N + 1);
      graph[i - R1][j - C1] = num >= N ? "." : alphabet[num % 26];
    }
  }
  console.log(graph.map((row) => row.join("")).join("\n"));
};
