function solution(k, d) {
    let result=0
    let x=0
    while(x<=d){
        const maxY = Math.sqrt(d**2-x**2)
        result += Math.floor(Math.floor(maxY)/k)+1
        x+=k
    }
    return result
}