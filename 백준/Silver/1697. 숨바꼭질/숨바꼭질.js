const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  K = null;

readline
  .on("line", function (line) {
    [N, K] = line.split(" ").map((el) => +el);
  })
  .on("close", function () {
    solution(N, K);
    process.exit();
  });

const solution = (N, K) => {
  const visited = Array(100001).fill(false);

  let result = Number.MAX_SAFE_INTEGER;
  const queue = [];
  visited[N] = true;
  queue.push([N, 0]);
  while (queue.length) {
    const [prev, time] = queue.shift();
    if (prev === K) {
      result = Math.min(result, time);
    }
    [prev - 1, prev + 1, prev * 2].forEach((next) => {
      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    });
  }
  console.log(result);
};
