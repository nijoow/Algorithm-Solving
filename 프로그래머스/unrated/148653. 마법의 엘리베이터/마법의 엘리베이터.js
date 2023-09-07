function solution(storey) {
    const queue = [[storey,0]]
    let result = Infinity
    while(queue.length>0){
        const [current,count] = queue.shift()
        if(current === 0)
            result = Math.min(result,count)
        
        if(current>10){
            queue.push([Math.floor(current/10),count+current%10])
            queue.push([Math.ceil(current/10),count+10-current%10])
        }else if(current>0){
            queue.push([0,count+current])
            queue.push([0,count+10-current+1])
        }
    }

    return result
}