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
  const bfs = (A, B) => {
    const visited = Array.from(Array(10000), () => false);
    visited[A] = true;
    const queue = [[A, ""]];
    while (queue.length) {
      const [num, command] = queue.shift();
      if (num === B) {
        console.log(command);
        return;
      }
      const nextD = (num * 2) % 10000;
      if (!visited[nextD]) {
        visited[nextD] = true;
        queue.push([nextD, command + "D"]);
      }
      const nextS = num === 0 ? 9999 : num - 1;
      if (!visited[nextS]) {
        visited[nextS] = true;
        queue.push([nextS, command + "S"]);
      }
      const nextL = (num % 1000) * 10 + Math.floor(num / 1000);
      if (!visited[nextL]) {
        visited[nextL] = true;
        queue.push([nextL, command + "L"]);
      }
      const nextR = (num % 10) * 1000 + Math.floor(num / 10);
      if (!visited[nextR]) {
        visited[nextR] = true;
        queue.push([nextR, command + "R"]);
      }
    }
  };
  input.forEach((item) => {
    const [A, B] = item;
    bfs(A, B);
  });
};
