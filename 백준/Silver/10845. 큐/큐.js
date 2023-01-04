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

function Queue() {
  this.queue = [];
  this.result = [];
  this.push = (x) => this.queue.push(x);
  this.pop = () =>
    this.queue.length === 0
      ? this.result.push(-1)
      : this.result.push(this.queue.shift());
  this.size = () => this.result.push(this.queue.length);
  this.empty = () => this.result.push(this.queue.length > 0 ? 0 : 1);
  this.front = () => this.result.push(this.queue[0] ?? -1);
  this.back = () => this.result.push(this.queue[this.queue.length - 1] ?? -1);
}
const solution = (inputs) => {
  const queue = new Queue();
  inputs.forEach((input) => {
    const [command, num] = [input[0], input[1] ?? null];

    queue[command](num);
  });
  console.log(queue.result.join("\n"));
};
