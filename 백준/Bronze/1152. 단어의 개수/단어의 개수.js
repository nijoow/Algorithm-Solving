const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", (line) => {
    input = line;
    readline.close();
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const arr = input.split(" ");
  if (arr[0] === "") arr.shift();
  if (arr[arr.length - 1] === "") arr.pop();

  console.log(arr.length);
};