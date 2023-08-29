function solution(maps) {
    const rows = maps.length
    const cols = maps[0].length
    
    const visited = Array.from(Array(rows),()=>Array(cols).fill(false))
    const dx = [0,-1,0,1]
    const dy = [-1,0,1,0]
    const result = []
    
    const dfs = (px,py) => {
        let sum = Number(maps[py][px])
        for(let i=0;i<4;i++){
            const nx = px + dx[i]
            const ny = py + dy[i]
            
            if(nx>=0 && ny>=0 && nx<cols && ny<rows && !visited[ny][nx] && maps[ny][nx]!=="X"){
                visited[ny][nx] = true
                sum += dfs(nx,ny)
             }
        }
        return sum
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(maps[i][j] !=="X" && !visited[i][j]){
                visited[i][j] = true
                const sum = dfs(j,i)
                result.push(sum)
            }

        }
    }
    return result.length ? result.sort((a,b)=>a-b) : [-1]
}