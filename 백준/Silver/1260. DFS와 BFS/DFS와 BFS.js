const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  M = null,
  V = null,
  input = [];

readline
  .on("line", function (line) {
    if (!N) [M, N, V] = line.split(" ").map((el) => +el);
    else {
      input.push(line.split(" ").map((el) => +el));
    }
  })
  .on("close", function () {
    solution(M, N, V, input);
    process.exit();
  });

const solution = (M, N, V, input) => {
  const graph = Array.from(Array(M + 1), () => Array(M + 1).fill(0));
  input.forEach((item) => {
    graph[item[0]][item[1]] = 1;
    graph[item[1]][item[0]] = 1;
  });
  const visitedDFS = Array(M + 1).fill(false);
  const resultDFS = [];
  const DFS = (now) => {
    resultDFS.push(now);
    for (let i = 1; i <= M; i++) {
      if (graph[now][i] === 1 && !visitedDFS[i]) {
        visitedDFS[i] = true;
        DFS(i);
      }
    }
  };
  visitedDFS[V] = true;
  DFS(V);

  const visitedBFS = Array(M + 1).fill(false);
  const resultBFS = [];

  visitedBFS[V] = true;
  const queue = [V];

  while (queue.length > 0) {
    const now = queue.shift();
    resultBFS.push(now);

    for (let i = 1; i <= M; i++) {
      if (graph[now][i] === 1 && !visitedBFS[i]) {
        visitedBFS[i] = true;
        queue.push(i);
      }
    }
  }
  console.log(resultDFS.join(" "));
  console.log(resultBFS.join(" "));
};
