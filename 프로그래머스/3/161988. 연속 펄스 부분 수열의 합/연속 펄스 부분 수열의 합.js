function solution(sequence) {
    const arr1 = sequence.map((value,index)=> index%2 ? value : -value)
    const arr2 = sequence.map((value,index)=> index%2 ? -value : value)

    let max1=arr1[0],max2=arr2[0],sum1=arr1[0],sum2=arr2[0]
    
    for(let i=1;i<sequence.length;i++){
        sum1=Math.max(sum1+arr1[i],arr1[i])
        max1=Math.max(sum1,max1)
        sum2=Math.max(sum2+arr2[i],arr2[i])
        max2=Math.max(sum2,max2)

    }
    return Math.max(max1,max2)
}