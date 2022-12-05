const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);
const max = Math.max(...input);
const answer = [];
const isPrime = new Array(max + 1).fill(0).map((_, i) => i);

for (let i = 2; i <= max / 2; i++) {
    if (isPrime[i] > 1) {
        for (let j = i * i; j <= max; j += i) {
            isPrime[j] = 1;
        }
    }
}

const prime = isPrime.filter(e => e > 1);

for (let even of input) {
    let partition;
    let diff = Infinity;
    for (let i = 0; i < prime.length; i++) {
        for (let j = i; j < prime.length; j++) {
            if (prime[i] + prime[j] === even && prime[j] - prime[i] < diff) {
                partition = [prime[i], prime[j]];
            }
        }
    }
    
    answer.push(`${partition[0]} ${partition[1]}`);
}

console.log(answer.join('\n'));