function solution(k, room_number) {
    const result = []
    const rooms = new Map();
    
    let empty 
    room_number.forEach((num)=>{
        empty = findRoom(num)
        result.push(empty)
    })
    function findRoom(number) {
    if(!rooms.has(number)) { 
        rooms.set(number, number+1);
        return number
    }
    let nextNumber = findRoom(rooms.get(number));
    rooms.set(number, nextNumber + 1);
    return nextNumber;
}
    return result
}