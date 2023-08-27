function solution(board) {
    const rows = board.length
    const cols = board[0].length
    const visited = Array.from(Array(rows),()=>Array(cols).fill(false))
    const queue = []
    const dx=[0,-1,0,1]
    const dy=[-1,0,1,0]
    let GX,GY
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(board[i][j]==="R"){
                visited[i][j]=true
                queue.push([i,j,0])
            }else if(board[i][j]==="G"){
                GY = i 
                GX = j
            }
        }
    }
    while(queue.length>0){
        const [py,px,count] = queue.shift()
        if(py===GY && px===GX){
            return count
        }
        for(let i=0;i<4;i++){
            let nx = px
            let ny = py
        
            while(nx+dx[i]>=0 && ny+dy[i]>=0 && nx+dx[i]<cols && ny+dy[i]<rows && board[ny+dy[i]][nx+dx[i]] !== "D" ){
                nx+=dx[i]
                ny+=dy[i]
            }
            
            if(!visited[ny][nx]){
                visited[ny][nx] = true   
                queue.push([ny,nx,count+1])
            }
        }
    }
    return -1
}