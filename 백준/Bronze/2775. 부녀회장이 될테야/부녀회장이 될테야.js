const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const cases = Number(input.shift());

let answer = "";

for (let i = 0; i < cases; i++) {
    const floor = Number(input.shift());
    const room = Number(input.shift());
    
    const apart = {
        0: [],
    }
    
    for (let j = 1; j < room + 1; j++) {
        apart[0].push(j);
    }
    
    for (let k = 1; k < floor + 1; k++) {
        apart[k] = [];
        for (let x = 0; x < room + 1; x++) {
            apart[k][x] = 0;
            for (let y = 0; y < x; y++) {
                apart[k][x] += apart[k-1][y];
            }
        }
        apart[k].shift();
    }
    console.log(apart[floor][room - 1]);
}