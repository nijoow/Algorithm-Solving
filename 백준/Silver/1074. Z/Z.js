const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  r = null,
  c = null;

readline
  .on("line", function (line) {
    [N, r, c] = line.split(" ").map((el) => +el);
  })
  .on("close", function () {
    solution(N, r, c);
    process.exit();
  });

const solution = (N, r, c) => {
  const size = Math.pow(2, N);

  const recursion = (depth, x, y, num) => {
    if (depth === 0) {
      console.log(num);
      return;
    }
    const half = Math.pow(2, depth) / 2;
    const gap = Math.pow(half, 2);
    if (r < y && c < x) {
      recursion(depth - 1, x - half / 2, y - half / 2, num);
    } else if (r < y && c >= x) {
      recursion(depth - 1, x + half / 2, y - half / 2, num + gap);
    } else if (r >= y && c < x) {
      recursion(depth - 1, x - half / 2, y + half / 2, num + gap * 2);
    } else if (r >= y && c >= x) {
      recursion(depth - 1, x + half / 2, y + half / 2, num + gap * 3);
    }
  };
  recursion(N, size / 2, size / 2, 0);
};
