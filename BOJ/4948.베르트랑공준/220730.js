const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n").map(Number);

const max = 2 * Math.max(...input);
const isPrime = new Array(max + 1).fill(true);
[isPrime[0], isPrime[1]] = [false, false];

for (let i = 2; i * i <= max; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

let answer = [];
let index = 0;
while (input[index]) {
  const range = isPrime.slice(input[index] + 1, input[index] * 2 + 1);
  const count = range.reduce((acc, e) => {
    if (e) return acc + 1;
    return acc;
  }, 0);

  answer.push(count);
  index++;
}

console.log(answer.join("\n"));
