const fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = Number(arr.shift());

arr = arr.map(elem => Number(elem));
arr.sort((a, b) => { return a -b });

console.log(arr.join('\n'));