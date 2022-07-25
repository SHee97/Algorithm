const fs = require("fs");
const n = Number(fs.readFileSync("dev/stdin"));

let pos = 1;
let move = 1;

while (pos < n) {
  pos += move * 6;
  move++;
}

console.log(move);
