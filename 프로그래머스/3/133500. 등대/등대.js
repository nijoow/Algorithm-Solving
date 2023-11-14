function solution(n, lighthouse) {
    const lightOn = (new Array(n+1)).fill(false)
    const connects = (new Array(n+1)).fill([])
    lighthouse.forEach(([a,b])=>{
        connects[a] = [...connects[a],b]
        connects[b] = [...connects[b],a]
    })

    const checkConnect = () =>{
        connects.forEach((connect,index)=>{
            if(connect.length===1){
                if(!lightOn[index]){
                    lightOn[connect[0]]=true
                }
                connects[connect[0]]=connects[connect[0]].filter((v)=> v!==index)
                connects[index]=[]
            }
        })  

        if(connects.find((connect)=>connect.length>0))
            checkConnect()
    }

    checkConnect()
    
    return lightOn.reduce((count,value)=> value?count+1:count,0)
}