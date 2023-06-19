
function solution(cap, n, deliveries, pickups) {
    let result = 0
    const deleteItem = (arr,cap) =>{
        if(arr.length===0) return
        let count = cap
        while(count>0 && arr.length>0){
            let curr = arr.pop()
            if(curr > 0){
                arr.push(curr-1)
                count--
            }
        }
    }
    const popZero = (arr)=>{
        if(arr[arr.length-1]===0){
            arr.pop()
            popZero(arr)
        }
        return
    }
    popZero(deliveries)
    popZero(pickups)
    while(deliveries.length>0 || pickups.length>0 ){
        result += Math.max(deliveries.length,pickups.length)*2
        deleteItem(deliveries,cap)
        deleteItem(pickups,cap)
        popZero(deliveries)
        popZero(pickups)
    }
      
    return result
}