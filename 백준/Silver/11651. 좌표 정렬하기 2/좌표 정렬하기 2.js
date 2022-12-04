const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const arr = input.map(elem => [Number(elem.split(' ')[0]), Number(elem.split(' ')[1])]);
let answer = "";

arr.sort((a, b) => sortPos(a, b));

for (e of arr) {
    answer += `${e[0]} ${e[1]}\n`
}

console.log(answer);

function sortPos(a,b) {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
}