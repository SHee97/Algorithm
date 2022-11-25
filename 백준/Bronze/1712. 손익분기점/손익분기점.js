const fs = require('fs');
const [a, b, c] = fs.readFileSync('dev/stdin').toString().split(' ');

const profit = c - b;

if (profit <= 0) {
    console.log(-1);
} else {
    const BEP = a / profit;
    console.log(a % profit ? Math.ceil(BEP) : Math.ceil(BEP) + 1);
}