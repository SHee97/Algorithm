const fs = require("fs");
const n = Number(fs.readFileSync("dev/stdin").toString());

let pack = 0;
let remain = n;
while (remain >= 3) {
  if (remain % 5 === 0 || remain % 5 === 3) {
    pack += Math.ceil(remain / 5);
    remain = 0;
  } else {
    pack++;
    remain -= 3;
  }
}

console.log(remain ? -1 : pack);
