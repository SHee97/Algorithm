const fs = require("fs");
const N = Number(fs.readFileSync("dev/stdin").toString());

function factorization(n) {
  if (n === 1) return "";

  let value = n;
  let divisor = 2;
  let result = [];
  while (value > 1) {
    if (value % divisor) {
      divisor++;
      continue;
    }

    value /= divisor;
    result.push(divisor);
  }

  return result.join("\n");
}

console.log(factorization(N));
