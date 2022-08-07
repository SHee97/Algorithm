const odd = (input) => {
  const odds = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2) {
      odds.push(input[i]);
    }
  }

  const add = odds.reduce((acc, e) => acc + e, 0);
  const min = Math.min(...odds);

  return `${add}\n${min}`;
};
