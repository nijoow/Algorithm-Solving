const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const testData = [];
let T = null;
readline
  .on("line", function (line) {
    if (!T) {
      T = +line;
    } else {
      testData.push(line.split(" ").map((el) => +el));
    }
  })
  .on("close", function () {
    solution(T, testData);
    process.exit();
  });

const solution = (T, testData) => {
  testData.map((data, index) => {
    const [H, W, N] = data;
    let count = 0;
    for (let w = 1; w <= W; w++) {
      for (let h = 1; h <= H; h++) {
        count += 1;
        if (count === N) console.log(`${h}${w < 10 ? `0${w}` : w}`);
      }
    }
  });
};
