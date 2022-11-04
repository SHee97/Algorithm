const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  const expression = input
    .split("-")
    .map((e) => e.split("+"))
    .map((e) => e.reduce((acc, e) => acc + +e, 0));

  const answer = expression.reduce((acc, e) => acc - e, 2 * expression[0]);

  console.log(answer);
  process.exit();
});
