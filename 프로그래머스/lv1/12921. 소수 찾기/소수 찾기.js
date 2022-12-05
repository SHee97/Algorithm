function solution(n) {
    const isPrime = new Array(n + 1).fill(1);
    [isPrime[0], isPrime[1]] = [0, 0];
    
    for (let i = 2; i <= n; i++) {
        if (isPrime[i] > 0) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    
    console.log(isPrime);
    
    const answer = isPrime.reduce((acc, e) => acc + e, 0);
    
    return answer;
}