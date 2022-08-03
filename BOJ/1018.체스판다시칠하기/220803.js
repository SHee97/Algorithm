const fs = require("fs");
const [size, ...input] = fs.readFileSync("dev/stdin").toString().split("\n");

const [n, m] = size.split(" ").map(Number);
const board = input.map((el) => el.split(""));

function repaint(a, b) {
  let count = 0;
  let start = board[a][b];

  for (let i = a; i < a + 8; i++) {
    for (let j = b; j < b + 8; j++) {
      const index = i - a + (j - b);
      if (index % 2 && board[i][j] === start) count++;
      else if (!(index % 2 || board[i][j] === start)) count++;
    }
  }

  return Math.min(count, 64 - count);
}

let min = Infinity;
for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    min = Math.min(min, repaint(i, j));
  }
}

console.log(min);
