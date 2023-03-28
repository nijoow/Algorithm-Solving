function solution(n, computers) {
    var answer = 0;
    let check = Array(n).fill(0)
    
    function dfs(n,L){
            for(let i in computers[n] ){
                if(computers[n][i]===1 && check[i]===0 && i!==n){
                check[i] = 1
                 L = dfs(i,L+1)    
                }
                    
            }
        
         return L
    }
    for(let i=0;i<n;i++){
        if(check[i]===0){
            check[i]=1
            dfs(i,0)
            answer+=1
        }
    }
    
    return answer;
}