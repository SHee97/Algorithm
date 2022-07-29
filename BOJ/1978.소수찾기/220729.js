const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = +input[0];
const nums = input[1].split(" ").map(Number);
let answer = 0;
for (let i = 0; i < n; i++) {
  if (nums[i] < 2) continue;

  let isPrime = true;
  for (let j = 2; j < nums[i]; j++) {
    if (nums[i] % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) answer++;
}

console.log(answer);
