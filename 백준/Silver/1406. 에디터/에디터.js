const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
readline
  .on("line", function (line) {
    inputs.push(line.split(" "));
  })
  .on("close", function () {
    solution(inputs);
    process.exit();
  });

const solution = (inputs) => {
  const lStack = inputs[0][0].split("");
  const rStack = [];
  const commandList = inputs.splice(2);
  commandList.forEach((element) => {
    const [command, $] = element;
    switch (command) {
      case "L":
        if (lStack.length > 0) rStack.push(lStack.pop());
        break;
      case "D":
        if (rStack.length > 0) lStack.push(rStack.pop());
        break;
      case "B":
        lStack.pop();
        break;
      case "P":
        lStack.push($);
        break;
      default:
        break;
    }
  });
  console.log(lStack.join("") + rStack.reverse().join(""));
};
