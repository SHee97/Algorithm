const fs = require("fs");
const [m, n] = fs.readFileSync("dev/stdin").toString().split("\n").map(Number);

let min = 0;
let sum = 0;

for (let i = m; i <= n; i++) {
  if (i < 2) continue;

  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    min = min || i;
    sum += i;
  }
}

console.log(min ? `${sum}\n${min}` : -1);
