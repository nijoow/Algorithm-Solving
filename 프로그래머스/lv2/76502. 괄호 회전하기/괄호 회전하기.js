function solution(s) {
    let answer = 0;
    let str=s.split("")
    for(let i=0;i<s.length;i++){
        isRight(str)
        let temp=str[0];
        str.shift();
        str.push(temp);
    }
    console.log(answer)
    function isRight(str){
        const stack = [];
        
        str.forEach(v=>{
                stack.push(v)
                if(stack[stack.length-1]===')' && stack[stack.length-2]==='(') {
                    stack.pop();
                    stack.pop();
                }
                if(stack[stack.length-1]==='}' && stack[stack.length-2]==='{') {
                    stack.pop();
                    stack.pop();
                }
                if(stack[stack.length-1]===']' && stack[stack.length-2]==='[') {
                    stack.pop();
                    stack.pop();
                }
            }    
        )
        if(stack.length===0)
            answer+=1;
    }
    return answer;
}