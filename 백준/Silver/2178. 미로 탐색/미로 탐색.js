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
    else input.push(line.split("").map((el) => +el));
  })
  .on("close", function () {
    solution(N, M, input);
    process.exit();
  });

const solution = (N, M, input) => {
  let min = Number.MAX_SAFE_INTEGER;
  const dy = [-1, 0, 1, 0];
  const dx = [0, -1, 0, 1];

  const visited = Array.from(Array(N), () => Array(M).fill(false));
  const queue = [];
  visited[0][0] = true;
  queue.push([0, 0, 1]);
  while (queue.length) {
    const [py, px, count] = queue.shift();

    if (py === N - 1 && px === M - 1) {
      min = Math.min(min, count);
    }
    for (let i = 0; i < 4; i++) {
      const ny = dy[i] + py;
      const nx = dx[i] + px;

      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < N &&
        nx < M &&
        input[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        queue.push([ny, nx, count + 1]);
      }
    }
  }
  console.log(min);
};
