function solution(num) {
    let n = num;
    let count = 0;
    
    for (let i = 0; i < 500; i++) {
        if (n === 1) return count;
        
        n = n % 2 ? n * 3 + 1 : n / 2;
        count++;
    }
    
    return -1;
}