function solution(fees, records) {
    let answer=[]
    let hash ={}
    let last = 23*60+59
    records.forEach(v=>{
        let arr = v.split(" ")
        let time = arr[0].split(":")
        let seconds = Number(time[0]*60)+Number(time[1])
        let number = arr[1]
        let type = arr[2]
        
        if(!hash[number])
        hash[number] = [seconds]
        else{
            hash[number].push(seconds)
        }
    })
    for(let key in hash){
        if(hash[key].length%2 ===1)
            hash[key].push(last)
        let sumTime =0;
        while(hash[key].length>0){
            let outTime = hash[key].pop()
            let inTime = hash[key].pop()
            sumTime+= outTime-inTime
        }
        let fee = fees[1] + Math.ceil((sumTime-fees[0])/fees[2])*fees[3]
        fee = Math.max(fee,fees[1]) 
       
        answer.push([key,fee])
    }
    answer.sort((a,b)=> Number(a[0])-Number(b[0]))
    return answer.map((v)=> v[1])
}