const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const N = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const M = input[3].split(" ").map(Number);
  let answer = [];

  for (let m of M) {
    answer.push(findNumber(m));
  }

  console.log(answer.join("\n"));
  process.exit();

  function findNumber(number) {
    let lt = 0;
    let rt = N.length - 1;

    while (lt <= rt) {
      const center = Math.floor((lt + rt) / 2);

      if (N[center] === number) {
        return 1;
      } else if (N[center] < number) {
        lt = center + 1;
      } else {
        rt = center - 1;
      }
    }

    return 0;
  }
});
