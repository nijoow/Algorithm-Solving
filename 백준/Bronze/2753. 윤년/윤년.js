const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let year;
readline
  .on("line", function (line) {
    year = line;
  })
  .on("close", function () {
    solution(year);
    process.exit();
  });

const solution = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
};
