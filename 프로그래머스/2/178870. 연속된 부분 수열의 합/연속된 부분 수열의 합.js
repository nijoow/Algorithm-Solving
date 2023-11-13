function solution(sequence, k) {
    let p1=0,p2=0,sum=sequence[p1]
    let leng = sequence.length
    let minLeng = Infinity
    let result = null
    while(p1<=p2&&p1<leng&&p2<leng){
        if(sum<=k){
            if(sum===k && minLeng > p2-p1){
                minLeng = p2-p1
                result = [p1,p2]
            }
            p2++
            sum+=sequence[p2]
        }
        if(sum>k){
            sum-=sequence[p1]
            p1++
        }
    }
    return result
}