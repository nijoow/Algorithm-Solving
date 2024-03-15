function solution(edges) {
    const max = edges.reduce((max,[a,b])=>Math.max(max,a,b),1)
    const outArr = Array.from(Array(max+1),()=>0)
    const inArr = Array.from(Array(max+1),()=>0)

    edges.forEach(([a,b])=>{
        outArr[a]++
        inArr[b]++
    }) 

    let start = null
    let graph = {donut:0,bar:0,eight:0}
    
    for(let i=1;i<=max;i++){
        if(inArr[i] === 0 && outArr[i] >= 2){
            start = i
        }
        if(inArr[i] >= 1 && outArr[i] === 0){
            graph.bar++
        }
        if(inArr[i] >= 2 && outArr[i] >= 2){
            graph.eight++
        }
    }
    graph.donut = outArr[start] - graph.bar - graph.eight

    return [start, graph.donut, graph.bar, graph.eight]
}