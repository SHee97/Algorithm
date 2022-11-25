const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

let index = 0;
let filledLine = 0;

while (true) {
    const temp = index;
    index += filledLine + 1;
    
    if (index >= input) {
        index = temp;
        break;
    }
    
    filledLine++;
}

let diff;
if (input === index) {
    diff = filledLine;
    filledLine--;
} else {
    diff = input - index;
}

let answer;
if (filledLine % 2 === 0) {
    answer = `${(filledLine + 2) - diff}/${diff}`;
} else {
    answer = `${diff}/${(filledLine + 2) - diff}`;
}

console.log(answer);