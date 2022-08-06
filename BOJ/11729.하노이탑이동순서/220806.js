const fs = require("fs");
const n = +fs.readFileSync("dev/stdin").toString();

const answer = [0];
hanoi(n, 1, 2, 3);

console.log(answer.join("\n"));

function hanoi(num, start, rest, end) {
  if (num === 0) return;

  answer[0]++;

  hanoi(num - 1, start, end, rest);
  answer.push(`${start} ${end}`);
  hanoi(num - 1, rest, start, end);
}
