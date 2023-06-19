function solution(board) {
    const success = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let arr = [...board[0].split(""),...board[1].split(""),...board[2].split("")]
    const countO = arr.reduce((count,item)=>item==="O" ? count+1 : count,0)
    const countX = arr.reduce((count,item)=>item==="X" ? count+1 : count,0)
    let winX = false
    let winO = false
    
    if(countO>countX+1 || countO<countX)
        return 0
     success.forEach((item)=>{
        const line = arr[item[0]]+arr[item[1]]+arr[item[2]]
        if(line === "OOO")
            winO = true
        if(line === "XXX")
            winX = true
    })
    if(winO && winX)
        return 0
    if(winO && countO===countX)
        return 0
    if(winX && countO>countX)
        return 0
    
    return 1 
}