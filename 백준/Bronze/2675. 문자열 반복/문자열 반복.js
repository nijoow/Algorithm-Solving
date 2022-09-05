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
  const T = input[0];
  const testCase = [];
  for (let i = 1; i < input.length; i++) {
    testCase.push(input[i]);
  }
  let result = testCase.map((value) => {
    value = value.split(" ");
    const [count, str] = [value[0], value[1]];
    let strArr = str.split("");
    let resultStr = strArr.reduce((acc, s) => {
      return (acc = acc + s.repeat(count));
    }, "");
    console.log(resultStr);

    return resultStr;
  });
};
