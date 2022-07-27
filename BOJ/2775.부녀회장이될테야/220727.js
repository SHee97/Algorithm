const fs = require("fs");
const [t, ...cases] = fs
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let answer = [];

const count = (K, N) => {
  if (K === 0) return N;

  if (N === 1) return count(K - 1, N);

  let result = 0;

  for (let I = 1; I <= N; I++) {
    result += count(K - 1, I);
  }

  return result;
};

for (let i = 0; i < t; i++) {
  answer.push(count(cases[2 * i], cases[2 * i + 1]));
}

console.log(answer.join("\n"));
