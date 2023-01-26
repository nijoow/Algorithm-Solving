const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let input = [];

readline
  .on("line", function (line) {
    if (!N) N = +line;
    else input.push(line.split(""));
  })
  .on("close", function () {
    solution(N, input);
    process.exit();
  });

const solution = (N, input) => {
  const visitedRG = Array.from(Array(N), () => Array(N).fill(false));
  const visitedNotRG = Array.from(Array(N), () => Array(N).fill(false));
  let countRG = 0;
  let countNotRG = 0;
  const notRG = [...input];
  const RG = input.map((item) =>
    item.map((el) => {
      if (el === "R") return "G";
      else return el;
    })
  );
  const dy = [-1, 0, 1, 0];
  const dx = [0, -1, 0, 1];
  const bfs = (y, x, visit, target, array) => {
    const queue = [];
    visit[y][x] = true;
    queue.push([y, x]);

    while (queue.length) {
      const [py, px] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const ny = py + dy[i];
        const nx = px + dx[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < N &&
          !visit[ny][nx] &&
          array[ny][nx] === target
        ) {
          visit[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visitedNotRG[i][j]) {
        bfs(i, j, visitedNotRG, notRG[i][j], notRG);
        countNotRG += 1;
      }
      if (!visitedRG[i][j]) {
        bfs(i, j, visitedRG, RG[i][j], RG);
        countRG += 1;
      }
    }
  }
  console.log(countNotRG, countRG);
};
