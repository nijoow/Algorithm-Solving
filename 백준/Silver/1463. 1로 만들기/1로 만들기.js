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
  const number = Number(input);
  let min = Number.MAX_SAFE_INTEGER;
  const dfs = (num, count) => {
    if (count >= min) return;
    if (num === 1) {
      min = Math.min(min, count);
      return;
    } else {
      if (num % 3 === 0) dfs(num / 3, count + 1);
      if (num % 2 === 0) dfs(num / 2, count + 1);
      dfs(num - 1, count + 1);
    }
  };
  dfs(number, 0);
  console.log(min);
};
