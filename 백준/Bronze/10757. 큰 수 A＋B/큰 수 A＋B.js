const fs = require('fs');
const [a, b] = fs.readFileSync('dev/stdin').toString().split(' ').map(BigInt);

console.log((a + b).toString());