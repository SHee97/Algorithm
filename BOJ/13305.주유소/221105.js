const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.split(" ").map(BigInt));
}).on("close", () => {
  const N = input[0];
  const distance = input[1];
  const price = input[2];

  let current = 0;
  let budget = 0n;

  while (current < N - 1) {
    let next = current + 1;
    let move = distance[current];

    while (price[current] <= price[next] && next !== N - 1) {
      move += distance[next];
      next++;
    }

    budget += move * price[current];
    current = next;
  }

  console.log(`${budget}`);
  process.exit();
});
