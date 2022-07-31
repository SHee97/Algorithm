const fs = require("fs");
const [first, second] = fs.readFileSync("dev/stdin").toString().split("\n");
const [n, m] = first.split(" ").map(Number);
const cards = second.split(" ").map(Number);

let answer = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k <= n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum > m) continue;
      if (sum > answer) {
        answer = sum;
      }
    }
  }
}

console.log(answer);
