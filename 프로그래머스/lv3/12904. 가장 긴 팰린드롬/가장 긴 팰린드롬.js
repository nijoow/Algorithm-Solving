function solution(s)
{
    let result = 0
    const checkPalindrome = (str) => {
        for(let i = 0; i <= Math.floor(s.length/2)+1; i++){
            if(str[i] !== str[str.length-1-i]){
                return false
            }
        }
        return true
    }
    
    for(let i = s.length-1;i>=0;i--){
        for(let j=0;j<=i;j++){
            if(i-j < result) continue
            const str = s.slice(j,i+1)
            if(checkPalindrome(str)){
                result = Math.max(result,str.length)
            }
        }
    }
    return result
}