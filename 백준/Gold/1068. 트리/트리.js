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
  input = input.map((line) => line.split(" ").map((val) => Number(val)));
  const N = input[0][0];
  const node = {};
  const deleteNum = input[2][0];
  let result = 0;
  input[1].forEach((parent, index) => (node[index] = { parent, children: [] }));
  for (const [key, value] of Object.entries(node)) {
    if (value.parent !== -1) {
      node[value.parent].children.push(Number(key));
    }
  }
  deleteNode(deleteNum);
  function deleteNode(num) {
    const temp = node[num];
    delete node[num];
    if (node[temp.parent] && temp.parent !== -1) {
      node[temp.parent].children = node[temp.parent].children.filter(
        (val) => val !== num
      );
    }
    if (temp.children.length > 0) {
      temp.children.forEach((child) => deleteNode(child));
    }
  }
  for (const [key, value] of Object.entries(node)) {
    if (value.children.length === 0) result += 1;
  }

  console.log(result);
};
