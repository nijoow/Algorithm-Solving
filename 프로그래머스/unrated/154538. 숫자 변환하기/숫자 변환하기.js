function solution(x, y, n) {
    const dp = Array.from(Array(y+1),()=>Infinity)
    
    dp[x] = 0;
    for(let i=x; i<=y; i++){
        dp[i+n] = Math.min(dp[i+n],dp[i]+1);
        dp[i*2] = Math.min(dp[i*2],dp[i]+1);
        dp[i*3] = Math.min(dp[i*3],dp[i]+1);
    }

    return dp[y] === Infinity ? -1 : dp[y]
}