function solution(beginning, target) {
    const colLeng = beginning.length
    const rowLeng = beginning[0].length
    const tableA = Array.from(Array(colLeng),()=>Array(rowLeng).fill(null))
    const tableB = Array.from(Array(colLeng),()=>Array(rowLeng).fill(null))
    const tableC = Array.from(Array(colLeng),()=>Array(rowLeng).fill(null))
    const tableD = Array.from(Array(colLeng),()=>Array(rowLeng).fill(null))
    let countA=0,countB=0,countC=0,countD=0
    
    for(let i=0;i<colLeng;i++){
        for(let j=0;j<rowLeng;j++){
            if(beginning[i][j] === target[i][j]){
                tableA[i][j] = 1
                tableB[i][j] = 1
                tableC[i][j] = 1
                tableD[i][j] = 1
            }
            else{
                tableA[i][j] = -1
                tableB[i][j] = -1
                tableC[i][j] = -1
                tableD[i][j] = -1
            }
        }
    }    

    for(let i=0;i<colLeng;i++){
        if(tableA[i][0]===-1){
            countA++
            for(let j=0;j<rowLeng;j++){
                tableA[i][j] *= -1
            }
        }
        if(tableC[i][0]===1){
            countC++
            for(let j=0;j<rowLeng;j++){
                tableC[i][j] *= -1
            }
        }
    }
    for(let i=0;i<rowLeng;i++){
        if(tableA[0][i]===-1){     
            countA++
            for(let j=0;j<colLeng;j++){
                tableA[j][i] *= -1
            }
        }
        if(tableC[0][i]===-1){     
            countC++
            for(let j=0;j<colLeng;j++){
                tableC[j][i] *= -1
            }
        }
    }
    
    for(let i=0;i<rowLeng;i++){
        if(tableB[0][i]===-1){
            countB++
            for(let j=0;j<colLeng;j++){
                tableB[j][i] *= -1
            }
        } if(tableD[0][i]===1){
            countD++
            for(let j=0;j<colLeng;j++){
                tableD[j][i] *= -1
            }
        }
    }
    for(let i=0;i<colLeng;i++){
        if(tableB[i][0]===-1){
            countB++
            for(let j=0;j<rowLeng;j++){
                tableB[i][j] *= -1
            }
        }if(tableD[i][0]===-1){
            countD++
            for(let j=0;j<rowLeng;j++){
                tableD[i][j] *= -1
            }
        }
    }
    let possibleA = true
    let possibleB = true
    let possibleC = true
    let possibleD = true
    

    for(let i=0;i<colLeng;i++){ 
        for(let j=0;j<rowLeng;j++){
            if(tableA[i][j]===-1) possibleA = false
            if(tableB[i][j]===-1) possibleB = false
            if(tableC[i][j]===-1) possibleC = false
            if(tableD[i][j]===-1) possibleD = false
        }
    }

    return (!possibleA && !possibleB && !possibleC && !possibleD) ? -1 : Math.min(countA,countB,countC,countD)
}