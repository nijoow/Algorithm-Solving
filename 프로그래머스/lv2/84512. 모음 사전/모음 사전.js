function solution(word) {
    const alphabets = ['A','E','I','O','U'];
    const dictionary = [];
    
    const addWord = (curr,depth) =>{
        
        if(depth===6) return;
        dictionary.push(curr);
        for(const nextWord of alphabets){
            addWord(curr + nextWord, depth+1);
        }
        
    }
    alphabets.forEach((alphabet)=>{
        addWord(alphabet,1);
    });
    
    return dictionary.indexOf(word)+1
}