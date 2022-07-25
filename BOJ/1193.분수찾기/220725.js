const fs = require("fs");
const x = Number(fs.readFileSync("dev/stdin"));

let pos = 1;
let line = 1;
let add = 2;

while (pos < x) {
  pos += add;
  line++;
  add++;
}

const diff = pos - x;
const a = 1 + diff;
const b = line - diff;

console.log(line % 2 ? `${a}/${b}` : `${b}/${a}`);
