
function solution(n, m, x, y, r, c, k) {
    const dist = Math.abs(x-r) + Math.abs(y-c)
    let result = "impossible"

    if(dist%2 !== k%2) {
        return result
    }

    const dy = [0, -1, 1, 0]
    const dx = [1, 0, 0, -1]
    const direction = ["d", "l", "r", "u"]
    
    const dfs = (px,py,path,l) => {
        if(px===r && py===c && l===k){
            return result = path
        }else{
            for(let i=0; i<4; i++){
                const nx = px + dx[i]
                const ny = py + dy[i]

                if(l<k && nx >= 1 && nx <= n && ny >= 1 && ny <= m && result === "impossible" && Math.abs(nx-r)+Math.abs(ny-c) <= k-l
                  ){
                    dfs(nx,ny,path+direction[i],l+1)
                }
            }
        }
    }
    dfs(x,y,'',0)
    return result
}