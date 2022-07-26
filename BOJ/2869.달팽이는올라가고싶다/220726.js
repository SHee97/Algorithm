const fs = require("fs");
const [a, b, v] = fs.readFileSync("dev/stdin").toString().split(" ");

const last = v - a;
const result = last % (a - b) ? last / (a - b) + 1 : last / (a - b);
console.log(Math.floor(result) + 1);
