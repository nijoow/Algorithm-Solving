const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let word;
readline
  .on("line", function (line) {
    word = line;
  })
  .on("close", function () {
    solution(word);
    process.exit();
  });

const solution = (word) => {
  const result = [];
  for (let i = 97; i <= 122; i++) {
    result.push(word.indexOf(String.fromCharCode(i)));
  }
  console.log(result.join(" "));
};
