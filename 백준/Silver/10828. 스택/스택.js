const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
let N = null;
readline
  .on("line", function (line) {
    if (!N) N = +line;
    else inputs.push(line.split(" "));
  })
  .on("close", function () {
    solution(inputs);
    process.exit();
  });

function Stack() {
  this.stack = [];
  this.result = [];
  this.push = (x) => this.stack.push(x);
  this.pop = () =>
    this.stack.length === 0
      ? this.result.push(-1)
      : this.result.push(this.stack.pop());
  this.size = () => this.result.push(this.stack.length);
  this.empty = () => this.result.push(this.stack.length > 0 ? 0 : 1);
  this.top = () => this.result.push(this.stack[this.stack.length - 1] ?? -1);
}
const solution = (inputs) => {
  const stack = new Stack();
  inputs.forEach((input) => {
    const [command, num] = [input[0], input[1] ?? null];

    stack[command](num);
  });
  console.log(stack.result.join("\n"));
};
