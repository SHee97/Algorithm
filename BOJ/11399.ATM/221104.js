const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const P = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let sum = 0;
  let sumsum = 0;

  for (let p of P) {
    sum += p;
    sumsum += sum;
  }

  console.log(sumsum);
  process.exit();
});
