const fs = require("fs");
const n = +fs.readFileSync("dev/stdin").toString();

const board = Array.from(Array(n), () => Array(n).fill(" "));

star(0, 0, n);
console.log(board.map((e) => e.join("")).join("\n"));

function star(start, end, num) {
  if (num === 1) {
    board[start][end] = "*";
    return;
  }

  const index = num / 3;
  for (let i = 0; i < 9; i++) {
    if (i === 4) continue;

    const [row, col] = [Math.floor(i / 3), i % 3];
    star(index * row + start, index * col + end, index);
  }
}
