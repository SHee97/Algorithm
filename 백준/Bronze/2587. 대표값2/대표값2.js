const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map(Number).sort((a, b) => a - b);
console.log(`${arr.reduce((acc, e) => acc + e, 0) / 5}\n${arr[2]}`);