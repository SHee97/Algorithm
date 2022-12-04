const fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('');

arr.sort((a, b) => { return Number(b) - Number(a) });

console.log(arr.join(""));