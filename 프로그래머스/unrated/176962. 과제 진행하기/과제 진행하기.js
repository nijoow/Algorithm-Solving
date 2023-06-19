function solution(plans) {
    const result = []
    const stack = []
   
    const sortedPlans = [...plans.map((plan)=>{
        const [name, start, playtime] = plan
        const startArr = start.split(":")
        const startTime = Number(startArr[0])*60 + Number(startArr[1])
        
        return [name, startTime, Number(playtime)]
    }).sort((a,b)=>a[1]-b[1]),[null,Number.MAX_SAFE_INTEGER,0]]
    
    
    let [prevName, prevStart, prevPlaytime] = sortedPlans[0]
    for(let i=1;i<sortedPlans.length;i++){
        const [name, start, playtime] = sortedPlans[i]
        const elapsedTime = start - prevStart
        if(prevPlaytime <= elapsedTime){
            result.push(prevName)
            let remainTime = elapsedTime - prevPlaytime
            while(remainTime > 0 && stack.length > 0){
                let [latestName, latestRemainTime] = stack.pop()
                console.log(latestName, latestRemainTime)
                if(remainTime >= latestRemainTime){
                    result.push(latestName)
                    remainTime -= latestRemainTime
                }else{
                    stack.push([latestName,latestRemainTime-remainTime])
                    remainTime = 0
                }
            }
        }else{
            const remainTime = prevPlaytime - elapsedTime
            stack.push([prevName, remainTime])
        }
        
        [prevName, prevStart, prevPlaytime] = [name,start,playtime]
    }
       
    return result
}