function solution(n, m, section) {
    const isFill = Array.from(Array(n+1),(_,index)=>section.includes(index) ? false:true)
    let count = 0
    
    for(let i=1;i<=n;i++){
        if(!isFill[i]){
            count+=1
            for(let j=i;j<i+m;j++){
                isFill[j] = true
            }
        }        
    }
    return count
}