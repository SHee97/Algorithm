const fs = require("fs");
let n = +fs.readFileSync("dev/stdin").toString();

let index = 665;
while (n > 0) {
  index++;

  if (index.toString().includes("666")) {
    n--;
  }
}

console.log(index);
