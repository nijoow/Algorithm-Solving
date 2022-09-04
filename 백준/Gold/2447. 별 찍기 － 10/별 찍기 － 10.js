const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

readline
  .on("line", (line) => {
    input = Number(line);
    readline.close();
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });

const solution = (input) => {
  let answer = Array.from(Array(3), () => Array(3).fill([]));
  let result;
  const setStars = (star, num) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) answer[i][j] = star.replace(/\*/g, " ");
        else answer[i][j] = star;
      }
    }
    star = "";
    answer.map((row, rowIndex) => {
      let rowArr = row.map((col, colIndex) => {
        return col.split("\n");
      });
      for (let i = 0; i < rowArr[0].length; i++) {
        for (let j = 0; j < rowArr.length; j++) {
          star += rowArr[j][i];
        }
        if (i !== num / 3 - 1) star += "\n";
      }
      if (rowIndex !== row.length - 1) star += "\n";
    });
    if (num === input) return star;

    return setStars(star, num * 3);
  };
  result = setStars("*", 3);
  console.log(result);
};
