const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let big;
let small;

big = Math.floor(input / 5);

while (big >= 0 && ((input - (big * 5)) % 3 !== 0)) {
    big--;
}

if (big < 0) {
    console.log(-1);
} else {
    small = (input - (big * 5)) / 3;
    console.log(big + small);
}