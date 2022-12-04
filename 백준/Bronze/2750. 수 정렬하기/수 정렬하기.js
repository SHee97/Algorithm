const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map(Number);
arr.shift();

for (let i = 1; i < arr.length; i++) {
    let j = 0;
    while (j < i && arr[i] > arr[j]) {
        j++;
    }
    const temp = arr[i];
    arr.splice(i, 1);
    arr.splice(j, 0, temp);
}

console.log(arr.join('\n'));