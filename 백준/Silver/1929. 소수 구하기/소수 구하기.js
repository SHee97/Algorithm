const fs = require('fs');
const [m, n] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// 에라토스테네스의 체
const isPrime = new Array(n + 1).fill(0).map((_, i) => i);
isPrime[1] = 0;

for (let i = 2; i <= n; i++) {
    if (isPrime[i] > 0) {
        for (let j = i * i; j <= n; j += i) {
            isPrime[j] = 0;
        }
    }
}

const answer = isPrime.filter(e => e >= m);

console.log(answer.join('\n').trim());