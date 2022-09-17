const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  input = input.map((line) => line.split(" ").map((val) => Number(val)));
  const N = input[0][0];
  const M = input[0][1];

  test = [];
  const graph = Array.from(Array(N + 1), () => Array(N + 1).fill());
  for (let i = 1; i < N; i++) {
    const a = input[i][0];
    const b = input[i][1];
    const dist = input[i][2];
    graph[a][b] = dist;
    graph[b][a] = dist;
  }
  for (let i = input.length - M; i < input.length; i++) {
    test.push(input[i]);
  }
  test.forEach((value) => {
    const visited = new Array(N + 1).fill(false);

    const start = value[0];
    const end = value[1];
    const queue = [];
    queue.push([start, 0]);
    visited[start] = true;
    let prev;
    while (queue.length > 0) {
      const curr = queue.shift();
      if (curr[0] === end) {
        console.log(curr[1]);
      }
      for (let i = 1; i <= N; i++) {
        if (graph[curr[0]][i] !== undefined && visited[i] === false) {
          visited[i] = true;
          queue.push([i, curr[1] + graph[curr[0]][i]]);
        }
      }
    }
  });
};
