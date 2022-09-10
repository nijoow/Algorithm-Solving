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
  const testCases = [];
  let testIndex = -1;
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  for (let i = 1; i < input.length; i++) {
    const line = input[i].split(" ").map((val) => Number(val));
    if (line.length === 3) {
      testIndex += 1;
      const board = Array.from(Array(line[1]), () => Array(line[0]).fill(0));
      const visited = Array.from(Array(line[1]), () => Array(line[0]).fill(0));
      testCases.push({
        M: line[0],
        N: line[1],
        K: line[2],
        board,
        visited,
      });
    }
    if (line.length === 2) {
      testCases[testIndex].board[line[1]][line[0]] = 1;
    }
  }
  testCases.forEach((testCase) => {
    let count = 0;

    for (let i = 0; i < testCase.N; i++) {
      for (let j = 0; j < testCase.M; j++) {
        if (testCase.board[i][j] === 1 && testCase.visited[i][j] === 0) {
          dfs(j, i);
          count += 1;
        }
      }
    }
    function dfs(x, y) {
      testCase.visited[y][x] = 1;
      let nx, ny;
      for (let i = 0; i < 4; i++) {
        nx = x + dx[i];
        ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < testCase.M &&
          ny >= 0 &&
          ny < testCase.N &&
          testCase.visited[ny][nx] === 0 &&
          testCase.board[ny][nx] === 1
        ) {
          dfs(nx, ny);
        }
      }
    }
    console.log(count);
  });
};
