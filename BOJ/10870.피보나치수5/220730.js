const fs = require("fs");
const n = Number(fs.readFileSync("dev/stdin").toString());

function fibonacci(num) {
  if (num === 0 || num === 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(n));
