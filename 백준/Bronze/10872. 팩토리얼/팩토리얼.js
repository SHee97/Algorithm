const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

let answer = 1;
let count = 1;

if (input < 1) {
    console.log(1);
} else {
    multiple(); 
    console.log(answer);    
}

function multiple() {
    if (count < input) {
        count++
        answer *= count;
        
        multiple();
    }    
}