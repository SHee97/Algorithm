const fs = require('fs');
const n = +fs.readFileSync('dev/stdin').toString();

let answer = 0;
for (let i = 1; i < n; i++) {
    let sum = i;
    let num = i.toString();
    for (let j of num) {
        sum += +j;
    }
    
    if (sum === n) {
        answer = i;
        break;
    }
}

console.log(answer);