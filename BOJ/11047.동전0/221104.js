const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).reverse();
let money = K;
let answer = 0;

for (let c of coins) {
  answer += Math.floor(money / c);
  money %= c;
}

console.log(answer);
