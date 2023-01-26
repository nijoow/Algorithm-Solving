const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  M = null;
let input = [];

readline
  .on("line", function (line) {
    if (!N) [N, M] = line.split(" ").map((el) => +el);
    else input.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(N, M, input);
    process.exit();
  });

const solution = (N, M, input) => {
  const map = new Map();
  const visited = Array(101).fill(Infinity);
  input.forEach((item) => {
    map.set(item[0], item[1]);
  });
  let result = Number.MAX_SAFE_INTEGER;
  const queue = [];
  queue.push([1, 0]);
  while (queue.length) {
    const [prev, count] = queue.shift();
    if (prev === 100) {
      result = Math.min(result, count);
    }
    for (let i = 1; i <= 6; i++) {
      let next = prev + i;
      if (map.has(next)) {
        next = map.get(next);
      }
      if (next <= 100 && visited[next] > count + 1) {
        queue.push([next, count + 1]);
        visited[next] = count + 1;
      }
    }
  }
  console.log(result);
};
