const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  M = null;
let input = null;

readline
  .on("line", function (line) {
    if (!N) [N, M] = line.split(" ").map((el) => +el);
    else
      input = line
        .split(" ")
        .map((el) => +el)
        .sort((a, b) => a - b);
  })
  .on("close", function () {
    solution(N, M, input);
    process.exit();
  });

const solution = (N, M, input) => {
  let result = Number.MIN_SAFE_INTEGER;
  const cuttingTreeSum = (H) => {
    return input.reduce((sum, tree) => {
      return tree > H ? sum + tree - H : sum;
    }, 0);
  };

  const binarySearch = (min, max) => {
    const mid = Math.floor((min + max) / 2);
    const sum = cuttingTreeSum(mid);
    if (min > max) {
      return;
    }
    if (sum >= M) {
      if (mid > result) result = mid;
      binarySearch(mid + 1, max);
    } else binarySearch(min, mid - 1);
  };
  binarySearch(0, input[input.length - 1]);
  console.log(result);
};
