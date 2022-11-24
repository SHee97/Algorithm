function solution(n) {
    if (n < 2) return n;
    
    const divisor = [1, n];
    
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) divisor.push(i);
    }
    
    return divisor.reduce((acc, e) => acc + e, 0);
}