function solution(enroll, referral, seller, amount) {
    const map = new Map()
    
    for(let i=0;i<enroll.length;i++){
        const name = enroll[i]

        map.set(name,{referral:referral[i], order:referral[i] === "-"? 1 : map.get(referral[i]).order+1,profit:0 })
    }
    
    const distributeProfit = (name,money) => {
        const my = map.get(name)
        const distribution = Math.floor(money*0.1)
        const myProfit = money - distribution
        my.profit += myProfit

        if(my.referral!=="-" && distribution>0)
            distributeProfit(my.referral,distribution)
    }
    
    seller.forEach((name,i)=>{
        const profit = amount[i]*100
        distributeProfit(name,profit)
    })
    

    return [...map].map(v=>+v[1].profit)
}