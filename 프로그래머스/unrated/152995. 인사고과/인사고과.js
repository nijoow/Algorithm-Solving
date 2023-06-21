function solution(scores) {
    const wanhoScore = scores[0]
    const wanhoSum = wanhoScore[0]+wanhoScore[1]
    let answer = 1
    let maxScore = 0
    scores.sort((a,b)=> a[0] == b[0] ? a[1]-b[1] : b[0]-a[0])
    
    for(let score of scores){
        if(score[1]<maxScore){
            if(score===wanhoScore) return -1
        }else{
            maxScore = Math.max(maxScore,score[1])
            if(score[0]+score[1]>wanhoSum){
                answer++
            }
        } 
    }
    return answer
}