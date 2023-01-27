const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  testCaseArray = [],
  testCaseCommand = [],
  count = 0;
readline
  .on("line", function (line) {
    if (!N) N = +line;
    else {
      if (count % 3 === 0)
        testCaseCommand.push(line.replace(/RR/g, "").split(""));
      if (count % 3 === 2) {
        testCaseArray.push(
          line.slice(1, -1).length > 0
            ? line
                .slice(1, -1)
                .split(",")
                .map((el) => +el)
            : []
        );
      }

      count++;
    }
  })
  .on("close", function () {
    solution(N, testCaseCommand, testCaseArray);
    process.exit();
  });

const solution = (N, testCaseCommand, testCaseArray) => {
  testCaseCommand.forEach((commands, index) => {
    const array = [...testCaseArray[index]];
    let error = false;
    let dir = 1;
    commands.forEach((command) => {
      if (command === "R") dir *= -1;
      if (command === "D") {
        if (array.length === 0) error = true;
        else {
          if (dir === 1) array.shift();
          else array.pop();
        }
      }
    });
    console.log(
      error
        ? "error"
        : `[${dir === 1 ? array.join(",") : array.reverse().join(",")}]`
    );
  });
};
