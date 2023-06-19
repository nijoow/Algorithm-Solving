function solution(targets) {
    const targetsArr = targets.sort((a,b)=>a[1]-b[1])
    let count = 1
    
    let max = targetsArr[0][1]
    
    for(let i=0;i<targetsArr.length;i++){
        const [s,e] = targetsArr[i]
        if(s >= max) {
            count++
            max = e
        }
    }
    return count
}