const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline
  .on("line", function (line) {
    input.push(+line);
  })
  .on("close", function () {
    input.pop();
    solution(input);
    process.exit();
  });

const solution = (input) => {
  const result = input.map((element) => {
    const prevNum = element;
    let reverseNum = 0;

    while (element > 0) {
      reverseNum = reverseNum * 10 + (element % 10);

      element = Math.floor(element / 10);
    }
    return prevNum === reverseNum ? "yes" : "no";
  });
  console.log(result.join("\n"));
};
