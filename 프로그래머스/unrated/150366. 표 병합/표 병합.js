function solution(commands) {
    let table = Array.from(Array(51),()=>Array(51).fill({value:"EMPTY",mergeTarget:null}))
    table = table.map((row,rowIndex)=> row.map((col,colIndex)=>({...col,mergeTarget:[rowIndex,colIndex]})))
    const result = []

    for(let i=0;i<commands.length;i++){
        const [type, ...rest] = commands[i].split(" ")
        const leng = rest.length

        if(type === "UPDATE"){
            if(leng===3){
                const [r,c,value] = rest
                const {mergeTarget} = table[r][c]
                table = table.map((row)=> row.map((cell)=>(cell.mergeTarget[0]===mergeTarget[0] && cell.mergeTarget[1]===mergeTarget[1]) ? {...cell,value} : cell))
            }
            if(leng===2){
                const [value1,value2] = rest
                table = table.map((row)=> row.map((cell)=>cell.value===value1 ? {...cell,value:value2} : cell))
            }
        }
        else if(type === "MERGE"){
            const [r1,c1,r2,c2] = rest
            if(table[r1][c1].mergeTarget[0]===table[r2][c2].mergeTarget[0] && table[r1][c1].mergeTarget[1]===table[r2][c2].mergeTarget[1]) continue
            if(table[r2][c2].value !== "EMPTY" && table[r1][c1].value === "EMPTY"){
                const {value,mergeTarget} = table[r2][c2]
                const selectedMergeTarget = table[r1][c1].mergeTarget
                table = table.map((row)=> row.map((cell)=>(cell.mergeTarget[0]===selectedMergeTarget[0] && cell.mergeTarget[1]===selectedMergeTarget[1]) ? {value,mergeTarget} : cell))
            }else{
                const {value,mergeTarget} = table[r1][c1]
                const selectedMergeTarget = table[r2][c2].mergeTarget
                table = table.map((row)=> row.map((cell)=>(cell.mergeTarget[0]===selectedMergeTarget[0] && cell.mergeTarget[1]===selectedMergeTarget[1]) ? {value,mergeTarget} : cell))
            }
        }
        else if(type === "UNMERGE"){
            const [r,c] = rest
            const {value,mergeTarget} = table[r][c]
            table = table.map((row,rowIndex)=> row.map((cell,colIndex)=>(cell.mergeTarget[0]===mergeTarget[0] && cell.mergeTarget[1]===mergeTarget[1]) ? {value:"EMPTY",mergeTarget:[rowIndex,colIndex]} : cell))
            table[r][c] = {value,mergeTarget:[r,c]}
        }
        else if(type === "PRINT"){
            const [r,c] = rest
            result.push(String(table[r][c].value))
        }               
    }

    return result
}