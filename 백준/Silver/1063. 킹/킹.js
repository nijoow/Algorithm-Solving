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
  const direction = {
    R: [1, 0],
    L: [-1, 0],
    B: [0, 1],
    T: [0, -1],
    RT: [1, -1],
    LT: [-1, -1],
    RB: [1, 1],
    LB: [-1, 1],
  };
  const firstLine = input[0].split(" ");
  let kingPos = [
    firstLine[0].charCodeAt(0) - 65,
    48 + 8 - firstLine[0].charCodeAt(1),
  ];
  let stonePos = [
    firstLine[1].charCodeAt(0) - 65,
    48 + 8 - firstLine[1].charCodeAt(1),
  ];
  const N = Number(firstLine[2]);

  const move = [];

  for (let i = 1; i < input.length; i++) {
    move.push(input[i]);
  }
  move.forEach((value) => {
    let [dx, dy] = direction[value];
    let [pxKing, pyKing] = kingPos;
    let [pxStone, pyStone] = stonePos;
    if (pxKing + dx === pxStone && pyKing + dy === pyStone) {
      if (
        pxStone + dx >= 0 &&
        pxStone + dx < 8 &&
        pyStone + dy >= 0 &&
        pyStone + dy < 8
      ) {
        stonePos = [pxStone + dx, pyStone + dy];
        if (
          pxKing + dx >= 0 &&
          pxKing + dx < 8 &&
          pyKing + dy >= 0 &&
          pyKing + dy < 8
        )
          kingPos = [pxKing + dx, pyKing + dy];
      }
    } else if (
      pxKing + dx >= 0 &&
      pxKing + dx < 8 &&
      pyKing + dy >= 0 &&
      pyKing + dy < 8
    )
      kingPos = [pxKing + dx, pyKing + dy];
  });

  console.log(
    String.fromCharCode(kingPos[0] + 65) +
      String.fromCharCode(8 - kingPos[1] + 48)
  );
  console.log(
    String.fromCharCode(stonePos[0] + 65) +
      String.fromCharCode(8 - stonePos[1] + 48)
  );
};
