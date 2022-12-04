const fs = require('fs');
const [m, n] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let min = 0;
let sum = 0;

for (let i = m; i <= n; i++) {
    if (i === 1) {
        continue;
    }
    
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        sum += i;
        if (min === 0) min = i;
    }
}

if (sum === 0) {
    console.log(-1);
} else {
    console.log(`${sum}\n${min}`);
}