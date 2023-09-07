function solution(land) {
    let leng = land.length
    let answer = Number.MIN_SAFE_INTEGER
    let check= Array.from({length:leng},()=>Array(4).fill(0))
    check[0] = [...land[0]]
    let L = 1;
    
    while(L<leng){
       
        for(let i=0;i<4;i++){
            let max = check[L-1].reduce((acc,v,index)=>{
             
                    if(i!==index){
                        acc = Math.max(acc,v)
                    }
                
                return acc
            },0)
            check[L][i] = max+land[L][i]         
        }
        L++
    
    }
    check[leng-1].forEach(v=>{
        answer = Math.max(answer,v)
    })
     return answer
}