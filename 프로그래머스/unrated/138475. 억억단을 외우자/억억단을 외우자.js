function solution(e, starts) {
   let array = Array.from(Array(e+1),()=>0)
   
    for(let i=1;i<=e;i++){
        for(let j=1;j<=e/i;j++){
            array[i*j]++;
        }
    }
    
    const maxArr = Array.from(Array(e+1),()=>null)
    let max = Number.MIN_SAFE_INTEGER
    let maxNum = null

    for(let i=e;i>0;i--){
        if(max <= array[i]){
            max = array[i]
            maxNum = i
        }
        maxArr[i] = maxNum
    }
    const result = starts.map((start)=> maxArr[start])
    return result
}