function solution(s) {
    let count=0;
    let zero = 0;
    
    function transform(str){
        if(str ==="1") return
        else{
            count++
            let replaceStr = str.replace(/0/g,"")
            let leng = replaceStr.length
            zero += (str.length - replaceStr.length)
            let nextStr = leng.toString(2)
            transform(nextStr)
        }
    }
    transform(s)
    return [count,zero]
}