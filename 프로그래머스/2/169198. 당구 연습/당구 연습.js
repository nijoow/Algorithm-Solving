function solution(m, n, startX, startY, balls) {
    const getDistSquare = (x,y) => {
        return (startX-x)**2+(startY-y)**2
    } 
    return balls.map(([endX,endY])=> {
        let min = Infinity
        if(!(startX===endX && startY>endY))
            min = Math.min(getDistSquare(endX,-endY),min)
        if(!(startY===endY && startX>endX))
            min = Math.min(getDistSquare(-endX,endY),min)
        if(!(startX===endX && startY<endY))
            min = Math.min(getDistSquare(endX,2*n-endY),min)
        if(!(startY===endY && startX<endX))
            min = Math.min(getDistSquare(2*m-endX,endY),min)
        return min
    })
}
