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
  let count = 0;
  let first = Number(arr[0]);
  for (let i = 0; i < arr.length - 1; i++) {
    count += Math.abs(Number(arr[i]) - Number(arr[i + 1]));
  }
  if (count === 7) {
    if (first === 1) console.log("ascending");
    else if (first === 8) console.log("descending");
  } else console.log("mixed");
};
