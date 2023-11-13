function solution(picks, minerals) {
    let result = Infinity
    const picksCount = {dia:picks[0],iron:picks[1],stone:picks[2]}
    const leng = minerals.length
    const fatigueTable = {dia:{diamond:1,iron:1,stone:1},iron:{diamond:5,iron:1,stone:1},stone:{diamond:25,iron:5,stone:1}}
    const dfs = (picksCount,currentPickax,count,totalFatigue,index) => {
        if(index===minerals.length-1 || (picksCount.dia+picksCount.iron+picksCount.stone === 0&& count===5)){
            return result = Math.min(result,totalFatigue)
        }
        
        index++
        
        if(count<5){
            dfs(picksCount,currentPickax,count+1,totalFatigue+fatigueTable[currentPickax][minerals[index]],index)
        }else{
            if(picksCount.dia>0)
                dfs({...picksCount,dia:picksCount.dia-1},"dia",1,totalFatigue+fatigueTable["dia"][minerals[index]],index)
            if(picksCount.iron>0)
                dfs({...picksCount,iron:picksCount.iron-1},"iron",1,totalFatigue+fatigueTable["iron"][minerals[index]],index) 
            if(picksCount.stone>0)
                dfs({...picksCount,stone:picksCount.stone-1},"stone",1,totalFatigue+fatigueTable["stone"][minerals[index]],index)

        }
    }
    if(picksCount.dia>0)
        dfs({...picksCount,dia:picksCount.dia-1},"dia",1,fatigueTable["dia"][minerals[0]],0)
    if(picksCount.iron>0)
        dfs({...picksCount,iron:picksCount.iron-1},"iron",1,fatigueTable["iron"][minerals[0]],0)
    if(picksCount.stone>0)
        dfs({...picksCount,stone:picksCount.stone-1},"stone",1,fatigueTable["stone"][minerals[0]],0)
    
    return result
}