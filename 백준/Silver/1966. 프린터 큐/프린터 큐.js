const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
let N = null;
readline
  .on("line", function (line) {
    if (!N) N = +line;
    else inputs.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(inputs);
    process.exit();
  });

const solution = (inputs) => {
  for (let i = 0; i < inputs.length - 1; i += 2) {
    const [N, M] = inputs[i];
    const importance = inputs[i + 1];
    const priorityQueue = importance.map((item, index) => {
      return { data: index, priority: item };
    });
    let count = 0;
    while (priorityQueue.length > 0) {
      const current = priorityQueue.shift();
      let print = true;
      priorityQueue.forEach((item) => {
        if (item.priority > current.priority) {
          print = false;
        }
      });
      if (print) {
        count++;
        if (current.data === M) console.log(count);
      } else {
        priorityQueue.push(current);
      }
    }
  }
};
