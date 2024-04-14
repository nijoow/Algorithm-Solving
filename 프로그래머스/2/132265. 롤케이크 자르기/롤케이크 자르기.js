function solution(topping) {
    let count = 0
    
    const chulsu = new Map()
    const brother = new Map()
    
    
    for(let i=0;i<topping.length;i++){
        const brotherPrev = brother.get(topping[i])
        if(brotherPrev){
            brother.set(topping[i],brotherPrev+1)
        }else{
            brother.set(topping[i],1)
        }
    }
    for(let i=0;i<topping.length-1;i++){
        const chulsuPrev = chulsu.get(topping[i])
        const brotherPrev = brother.get(topping[i])
        if(chulsuPrev){
            chulsu.set(topping[i],chulsuPrev+1)
        }else{
            chulsu.set(topping[i],1)
        }      
        if(brotherPrev > 1){
            brother.set(topping[i],brotherPrev-1)
        }else{
            brother.delete(topping[i])
        }

        if(chulsu.size === brother.size) count++
    }


    return count
}