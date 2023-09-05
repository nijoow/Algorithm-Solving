function solution(data, col, row_begin, row_end) {
    data.sort((a,b)=> a[col-1] === b[col-1] ? b[0] - a[0] : a[col-1] - b[col-1])
    
    let result = 0
    for(let i=row_begin;i<=row_end;i++){
        const S_i = data[i-1].reduce((acc,v)=> acc + v%i,0)
        result = S_i ^ result
    }
    return result
}