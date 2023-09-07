function solution(cards) {
    const opened = new Array(cards.length+1).fill(false)
    const result = []
    for(let i=0;i<cards.length;i++){
        const checkBoxies = (index,group) =>{
            if(!opened[index]){
                group.push(cards[index-1])
                opened[index] = true
                checkBoxies(cards[index-1],group)
            }
            return group
        } 
        result.push(checkBoxies(cards[i],[]).length)
    }
    result.sort((a,b)=>b-a)
    
    return result[0]*result[1]
}