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
  const [N, M, V] = [input[0][0], input[0][1], input[0][2]];
  const node = [];
  let dfs = "";
  let bfs = "";
  input.forEach((val, index) => {
    if (index !== 0) {
      node.push(val);
      const reverse = [...val].reverse();
      node.push(reverse);
    }
  });
  node.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  const visited = Array(N + 1).fill(0);
  visited[V] = 1;
  DFS(0, V);
  BFS();
  console.log(dfs);
  console.log(bfs);

  function DFS(L, num) {
    dfs += num;
    if (L === N) {
      return;
    } else {
      for (let i = 0; i < node.length; i++) {
        const value = node[i];
        if (value[0] === num && visited[value[1]] === 0) {
          visited[value[1]] = 1;
          dfs += " ";
          DFS(L + 1, value[1]);
        }
      }
    }
  }

  function BFS() {
    const visitedBfs = Array(N + 1).fill(0);
    const queue = [];
    for (let i = 0; i < node.length; i++) {
      if (node[i][0] === V) {
        queue.push(node[i]);
      }
    }
    visitedBfs[V] = 1;
    bfs += V;
    while (queue.length > 0) {
      const item = queue.shift();
      if (visitedBfs[item[1]] === 0) {
        visitedBfs[[item[1]]] = 1;
        bfs += ` ${item[1]}`;
      }
      for (let i = 0; i < node.length; i++) {
        if (node[i][0] === item[1] && visitedBfs[node[i][1]] === 0) {
          queue.push(node[i]);
        }
      }
    }
  }
};
