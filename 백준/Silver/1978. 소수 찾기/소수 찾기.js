const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const cases = Number(input.shift());
const nums = input[0].split(' ');
let answer = 0;

for (let i = 0; i < nums.length; i++) {
    nums[i] = Number(nums[i]);
}

for (let i = 0; i < cases; i++) {
    if (nums[i] <= 1) {
        continue;
    } else if (nums[i] === 2 || nums[i] === 3) {
        answer++;
        continue;
    }
    
    let passSwitch = false;
    for (let j = 2; j <= nums[i] / 2; j++) {
        if (nums[i] % j === 0) {
            passSwitch = true;
            break;
        }
    }
    
    if (passSwitch === true) {
        continue;
    }
    answer++;
}

console.log(answer);