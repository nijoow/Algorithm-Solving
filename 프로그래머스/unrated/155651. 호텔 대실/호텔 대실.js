
function solution(book_time) {
    const getMinutes = (time) =>{
        const [hours,minutes] = time.split(":")

        return Number(hours)*60 + Number(minutes)
    }
    const sortedBookTime = book_time.map((item)=>[getMinutes(item[0]),getMinutes(item[1])+10]).sort((a,b)=>a[1]-b[1])
    let max=0
   
    for(let i=0;i<23*60+59;i++){
        let count=0
        sortedBookTime.forEach((bookTime)=>{
            const [start,end] = bookTime
            if(start<=i && i<end){
                count++
            }
        })
        max = Math.max(count,max)
    }
        
    return max
}