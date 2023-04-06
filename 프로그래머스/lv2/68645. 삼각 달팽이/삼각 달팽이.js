function solution(n) {
    let triangle =[]
    let maxNum=0;
    
    for(let i =0; i<n;i++){
        triangle[i] = Array(i+1).fill("")
        maxNum += i+1
    }
    let num = 1;
    let c=0,r=0,m="D"
    while(num<=maxNum){
        triangle[c][r] = num++
            let nr, nc
            switch(m){
                case "D":
                    nr = r
                    nc = c+1
                    if(nc>n-1 || triangle[nc][nr]!==""){
                            nr =r+1
                            nc = c
                            m="R"
                    }
                    break;
                case "R":
                    nr = r+1
                    nc = c
                    if(nr>n-1 || triangle[nc][nr]!==""){
                            nr = r-1
                            nc = c-1
                            m="U"
                    }
                    break;
                case "U":
                    nr = r-1
                    nc = c-1
                    if(nr<0 ||nc<0 || triangle[nc][nr]!==""){
                            nr = r
                            nc = c+1
                            m="D"
                    }
                    break;
                default:
                    return
            }
        r = nr
        c=nc
    }
   return triangle.flat()
}