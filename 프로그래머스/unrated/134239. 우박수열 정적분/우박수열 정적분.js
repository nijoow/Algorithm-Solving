function solution(k, ranges) {
    const result = []
    let num = k
    const graph = [num]
    while(num!==1){
        if(num%2===0){
            num = num/2
        }else if(num%2===1){
            num = num*3+1
        }
        graph.push(num)
    }
    const n = graph.length-1
    ranges.map(([a,b])=>{
        let sum = 0
        const min = a
        const max = n+b
        if(min>max)
            sum=-1
        else{
            for(let i=min;i<=max-1;i++){
               sum += Math.abs(graph[i]-graph[i+1])/2 + Math.min(graph[i],graph[i+1])
            }
        }

        result.push(sum.toFixed(1))
    })
    return result
}