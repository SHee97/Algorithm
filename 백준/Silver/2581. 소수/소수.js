const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const min = Number(input[0]);
const max = Number(input[1]);

let primeMin = max + 1;
let primeSum = 0;
let hasPrimeMin = false;

for (let i = min; i < max + 1; i++) {
    if (i <= 1) {
        continue;
    } else if (i === 2 || i === 3) {
        primeSum += i;
        if (hasPrimeMin === false) {
            hasPrimeMin = true;
            primeMin = i;
        }
        continue;
    }
    
    let isPrime = true;
    for (let j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime === false) {
        continue;
    }
    if (hasPrimeMin === false) {
        hasPrimeMin = true;
        primeMin = i;
        primeSum += i;
    } else {
        primeSum += i;
    }
}

if (primeSum === 0) {
    console.log(-1);
} else {
    console.log(primeSum);
    console.log(primeMin);
}