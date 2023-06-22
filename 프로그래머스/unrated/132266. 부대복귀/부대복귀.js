function solution(n, roads, sources, destination) {
    const arr = new Array(n+1).fill(0)
    const visited = new Array(n+1).fill(false)

    const graph = Array.from(Array(n+1),()=>Array())
    
    roads.forEach((road)=>{
        graph[road[0]].push(road[1]) 
        graph[road[1]].push(road[0]) 
    })
    
    visited[destination] = true
    const queue=[destination]

    while(queue.length>0){
        const current = queue.shift()
        graph[current].forEach((area)=>{
            if(!visited[area]){
                visited[area]=true
                arr[area] = arr[current] + 1
                queue.push(area)
            }
        })
   
    }
    for(let i=1;i<=n;i++){
        if(i!==destination && arr[i]===0)
        arr[i] = -1
    }
    const result = sources.map((source)=>arr[source])
    return result
}