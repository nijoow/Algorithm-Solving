const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
readline.on("line", function (line) {
  if (line === ".") {
    solution(input);
    process.exit();
  }
  input.push(line);
});

const solution = (input) => {
  const brackets = ["(", ")", "[", "]"];
  const CheckPair = (stack) => {
    const leng = stack.length;
    if (leng < 2) return;
    if (
      (stack[leng - 2] === "(" && stack[leng - 1] === ")") ||
      (stack[leng - 2] === "[" && stack[leng - 1] === "]")
    ) {
      stack.pop();
      stack.pop();
    }
  };
  input.map((line, index) => {
    const stack = [];
    line.split("").forEach((item) => {
      if (brackets.includes(item)) stack.push(item);
      CheckPair(stack);
    });
    console.log(stack.length === 0 ? "yes" : "no");
  });
};
