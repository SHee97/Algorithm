const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const size = Number(input.shift());
const arr = input.map(e => Number(e));
const sorted = arr.sort((a, b) => {return a - b});

let sum = 0;
let avg;
let center = sorted[(size - 1) / 2];
let range = sorted[size - 1] - sorted[0];
let mode;
let modeCount = Array(range + 1).fill(0);

for (let i = 0; i < size; i++) {
    sum += arr[i];
    
    modeCount[sorted[i] - sorted[0]]++;
}

avg = Math.round(sum / size);

const modeVal = Math.max(...modeCount);
const firstMode = modeCount.indexOf(modeVal);
const secondMode = modeCount.indexOf(modeVal, firstMode + 1);

if (secondMode === -1) {
    mode = firstMode + sorted[0];
} else {
    mode = secondMode + sorted[0];
}

let answer = `${avg}\n${center}\n${mode}\n${range}`;
console.log(answer);