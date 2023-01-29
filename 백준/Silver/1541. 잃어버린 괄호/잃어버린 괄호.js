const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", function (line) {
    input = line;
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const array = input.split("-").map((element) =>
    element
      .split("+")
      .map((num) => +num)
      .reduce((sum, val) => sum + val, 0)
  );
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result -= array[i];
  }
  console.log(result);
};
