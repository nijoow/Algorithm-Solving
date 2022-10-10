function solution(info, edges) {
    let graph = Array.from({length:info.length},()=>[])
    for(const edge of edges){
        graph[edge[0]].push(edge[1])
    }

    let answer=0
    function dfs(node, animal, visit){
        info[node]===0?animal[0]++:animal[1]++

        if(animal[1]>=animal[0]) {
            return; 
        }
        visit.push(...graph[node])
        visit.forEach((val,idx,arr)=>{
            let rest = arr.filter((v,i)=>i!=idx)
            dfs(val,[...animal],rest)
        })
            if(animal[0]>answer) answer=animal[0]
            return;
    }

    dfs(0,[0,0],[])
console.log(graph)
    return answer
}