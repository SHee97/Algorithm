const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let answer = "";
let arr = input.sort((a, b) => sortWord(a, b));
arr = Array.from(new Set(arr));

for (e of arr) {
    answer += `${e}\n`;
}

console.log(answer);

function sortWord(a, b) {
    if (a.length === b.length) {
        let result;
        
        if (a > b) {
            result = 1;
        } else {
            result = -1;
        }
        
        return result;
    }
    
    return (a.length - b.length);
}