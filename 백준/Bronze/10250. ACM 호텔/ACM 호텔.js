const fs = require('fs');
const input = 
    fs.readFileSync('dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));

let answer = [];
const T = +input[0];
for (let i = 1; i <= T; i++) {
    const [h, w, n] = input[i];
    const row = Math.ceil(n / h);
    const col = n % h || h;
    const roomNo = col.toString() + (row <= 9 ? "0" + row : row).toString();
    
    answer.push(roomNo);
}

console.log(answer.join('\n'));