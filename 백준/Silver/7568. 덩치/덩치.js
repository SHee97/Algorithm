const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e, i) => {
    if (i !== 0) return e.split(' ').map(Number);
});
let answer = "";
for (let i = 1; i < input.length; i++) {
    let order = 1;
    for (let j = 1; j < input.length; j++) {
        if (i === j) continue;
        if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
            order++;
        }
    }
    answer += `${order} `;
}
console.log(answer);