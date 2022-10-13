function solution(n, s, a, b, fares) {
  const INF = Number.POSITIVE_INFINITY;
  let arr = Array.from(Array(n + 1), () => Array(n + 1).fill(INF));
  fares.forEach((fare) => {
    const [x, y, d] = fare;
    arr[x][y] = d;
    arr[y][x] = d;
  });
  arr = arr.map((row, index) => {
    row[index] = 0;
    return row;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (arr[i][j] > arr[i][k] + arr[k][j]) {
          arr[i][j] = arr[i][k] + arr[k][j];
        }
      }
    }
  }
    let min = arr[s][a] + arr[s][b]

 for(let i=1;i<=n;i++){
    if(arr[s][a] + arr[s][b] > arr[s][i] + arr[i][a]+arr[i][b]){
        min = Math.min(min, arr[s][i] + arr[i][a] + arr[i][b]);
    }
 }
 return min
}
