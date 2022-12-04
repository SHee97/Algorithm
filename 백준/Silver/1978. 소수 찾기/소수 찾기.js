const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')[1]
    .split(' ')
    .map(Number);
let answer = 0;

for (let n of nums) {
    if (n <= 1) continue;
    
    let isPrime = true;
    for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        };
    }
    
    if (isPrime) answer++;
}

console.log(answer);