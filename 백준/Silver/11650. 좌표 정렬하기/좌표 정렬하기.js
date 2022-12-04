const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const arr = input.map(elem => [Number(elem.split(' ')[0]), Number(elem.split(' ')[1])]);
let answer = "";

arr.sort((a, b) => sortPos(a, b));

for (elem of arr) {
    answer += `${elem[0]} ${elem[1]}\n`;
}

console.log(answer);

function sortPos (a, b) {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
}