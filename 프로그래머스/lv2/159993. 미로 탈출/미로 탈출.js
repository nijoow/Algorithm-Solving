function solution(maps) {
    const cols = maps.length
    const rows = maps[0].length
    let visited = Array.from(Array(cols), () => Array(rows).fill(false));
    let result = -1
    const dx = [0, -1, 0, 1];
	const dy = [-1, 0, 1, 0];
    
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            if(maps[i][j]==="S"){
                let queue = []
                visited[i][j] = true
                queue.push([j,i,0])
                
                while(queue.length>0){
                    const [px,py,time] = queue.shift()
                    if(maps[py][px] === "L" ){
                        visited = Array.from(Array(cols), () => Array(rows).fill(false));
                        visited[py][px]=true
                        queue = [[px,py,time]]  
                        break;
                    }
                    for(let i=0;i<4;i++){
                        const nx = px+dx[i]
                        const ny = py+dy[i]
                        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && maps[ny][nx] !== "X" && !visited[ny][nx] ){
                                visited[ny][nx] = true
                                queue.push([nx,ny,time+1])  
                        }
                    }
                }
                    
                while(queue.length>0){
                    const [px,py,time] = queue.shift()
                    if(maps[py][px] === "E"){
                        result = time
                        break;
                    }
                    for(let i=0;i<4;i++){
                        const nx = px+dx[i]
                        const ny = py+dy[i]
                        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && maps[ny][nx] !== "X" && !visited[ny][nx] ){
                                visited[ny][nx] = true
                                queue.push([nx,ny,time+1])       
                        }
                    }
                }
            }
        }
    }

    return result 
}