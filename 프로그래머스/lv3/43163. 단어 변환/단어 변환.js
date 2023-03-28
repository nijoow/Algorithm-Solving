function solution(begin, target, words) {
    var answer = 0;
    let check = Array.from({length:words.length},()=>0)
    let queue = []
    queue.push([begin,0])
    while(queue.length){
        let [curr,count] = queue.shift()
        if(curr ===target){
            answer=count
        }
            
        for(let index in words){
           let diff=0
            for(let i=0;i<words[index].length;i++){
               if(words[index][i] !== curr[i])
                   diff+=1
           }
            if(diff===1 && check[index]===0){
                check[index]=1
                queue.push([words[index],count+1])
            }
                
        }

    }
    return answer;
}