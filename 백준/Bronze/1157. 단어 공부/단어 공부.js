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
  let str = input.toUpperCase();
  let result = "";
  let max = Number.MIN_SAFE_INTEGER;
  let duplicated = false;
  let hash = new Map();
  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    if (hash.has(value)) {
      hash.set(value, hash.get(value) + 1);
    } else {
      hash.set(value, 1);
    }
  }
  for (const [key, value] of hash) {
    if (value === max) {
      duplicated = true;
    }
    if (value > max) {
      max = value;
      result = key;
      duplicated = false;
    }
  }
  if (duplicated) {
    result = "?";
  }
  console.log(result);
};