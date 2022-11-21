function solution(s){
    let countP = 0;
    let countY = 0;
    
    for (let c of s) {
        if (c === 'p' || c === 'P') {
            countP++;
        } else if (c === 'y' || c === 'Y') {
            countY++;
        }
    }
    
    return countP === countY;
}