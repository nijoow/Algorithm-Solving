const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let input = [];

readline
  .on("line", function (line) {
    if (!N) N = +line;
    else input.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(N, input);
    process.exit();
  });

const solution = (N, input) => {
  let result = 0;
  const shark = { size: 2, eat: 0, x: 0, y: 0 };
  const dx = [0, -1, 1, 0];
  const dy = [-1, 0, 0, 1];
  const table = [...input];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (table[i][j] === 9) {
        [shark.x, shark.y] = [j, i];
        table[shark.y][shark.x] = 0;

        break;
      }
    }
  }

  const bfs = () => {
    while (true) {
      const visited = Array.from(Array(N), () => Array(N).fill(false));
      const queue = [[shark.x, shark.y, 0]];
      visited[shark.y][shark.x] = true;
      const edibleFish = [];
      while (queue.length) {
        let [x, y, distance] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
          if (visited[ny][nx]) continue;
          if (table[ny][nx] > shark.size) continue;

          visited[ny][nx] = true;
          queue.push([nx, ny, distance + 1]);

          if (table[ny][nx] !== 0 && table[ny][nx] < shark.size) {
            edibleFish.push({ x: nx, y: ny, dist: distance + 1 });
          }
        }
      }
      if (edibleFish.length) {
        edibleFish.sort((a, b) => {
          if (a.dist === b.dist) {
            if (a.y === b.y) return a.x - b.x;
            else return a.y - b.y;
          } else return a.dist - b.dist;
        });

        const { x, y, dist } = edibleFish.shift();
        table[y][x] = 0;
        shark.x = x;
        shark.y = y;
        shark.eat++;
        if (shark.eat === shark.size) {
          shark.size++;
          shark.eat = 0;
        }

        result += dist;
      } else {
        return;
      }
    }
  };
  bfs();
  console.log(result);
};
