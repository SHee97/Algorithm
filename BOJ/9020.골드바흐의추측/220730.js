const fs = require("fs");
const [t, ...nums] = fs
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const max = Math.max(...nums);
const isPrime = new Array(max + 1).fill(true);
[isPrime[0], isPrime[1]] = [false, false];

for (let i = 2; i * i <= max; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

const primeNums = isPrime.map((e, idx) => (e ? idx : 0)).filter((e) => e);

let answer = [];
for (let i = 0; i < t; i++) {
  const num = nums[i];
  let result = 0;
  for (let j = 0; primeNums[j] < num; j++) {
    if (primeNums.includes(num - primeNums[j])) {
      if (!result) {
        result = primeNums[j];
      } else if (
        Math.abs(result * 2 - num) > Math.abs(primeNums[j] * 2 - num)
      ) {
        result = primeNums[j];
      }
    }
  }

  answer.push(
    `${Math.min(result, num - result)} ${Math.max((result, num - result))}`
  );
}

console.log(answer.join("\n"));
