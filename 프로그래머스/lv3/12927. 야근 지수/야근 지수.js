function solution(n, works) {
    let num = n
    const arr = Array(50001).fill(0)
    works.forEach((work)=>{
        arr[work]++
    })
    for(let i=50000;i>0;i--){
        if(n>0){
            if(arr[i]>=n){
                arr[i]-=n
                arr[i-1]+=n
                n=0
            }else{
                arr[i-1]+=arr[i]
                n-=arr[i]
                arr[i]=0
            }
        }
    }
    return arr.reduce((sum,value,index)=> sum+value*index**2,0)
}