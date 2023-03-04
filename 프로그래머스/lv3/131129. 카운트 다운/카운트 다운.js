function solution(target) {
    const dp = Array(target+1).fill([Infinity,0])

    for(let j=1;j<=3;j++){
        for(let i=1;i<=20;i++){
            if(j===1)
                dp[i*j] = [1,1]
            else 
                dp[i*j] = [1,0]
        }
    }
    dp[50]=[1,1]
    
    for(let n=1;n<= target;n++){
        const [currCount,currSingleBull] = dp[n]
        
        if(n>50){
            const [prevCount,prevSingleBull] = dp[n-50]
            if(prevCount+1 < currCount){
                dp[n] = [prevCount+1,prevSingleBull+1]
            }
            else if(prevCount+1 === currCount && currSingleBull<prevSingleBull+1 ){
                dp[n] = [prevCount+1,prevSingleBull+1]
            }
        }
        for(let j=3;j>=1;j--){
            for(let i=20;i>=1;i--){
                if(!dp[n-i*j]) continue
                const [prevCount,prevSingleBull] = dp[n-i*j]
                const [currCount,currSingleBull] = dp[n]
                  
             
                if(prevCount+1 < currCount){
                    if(j===1){
                        dp[n] = [prevCount+1,prevSingleBull+1]
                    }
                    else{                       
                        dp[n] = [prevCount+1,prevSingleBull]
                    }
                }
                else if(prevCount+1 === currCount){
                    if(j===1 && currSingleBull<prevSingleBull+1){
                        dp[n] = [prevCount+1,prevSingleBull+1]
                    }
                    else if(currSingleBull<prevSingleBull){                       
                        dp[n] = [prevCount+1,prevSingleBull]
                    }
                }
                 
            }
        }
    }
    
    return dp[target]
}