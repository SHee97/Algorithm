const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const up = Number(input[0]);
const down = Number(input[1]);
const height = Number(input[2]);

const allDay = Math.ceil((height - up) / (up - down));

console.log(allDay + 1);