const fs = require("fs");
const [m, n] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

const isPrime = new Array(n + 1).fill(true);
[isPrime[0], isPrime[1]] = [false, false];

for (let i = 2; i * i <= n; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}

const answer = [];
isPrime.forEach((e, idx) => {
  if (e && idx >= m && idx <= n) answer.push(idx);
});

console.log(answer.join("\n"));
