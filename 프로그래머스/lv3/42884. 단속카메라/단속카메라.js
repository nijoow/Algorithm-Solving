function solution(routes) {
    let answer = 0;
    let camera = Number.MIN_SAFE_INTEGER
    routes.sort((a,b)=>a[1]-b[1])
    routes.forEach((val,index)=>{
        if(val[0] >camera){
            answer++
            camera = val[1]
        }
    })
    return answer;
}