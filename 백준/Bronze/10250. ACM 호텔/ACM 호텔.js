const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const testData = [];
let T = null;
readline
  .on("line", function (line) {
    if (!T) {
      T = +line;
    } else {
      testData.push(line.split(" ").map((el) => +el));
    }
  })
  .on("close", function () {
    solution(T, testData);
    process.exit();
  });

const solution = (T, testData) => {
  const GetFloor = (H, N) => {
    if (N % H === 0) return H.toString();
    else return (N % H).toString();
  };
  const GetNth = (H, N) => {
    let Nth;
    if (N % H === 0) Nth = N / H;
    else Nth = Math.floor(N / H) + 1;

    return Nth < 10 ? `0${Nth}` : Nth.toString();
  };

  testData.map((data, index) => {
    const [H, W, N] = data;
    const room = GetFloor(H, N) + GetNth(H, N);

    console.log(room);
  });
};
