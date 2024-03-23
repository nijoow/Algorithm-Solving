function solution(land) {
    const rowLeng = land[0].length
    const colLeng = land.length
    const dx = [0,-1,0,1]
    const dy = [-1,0,1,0]
    const result = Array.from(Array(rowLeng),()=>0)

    const bfs = (sx,sy,visited,set) => {
        let count = 0
        if(!land[sy][sx] || visited[sy][sx]) return 0

        const queue = [[sx,sy]]
        visited[sy][sx] = true
        count++
        set.add(sx)
        while(queue.length){
            const [px,py] = queue.shift()
            
            for(let i=0;i<4;i++){
                const nx = px + dx[i]
                const ny = py + dy[i]
                
                if(nx>=0 && nx<rowLeng && ny>=0 && ny<colLeng && land[ny][nx] && !visited[ny][nx] ){
                    visited[ny][nx] = true
                    set.add(nx)
                    count++
                    queue.push([nx,ny])
                }
            }
        }
        [...set].forEach((index)=>result[index] += count)           
    }
    
    const visited = Array.from(Array(colLeng),()=>Array(rowLeng).fill(false))
    for(let i=0;i<rowLeng;i++){
        for(let j=0;j<colLeng;j++){
            const set = new Set()
            bfs(i,j,visited,set)
        }
    }

    return Math.max(...result)
}