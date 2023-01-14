const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let input = [];

readline
  .on("line", function (line) {
    if (!N) N = line;
    else input.push(line);
  })
  .on("close", function () {
    solution(N, input);
    process.exit();
  });

const solution = (N, input) => {
  if (input.length === 1) {
    console.log(Math.min(N.toString().length, Math.abs(100 - N)));
  } else {
    const breakdown = input[1].split(" ").map((el) => +el);
    let result = Math.abs(100 - N);
    let closeChannelUp = null;
    let closeChannelDown = null;
    let up = N,
      down = N;

    while (!closeChannelUp && Math.abs(up - N) <= result) {
      if (
        up
          .toString()
          .split("")
          .reduce(
            (acc, element) =>
              breakdown.includes(Number(element)) ? false : acc,
            true
          )
      ) {
        closeChannelUp = up;
      }
      up++;
    }
    while (!closeChannelDown && down >= 0) {
      if (
        down
          .toString()
          .split("")
          .reduce(
            (acc, element) =>
              breakdown.includes(Number(element)) ? false : acc,
            true
          )
      ) {
        closeChannelDown = down;
      }
      down--;
    }
    if (closeChannelUp !== null) {
      closeChannelUpCount =
        Math.abs(N - closeChannelUp) + closeChannelUp.toString().length;
      result = Math.min(result, closeChannelUpCount);
    }
    if (closeChannelDown !== null) {
      closeChannelDownCount =
        Math.abs(N - closeChannelDown) + closeChannelDown.toString().length;
      result = Math.min(result, closeChannelDownCount);
    }

    console.log(result);
  }
};
