function solution(order) {
  let count = 0;
  const stack = [];
  let index = 0;

  for (let i = 1; i <= order.length; i++) {
    if (order[index] !== i) {
      stack.push(i);
    } else {
      index++;
      count++;
    }

    while (stack.length !== 0 && stack.at(-1) === order[index]) {
      stack.pop();
      index++;
      count++;
    }
  }

  return count;

}