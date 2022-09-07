const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", (line) => {
    input = line;
    readline.close();
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  let str = input;
  const arr = [];
  let p1 = 1;
  let p2 = 2;
  while (p1 < p2 && p1 <= str.length - 2) {
    const str1 = str.substring(0, p1);
    const str2 = str.substring(p1, p2);
    const str3 = str.substring(p2);
    arr.push([str1, str2, str3]);
    p2 += 1;
    if (p2 === str.length) {
      p1 += 1;
      p2 = p1 + 1;
    }
  }
  let resultArr = arr
    .map((value) =>
      value.reduce((acc, val) => acc + val.split("").reverse().join(""), "")
    )
    .sort();
  console.log(resultArr[0]);
};
