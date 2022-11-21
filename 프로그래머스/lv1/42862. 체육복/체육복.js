function solution(n, lost, reserve) {
    const filteredReserve = reserve.filter(e => !lost.includes(e)).sort((a, b) => a - b);
    const filteredLost = lost.filter(e => !reserve.includes(e)).sort((a, b) => a - b);
    let answer = n;
    
    for (let l of filteredLost) {
        const leftIndex = filteredReserve.findIndex(e => e === l + 1);
        const rightIndex = filteredReserve.findIndex(e => e === l - 1);
        
        if (rightIndex >= 0) {
            filteredReserve.splice(rightIndex, 1);
        } else if (leftIndex >= 0) {
            filteredReserve.splice(leftIndex, 1);
        } else {
            n--;
        }
    }
    
    return n;
}