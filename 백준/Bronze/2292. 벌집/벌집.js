const fs = require("fs");
const N = +fs.readFileSync('/dev/stdin').toString().trim();

// 1 => 1;
// 2 => 7;
// 3 => 19

let shell = 1;
let lastNum = 1;

while (true) {
    if (N <= lastNum) {
        console.log(shell);
        break;
    }
    
    lastNum += 6 * shell;
    shell++;
}