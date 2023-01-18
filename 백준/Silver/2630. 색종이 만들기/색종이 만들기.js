const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let input = [];

readline
  .on("line", function (line) {
    if (!N) N = line;
    else input.push(line.split(" ").map((el) => +el));
  })
  .on("close", function () {
    solution(N, input);
    process.exit();
  });

const solution = (N, input) => {
  let white = 0;
  let blue = 0;

  const check = (arr) => {
    const leng = arr.length;
    let sum = 0;
    for (let i = 0; i < leng; i++) {
      for (let j = 0; j < leng; j++) {
        sum += arr[i][j];
      }
    }
    if (sum === 0) {
      white += 1;
    } else if (sum === leng * leng) {
      blue += 1;
    } else if (leng > 1) {
      const arr1 = Array.from(Array(leng / 2), () => Array(leng / 2).fill(0));
      const arr2 = Array.from(Array(leng / 2), () => Array(leng / 2).fill(0));
      const arr3 = Array.from(Array(leng / 2), () => Array(leng / 2).fill(0));
      const arr4 = Array.from(Array(leng / 2), () => Array(leng / 2).fill(0));

      for (let i = 0; i < leng / 2; i++) {
        for (let j = 0; j < leng / 2; j++) {
          arr1[i][j] = arr[i][j];
          arr2[i][j] = arr[i][j + leng / 2];
          arr3[i][j] = arr[i + leng / 2][j];
          arr4[i][j] = arr[i + leng / 2][j + leng / 2];
        }
      }
      check(arr1);
      check(arr2);
      check(arr3);
      check(arr4);
    }
  };

  check(input);

  console.log(white);
  console.log(blue);
};
