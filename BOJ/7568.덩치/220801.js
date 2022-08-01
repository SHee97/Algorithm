const fs = require("fs");
const [n, ...m] = fs.readFileSync("dev/stdin").toString().split("\n");

const bulk = m.map((e) => e.split(" ").map(Number));

let answer = [];
for (let i = 0; i < +n; i++) {
  let rank = 1;
  for (let j = 0; j < n; j++) {
    if (i === j) continue;
    if (bulk[i][0] < bulk[j][0] && bulk[i][1] < bulk[j][1]) {
      rank++;
    }
  }

  answer.push(rank);
}

console.log(answer.join(" "));
