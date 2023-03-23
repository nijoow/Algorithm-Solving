function solution(play_time, adv_time, logs) {
    let answer = 0
    function toSeconds(str){
        let arr = str.split(":")    
        let h = Number(arr[0])
        let m = Number(arr[1])
        let s = Number(arr[2])
        return h*60*60+m*60+s
    }   
    
    let totalTime = toSeconds(play_time)
    let adTime = toSeconds(adv_time)
    let max = Number.MIN_SAFE_INTEGER
    
    let totalArr = Array.from({length:totalTime},()=>0)
    let secondsLog = logs.map((v)=>{
        v=v.split("-")
        let start = toSeconds(v[0])
        let end = toSeconds(v[1])
        totalArr[start] += 1
        totalArr[end] -= 1
        return [start,end]
    })
    
    for(let i=1;i<totalTime;i++){
        totalArr[i] +=totalArr[i-1]
    }
    for(let i=1;i<totalTime;i++){
        totalArr[i] +=totalArr[i-1]
    }
    let sum = totalArr[adTime-1]
    for(let i=adTime;i<totalTime;i++){
        if(sum<totalArr[i]-totalArr[i-adTime]){
            sum = totalArr[i]-totalArr[i-adTime]
            answer = i-adTime+1
        }
    }
    function toStrTime(n){
        let h = Math.floor(n/3600)
        let rest = n%3600
        let m = Math.floor(rest/60)
        let s = rest%60
        return `${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`
    }
    
    return toStrTime(answer)
}