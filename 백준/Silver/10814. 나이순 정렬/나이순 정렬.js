const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let arr = input.map(e => [Number(e.split(' ')[0]), e.split(' ')[1]]);
let answer = "";

arr.sort((a, b) => { return a[0] - b[0]});

for (e of arr) {
    answer += `${e[0]} ${e[1]}\n`;
}

console.log(answer);