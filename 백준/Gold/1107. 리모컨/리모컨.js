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

    for (let i = 0; i <= 1000000; i++) {
      if (
        i
          .toString()
          .split("")
          .reduce(
            (acc, element) =>
              breakdown.includes(Number(element)) ? false : acc,
            true
          )
      )
        result = Math.min(result, Math.abs(i - N) + i.toString().length);
    }

    console.log(result);
  }
};
