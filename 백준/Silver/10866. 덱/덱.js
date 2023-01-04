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

function Deque() {
  this.queue = [];
  this.result = [];
  this.push_front = (x) => this.queue.unshift(x);
  this.push_back = (x) => this.queue.push(x);
  this.pop_front = () =>
    this.queue.length === 0
      ? this.result.push(-1)
      : this.result.push(this.queue.shift());
  this.pop_back = () =>
    this.queue.length === 0
      ? this.result.push(-1)
      : this.result.push(this.queue.pop());
  this.size = () => this.result.push(this.queue.length);
  this.empty = () => this.result.push(this.queue.length > 0 ? 0 : 1);
  this.front = () => this.result.push(this.queue[0] ?? -1);
  this.back = () => this.result.push(this.queue[this.queue.length - 1] ?? -1);
}
const solution = (inputs) => {
  const deque = new Deque();
  inputs.forEach((input) => {
    const [command, num] = [input[0], input[1] ?? null];

    deque[command](num);
  });
  console.log(deque.result.join("\n"));
};
