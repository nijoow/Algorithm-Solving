const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null,
  input = [];

readline
  .on("line", function (line) {
    if (!N) N = +line;
    else {
      input.push(+line);
    }
  })
  .on("close", function () {
    solution(N, input);
    process.exit();
  });

const heap = {
  result: [],
  array: [null],
  push(n) {
    this.array.push(n);
    let currIndex = this.array.length - 1;
    let parentIndex = Math.floor(currIndex / 2);

    while (currIndex > 1 && this.array[parentIndex] > this.array[currIndex]) {
      [this.array[parentIndex], this.array[currIndex]] = [
        this.array[currIndex],
        this.array[parentIndex],
      ];
      currIndex = parentIndex;
      parentIndex = Math.floor(currIndex / 2);
    }
  },
  pop() {
    if (this.array.length <= 1) {
      this.result.push(0);
      this.array = [null];
    } else if (this.array.length === 2) {
      this.result.push(this.array.pop());
    } else {
      this.result.push(this.array[1]);
      this.array[1] = this.array.pop();
    }

    let currIndex = 1;
    let leftIndex = currIndex * 2;
    let rightIndex = currIndex * 2 + 1;

    if (!this.array[rightIndex]) {
      if (this.array[leftIndex < this.array[currIndex]]) {
        [this.array[leftIndex], this.array[currIndex]] = [
          this.array[currIndex],
          this.array[leftIndex],
        ];
      }
    }
    while (
      this.array[leftIndex] < this.array[currIndex] ||
      this.array[rightIndex] < this.array[currIndex]
    ) {
      const targetIndex =
        this.array[leftIndex] > this.array[rightIndex] ? rightIndex : leftIndex;

      [this.array[targetIndex], this.array[currIndex]] = [
        this.array[currIndex],
        this.array[targetIndex],
      ];
      currIndex = targetIndex;
      leftIndex = currIndex * 2;
      rightIndex = currIndex * 2 + 1;
    }
  },
};
const solution = (N, input) => {
  input.forEach((element) => {
    if (element > 0) heap.push(element);
    else heap.pop();
  });
  console.log(heap.result.join("\n"));
};
