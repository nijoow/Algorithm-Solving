function solution(k, tangerine) {
    const map = new Map()
    tangerine.forEach((v)=>{
        if(!map.has(v)){
            map.set(v,1)
        }else{
            map.set(v,map.get(v)+1)
        }
    })

    const sortedAmount = [...map].map(([size,amount])=>amount).sort((a,b)=>b-a)
    let count = 0
    let sum = 0;
    for(let i=0;i<sortedAmount.length;i++){
        count++
        sum += sortedAmount[i]
        if(sum>=k)
            return count
    }
}