function solution(bandage, health, attacks) {
    const totalTime = attacks.at(-1)[0]

    const attackArray = Array.from(Array(totalTime+1),()=>0)
    attacks.forEach(([time,value])=>{
        attackArray[time] = value
    })
    let currentHP = health
    let continueSuccess = 0 
    
    for(let i=0;i<=totalTime;i++){
        if(attackArray[i] !== 0){
            currentHP -= attackArray[i]
            if(currentHP<=0) return -1
            continueSuccess = 0
        } else{
            currentHP += bandage[1]
            continueSuccess++
            if(continueSuccess >= bandage[0]){
                currentHP += bandage[2]
                continueSuccess=0
            }
            if(currentHP > health) currentHP = health
        }        
    }
    return currentHP
}