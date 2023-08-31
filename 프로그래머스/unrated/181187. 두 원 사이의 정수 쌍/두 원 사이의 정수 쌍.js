function solution(r1, r2) {
    let count = 0
    for(let x=1;x<=r2;x++){
        const maxY = Math.floor(Math.sqrt(r2**2-x**2))
        const minY = Math.ceil(Math.sqrt(r1**2-x**2)) || 0
        
        count += maxY-minY+1
    }
    return count*4
}
