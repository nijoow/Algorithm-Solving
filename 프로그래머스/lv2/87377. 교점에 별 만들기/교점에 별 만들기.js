function solution(line) {
    const leng = line.length
    const arr = []
    const result = []
    for(let i=0;i<leng;i++){
        for(let j = i+1;j<leng;j++){
            const [A,B,E] = line[i]
            const [C,D,F] = line[j]
            const x = (B*F-E*D)/(A*D-B*C)
            const y = (E*C-A*F)/(A*D-B*C)
            
            arr.push([x,y])
        }
    }
    const intArr = arr.filter(([x,y])=> x%1===0 && y%1===0)
    let minX = Number.MAX_SAFE_INTEGER,
        maxX = Number.MIN_SAFE_INTEGER,
        minY = Number.MAX_SAFE_INTEGER,
        maxY = Number.MIN_SAFE_INTEGER
    
    intArr.forEach(([x,y])=>{
        minX = Math.min(minX,x)
        maxX = Math.max(maxX,x)
        minY = Math.min(minY,y)
        maxY = Math.max(maxY,y)
    })
    
    for(let i=maxY;i>=minY;i--){
        let line = ""
        for(let j=minX;j<=maxX;j++){
            let isStar = false
            for(let k=0;k<intArr.length;k++){
                if(intArr[k][0]===j && intArr[k][1]===i)
                isStar = true   
            }
            if(isStar)
                line = line+"*"
            else
                line = line+"."
        }
        result.push(line)
    }
    return result
}