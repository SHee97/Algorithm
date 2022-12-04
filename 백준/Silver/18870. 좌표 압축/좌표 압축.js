const fs = require('fs');
const coords = fs.readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')[1]
    .split(' ')
    .map(Number);
const coordsSet = Array.from(new Set(coords.slice().sort((a, b) => a - b)));
const coordsMap = new Map();

for (let i = 0; i < coordsSet.length; i++) {
    coordsMap.set(coordsSet[i], i);
}

const answer = coords.map(e => coordsMap.get(e));

console.log(answer.join(' '));